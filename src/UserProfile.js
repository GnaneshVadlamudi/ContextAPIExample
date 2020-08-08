import UserConsumer from "./App"
import UserDetails from "./UserDetails"

const UserProfile = (props) => (
  <UserConsumer>
    {context => {
      return(
        <div>
          <h2>Profile Page of {context.username}</h2>
          <UserDetails />
        </div>
      )
    }}
  </UserConsumer>
)

export default UserProfile; 