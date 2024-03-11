import { useState } from 'react'

// import './App.css'
import Layout from './Root/Layout'
import './assets/scss/style.scss'
import SignUp from './components/signUpForm/SignUp'
// import UserTable from './components/UserTable'
import UpdateUser from './components/UpdateUser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Layout/> */}
      <SignUp/>
      <UpdateUser/>
      {/* <UserTable/> */}
    </>
  )
}

export default App
