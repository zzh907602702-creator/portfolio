const fs = require("fs");
const path = require("path");
const http = require("http");
const { execSync } = require("child_process");

const DIST_DIR = path.join(__dirname, "dist");

function checkPrerequisites() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error("❌ 未找到 dist 目录，请先构建: pnpm run build");
    return false;
  }
  return true;
}

function showManualDeployInstructions() {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║                 一键部署到 Vercel（2 种方式）              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  🔵 方式一：网页拖拽（最简单，推荐）                       ║
║                                                              ║
║  1. 打开 https://vercel.com/new                              ║
║  2. 登录你的 Vercel 账号（可用 GitHub 登录）                ║
║  3. 选择 "Upload" → 选中项目文件夹                          ║
║     或者直接把下面这个 dist 文件夹拖进去：                   ║
║                                                              ║
║     📁 ${DIST_DIR}                          ║
║                                                              ║
║  4. Vercel 会自动部署，部署完直接给你一个公开域名            ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  🔵 方式二：命令行部署                                      ║
║                                                              ║
║  1. 打开 https://vercel.com/account/tokens                   ║
║  2. 创建 Token → 复制                                        ║
║  3. 在终端运行：                                              ║
║                                                              ║
║     $env:VERCEL_TOKEN="你的token"                             ║
║     node deploy.js --api                                      ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`);
}

async function deployViaApi() {
  const token = process.env.VERCEL_TOKEN;
  if (!token) {
    console.error("❌ 请先设置 VERCEL_TOKEN 环境变量");
    process.exit(1);
  }

  console.log("📦 正在准备部署文件...");
  
  const files = [];
  function walk(dir, base) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(base, entry.name).replace(/\\/g, "/");
      if (entry.isDirectory()) {
        walk(fullPath, relativePath);
      } else {
        const content = fs.readFileSync(fullPath);
        files.push({ file: relativePath, data: content.toString("base64"), size: content.length });
      }
    }
  }
  walk(DIST_DIR, "");
  
  console.log(`  共 ${files.length} 个文件，${(files.reduce((s, f) => s + f.size, 0) / 1024 / 1024).toFixed(1)} MB`);

  // Vercel Deployment API v13
  console.log("🚀 正在部署到 Vercel...");
  
  const response = await fetch("https://api.vercel.com/v13/deployments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "zhangzhihao-portfolio",
      deploymentType: "STATIC",
      files: Object.fromEntries(files.map((f) => [f.file, { data: f.data, encoding: "base64" }])),
    }),
  });

  const result = await response.json();
  
  if (!response.ok) {
    if (response.status === 403) {
      console.error("\n❌ Token 无效，请重新创建: https://vercel.com/account/tokens");
    } else {
      console.error(`\n❌ 部署失败: ${result.error?.message || response.status}`);
    }
    process.exit(1);
  }

  console.log(`\n✅ 部署成功！`);
  console.log(`🌐 访问地址: https://${result.url}`);
}

// Main
if (!checkPrerequisites()) process.exit(1);

if (process.argv.includes("--api")) {
  deployViaApi().catch((e) => {
    console.error("❌ 错误:", e.message);
    process.exit(1);
  });
} else {
  showManualDeployInstructions();
}
