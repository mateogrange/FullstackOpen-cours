import React from "react";

interface FilterProps {
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filter: string;
}

const Filter: React.FC<FilterProps> = ({handleFilter, filter}) => {
  return (
    <form>
      <div>Find countries <input onChange={handleFilter} value={filter}/></div>
    </form>
  )
}

export default Filter