import React from 'react'

function TopButtons() {

  const cities = [

    {
      id: 1,
      title: 'Aurangabad'
    },

    {
      id: 2,
      title: 'Bangalore'
    },

    {
      id: 3,
      title: 'Pune'
    },

    {
      id: 4,
      title: 'Mumbai'
    },

    {
      id: 5,
      title: 'Kolkata'
    },



  ]


  return <div className='flex items-center justify-around my-6'>
    {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium'> {city.title} </button>
    ))}
 </div>
}

export default TopButtons
