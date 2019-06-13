# chapter12 章节重点  数据绑定
  * 单向数据绑定用于为用户生成内容  单向表示数据在一个方向上流动
  * 单向绑定的方式
    ```html
      <!--
        数据绑定由4个部分组成
        1. 宿主元素->将要受到绑定影响的HTML元素
        2. 方括号告诉Angular这是单向数据绑定
        3. 目标制定数据绑定将执行的操作  分为指令和属性绑定
        4. 表达式是一段Javascript代码
      -->
      <div [ngClass]="classes"></div>
    ```
  * 数据绑定的目标就是一个指令，因为指令的名字是独一无二的
  * 如果省略方括号，angular仍会处理数据绑定，但是不会对表达式求值，会把引号之间的内容作为字面值传递给该指令
  * 标准属性绑定
    ```html
      <input [value]="val"/>
    ```
  * 元素属性绑定   用于设置宿主元素的元素属性
    ```html
      <div [attr.data-id]="id"></div>
    ```
  * Angular管理元素的css类的几种方法
    |方法|示例|描述|
    |:--:|:--|:--|
    |标准属性绑定|`<div [class]="expr"></div>`|此绑定会对表达式求值并用求值结果替换任何现有的css类成员资格(<span style="color:red;">结果会替换宿主元素当前的所有css类</span>)|
    |特殊类绑定|`<div [class.myClass]="expr"></div>`|此绑定将对表达式进行求值并用求值结果设置元素的myClass成员资格|
    |ngClass指令|`<div [ngClass]="map"></div>`|此绑定使用映射对象中的数据设置多个css类的类成员资格|
  * Angular管理宿主元素的样式的几种方法
    |方法|示例|描述|
    |:--:|:--|:--|
    |标准属性绑定|`<div [style.myStyle]="expr"></div>`|用于将单个样式属性设置为表达式的结果|
    |特殊样式绑定|`<div [style.myStyle.units]="expr"></div>`|可以将样式值的单位作为目标的一部分来指定|
    |ngStyle指令|`<div [ngStyle]="map"></div>`|使用映射对象中的数据设置多个样式属性|
  * Angular可以使用Javascript属性名称格式([style.fontSize])或css属性名称格式([style.font-size])来指定样式属性

# chapter13 章节重点 内置指令
  * 内置指令列表
    |指令名|示例|描述|
    |:--:|:--|:--|
    |*ngIf|`<div *ngIf="expr"></div>`|如果表达式的值为true，那么ngIf指令的宿主元素及其内容会包含在HTML文档中|
    |ngSwitch|`<div [ngSwitch]="expr"><span *ngSwitchCase="expr"></span><span *ngSwicthDefault></span></div>`|根据表达式的结果在多个候选元素中选择一个元素并将其包含在HTML文档中|
    |*ngFor|`<div *ngFor="#item of expr"></div>`|用于数组中的每个对象生成同一组元素|
    |ngTemplateOutlet|`<ng-template [ngTemplateOutlet]="myTempl"></ng-template>`|ngTemplateOutlet用于重复模版中的内容块|
    |ngClass|`<div [ngClass]="expr"></div>`|用来管理css类成员资格|
    |ngStyle|`<div [ngStyle]="expr"></div>`|用来管理宿主元素的样式|
  * 指令名称前的星号(*)表示这是一条微模版指令，同时微模版指令又称为结构性指令
  * ngFor指令的局部模版变量
    |名称|描述|
    |:--:|:--|
    |index|这个值指向当前对象在数组中的索引|
    |odd|如果当前对象在数组中的索引是单数，则为true|
    |even|如果当前对象在数组中的索引是双数，则为true|
    |first|如果当前对象是数组中的第一个对象，则为true|
    |last|如果当前对象是数组中的最后一个对象，则为true|
  * ngTemplateOutlet 提供上下文数据
    ```html
      <ng-template #titleTemplate let-text="title">
        <h4 class="p-a-1 bg-success">{{text}}</h4>
      </ng-template>
      <ng-template [ngTemplateOutlet]="titleTemplate" [ngOutletContext]="{title: 'Header'}"></ng-template>
      <!-- 上面为Angular7版本之前的写法  Angular7及以上版本的写法如下 -->
      <ng-template [ngTemplateOutlet]="titleTemplate" [ngTemplateOutletContext]="{title:'Header'}"></ng-template>
    ```
  * Angular绑定的表达式不能包含数据操作符，比如+、-、+=、-=、++、--等
# chapter14 章节重点 事件和表单
  * 事件绑定用于响应宿主元素发送的事件
  * 事件绑定组成的部分
    * 宿主元素是绑定的事件源
    * 圆括号告诉Angular这是一个事件绑定，且是一种单向绑定
    * 事件指定绑定事件
    * 表达式在事件触发时进行求值
  * 事件绑定的方式
    ```html
      <!--$event 是事件对象-->
      <input type="button" (click)="click($event)"/>
    ```
  * 当用户编辑input元素的内容时，除非该元素上有事件绑定，否则Angular不会更新模板的数据绑定
    ```html
      <!-- 这里将事件绑定设置为false，会为Angular提供一些东西求值，从而启动更新过程  如果没有这个绑定  product模板里面的值并不会更改 -->
      <input type="text" #product (input)="false"/>
    ```
  * 只有当input等元素存在于form元素之下的时候，Angular的验证功能才会开启
  * Angular表单验证CSS类
    |名称|描述|
    |:--:|:--|
    |ng-untouched ng-touched|如果元素未被访问，就加入到ng-untouched类中，如果访问过就加入ng-touched中|
    |ng-pristine ng-dirty|如果元素内容未改变过就加入ng-pristine类中，如果改变过就加入ng-dirty类中|
    |ng-valid ng-invalid|如果元素能通过验证就加入到ng-valid类中，否则就加入ng-invalid类中|
  * 在属性名称的后面附加一个<span style="color:red;">?</span>符号来告诉Angular，如果该属性为null或者undefined那么不要尝试访问任何后续的属性或方法
  * <span style="color:red;">ReactiveFormsModule</span>模块提供基于模型的表单功能，<span style="color:red;">FormControl</span>类用于表示表单中的单个元素，<span style="color:red;">FormGroup</span>类用于管理form元素及其内容