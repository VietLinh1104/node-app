import {Routes, Route} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PathComponent from './components/PathComponent'

import LoginPage from './page/loginPage';
import HomePage from './page/homePage'
import FormComponent from './components/FormComponent'




function App() {
  let items = ["Content","Infomation","List"]
  

  return (
    <div className='App'>

      <Header/>


      <div className='App-content'>
        {/* <PathComponent/> */}
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>

      </div>

    </div>
  );



  
}

export default App;
