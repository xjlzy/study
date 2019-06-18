# chapter19 章节重点 服务
  > 服务是提供了常用功能的对象，通过一种名为“依赖注入”的过程使用。

  * 通过依赖注入管理和分发的对象被称为服务
  * Angular中使用@Injectable() 装饰器来创建服务类
    ```typescript
      @Injectable()
      export class XXXService {}
    ```
  * 为了创建新的实例，每个依赖被注入到构造函数中。
  * 使用服务的方法，就是在要使用的类的构造函数中注入该服务。
    ```typescript
      export class XXXClass {
        constructor(private xxx: XXXService){

        }
      }
    ```
  * 要使用服务需要现在模块中注册服务  
    ```typescript
      @NgModule({
        /// other setting
        providers: [XXXService]
      })
    ```
  * 程序中所有声明了针对XXXClass的依赖的组件都会收到<span style="color:red">同一个对象</span>。