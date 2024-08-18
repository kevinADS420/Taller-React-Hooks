import { useState } from 'react'
import { Header } from './Layouts/Header/Header'
import { Init } from './Layouts/Init/Init'
import { Calculator } from './Layouts/calculator/Calculator'
import { Bakground } from './Layouts/Bakground/Bakground'
import { Record } from './Layouts/Record/Record'
import { ListaTareas } from './Layouts/lista de tareas/ListaTareas'
import { Route, Routes } from 'react-router'

export const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Init/> }/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/Bakground' element={<Bakground/>}/>
        <Route path='/record' element={<Record/>}/>
        <Route path='/ListaTareas'element={<ListaTareas/>} /> 
      </Routes>
    </>
  )
}

export default App
