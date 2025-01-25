import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  const users = [
    {
      name: "Apoorv Saxena",
      city: "Noida",
      age: 19,
      profession: "Student",
      profilePhoto: "https://example.com/photo1.jpg"
    },
    {
      name: "John Doe",
      city: "New York",
      age: 25,
      profession: "Software Engineer",
      profilePhoto: "https://example.com/photo2.jpg"
    },
    {
      name: "Jane Smith",
      city: "Los Angeles",
      age: 30,
      profession: "Designer",
      profilePhoto: "https://example.com/photo3.jpg"
    },
    {
      name: "Michael Johnson",
      city: "Chicago",
      age: 35,
      profession: "Manager",
      profilePhoto: "https://example.com/photo4.jpg"
    },
    {
      name: "Emily Davis",
      city: "San Francisco",
      age: 28,
      profession: "Product Manager",
      profilePhoto: "https://example.com/photo5.jpg"
    }
  ];
  
  return (
    <div>
      <div className='flex justify-center'>
        {users.map(function(elem,idx){
          return <Card key={idx} user={elem.name} surname={elem.profession} city={elem.city} age={elem.age} image={elem.profilePhoto} />
        })}
      </div>
    </div>
  )
}

export default App
