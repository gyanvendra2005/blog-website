import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Blogs } from './pages/Blogs'
import Layout from './Layout'
import { LoginComponent } from './components/LoginComponent'

function App() {
//   <BrowserRouter>
//   <Routes>
//     <Route path="/signup" element={<Signup />} />
//     <Route path="/signin" element={<Signin />} />
//     <Route path="/blog" element={<Blog />} />
//     <Route path="/blogs" element={<Blogs />} />
//   </Routes>
// </BrowserRouter>

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
       <RouterProvider router={Router} />
    </>
  )
}

export default App
