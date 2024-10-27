import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Blogs } from './pages/Blogs'
import Layout from './Layout'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'

function App() {

  const Router = createBrowserRouter([
    {
       path:'/',
       element:<Layout/>,
       children:[
        {
          path:'/bogs',
          element:<Blogs/>
        },
        {
          path:'signup',
          element:<Signup/>
        },
        {
          path:'signin',
          element:<Signin />
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