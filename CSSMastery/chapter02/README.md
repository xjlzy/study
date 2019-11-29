# chapter02 章节重点 样式
  * 类型和后代选择符时最基本的选择符。适合用来全面应用基础样式。
    * 类型选择符用来选定特定的元素，例如：
      ```css
        /* 表示选中所有的P元素应用样式 */
        p {
          color: black;
        }
      ```
    * 后代选择符用于选择某个或某组元素的后代，例如：
      ```css
        /* 表示选中blockquote元素的后代中的所有p元素 */
        blockquote p {
          padding-left: 2em;
        }
      ```
  * ID选择器（由#号开头）类选择器（由.开头），例如：
    ```css
      /* ID选择器 */
      #intro {
        font-weight: bold;
      }
      /* 类选择器 */
      .date-posted {
        color: #ccc;
      }
      <p id="intro">Happy Birthday, Andy</p>
      <p class="date-posted">20/1/2019</p>
    ```
  * 子选择器，表示只选择一个元素的直接后代，也就是直接子元素。(用>符号表示)
    ```css
      /* 表示选择ID为nav元素的直接li子元素 */
      #nav > li {
        background: url(folder.png) no-repeat left top;
        padding-left: 20px;
      }
    ```
  * 相邻同辈选择器，用+号表示，例如：
    ```css
      /* 表示选中h2元素的相邻的p元素 */
      h2 + p {
        font-size: 1.4em;
      }
      <h2>sss</h2>
      <p>这儿字体大小1.4em</p>
      <p>这儿字体就是默认大小</p>
    ```
  * \>、+和~符号也叫做组合子，其中>叫子组合子，+叫相邻同辈组合子，~叫一般同辈组合子。
  * 相邻同辈选择器和一般同辈选择器都不会选择前面的同辈，只会向后来选择。
  * 通用选择符，表示可以匹配一切元素的选择符，用*来表示。 
  * 属性选择符基于元素是否有某个属性或者属性是否有某个值来选择元素。