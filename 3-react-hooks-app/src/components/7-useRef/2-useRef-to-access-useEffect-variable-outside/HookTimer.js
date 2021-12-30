import React, { useState, useEffect, useRef } from 'react'

function HookTimerWithUseRef() {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef()
  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      clearInterval(interValRef.current)
    }
  }, [])

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
    </div>
  )
}

export default HookTimerWithUseRef



/*function HookTimer() {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef()
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interval)}>Clear Timer</button>
    </div>
  )
}

export default HookTimer*/



/*
  when click on Clear Timer button, it will throw an error saying interval variable is not defined in HookTimer.

  React cannot access the interval variable  outside which is declared in the useEffect scope.
  To overcome this, we can use useRef. see in HookTimerWithUseRef.
*/
