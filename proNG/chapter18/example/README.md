# 18章知识点
  ## 管道是小的代码片段，通过转换数据值，是的数据值可以在
  * 管道的用法  22.22|currency:'USD':'symbol':'2.2-2'  使用竖线|来转换一个值
    ``` javascript
      var num = 22.22;
      num|currency:'USD':'symbol':'2.2-2'  // 竖线|表示对该值应用名为'currency'的管道 管道名后面的:表示这个管道的其他参数
    ```
  * 自定义管道的方法   使用@Pipe装饰器来完成
    ``` typescript
      @Pipe({
        name: 'pipeName',   // 管道的名字  调用的时候使用
        pure: false         // 是否为纯管道（默认值为true）  如果为true表示只有输入参数或参数发生变化时管道才会重新求值
      })
      // 管道的类必须继承PipeTransform接口  实现transform函数
      export class PipeNamePipe implements PipeTransform {
        // transform函数为数据转换函数  第一个参数为要转换的数据值  后面的参数为调用管道时的其他参数
        transform(value: any, ...args) {

        }
      }
    ```
  * 管道可以组合，使用竖线可以将多个管道组合起来  数据流动的顺序是管道名称的顺序
  * 非纯管道会让管道拥有自己的状态数据，或者说如果当值发生变化时Angular自身无法检测出这些变更时应该用非纯管道
  * 对数据的处理就应该使用非纯管道  因为<span style="color:red;font-size:18px;">Angular无法自动检测出在数组内部发生的变化</span>
## Angular的内置管道
  | 名称 | 描述 |
  |:--:|:--|
  |number|针对数值执行本地化的相关操作|
  |currency|针对货币执行本地化的相关操作|
  |percent|针对百分比值执行本地化的相关操作|
  |date|针对日期值执行本地化的相关格式化操作|
  |uppercase|将字符串全部转换为大写|
  |lowercase|将字符串全部转换为小写|
  |json|将对象转化为JSON字符串|
  |slice|从数组中选择一组数据项或者从一个字符串中选择字符|
  |async|对Observabel或者Promise进行操作|

  * 数值格式化
    ``` javascript
      22|number:"3.2-4":"fr-FR"  //显示为022,00
      // number管道有两个参数  
      // 1.第一个参数表示现实格式  3表示整数位至少显示的位数  2 表示小数位至少显示的位数  4表示小数位最多显示的位数
      // 2.第二个参数表示本地化的值  
    ```
  * 货币格式化
    ``` javascript
      22|currency: 'USD':true:'3.2-4'  //显示为$022.00  (Angular7之前版本的用法)
      22|currency: 'USD':'symbol':'3.2-4'  //显示为$022.00 (Angular7及之后版本的用法)
      // currency管道有三个参数
      // 第一个参数表示货币的种类(默认为USD)  详情参考https://baike.baidu.com/item/ISO%204217/11018231?fr=aladdin
      // 第二个参数表示货币代码显示的方式  Angular V7版本之前是boolean值  true表示显示货币符号  false表示显示货币代码
      // Angular V7及之后版本为字符串  'code'表示显示货币代码  'symbol'表示显示货币符号  'symbol-narrow'显示符号的简写
      // 第三个参数表示数值的格式化方式  具体参考数值格式化的第一个参数
    ```
  * 百分比格式化
    ``` javascript
      0.2|percent // 显示为20%
    ```
  * 日期格式化
    ``` JavaScript
      new Date() | date: "yyyy-MM-dd HH:mm:ss":'+0430':'fr-FR' //显示为2019-05-19 09:58:18
      // date 管道有三个参数
      // 第一个表示时间格式化的格式  格式具体参考https://angular.cn/api/common/DatePipe
      // 第二个表示一个时区的偏移
      // 第三个表示本地化代码
    ```
  * 改变字符串的大小写
    ``` javascript
      'qqq'|uppercase  // 显示为QQQ
      'WWW'|lowercase  // 显示为www
    ```
  * 序列化为JSON字符串
    ``` javascript
      var obj = {"aa":"cc"};
      obj|json   //显示为 {"aa": "cc"}
    ```
  * slice数据切片
    ``` javascript
      var arr = [1,2,3,4];
      arr|slice:0:3 // 返回[1,2,3]
      // slice管道有两个参数
      // 第一个参数表示截取数据的起点索引
      // 第二个参数表示截取多少个数据
    ```