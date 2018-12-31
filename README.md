# 项目简介

一个用于展示、推荐偶像窦靖童的网站

# 组成模块

- 首页 - 形象展示；基本信息介绍；
- 音乐 - 音乐作品分类集合；
- 视频 - 现场 live 推荐；
- 照片 - 图片和采访，深度了解；
- 资讯 - 演出信息；

# 模块详解

## 首页

`one-page-wonder.css`
`bootstrap.css`

- 导航栏
   - bootstrap 导航栏布局组件 `navbar`
   - 折叠插件 `collapse`
- 幻灯片 `carousel`
   - bootstrap 轮播图插件 
      - 属性 data-slide 接受关键字 prev 或 next，用来改变幻灯片相对于当前位置的位置
      - 使用 data-slide-to 来向轮播传递一个原始滑动索引，data-slide-to="2" 将把滑块移动到一个特定的索引，索引从 0 开始计数。
      - data-ride="carousel" 属性用于标记轮播在页面加载时就开始动画播放
- 简介展示
   - bootstrap 网格系统
## 音乐

`style.css` `script.js`

- jquery
   - 掉落 - 判断位置增加属性`addClass`
   - 鼠标事件 `mousemove` `mouseleave` `mousewheel`
- css3属性
   - 角度 `transform`
   - 过渡 `transition`
   - 动画 `animation` 效果 `@keyframe`
   - 透明度 `opacity`

## 视频

`video.css` `video.js`

- 手风琴图片展示
   - js点击触发增加属性 `document.querySelector().classList.add()/remove()`
   - css3 选择器 属性 
       - `nth-child()`
       - `transform-origin()` 设置旋转元素的基点位置
       - `scale()` 大小
       - `transition-delay` 设置切换效果等待事件

## 照片

`base.css` `imagesLoaded.pkgd.js` `demo.js`

- `imagesLoaded()` 图片加载插件
- `content:attr(data-content)` 鼠标触发悬浮提示
- `filter:grey()` 滤镜 灰度
- `lineEq()` 获取鼠标位置移动
- `TweenMax.to()` 给元素添加动画

## 资讯
- bootstrap表格

