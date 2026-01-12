var posts=["2026/01/11/hello-world/","2026/01/11/博客教程-3：Hexo与GitHub-Pages部署指南/","2026/01/11/博客教程-1：Hexo与GitHub-Pages部署指南/","2026/01/11/博客教程-2：Hexo与GitHub-Pages部署指南/","2026/01/11/博客教程-4：Hexo与GitHub-Pages部署指南/","2026/01/11/博客教程-5：Hexo与GitHub-Pages部署指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };