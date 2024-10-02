import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>Web development curriculum</h1>
    </div>
  )
}

const PrintCourses = ({title, parts}) => {
  const exercises = parts.map(exercise => exercise.exercises)
  const initValue = 0;
  const total = exercises.reduce(
    (acc, cur) => acc + cur,
    initValue,
  );
  return (
    <div>
      <h2>{title}</h2>
      {parts.map(name =>
        <li key={name.id}>{name.name} {name.exercises}</li>
      )}
      <b>total of {total} exercises</b>
    </div>
  )
}

const Course = ({courses}) => {
  return (
    <div>
      <Header title={courses}/>
      {courses.map(name =>
        <PrintCourses key={name.id} title={name.name} parts={name.parts}/>
      )}
    </div>
  )
}

export default Course