import UserConsumer from "./App";

const UserDetails = () => (
  <div>
    <UserConsumer>
      {context => {
        return (
          <div>
            <p>Userame: {context.username}</p>
            <p>First Name: {context.firstName}</p>
            <p>Last Name: {context.lastName}</p>
          </div>
        )
      }}
    </UserConsumer>
  </div>
)

export default UserDetails;