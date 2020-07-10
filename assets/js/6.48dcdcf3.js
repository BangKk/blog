(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{370:function(e,v,_){e.exports=_.p+"assets/img/prefetch-logo.d520701d.jpg"},371:function(e,v,_){e.exports=_.p+"assets/img/prefetch-network.8f401df9.png"},372:function(e,v,_){e.exports=_.p+"assets/img/prefetch-preload-demo.2fc02982.png"},373:function(e,v,_){e.exports=_.p+"assets/img/prefetch-response.3a68cb7a.jpg"},374:function(e,v,_){e.exports=_.p+"assets/img/prefetch-validate.53384137.jpg"},375:function(e,v,_){e.exports=_.p+"assets/img/prefetch-real-response.564dea86.png"},397:function(e,v,_){"use strict";_.r(v);var t=_(9),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("img",{attrs:{src:_(370),alt:"prefetch-logo"}})]),e._v(" "),t("h2",{attrs:{id:"prefetch-preload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prefetch-preload"}},[e._v("#")]),e._v(" prefetch & preload")]),e._v(" "),t("p",[e._v("我们知道通过 "),t("code",[e._v('<link rel=“preload">')]),e._v(" 和 "),t("code",[e._v("<link rel=“prefetch”>")]),e._v("可以提前告诉浏览器如何加载我们的资源。")]),e._v(" "),t("p",[t("code",[e._v('rel="prefetch"')]),e._v(" 的意思是告诉浏览器这个资源我之后可能会用到，你在空闲的时候帮我下载它吧。\n而 "),t("code",[e._v('rel="preload"')]),e._v(" 是告诉浏览器这个资源的优先级很高，浏览器会优先请求获取这个资源。")]),e._v(" "),t("h2",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[e._v("#")]),e._v(" 遇到的问题")]),e._v(" "),t("p",[e._v("今天后端的一个哥们找到我，说这个项目页面加载的速度太慢了，而且加载了一大堆资源。于是我们一起看了看页面的网络请求")]),e._v(" "),t("p",[t("img",{attrs:{src:_(371),alt:"prefetch-network"}})]),e._v(" "),t("p",[e._v("可以看到请求中除了 "),t("code",[e._v("App")]),e._v(" 必须的资源外，还包含了一大堆 "),t("code",[e._v("chunk")]),e._v(" 的资源（也就是懒加载的资源）。")]),e._v(" "),t("p",[e._v("因为项目是用 "),t("code",[e._v("vue-cli")]),e._v(" 创建的，"),t("code",[e._v("vue-cli")]),e._v(" 默认开启了资源的 "),t("code",[e._v("prefetch")]),e._v(" 和 "),t("code",[e._v("preload")]),e._v(" 功能，打包后生成的 "),t("code",[e._v("index.html")]),e._v(" 已经插入了许多带有 "),t("code",[e._v("preXXX")]),e._v(" 的 "),t("code",[e._v("link")]),e._v(" 标签，因此，本该懒加载的资源也在第一次加载页面时被下载了下来。")]),e._v(" "),t("p",[e._v("我截取了一小段 "),t("code",[e._v("HTML")]),e._v(" 文本：")]),e._v(" "),t("p",[t("img",{attrs:{src:_(372),alt:"prefetch-preload-demo"}})]),e._v(" "),t("p",[e._v("可以看到这些 "),t("code",[e._v("chunk")]),e._v(" 资源都被打上了 "),t("code",[e._v("prefetch")]),e._v(" 标记，而必须加载的资源被打上了 "),t("code",[e._v("preload")]),e._v(" 标记。")]),e._v(" "),t("h2",{attrs:{id:"第二个问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二个问题"}},[e._v("#")]),e._v(" 第二个问题")]),e._v(" "),t("p",[e._v("向大佬们解释了一下 "),t("code",[e._v("prefetch")]),e._v(" 的作用后，大佬又问了我一个问题：")]),e._v(" "),t("p",[e._v("“为什么 "),t("code",[e._v("prefetch")]),e._v(" 下来的资源没有 "),t("code",[e._v("response data")]),e._v("，"),t("code",[e._v("HTTP Code")]),e._v(" 明明是 "),t("code",[e._v("200")]),e._v("，而且跳转到其他页面之后，又去请求了这个资源，也就是同一个资源被请求了两次，是 "),t("code",[e._v("prefetch")]),e._v(" 没起作用吗？”")]),e._v(" "),t("p",[e._v("😅 仔细一看，确实没有 "),t("code",[e._v("response data")]),e._v("，谷歌也给出了提示 "),t("code",[e._v("Faild to load response data")])]),e._v(" "),t("p",[t("img",{attrs:{src:_(373),alt:"prefetch-response"}})]),e._v(" "),t("h2",{attrs:{id:"分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[e._v("#")]),e._v(" 分析")]),e._v(" "),t("p",[e._v("想一想，第二个问题中的第二点其实很好回答，因为 "),t("code",[e._v("prefetch")]),e._v(" 只是帮我们预先请求了一次资源，等跳转到其他页面时再次请求这个资源时，浏览器会从 "),t("code",[e._v("prefetch cache")]),e._v(" 中直接读取资源，并没有真正的去请求服务端，所以虽然我们看到了两次请求，其实真正到服务端获取资源只有一次。")]),e._v(" "),t("p",[e._v("可是，为什么 "),t("code",[e._v("prefetch")]),e._v(" 加载的资源没有 "),t("code",[e._v("response data")]),e._v(" ，通过浏览器直接访问资源的地址却是有内容的。")]),e._v(" "),t("p",[e._v("这个时候我想到了 "),t("code",[e._v("prefetch")]),e._v(" 的本质是提前获取未来应用可能会用到的资源，浏览器只是去下载资源，并不会去 "),t("code",[e._v("load")]),e._v(" 这个资源，这里的 "),t("code",[e._v("load")]),e._v(" 是指浏览器去读取这个资源，而这个动作是在这个资源真正被用到时才需要执行的，这样也就是能理解为什么 "),t("code",[e._v("Chrome")]),e._v(" 给的提示是 "),t("code",[e._v("Faild to load response data")]),e._v(" 了，而 "),t("code",[e._v("HTTP Code")]),e._v(" 为 "),t("code",[e._v("200")]),e._v(" 则表示这个资源被下载下来了。")]),e._v(" "),t("h2",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),t("p",[e._v("我们尝试跳转到另一个页面，然后看下请求的资源是什么样的（注意这里不能勾选 "),t("code",[e._v("Network")]),e._v(" 中的 "),t("code",[e._v("Disable cache")]),e._v("）")]),e._v(" "),t("p",[t("img",{attrs:{src:_(374),alt:"prefetch-validate"}})]),e._v(" "),t("p",[e._v("并且这个时候浏览器才会去加载资源")]),e._v(" "),t("p",[t("img",{attrs:{src:_(375),alt:"prefetch-real-response"}})]),e._v(" "),t("p",[e._v("完！：）")])])}),[],!1,null,null,null);v.default=r.exports}}]);