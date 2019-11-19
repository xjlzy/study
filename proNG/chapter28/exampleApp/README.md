# chapter28 章节重点 动画
  > 通过使用数据绑定，Angular动画系统能够以动画方式显示HTML元素。一是强调内容变化，二是平滑的显示内容

  * Angular动画功能依赖Web Animations API，仅chrome何Mozilla浏览器为这组API提供了可靠的实现。其他浏览器根本没有提供或者提供了一部分的API，不过可以使用polyfill库来添加对旧版浏览器的基本支持（即部分支持）。

  * 动画系统的核心时样式分组，是一组被应用于一个HTML元素的CSS样式属性和样式值。

  * 当使用style函数时，可以使用两种方法来指定CSS属性，一是backgroundColor这种没有横线，后面的单词首字母大写的形式，一种是background-color有横线的原生CSS样式名的，不过这种必须加上引号。

  * 可以使用state函数来定义元素状态，这个函数接受状态名称和与之关联的样式集合。

  * transition函数用来定义元素的状态迁移。动画迁移有以下两种箭头类型

    |箭头|示例|描述|
    |:--:|:--:|:--|
    |=>|selected => unselected|指定从一个状态到另一个状态的单向迁移|
    |<==>|selected <=> unselected|指定一个状态到另一个状态的双向迁移|
  
  * 定义动画的完整代码如下：
    ``` javascript
      // trigger是定义触发器，'rowHighlight'是触发器的名称。
      export const HighlightTrigger = trigger('rowHighlight', [
        state('selected', style({
          backgroundColor: 'lightgreen',
          fontSize: '20px'
        })),
        state('unselected', style({
          backgroundColor: 'lightsalmon',
          fontSize: '12px'
        })),
        transition('selected => unselected', animate('200ms')),
        transition('unselected => selected', animate('400ms'))
      ]);
    ```
  * 内置的动画状态

    |状态|描述|
    |:--:|:--|
    |*|回退状态，当元素不处于动画触发器定义的任何一个状态时，可以应用这个状态|
    |void|当元素不属于模板的任何一部分时，元素处于void状态|
  * angular提供了别名机制，可以用:enter表示void=>\*,用:leave表示\*=>void
  * 动画定时函数

    |名称|描述|
    |:--:|:--|
    |linear|将定时值设置为一个固定值，默认选项|
    |ease-in|动画效果开始比较慢，但是速度逐步加快|
    |ease-out|动画效果开始比较快，但是速度逐步减慢|
    |ease-in-out|动画效果开始比较快，然后慢下来，到中间时刻之后再次加快，直到动画结束|
    |cubic-bezier|使用贝塞尔曲线创建中间值，详情参见[w3c](http://w3c.github.io/web-animations/#time-transformations)|
  * 指定动画延迟的方法
    ```javascript
      // 400ms表示动画运行时间 200ms表示动画的延迟 ease-in表示动画曲线
      transtion('* => selected', animate('400ms 200ms ease-in'))
    ```
  * 触发器为一组状态和迁移提供了包装器，并且为具有动画功能的元素提供了关联支持。
  * AnimationEvent 事件的属性

    |名称|描述|
    |:--:|:--|
    |fromState|返回元素正在退出的状态|
    |toState|返回元素正在进入的状态|
    |totalTime|返回动画的持续时间|