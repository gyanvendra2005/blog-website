import { LoginComponent } from "../components/LoginComponent"
import { Quote } from "../components/Quote"

export const Signin = () => {
    return (
        <div className="grid grid-rows-2 md:grid-cols-2 overflow-hidden">
                <div>
                   <LoginComponent type="signin" />
                </div>
                <div>
                   <Quote />
                </div>
            </div>
    )
}