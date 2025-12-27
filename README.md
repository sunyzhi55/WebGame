---
date: 2025-12-27T20:18:00
tags:
  - astro
  - tailwind
  - games
  - javascript
  - typescript
---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:A7F3D0,50:93C5FD,100:C4B5FD&height=240&section=header&text=%20Retro%20Arcade%20Hub!&fontSize=44&animation=twinkling&fontAlignY=48&fontColor=5F1BFA&desc=A%20Collection%20of%20Fun%20Browser%20Games&descAlign=50&descAlignY=70&descSize=18&descColor=C8EFF0&animation=twinkling" width="100%" alt="Header Banner" />
</div>


# 1. 🎮🌟 Retro Arcade Hub

一组用 **Astro + Tailwind** 打造的浏览器小游戏合集，轻量好玩、开箱即用。

## 2. 🍀 你能玩到什么？

- 2048 🔢 | 扫雷 💣 | 植物大战僵尸 Lite 🌻🧟
- 贪吃蛇 🐍 | 打砖块 🧱 | 像素小鸟 🐤
- 井字棋 ❌⭕ | 记忆翻牌 🧠 | 水果忍者 🍉 | 大鱼吃小鱼 🐟

## 3. 🛠 技术栈

- Astro 4
- Tailwind CSS
- TypeScript（用于脚本/组件）

## 4. 📦 环境要求

- Node.js ≥ 18.14
- npm（随 Node 一起提供）

## 5. 🚀 快速开始

```bash
npm install      # 安装依赖
npm run dev      # 开发模式（默认 http://localhost:4321/）
# 或 npm start
```

## 6. 🏗 构建与预览

```bash
npm run build    # 产出静态文件到 dist/
npm run preview  # 本地预览构建产物
```

## 7. ☁️ 部署到 GitHub Pages

1. 在 `astro.config.mjs` 设置 `site`（用户页 `https://<USER>.github.io/`；项目页 `https://<USER>.github.io/<REPO>/` 并配置 `base: '/<REPO>/'`）。
2. 使用已有工作流 `.github/workflows/deploy.yml`：安装依赖 → `npm run build` → 上传 `dist` → Actions 发布。
3. 推送到默认分支（如 `main`），待 Actions 完成后在 Settings → Pages 查看发布地址。

## 8. 📂 目录速览

- `src/components/games/`：各小游戏组件（Astro + Canvas/DOM 逻辑）
- `src/layouts/`：通用布局
- `astro.config.mjs`：Astro 配置
- `tailwind.config.mjs`：Tailwind 配置

## 9. 💡 小贴士

- 新增游戏时，可参考现有模式放在 `src/components/games/`，并更新导航。
- 项目未附带许可证，如需分发请自行添加 LICENSE。
