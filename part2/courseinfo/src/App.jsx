const Header = ({title}) => {
  return (
    <div>
      <h1>{title.name}</h1>
    </div>
  )
}

const Part = ({name}) => {
  return (
    <div>
      <ul>
        {name.parts.map(parts =>
          <li key={parts.id}>{parts.name} {parts.exercises}</li>
        )}
      </ul>
    </div>
  )
}

const Content = ({content}) => {
  return (
    <div>
        <Part name={content}/>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
        <Header title={course}/>
        <Content content={course}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App