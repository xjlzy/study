#chapter25 章节重点 路由
  > 使用浏览器的URL来管理向用户展示的内容

  * 定义路由的路由属性

  |名称|描述|
  |:--:|:--|
  |path|指定路由的路径|
  |component|在激活的时候，指定的组件|
  |pathMatch|如何将激活的URL与path属性进行匹配。 full表示完全匹配，prefix表示即使URL中包含其他不属于path属性的段内容，也能匹配|
  |redirectTo|能够将浏览器重定向一个已激活具有不同URL路劲|
  |children|指定子路由，可以嵌套在router-outlet元素中显示附加的组件|
  |outlet|用于支持多outlet元素|
  |resolve|定义在激活一个路由之前必须完成的工作|
  |canActivate|控制何时可以激活一个路由|
  |canActivateChild|控制是否可以激活一个子路由|
  |canDeactivate|控制是否可以停用一个路由|
  |loadChildren|配置仅在需要的情况下菜价在的模块|
  |canLoad|控制是否可以加载一个按需加载的模块|

  * 路由的本质：浏览器的URL发生了变化，引发路由系统查询自身的配置来判断需要向用户显示那个组件。
  * 可选路由参数可以让URL包含附加信息，可选路由参数对于应用程序正常工作并不是至关重要的。
  * 可选路由参数用分号(";")分隔的  如http://localhost:2333/form/edit/1;name=Lifejacket;price=48.95
  * Router类的方法和属性

  |名称|描述|
  |:--:|:--|
  |navigated|当存在至少一个导航事件时，这个boolean属性将返回true，否则返回false|
  |url|返回活动的URL|
  |isActive(url, exact)|如果指定URL是活动路由定义的，那么返回true，通过指定exact参数的值，可以确定被指定URL中的每一段是不是必须匹配当前URL，如果是，返回true|
  |events|返回一个Observable<Event>，可以用于监视导航变化|
  |navigateByUrl(url, extras)|导航访问指定的URL，该方法的执行结果为一个Promise，导航成功，这个Promise解析为true，否则为false，表明发生了一个错误|
  |navigate(commands, extras)|在导航时使用一个由段组成的数组，extras对象可以用于指定URL的变化是否与当前路由有关|

  * Router.events.Observer提供的事件类型
  
  |名称|描述|
  |:--:|:--|
  |NavigationStart|导航过程开始时，发送这个事件|
  |RoutesRecognized|路由系统在将URL与一个路劲匹配时，发送这个事件|
  |NavigationEnd|导航过程成功完成时，发送这个事件|
  |NavigationError|导航过程产生一个错误时，发送这个事件|
  |NavigationCancel|导航过程取消时，发送这个事件|