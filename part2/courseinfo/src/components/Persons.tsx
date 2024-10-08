import React from 'react'

interface Persons {
  name: string;
  number: string;
  id: number;
}

interface PersonsProps {
  persons: Persons[];
  filter: string;
}

const Persons: React.FC<{persons: Persons[]; filter: string}> = ({persons, filter}) => {
  return (
    <div>
      {persons.map((person) => {
          if (person.name.includes(filter))
            return <li key={person.id}>{person.name} {person.number}</li>
        }
      )}
    </div>
  )
}

export default Persons