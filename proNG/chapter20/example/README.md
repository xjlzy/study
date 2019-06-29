# chapter20 章节重点 服务提供程序
  > 服务提供程序是用来对依赖进行解析的对象，也称为提供程序。

  * 创建提供程序，最简单的方法就是将服务类添加到赋予了Angular模板的providers属性的数组中
  * Angular提供程序分类

    |名称|描述|
    |:--:|:--|
    |类提供程序|这个提供程序是用一个类配置的。对服务的依赖是通过一个类的实例来解析的，而这个类是由Angular创建的|
    |值提供程序|这个提供程序是用一个对象配置的，这个对象用来解析对服务的依赖|
    |工厂提供程序|这个提供程序是用一个函数配置的。对服务的依赖使用一个对象解析的，这个对象是通过调用函数创建的|
    |已有服务提供程序|这个提供程序是用其他服务的名称配置的，并且允许待创建的服务使用别名|
  * 类提供程序有两种写法  
    ```typescript
      // 第一种  简写形式
      @NgModule({
        prividers: [LogService]
      })
      // 第二种 字面量语法形式
      @NgModule({
        providers: [{
          privide: LogService,
          useClass: LogService,
          multi: false
        }]
      })
    ```
  * 类提供程序字面量语法的属性

    |名称|描述|
    |:--:|:--|
    |privide|这个属性用于指定令牌，令牌用于标识提供程序和待解析的依赖|
    |useClass|这个属性用于指定一个类，这个类在实例化之后可以解析提供程序给出的依赖|
    |multi|这个属性可以用来传递一个服务对象数组以解析依赖|
  
  * 所有提供程序都依赖令牌(Token)，依赖注入系统使用令牌来标识提供程序能够解析的依赖。（最简单的方法就是使用一个类来作为令牌）
  * 任何对象皆可用来充当令牌，这是因为依赖和对象的类型允许分开。所以类提供程序也可以写成下面这样
    ```typescript
      // 定义一个提供程序
      @NgModule({
        providers: [{
          privide: 'logger',
          useClass: LogService
        }]
      })

      // 使用这个依赖
      // @Inject() 装饰器用来指定提供程序的令牌来解析依赖
      constructor(@Inject('logger') private logger: LogService) {}
    ```
  * 设置useClass属性来指定依赖类期待的某种类型时，必须加以小心。指定一个子类是安全的选择，因为基类的功能始终是可用的。
  * 为了提供一个数组，可以将多个类提供程序配置为使用同一个令牌，并将multi属性设为true
    ```typescript
      // 设置多个类提供程序   同一个令牌LOG_SERVICE提供了两个类
      @NgModule({
        providers: [
          {provide: LOG_SERVICE, useClass: LogService, multi: true},
          {provide: LOG_SERVICE, useClass: SpecialLogService, multi: true}
        ]
      })

      // 在类中注入服务
      private log: LogService;
      consturctor(@Inject(LOG_SERVICE) private logs: LogService[]) {
        this.log = logs.find(x => x.minimumLevel === LogLevel.DEBUG);
      }
    ```
  * 如果服务是简单数据类型时，可以使用值提供程序。值提供程序的属性如下：

    |名称|描述|
    |:--:|:--|
    |provide|定义了服务的令牌|
    |useValue|指定了用来解析的对象|
    |multi|多个类提供程序能否使用同一个令牌|
  * 工厂提供程序使用函数来创建解析依赖所需的对象。 工厂提供程序属性如下：

    |名称|描述|
    |:--:|:--|
    |provide|定义了服务的令牌|
    |deps|指定了一个由提供程序令牌组成的数组，提供程序令牌被解析后，将被传递给由useFactory属性指定的函数|
    |useFactory|指定了创建服务对象的函数。创建对象时，需要解析deps属性指定的令牌，这个对象将以参数方式传递给函数|
    |multi|多个类提供程序能否使用同一个令牌|
  
  * 工厂提供程序使用方法

    ```typescript
      // 使用工厂提供程序
      @NgModule({
        providers: [
          {provide: LOG_LEVEL, useValue: LogLevel.DEBUG},
          {
          provide: LogService,
          deps: [LOG_LEVEL],
          useFactory: (level) => {
            let logger = new LogService();
            logger.minimumLevel = level;
            return logger;
          }
        }]
      })

      // 在类中注入服务
      constructor(private log: LogService) {}
    ```
  * 已有服务提供程序可以为已有的提供程序创建别名。  这样就可以使用多个令牌来使用同一个服务

    |名称|描述|
    |:--:|:--|
    |provide|定义了服务的令牌|
    |useExisting|指定另一个提供程序的令牌|
    |multi|多个类提供程序能否使用同一个令牌|

  * 本地提供程序表示每个组件和指令都可以拥有自己的注入器，每个注入器都可以被配置为使用自己的提供程序集合
  * 本地提供程序的组件装饰器属性

    |名称|描述|
    |:--:|:--|
    |providers|创建一个提供程序，用来解析子视图和子内容的依赖|
    |viewProviders|创建一个提供程序，用来解析子视图的依赖|
  * Angular为同一个服务定义提供程序时，不支持同时使用providers个viewProviders属性。如果同时使用，那么子视图和子内容将同时收到viewProvides提供程序创建的服务。
  * Angular提供了三种不同的装饰器来解析依赖

    |名称|描述|
    |:--:|:--|
    |@Host|限制搜索提供程序的范围为距离最近的组件|
    |@Optional|在无法解析依赖的时候，可以禁止Angular报告错误消息|
    |@SkipSelf|排除那些正在解析依赖的组件/指令所定义的提供程序|
  
  * @Host装饰器限制提供程序的搜索范围，这是一旦Angular找到最近的组件，搜索随即停止
  * @SkipSelf装饰器告诉Angular可以忽略本级本地提供程序，去上一级的本地程序继续搜索
