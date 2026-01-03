import React from 'react'

const RecipeCard = ({ recipe, onSave }) => {
  return (
    <>
      <div className='bg-white rounded-xl shadow p-4'>
        <img
          src={recipe.image}
          alt={recipe.title}
          className='rounded mb-3'
        />
        <h3 className='font-semibold'>{recipe.title}</h3>
        <button
          onClick={() => onSave(recipe)}
          className='mt-2 text-sm bg-green-600 text-white px-3 py-1 rounded'
        >
          Save
        </button>
      </div>
    </>
  )
}

export default RecipeCard