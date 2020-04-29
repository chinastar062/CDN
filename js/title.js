    var title = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '(つェ⊂)我藏好了哦~ ';
            clearTimeout(titleTime);
        }
        else {
            document.title = '(*´∇｀*) 被你发现啦~ ';
            titleTime = setTimeout(function() {
                document.title = title;
            }, 2000);
        }
    });
   router.beforeEach((to, from, next) => {
       /* 路由发生变化修改页面title */
       if (to.meta.title) {
           document.title = to.meta.title;
       }else{
           document.title = '默认title';
       }
       next();
   })
