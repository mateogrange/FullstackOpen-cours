// @ts-ignore
const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
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
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }
    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts[0]} />
            <Content parts={course.parts[1]} />
            <Content parts={course.parts[2]} />
            <Total parts={course.parts} />
        </div>
    )
}

export default App