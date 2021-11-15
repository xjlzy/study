# 流、元素与基本尺寸

* HTML元素分为块级元素(block-level element)和内联元素(inline-level element)
* 块级元素：一个水平流上只能单独显示一个元素，多个块级元素则换行显示，因此理论上可以配合clear来清除浮动
* IE浏览器不支持伪元素的display值为list-item,所以实际开发中都是使用block或者table来清除浮动
* HTML元素的盒子由<font color="red">块级盒子</font>和<font color="red">容器盒子</font>组成
  * 块级盒子用来决定元素是一行显示还是换行显示
  * 容器盒子用来决定元素的宽高和内容的呈现
* width: auto;至少有四种宽度表现
  * 充分利用可用空间
  * 收缩和包裹(包裹性)：代表为浮动、绝对定位、inline-block和table元素
  * 收缩到最小：容易出现在table-layout: auto;的表格中，即当每一列空间都不够的时候，文字能断就断（中文是随便断的）
  * 超出容器限制：出现在内容很长的连续英文和数字或者元素被设置了white-space: nowrap;
* 元素的尺寸分为外部尺寸和内部尺寸
  * 内部尺寸表示尺寸由内部元素决定
  * 外部尺寸表示尺寸由外部元素决定
* block容器的流动性是一种margin\border\padding和content内容区域自动分配水平空间的机制
* 格式化宽度仅出现在“绝对定位模型”中，默认情况下绝对定位元素的宽度表现为包裹性，但是当元素的<font color="red">left/right</font>或者<font color="red">top/bottom</font>对立方位的属性值同时存在的时候，会表现为格式化宽度
* 在CSS世界中，图片和文字的权重远大于布局
* 容器盒子分为content box、padding box、border box和margin box四个盒子
* <font color="red">margin的背景永远是透明的</font>
* 元素的width和height属性是直接作用在content box上的
* min-width/min-height的默认值为auto、max-width/max-height的默认值为none