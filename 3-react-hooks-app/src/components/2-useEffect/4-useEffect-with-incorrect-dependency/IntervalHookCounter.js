import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    console.log('IntervalHookCounter tick count', count);
    // setCount(prevCount=>prevCount + 1)
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('IntervalHookCounter useEffect count', count);
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [count]);

  console.log('IntervalHookCounter render count', count);
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
