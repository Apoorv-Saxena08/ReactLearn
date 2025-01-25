import React from 'react'

const card = (props) => {
    const usern = props.user
    const surn = props.surname
    const city = props.city
    const ag = props.age
  return (
    <div className="mr-10 bg-white text-black inline-block p-6 text-center rounded">
        <img className='p-10 h-32 w-32 rounded-full mb-3'  src={props.image} alt="" />
      <h1 className='text-2xl font-semibold mb-4'>{usern} {surn}</h1>
      <h2>{city} {ag}</h2>
      <button className='mt-5 bg-emerald-700 text-white px-4 px-2 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default card
