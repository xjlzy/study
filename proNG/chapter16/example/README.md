# chapter16 章节重点 结构性指令
  > 结构性指令通过使用微指令来添加和删除元素来改变HTML文档的布局

  * ViewContainerRef对象用于管理视图容器的内容，其有用的方法和属性如下

    |名称|描述|
    |:--:|:--|
    |element|这个属性返回容器元素的ElementRef对象|
    |createEmbeddedView(template)|这个方法使用模板创建新的视图|
    |clear()|从容器删除所有视图|
    |length|容器中视图的数量|
    |get(index)|返回指定索引处的视图的ViewRef对象|
    |indexOf(view)|返回指定ViewRef对象的索引|
    |insert(view,index)|在指定索引处插入视图|
    |remove(index)|删除并销毁指定索引处的视图|
    |detach(index)|将试图从指定索引处分离，但不会销毁视图，这样可以使用insert方法从新插入试图|
  * 如果指令名称前有一个星号(*)前缀，这告诉Angular这个结构型指令使用简洁语法
  * TemplateRef对象提供要插入到容器中的内容，而上下文对象为隐式值提供了数据（使用$implicit的属性指定）
  * @ContentChild装饰器告诉Angular，该指令需查询宿主元素的内容，并将查询到的第一个结果赋给该属性
  * @ContentChildren装饰器告诉Angular，该指令需查询宿主元素的内容，并将查询到的所有结果赋给该属性