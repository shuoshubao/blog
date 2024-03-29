性能优化一直是前端追求的目标，但是很多人掌握的优化手段过于单一，要么追求速度，要么追求体积。其实性能优化不仅仅是这两个维度来衡量，也不仅仅是采取 Webpack 还是 Vite 作为项目打包工具。本文将分享一些没有出现在互联网上的角度来获得极致优化体验。

# 速度优化

- esbuild-loader

- swc-loader

- cache-loader

- happypack // 很多文章都会提到这玩意, 但我的使用情况来看没啥用

- webpack-uglify-parallel

- speed-measure-webpack-plugin

# 体积优化

- webpack.optimization.splitChunks

- Dynamic imports

- webpack.externals

- webpack.DllPlugin

以上两类其实都是常规优化，在网上的分享中都是老生常谈了，主要集中在 webpack 的插件和配置上来发力。下面将从开发环境、测试环境、生产环境这种角度来分析。

# 开发环境

开发环境追求是启动速度，热更新速度。回想一下，新项目是不是启动很快？随着项目的不断迭代，项目的页面和模块越来越多，启动速度和热更新速度也就越来越慢了。如果从这个角度看问题，就有了一种优化思路，那就是将大项目的页面减少，减少到什么程度呢？减少到我本次改动涉及到哪些页面，我就编译哪些页面。

打个比方，一个完整的大项目有 100 个页面，但是我本次开发的需求只涉及到三四个页面（这其实是最真实的开发场景），但是如果没有优化手段，webpack 就会编译所有的页面，不慢才怪！注意，import() 并不能解决这个问题，具体不展开讲。

这里，其实就涉及到两种思路。先说一下两种的共同思路

- 项目的路由配置统一维护

- 开发环境从完整的路由配置中 pick 出来一部分生产一个新的路由配置文件，专供开发环境使用

- 非开发环境还是读取完整的路由配置

- 不同环境切换路由配置是由 webpack 的 alias 配置来完成，指向不同的文件

### 手动配置一个文件

这个文件的作用是告诉 webpack 你本次启动需要编译哪些页面。比如返回一个数组，数组每一项都是路由配置所需的 `path` 。 然后通过脚本去匹配完整的路由。

这个思路很好实现，不用费脑子，当然会伴随一些偷懒所带来的副作用。

### 自动生成路由配置文件

这个则用到 webpack.devServer 的钩子(hooks)来拦截浏览器的请求，当访问一个页面时，去解析页面的 url，然后去匹配路由文件，生成或更新开发环境所需的路由配置文件。毫无疑问，这个思路没有任何副作用，就是有点费脑子！

这两种手段，对于大项目来说，能直接将启动时间从 120 秒（甚至几分钟）优化到几秒或十几秒！

# 测试环境

测试环境其实有人尝试过 增量发布，这个说实话我一直没探索过，但是我将从另一种角度完爆这个思路。测试环境，慢在何处？慢在公司内部的发布系统，慢在发布流程，慢在不稳定的发布系统，慢在测试环境需要大量的机器（美团的测试系统很强大，除了技术上的探索和优化，另一个原因就是钱堆起来的，买了一堆的机器！）。

你回想一下，在 webpack 上进行各种优化呀，也就优化那么十几秒钟，顶天了优化个一两分钟，但是从你提交代码，到发布系统部署完成，这整个过程将花费五六分钟，运气不好碰到发布系统挂了或者阻塞了，可能需要等个半小时甚至等半天我都遇到过！

有没有想过，前端部署这个步骤难道就不能绕过发布系统么？我的顶配 Mac 难道不比测试环境的机器打包快？难道我改了一个文案，也需要等个十几分钟，然后跟 QA 说改好了？

在本地打包完成之后，直接将打包产物推到 cdn，就完事了！！！

当然，这个是总思路，具体会有一些细节。

- 打包产物推到 cdn 上

- 页面和所需静态资源的映射的维护

- 页面渲染时读取静态资源并解析成正确的 html

- 不同测试环境的独立发布

# CDN

采用 cdn 存储最常用的 npm 包，例如 `react` `react-dom` `lodash` `antd` `moment` 等。其实市面上有好几家做 npm cdn 托管的，但基本都是老外的。老外做的虽然好，但是谁让咱们有墙呢，就算能访问，速度也是跟国内的访问速递没法比。

这里其实可以在公司内部搭建简易版的 unpkg 服务。像美团内部其实就有，美团这个公司基建其实做的挺好，但是他一般不开源，也不商用，因为他不缺这个钱，所以很多做的很好的基建都是在内部用。

据了解，其实国内很多公司的 cdn 都是使用 AWS(Amazon Web Services - 网站 CDN 加速)，aws 官方提供了很多语言的 sdk 可以调用，这里推荐美团开源的一个 npm 包: [mos-mss](https://www.npmjs.com/package/mos-mss)

当然，这个功能不仅可以存储 npm 包，也可以上传我们的项目打包产物！

- https://unpkg.com

- https://www.jsdelivr.com
