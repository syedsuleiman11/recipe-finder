import React from 'react'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Search clicked with:", query);
  onSearch(query);
};

  return (
    <>
      <form onSubmit={handleSubmit} className='flex gap-2 justify-center mt-6'>
        <input
          type='text'
          placeholder='Search recipes....'
          className='px-4 py-2 w-64 border rounded'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='bg-blue-600 text-white px-4 py-2 rounded'>
          Search
        </button>
      </form>
    </>
  )
}

export default SearchBar