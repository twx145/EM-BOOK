// mathjax.js 文件内容 (使用 $ 的版本)
window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]], // 在这里添加了 ["$", "$"]
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});