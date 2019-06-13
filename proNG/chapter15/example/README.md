# chapter15 章节重点  属性指令
  > 属性指令是开发者可以创建的最简单的指令类型，可以改变单个元素的外观和行为
  * 创建指令的方法，使用@Directive装饰器创建
    ```typescript
      // 选择器的名称的前缀应该避免使用Ng/ng 因为这两个保留用于内置Angular功能
      @Directive({
        selector: '[myDir]'
      })
    ```
  * @Attribute 装饰器可以读取宿主元素的属性值，这个装饰器的主要限制是只能读取静态的元素属性值
    ```typescript
      //@Attribute 装饰器的用法
      constructor(@Attribute('myDir') dir: string){}
    ```
  * 指令的生命周期钩子函数（同样适用与组件）
  
    |名称|描述|
    |:--:|:--|
    |OnInit|在Angular设置了所有输入属性的初始值之后调用|
    |OnChanges|当输入值发生改变时调用，此方法发生在OnInit钩子之前|
    |DoCheck|当Angular运行变更检测过程时调用|
    |AfterContentInit|在指令的内容经过初始化之后调用|
    |AfterContentChecked|在对该指令的内容进行检查（属于变更检测的一部分）后调用|
    |OnDestroy|在Angular销毁组件或数据之前调用|
    |AfterViewInit|在组件的视图进行初始化之后调用|
    |AfterViewChecked|在对组件的视图进行检查（属于变更检测的一部分）后调用|
  * <span style="color:red;">EventEmitter</span>类为Angular指令提供了事件机制
  * @HostBinding装饰器用于在宿主元素上设置属性绑定，并应用于指令属性
    ```typescript
      // HostBinding的用法  该例子用来设置宿主元素的data-id属性的值为11
      @HostBinding('attr.data-id')
      get getId(): number {
        return 11;
      }
    ```
  * @HostListener装饰器用于宿主元素上设置事件绑定，并应用于指令方法
    ```typescript
      // HostListener的用法  ['$event'] 用来传递参数
      @HostListener('click', ['$event'])
      click(e): void {

      }
    ```
  * @Directive装饰器的exportAs属性指定了一个名称，在模板变量中将使用该名称来引用指令
    ```typescript
      @Directive({
        selector: 'input[paModel]',
        exportAs: 'paModel'
      })
      // 用法
      <input  #paModel="paModel"/>
    ```