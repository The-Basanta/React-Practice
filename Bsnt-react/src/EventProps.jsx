export const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert('Hey, ${user}')
    }

    const handleHover = (user) => {
        alert('')
    }

    return (
        <div>
            <welcomeUser onclick={() => handleWelcomeUser("Alex")} />
                onMouseEnter= {handleHover}

        </div>
    )
}