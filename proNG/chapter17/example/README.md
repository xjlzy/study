# chapter17 章节重点 组件
  > 组件是拥有自己模板的指令，并且定义了自己的HTML内容和可选CSS样式
  * Angular组件的创建方式，使用@Component装饰器来创建
    ```typescript
      @Component({
        selector: 'myCmp',
        template: '<div>s</div>'
      })
    ```
  * Angular应用程序至少需要一个根组件，他是Angular模块中指定的入口
  * @Component装饰器的属性列表

    |名称|描述|
    |:--:|:--|
    |animations|这个属性用来配置动画|
    |encapsulation|用来更改试图封装设置|
    |moduleId|用于指定在哪个模块中定义组件，并于templateUrl一起使用|
    |selector|指定用于匹配宿主元素的css选择器|
    |styles|定义仅用于组件模板的CSS样式，内联方式定义|
    |styleUrls|定义仅用于组件模板的CSS样式，外联方式定义|
    |template|定义组件的内联模板|
    |templateUrl|定义组件的外部模板|
    |providers|指定创建服务的本地提供程序|
    |viewProviders|仅可用于子视图的服务创建本地提供程序|
  * 宿主元素在父组件的模板中定义，而输入属性由子组件定义
  * 子组件的宿主元素充当父组件和子组件之间的桥梁，而输入属性可以让组件为子组件提供其所需的数据
  * 如果组件的宿主元素包含内容，那么可以使用特殊的ng-content元素将其包含在模板中，这称为内容投影
  * ViewEncapsulation枚举中的值

    |名称|描述|
    |:--:|:--|
    |Emulated|模拟影子DOM的方式来实现影子DOM的功能|
    |Native|使用浏览器提供的影子DOM功能，这个的开启取决于浏览器是否实现了shadow DOM|
    |None|不进行任何封装|
  * 使用shadow DOM时一些特殊的css选择器

    |名称|描述|
    |:--:|:--|
    |:host|用于匹配组件的宿主元素|
    |:host-context(classSelector)|匹配属于特定CSS类成员的宿主元素的祖先|
    |/deep/或>>>|父组件使用此选择器来定义影响其子组件模板中元素的样式，仅在Emulated时有效|

  * @ViewChild装饰器告诉Angular查询指定类型的第一个指令或者组件对象，并将其指派给该属性
    ```typescript
      // ViewChild 使用方法
      @ViewChild('sss') sss: ElementRef;
    ```
  * @ViewChildren装饰器告诉Angular查询指定类型的所有指令或者组件对象，并将其指派给该属性
    ```typescript
      // ViewChildren 使用方法
      @ViewChildren('sss') sss: QueryList<ElementRef>;
    ```