import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './Components/Home/home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'


import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Github, { githubinfoloader } from './Components/Github/Github.jsx'


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,

//     children:[
//      {
//       path:"",
//       element: <Home/>

//      },
//      {
//       path:"About",
//       element: <About/>
//      }

//     ]


//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='user/:userid' element={<User/>} />
      <Route
       loader={githubinfoloader }
       path='Github' 
       element={<Github/>}/>
  
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
