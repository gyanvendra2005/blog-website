import { Quote} from "../components/Quote"
import { LoginComponent } from "../components/LoginComponent"
export const Signup = () => {
    const token = localStorage.getItem("token")
    return (
        <div>
            <div className="grid grid-col-1 lg:grid-cols-2">
<div>
            {/* <h2 className="text-3xl font-bold text-center  mb-6">Welcome Back!</h2> */}
                {!token ? (
                    <LoginComponent type="signup" />
                ) : (
                     <p className="text-lg text-center text-green-600">
                          You are already logged in.
                         </p>
                )}
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div> 
                
            </div>
       
        </div>
    )
}