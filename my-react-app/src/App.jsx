import Header from './assets/Header'
import Usergreeting from'./assets/user_greeting'

function App (){
  return(
    
    <>
    <Usergreeting isLoggedin={true}></Usergreeting>
    <Usergreeting isLoggedin={false}></Usergreeting>
    <Usergreeting isLoggedin={false}></Usergreeting>
    </>
    
  )
}

export default App;