# 盒尺寸四大家族
  > content box、padding box、border box、margin box

* 根据是否具有可替换内容，可以将元素分为替换元素和非替换元素。如img、object、video、iframe、textarea、input都是典型的替换元素
* 替换元素的特性：
  * 内容的外观不受页面上的CSS影响
  * 有自己的尺寸
  * 在很多CSS属性上有自己的一套表现规则，比如vertical-align在替换元素中的默认值是元素底部
* 在CSS世界中，图片资源的固有尺寸无法改变