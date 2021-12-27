import React from 'react'

const UserContext = React.createContext('Guest User') // default value

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

export default UserContext;


/**
 * Context provides a way to pass data thru the component tree without having to pass props down manually at every component level.
 * 
 */