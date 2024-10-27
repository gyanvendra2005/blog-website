import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Blogs } from './pages/Blogs'
import Layout from './Layout'
import { LoginComponent } from './components/LoginComponent'

function App() {

  const Router = createBrowserRouter([
    {
       path:'/',
       element:<Layout/>,
       children:[
        {
          path:'',
          element:<Blogs/>
        },
        {
          path:'signup',
          element:<LoginComponent type={'signin'} />
        },
       ]
    }
  ])

  return (

    
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={Router} />
    </>
  )
}

export default App