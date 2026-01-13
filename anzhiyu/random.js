var posts=["2026/01/13/我的第一篇文章/","2026/01/13/hello-world/","2024/01/13/测试文章3/","2024/01/13/测试文章4/","2024/01/13/测试文章1/","2024/01/13/测试文章2/","2024/01/13/搜索功能测试/","2024/01/13/测试文章5/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };