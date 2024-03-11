import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Layout from './Root/Layout.jsx'
import SignUp from './components/signUpForm/SignUp.jsx'
import { Provider } from 'react-redux'
import  store  from './store/store.js'
import UserTable from './components/UserTable.jsx'
import UpdateUser from './components/UpdateUser.jsx'


const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      
  <Route path='/' element={<SignUp/>}/>
      <Route path='/usertable' element={<UserTable/>}/>
      <Route path='/updateuser'  element={<UpdateUser/>}/>
      {/* <Route path='contact'  element={<Contact/>}/> */}
        {/* <Route path='user/:idoruserid' element={< User/>}/> */}


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    {/* <App /> */}
    </Provider>
  
  </React.StrictMode>,
)
