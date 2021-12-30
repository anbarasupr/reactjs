import React from 'react'
import DocTitleOne from './1-useDocumentTitle/DocTitleOne'
import DocTitleTwo from './1-useDocumentTitle/DocTitleTwo'
import CounterOne from './2.useCounter/CounterOne'
import CounterTwo from './2.useCounter/CounterTwo'
import UserFormOne from './3.useInput/UserFormOne'
import UserFormTwo from './3.useInput/UserFormTwo'

export default function UseCustomHookTest() {
    return (
        <div>
            <h2>useCustomHook</h2>
            {
                /*<div>
                    <h3>useDocumentTitle Hook</h3>
                    <DocTitleOne></DocTitleOne>
                    <DocTitleTwo></DocTitleTwo>
                </div>*/
            }

            {
                /*<div>
                    <h3>useCounter Hook</h3>
                    <CounterOne></CounterOne>
                    <CounterTwo></CounterTwo>
                </div>*/
            }

            {
                <div>
                    <h3>useCounter Hook</h3>
                    <UserFormOne></UserFormOne>
                    <UserFormTwo></UserFormTwo>
                </div>
            }

        </div>
    )
}


/*
Custom Hook:
----------
A custom hook is basically a javascript function whose name starts with 'use'.
A custom hook can also call other Hooks if required.

Why?:
---

Share logic - Alternative to HOC and Render Props.


*/