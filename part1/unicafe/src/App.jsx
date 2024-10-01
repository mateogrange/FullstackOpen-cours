import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>Give feedback</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Table = ({feedBack, text}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{feedBack}</td>
    </tr>
  )
}

const Stat = ({good, neutral, bad, total}) => {
  const avg = (good + bad) / 2
  const percentPositive = (100 * good) / total

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
        <Table feedBack={good} text={"good"}/>
        <Table feedBack={neutral} text={"neutral"}/>
        <Table feedBack={bad} text={"bad"}/>
        <Table feedBack={total} text={"total"}/>
        <tr>
          <td>average</td>
          <td>{avg}</td>
        </tr>

        <tr>
          <td>Positive</td>
          <td>{percentPositive}%</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const total = good + bad + neutral

  return (
    <div>
      <Header/>
      <Button handleClick={handleClickGood} text={"good"}/>
      <Button handleClick={handleClickNeutral} text={"neutral"}/>
      <Button handleClick={handleClickBad} text={"bad"}/>
      <h2>Statistics</h2>
      <Stat good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App