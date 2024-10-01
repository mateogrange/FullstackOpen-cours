import { useState } from 'react'

const Display = ({votes, select}) => {
  return (
    <div>
      <p>Has {votes[select]} votes</p>
    </div>
  )
}

const DisplayMostVote = ({votes, anecdotes}) => {
  return (
    <div>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleClick = (selected) => {
    votes[selected] += 1
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Display votes={votes} select={selected} />
      <button onClick={() => { setSelected(randomNumberInRange(0, 6))}}>next anecdote</button>
      <button onClick={() => handleClick(selected)}>vote</button>
      <h2>Anecdote with most votes</h2>
      <DisplayMostVote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App