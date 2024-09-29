const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name} {props.age}</p>
        </div>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 10
    return (
        <div>
            <h1>Greetings</h1>

            <Hello name="hugo" age={32}/>
            <Hello name={name} age={age}/>
            <Hello name="charlie" age={12 + 10}/>
        </div>
    )
}
export default App