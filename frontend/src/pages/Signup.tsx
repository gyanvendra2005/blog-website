import { Quote} from "../components/Quote"
import { LoginComponent } from "../components/LoginComponent"
export const Signup = () => {
    return (
        <div>
            <div className="grid grid-rows-2 md:grid-cols-2 overflow-hidden">
                <div>
                   <LoginComponent type="signup" />
                </div>
                <div>
                   <Quote />
                </div>
            </div>
       
        </div>
    )
}