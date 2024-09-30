import { useState } from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
    )
}

const Total = (props) => {
    let total = 0

    props.parts.forEach(value => {
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
    //création de class en js
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
    // adam.greet()
    // john.greet()

    //création useState
    const [counter, setCounter] = useState(0)
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

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts[0]}/>
            <Content parts={course.parts[1]}/>
            <Content parts={course.parts[2]}/>
            <Total parts={course.parts}/>

            <Display counter={counter}/>
            <Button onClick={increaseByOne} text={'plus'}/>
            <Button onClick={setToZero} text={'zero'}/>
            <Button onClick={decreaseByOne} text={'minus'}/>

            <div>
                {left}
                <button onClick={handleLeftClick}>
                    left
                </button>
                <button onClick={handleRightClick}>
                    right
                </button>
                {right}
                <p>
                    {allClicks.join(' ')}
                </p>
            </div>
        </div>
    )
}

export default App