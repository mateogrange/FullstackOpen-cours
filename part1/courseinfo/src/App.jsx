import { useState } from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
    )
}

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

const Display = ({counter}) => {
    return (
        <div>{counter}</div>
    )
}

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const App = () => {
    class Person {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        greet() {
            console.log('hello my name is ' + this.name + ', I am ' + this.age)
        }
    }
    const adam = new Person('adam lucien', 24)
    const john = new Person('john doe', 26)
    adam.greet()
    john.greet()

    const [counter, setCounter] = useState(0)

    // setTimeout(
    //     () => setCounter (counter + 1),
    //     1000
    // )

    // console.log('rendering...', counter)

    const handleClick = () => {
        console.log('clicked')
    }

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

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
            {/*<div>{counter}</div>*/}
            <button onClick={increaseByOne}>plus {counter}</button>
            <button onClick={setToZero}>zero</button>

            <Display counter={counter}/>
            <Button onClick={increaseByOne} text={'plus'}/>
            <Button onClick={setToZero} text={'zero'}/>
            <Button onClick={decreaseByOne} text={'minus'}/>
        </div>
    )
}

export default App