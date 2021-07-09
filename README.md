## 在线拓扑编辑器

前后用了有点久的时间，都不知道怎么描述该项目了~

首先，如你所见，这是一个vue与mxGraph的编辑器融合的项目，我在原有功能基础上，与vue项目结合到一起。并改变了编辑器样式，扩展/改写了一些功能。
---
想要驾驭这款编辑器，你必须得分成3步
- 第一：学习mxGraph的基本语法和用法
- 第二：了解编辑器源代码的目录结构/总体思路，之后是细节
- 第三：就是vue与他们如何融合在一起了


关于[mxGraph](https://github.com/maxGraph/maxGraph)：没有中文文档，也没有很好的翻译文章，最有效的方式就是将所有案例都看一遍，案例很多，一定要看完，至少你要知道你可以做什么/大概怎么做。
---
关于[Graph Editor](https://jgraph.github.io/mxgraph/javascript/examples/grapheditor/www/index.html):了解基本结构，遇到问题分析源码
---
关于vue+Graph结合：我空想了一天多，找不到能给我的参考的项目，有也不适合我的情况。我很想把Editor的DOM统统换成Vue的虚拟DOM,但是在看了部分Edit的代码以后我就知道这根本不可能，所以就有了现在的样子。它一定不完美，以后肯定会有人给出更完美的方案，如果没有我这个也还不错哈~

---
好家伙功能实在太多了，我自己也扩展了JS导出XML和导出,和浏览模式，也屏蔽了一下用不到的功能
Edit本身有导入导出，但是这种功能几乎都是借助了服务器，我是纯JS实现~

# vue-maxgraph-edit
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
