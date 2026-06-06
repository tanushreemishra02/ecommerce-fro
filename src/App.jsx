import Header from './header';
import { Route, Routes} from 'react-router-dom';
import Products from './Products';
import Signin from './Signin';
import Signup from './Signup';
import { useState } from 'react'; 
import './App.css'
import About from './About';
function App() {

//state to manage searchquery
const [searchquery,setsearchquery]=useState('')
  return (
  <>
  <Header  setsearchquery={setsearchquery}  />
  <Routes>
      <Route path='/' element={<Products searchquery={searchquery}/>}/>
      <Route path='/about'  element={<About/>}  />
      <Route path='/products'  element={<Products searchquery={searchquery}/>}  />
      <Route path='/signup'  element={<Signup/>} />
      <Route path='/signin'  element={<Signin/>}  />

  </Routes>


 
  </>
  )
}

export default App