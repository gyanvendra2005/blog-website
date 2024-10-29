import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'


const Headers = () => {
  return (
    // <header>
    //     <div className='flex shadow h-14 justify-between'>
    //         <div className=' flex justify-center mt-1 mr-2 rounded-full h-46 w-46'>
    //             <img src={logo} alt=""/>
    //         </div>
    //         <div className='flex '>
                
    //         <div
    //                     className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
    //                     id="mobile-menu-2"
    //                 >
    //                     <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    //                         <li>
    //                             <NavLink
    //                             to="/"
    //                                 className={({isActive}) =>
    //                                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    //                                 }
    //                             >
    //                                 Home
    //                             </NavLink>
    //                         </li>
    //                         <li>
    //                             <NavLink
    //                             to="/courses"
    //                                 className={({isActive}) =>
    //                                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    //                                 }
    //                             >
    //                                 Courses
    //                             </NavLink>
    //                         </li>
    //                         <li>
    //                             <NavLink
    //                             to="/purchasedcourse"
    //                                 className={({isActive}) =>
    //                                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    //                                 }
    //                             >
    //                                 Purchased Course
    //                             </NavLink>
    //                         </li>
                            
    //                     </ul>
    //                 </div>

    //             <div className='flex flex-col justify-center h-full mr-4 font-medium'>
    //                 <h1>Hello</h1>
    //             </div>
    //             <div className='bg-slate-200 flex justify-center mt-1 mr-2 rounded-full h-12 w-12'>
    //                <div className='flex flex-col justify-center h-full text-xl'>
    //                  <p className='font-semibold text-green-400'>U</p>
    //                </div>
    //             </div>
    //         </div>
    //     </div>
    // </header>
  
    <header>
    <div className='flex shadow h-14 justify-between items-center'>
        <div className='flex justify-center mt-1 mr-2 rounded-full h-12 w-12'>
            <img src={logo} alt="Logo" className="h-full w-full object-cover rounded-full" />
        </div>
        <nav className='flex-grow  flex justify-center'>
            <ul className="flex mt-4 font-medium flex-row lg:space-x-8 sm:space-x-4 lg:mt-0">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/myblogs"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                       My Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                       Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/writeblog"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                       Write Blog
                    </NavLink>
                </li>
            </ul>
        </nav>

        <div className='flex flex-col justify-center h-full mr-4 font-medium'>
            <h1 className='text-lg'>Hello</h1>
        </div>
        <div className='bg-slate-200 flex justify-center mt-1 mr-2 rounded-full h-12 w-12'>
            <div className='flex flex-col justify-center h-full text-xl'>
                <p className='font-semibold text-green-400'>U</p>
            </div>
        </div>
    </div>
</header>

  )
}

export default Headers