# chapter27 章节重点 路由守卫
  > 为了控制导航路由的使用，Angular使用路由守卫来配置功能

  * 针对守卫的路由属性

    |名称|描述|
    |:--:|:--|
    |resolve|能够推迟激活路由的守卫，直到某个操作执行完毕|
    |canActivate|用于指定能够激活一个路由的守卫|
    |canActivateChild|用于指定能够激活一个字路由的守卫|
    |canDeactivate|用于能够使一个活动路由失活的守卫|
    |canLoad|用于守卫动态功能模块的路由|
  * resolve守卫主要是确保一个路由在被激活之前，应用程序收到了所需的数据。
  * resolve解析器方法返回的结果类型

    |名称|描述|
    |:--:|:--|
    |Observable<any>|当Observable产生一个事件时，浏览器可以激活新的路由|
    |Promise<any>|当Promise解析时，浏览器可以激活新的路由|
    |任何其他结果|当resolve方法生成一个结果时，浏览器马上激活新的路由|