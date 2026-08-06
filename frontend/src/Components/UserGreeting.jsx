function UserGreeting({message}) {

    const welcomeMessage = <h2 className="welcome-message">
                                {message}
                            </h2>
    return(welcomeMessage)
}
export default UserGreeting