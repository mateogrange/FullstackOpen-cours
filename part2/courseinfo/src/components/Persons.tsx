import React, {Dispatch, SetStateAction} from 'react'
import personsService from "./../services/persons"

interface Persons {
  name: string;
  number: string;
  id: string;
}

interface PersonsProps {
  persons: Persons[];
  filter: string;
  setPersons:  Dispatch<SetStateAction<Persons[]>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
}

const Persons: React.FC<PersonsProps> = ({persons, filter, setPersons, setErrorMessage}) => {

  const handleClick = (id: string, name: string) => {
    if (window.confirm(`Do you really want to delete ${name}`)) {
      personsService
        .deleteName(id)
        .then(() => {
          const updatedPersons = persons.filter(person => person.id !== id);
          setPersons(updatedPersons)
        })
        .catch(error => {
          console.error("Erreur lors de la suppression", error);
          setErrorMessage(`This user ${name} is already removed from the list.`)
          setTimeout(() => {
            setErrorMessage('')
          }, 5000)
        });
    }
  };

  return (
    <div>
      {persons.map((person) => {
          if (person.name.toLowerCase().includes(filter))
            return (
                <li key={person.id} className='persons' >{person.name} {person.number}
                  <button onClick={() => {handleClick(person.id, person.name)}}>delete</button>
                </li>
            )
        }
      )}
    </div>
  )
}

export default Persons