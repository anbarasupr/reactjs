import React from 'react'
import ComponentC from './ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function UseContextTest() {
  return (
    <div>
      <h2>useContext Hook</h2>
      {
        /*<UserContext.Provider value={'Vishwas'}>
          <ChannelContext.Provider value={'Codevolution'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>*/
      }
    </div>
  )
}

export default UseContextTest
