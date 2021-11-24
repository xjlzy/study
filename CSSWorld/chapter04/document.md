# 盒尺寸四大家族
  > content box、padding box、border box、margin box

* 根据是否具有可替换内容，可以将元素分为替换元素和非替换元素。如img、object、video、iframe、textarea、input都是典型的替换元素
* 替换元素的特性：
  * 内容的外观不受页面上的CSS影响
  * 有自己的尺寸
  * 在很多CSS属性上有自己的一套表现规则，比如vertical-align在替换元素中的默认值是元素底部
* 在CSS世界中，图片资源的固有尺寸无法改变
* 利用content实现计数器
  * counter-reset 计数器重置，数字默认为0，重置的数字可以是复数，也可以是小数（<span style="color: red;">仅chrome支持，且会将小树向下取整，其他浏览器不支持小数，会当作0来处理</span>）
    ```css
      // 当个计数器
      counter-reset: wangxiaoer 2;
      // 多个计数器
      counter-reset: wangxiaoer 2 wangxiaosan 3;
    ```
  * counter-increment 计数器递增，每使用一次，数据源就增加一次计数值
    ```css
      // 设置初始值为2
      counter-reset: wangxiaoer 2;
      // 给计数器wangxiaoer增加一次计数值
      counter-increment: wangxiaoer;
      // 显示3
      content: counter(wangxiaoer);
    ```
  * counter(name, style) 方法,第一个参数表示计数器名称，第二个参数表示显示的方式
    ```css
      counter-reset: wangxiaoer 2;
      // 显示为罗马数字 ⅱ
      content: counter(wangxiaoer, lower-roman);
    ```
  * counters(name, string)方法。实现嵌套计数，可实现诸如1-1,1-1-1版的子序号
    ```css
      // 显示为1-1、1-1-1这种格式
      content: counters(wangxiaoer, '-');
    ```
* 显示content计数值的那个DOM元素在文档流的位置一定要在counter-increment元素的后面

* 内联元素的padding在垂直方向一样会影响布局，影像视觉表现
* 对于非替换元素的内联元素，不仅padding不会加入盒高度的计算，margin和border也都是如此，不计算高度但实际在内敛盒周围发生了渲染！
* padding属性值不支持负值
* padding支持百分比，但是无论是水平还是垂直方向，padding的百分比值都是相对于宽度计算的
* 对于内联元素，padding是会断行的，padding区域是根据内联模型中的行框盒子走的
* 只要元素的宽度设定，那么margin就无法更改元素的尺寸
* 如果元素的尺寸表现符合“充分利用可用空间”，无论是垂直方向还是水平方向，都可以通过margin改变尺寸
* 内联元素垂直方向上的margin是没有任何影响的,既不会影响外部尺寸,也不会影响内部尺寸
* 利用margin负值可以实现分栏等高的效果,实现方式如下
  ```html
    <style>
      .box {
        overflow: hidden;
      }
      .box-left,
      .box-right {
        // 利用margin负值往外借空间的方式实现
        margin-bottom: -9999px;
        padding-bottom: 9999px;
      }
    </style>
    <div class="box">
      <div class="box-left"></div>
      <div class="box-right"></div>
    </div>
  ```
* margin的百分比值是不管是水平还是垂直的都是根据元素的宽度来计算的
* <span style="color: red;">块级</span>元素的上外边距和下外边距有时会发生合并（垂直方向）注意：是发生在和当前文档流方向相垂直的方向（可通过writing-mode更改文档流方向）
* margin合并的三种场景：
  * 相邻兄弟块级元素的margin合并，最常见也是最基本的margin合并
  * 父级和第一个/最后一个子元素发生合并,如以下几种情况
    ```html
      <!-- 以下几种情况的表现方式一致 -->
      <div>
        <div style="margin-top: 80px"></div>
      </div>

      <div style="margin-top: 80px">
        <div></div>
      </div>

      <div style="margin-top: 80px">
        <div style="margin-top: 80px"></div>
      </div>
    ```
  * 空块级元素的margin合并，即空块级元素的上下边距会合并到一个值中
  * margin合并的计算规则为：正正取大值，正负值相加，负负最负值
* margin: auto;的填充规则如下：
  * 如果一侧有值，一侧为auto，则auto为剩余空间
  * 如果两侧均为auto，则平分剩余空间
* margin无效的场景：
  * display: inline;的非替换元素的垂直margin是无效的
  * display: table-cell/table-row;的元素的margin是无效的
  * margin合并的时候更改margin值可能是无效的，比如父元素的margin-top: 50px;这时候除非给子元素设定的margin-top的值大于50，否则是无效的
  * 绝对定位元素的非定位方位的margin值“无效”（只是看上去的无效）
  * 定高元素的子元素的margin-bottom或者定宽元素的子元素的margin-right的
  * 鞭长莫及导致的margin无效
    ```html
      <style>
        .box > img {
          float: left;
          width: 256px;
        }
        .box > p {
          overflow: hidden;
          /* 这个时候margin-left的值只要小于等于256 那么界面上就不会有任何效果 */
          margin-left: 100px;
        }
      </style>
      <div class="box">
        <img src="">
        <p>内容</p>
      </div>
    ```
  * 内联特性导致的margin失效
    ```html
      <style>
        .box > img {
          height: 96px;
          /* 这个时候将-200px改为-300元素的位置不会发生变化 */
          margin-top: -200px;
        }
      </style>
      <div class="box">
        <img src="mm1.jpg">
      </div>
    ```
* border-width除了支持具体的数字还支持thin(等同1px)、medium(等同3px)和thick(等同4px)三个关键字
* border-color的默认颜色就是color色值
* 利用border实现等高布局：利用border划分一个区域出来，然后将一部分显示利用margin负值和float将其在border区域显示，实现如下：
  ```css
    .box {
      border-left: 150px solid #ccc;
      background-color: #f0f3f9;
    }
    .box > nav {
      width: 150px;
      margin-left: -150px;
      float: left;
    }
    .box > section {
      overflow: hidden;
    }
  ```