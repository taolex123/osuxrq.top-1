import{_ as o,M as s,p as d,q as i,R as e,t as n,N as t,a1 as l}from"./framework-5866ffd3.js";const r={},c=e("h2",{id:"基本步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基本步骤","aria-hidden":"true"},"#"),n(" 基本步骤")],-1),u=e("p",null,"若要贡献，请遵循下列步骤。",-1),h=e("li",null,[n("点右上角 GitHub，fork 仓库，然后 "),e("code",null,"git clone"),n(" 到本地。")],-1),_={href:"https://nodejs.org/zh-cn",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,[n("在克隆的文件夹运行 "),e("code",null,"npm install"),n("。")],-1),m=e("li",null,"添加或修改页面。",-1),g=e("li",null,"预览修改验证效果。",-1),v=e("li",null,[e("code",null,"git add <修改的页面>"),n(", "),e("code",null,"git push"),n("。")],-1),f=e("li",null,"创建 Pull Request，以把修改合并回原仓库。",-1),x=l(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>虽然管理组有直接修改的权限，但为了避免冲突，最好不要直接修改仓库。</p></div><h2 id="如何创建页面" tabindex="-1"><a class="header-anchor" href="#如何创建页面" aria-hidden="true">#</a> 如何创建页面</h2><h3 id="创建-md-文件" tabindex="-1"><a class="header-anchor" href="#创建-md-文件" aria-hidden="true">#</a> 创建 .md 文件</h3><p>在合适的文件夹创建合适的文件，后缀为 <code>.md</code>。文件夹路径和文件名会影响网页的路径。文件名为“README.md”则为该目录。</p><p>例如，“/huodong/qunsai/README.md”的 URL 是“/huodong/qunsai/”，“/huodong/qunsai/1.md”的 URL 是“/huodong/qunsai/1”。</p><p>然后在文件中添加 Header：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: 群赛
lang: zh-CN
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后面写正文，使用 Markdown 语法，不要再使用一级标题。</p><p>如果不会 Markdown，自行搜索 Markdown 语法，非常好学。最基础的就是起新段落要换两行。</p><h3 id="修改导航栏和边栏-如果需要" tabindex="-1"><a class="header-anchor" href="#修改导航栏和边栏-如果需要" aria-hidden="true">#</a> 修改导航栏和边栏（如果需要）</h3><p>在 .vuepress/config.ts 中修改导航栏和边栏以便在其中增加页面。</p><p>这里需要至少另外一人学会如何修改并承担起维护任务。</p><h2 id="实时查看效果" tabindex="-1"><a class="header-anchor" href="#实时查看效果" aria-hidden="true">#</a> 实时查看效果</h2>`,13),b={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"提示",-1),q={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,[n("在文件夹内运行 "),e("code",null,"npm run docs:dev"),n("，然后点击显示的链接即可查看效果。如果不熟悉 VuePress，请务必在提交 Pull Request 前检查。")],-1);function N(R,M){const a=s("ExternalLinkIcon");return d(),i("div",null,[c,u,e("ol",null,[h,e("li",null,[n("下载安装 "),e("a",_,[n("Node.js"),t(a)]),n("。")]),p,m,g,v,f]),x,e("div",b,[k,e("p",null,[n("推荐使用 "),e("a",q,[n("Visual Studio Code"),t(a)]),n(" 打开克隆下来的文件夹。")])]),E])}const w=o(r,[["render",N],["__file","gongxian.html.vue"]]);export{w as default};
