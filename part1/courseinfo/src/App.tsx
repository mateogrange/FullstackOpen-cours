// @ts-ignore
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

// @ts-ignore
const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
    )
}

// @ts-ignore
const Total = (props) => {
    let total = 0

    props.parts.forEach(value => {
        console.log(value.exercises)
        total = total + value.exercises
    })

    return (
        <div>
            <p>{total}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
    return (
        <div>
            <Header course={course}/>
            <Content parts={parts[0]} />
            <Content parts={parts[1]} />
            <Content parts={parts[2]} />
            <Total parts={parts} />
        </div>
    )
}

export default App