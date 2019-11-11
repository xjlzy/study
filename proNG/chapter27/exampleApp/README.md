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

  * canActivate方法返回的结果类型

    |结果类型|描述|
    |:--:|:--|
    |boolean|当执行同步检查来查看是否可以激活路由时，这类结果就很有用咯，返回true时可以激活，返回false时不可激活|
    |Observable<boolean>|当执行异步检查来查看是否可以激活路由时，Angular就会一直等待，知道Observable产生一个值，这个值可以用来判断路由是否被激活。但是在使用这类结果时，通过complete方法来结束Observable是非常重要的，不然Angular将会一直等待下去|
    |Promise<boolean>|也是用来执行异步检查的，等待Promise被解析，如果返回的值是true时可以激活，返回false时不可激活|
  
  * 当应用程序导航离开一个路由时，该路由就失活了。最常见的失活守卫是在未保存被编辑数据的情况下，防止用户导航离开。
  * outlet属性用来指定路由应用的出口元素，如果省略outlet属性，Angular将假定路由选择主出口