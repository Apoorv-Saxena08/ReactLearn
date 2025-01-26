import React, { useContext } from 'react'
import UserContext, { DataContext } from './context/UserContext'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

const App = () => {

  const data = useContext(DataContext)
  // console.log(data) Apoorv

  return (
    <div>
      <h1>This is {data}</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App
