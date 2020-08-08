import React from "react";
import "./styles.css";
import { createContext } from 'react'
import User from "./User.js";

const UserContext = createContext({})
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

class App extends React.Component {
  state = {
    user: {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }

  render() {
    return(
      <div>
        <UserProvider value={this.state.user}>
          <User />
        </UserProvider>
      </div>
    )
  }
}

export default App;
