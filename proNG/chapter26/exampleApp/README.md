#chapter26 章节重点 复杂路由
  > 使用浏览器的URL来管理向用户展示的内容

  * '**'通配符可以用来匹配所有的错误路由
  * 路由的顺序很重要，因为Angular是根据路由定义的顺序来求值的。所以通配符路径必须放在最后一个路由。
  * 能够与空路径匹配的内容是很严格的，而通配符路径是字面量，可以与任意数量的段相匹配。
  * 可以将路由当作一个别名，利用这个别名将路由器重定向到一个不同的URL。重定向使用路由中的redirectTo属性定义的。
  * pathMatch属性值

    |名称|描述|
    |:--:|:--|
    |prefix|可以匹配那些以指定路径开始的URL，并忽略后面的段|
    |full|仅匹配path属性指定的URL|
  * routerLinkActive属性用于指定一个css类，当routerLink属性指定的URL与活动路由匹配时，可以讲这个css类赋予元素
  * routerLinkActiveOptions属性接受一个字面量，exact属性是唯一可用的配置，用来控制匹配的活动路由URL，如果exact为true，那么只有精准匹配活动路由URL的情况下，才能将routerLinkActive的类添加到元素中。
  * 在匹配路由时，Angular试图按照路由定义的顺序来匹配路由。
  * Angular匹配路由时，针对那些通过ActivateRoute对象选中的组件，Angular为这些组件提供的信息被隔离开来，这样每个组件只能收到选中这个组件的路由部分的详情

  * 子路由/父路由信息的ActivateRoute属性

    |名称|描述|
    |:--:|:--|
    |pathFromRoot|由ActivateRoute对象组成的数组，代表所有用于匹配当前URL的路由|
    |parent|一个ActivateRoute对象，表示选中组件的路由的父路由|
    |firstChild|一个ActivateRoute对象，表示用于匹配当前URL的第一个子路由|
    |children|由ActivateRoute对象组成的数组，表示所有用于匹配当前URL的字路由|