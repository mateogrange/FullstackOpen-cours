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

const Persons: React.FC<PersonsProps> = ({persons, filter}) => {
  return (
    <div>
      {persons.map((person, index) => {
          if (person.name.includes(filter))
            return <li key={index}>{person.name} {person.number}</li>
        }
      )}
    </div>
  )
}

export default Persons