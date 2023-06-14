import { Pet as PetType } from './APIResponsesTypes';
import Pet from "./Pet";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className='search'>
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(pet => {
          return (<Pet 
            {...pet}
            key={pet.id} 
          />)
        })
      )}
    </div>
  )
}

export default Results;