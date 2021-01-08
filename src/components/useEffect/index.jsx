import React from 'react'
import Example from './FunctionComponent'
import ClassExample from './ClassComponent'
import './index.css'

export default function UseEffect() {
    // 数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。
    // 在 React 组件中有两种常见副作用操作：需要清除的和不需要清除的。我们来更仔细地看一下他们之间的区别。
    // 有时候，我们只想在 React 更新 DOM 之后运行一些额外的代码。比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。

    return (
        <div className="use-effect">
            <h1>Learning useEffect</h1>
            <Example />
            <ClassExample />
        </div>
    )
}