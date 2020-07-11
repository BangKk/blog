---
title: defer & async 学习笔记
date: 2020-07-11
tags:
  - defer
  - async
  - script
  - 浏览器加载
author: BangKk
location: Chengdu
---

前置知识点:

1. `DOMContentLoaded` 在初始的 `HTML` 完全加载和解析完成之后触发，无需等待样式表、图像、子框架（`iframe`）的加载
2. `load` 在页面资源完全被加载解析完成之后触发

## sync script

浏览器在解析 `HTML` 时，如果遇到 `script` 标签，则会暂停解析，发起一个网络请求获取这个脚本，并解析执行这个脚本。

也就是说 `script` 的下载和执行会阻塞页面渲染，`script` 中的脚本只能访问已经解析的 `DOM`。

这里可以理解为普通的 `script` 是同步脚本，接下来要讲的是延迟脚本和异步脚本。

## defer script

当浏览器解析到一个延迟脚本时，浏览器会做如下处理：

1. 如果是内敛脚本（即没有 `src` 值），则会忽略 `defer`，按照正常流程去解析执行这个脚本
2. 否则浏览器会请求这个脚本，并且不足塞 `HTML` 的解析
3. 下载后，在 `DOM` 解析完成后，`DOMContentLoaded` 之前去执行它
4. 如果存在多个带有 defer 的脚本，会按声明的顺序去执行

延迟脚本具有这几个特点：

1. 不足塞 `HTML` 解析
2. 在 `HTML` 解析完成后执行，执行后再触发 `DOMContentLoaded` 事件
3. 多个 `defer script` 之间按声明顺序执行
4. 没有 `src` 的 `defer script` 会忽略 `defer`

## async script

当浏览器解析到一个异步脚本时，浏览器会做如下处理：

1. 异步加载这个脚本，并且不足塞 `HTML` 解析
2. 下载完成则执行，执行可能在 `DOMContentLoaded` 之前，也可能在之后，取决于脚本的下载完成的时间
3. 多个 `async` 脚本之间不会相互等待，即加载完则执行

异步脚本具有以下几个特点：

1. 不足塞 `HTML` 解析
2. 下载完成后执行，没有其他限制

## dynamic script

动态创建的脚本默认具备异步脚本的特点，即 `script.async` 默认为 `true`，所以它默认也是异步加载，加载完就执行。

动态创建的 `script`，也可以设置 `script.async = false`，脚本将恢复至按创建的顺序去执行

## 使用

在实际使用中，`defer` 应该用在那些需要整个 DOM 并且依赖声明顺序的脚本上，`async` 应该用在那些独立的脚本上，比如广告、计数脚本，它们之间没有依赖关系。

## 参考

- [script-async-defer](https://javascript.info/script-async-defer)
