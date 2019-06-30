# chapter21 章节重点 模块
  > 为Angular提供配置信息。功能模块是用来为应用程序添加结构。
  
  * 一个程序至少要有一个模块，称之为跟模块。
  * Angular模块是一个应用了@NgModule装饰器的类。
    ```typescript
      // 创建一个Angular模块
      @NgModule({
        imports: [],
        declarations: [],
        provides:[],
        bootstrap: [], // 根模块专属属性，指定项目的根组件
        exports: [],
        entryComponents: []
      })
    ```
  * @NgModule装饰器模块属性

    |名称|描述|
    |:--:|:--|
    |imports|指定支持应用程序中的指令、组件、管道所需的Angular模块|
    |declarations|指定应用程序中使用的指令、组件、管道|
    |provides|定义模块注入器使用的服务提供程序|
    |bootstrap|指定应用程序的根组件（根模块独有属性）|
    |exports|定义模块对外界公开导出的内容，除了包含或全部来自declarations属性的指令、组件、管道外，还包含部分或全部imports属性的模块|
  * Angular中不存在模块作用域