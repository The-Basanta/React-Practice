export const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`Hey, ${user}`)
    }

    const handleHover = (user) => {
        alert(`Hovering over ${user}`)
    }

    return (
        <div>
            <WelcomeUser
                onClick={() => handleWelcomeUser("Alex")}
                onMouseEnter={() => handleHover("Alex")}
            />
        </div>
    )
}

const WelcomeUser = (props) => {
    return (
        <>
            <button onClick={props.onClick} onMouseEnter={props.onMouseEnter}>
                Click
            </button>
            <button> Hover </button>
            <button> Greeting </button>
        </>
    )
}