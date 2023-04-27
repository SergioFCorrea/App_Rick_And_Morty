import { useState } from 'react';
import './styles.css'

export default function SearchBar({onSearch}) {

   let[id, setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div>
         <input value={id} type='search' className="search" onChange={handleChange}/>
         <button className='button' onClick={()=>{onSearch(id);setId('')}}>Agregar</button>
      </div>
   );
}
