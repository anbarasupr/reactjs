import React from 'react'
import Counter from './Counter'
import CounterWithUseMemo from './CounterWithUseMemo'

export default function UseMemoTest() {
    return (
        <div>
            {
                <div>
                    <h2>Counter without useMemo</h2>
                    <Counter></Counter>
                </div>
            }

            {
                /*<div>
                    <h2>Counter with useMemo for better performance</h2>
                    <CounterWithUseMemo></CounterWithUseMemo>
                </div>*/
            }
        </div>
    )
}
