import React from 'react'
import Example from './FunctionComponent'
import ClassExample from './ClassComponent'
import './index.css'

export default function UseState() {
    return (
        <div className="use-state">
            <Example />
            <ClassExample />
        </div>
    )
}