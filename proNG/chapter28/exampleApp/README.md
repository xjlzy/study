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