import React from 'react'
import Login from '../components/Login'
import Cards from '../components/Cards'
import style from "../styles/App.module.css"
import Chair from '../components/Chair'
import Screen from '../components/Screen'
import BookNow from '../components/BookNow'
class App extends React.Component{
  render(){
    return(
      <div>
        <BookNow 
          details = "Today,  13 Jul, 03:15 PM at Innovative Multiplex, Marathahalli"
          movieTitle = "JugJugg Jeeyo"
        />
      </div>
      
    )
  }
  //  
}
export default App;

