import { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const LoginComponent = ({type}: {type: "signup" | "signin"})=>{
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    // console.log(name);
    // console.log(email);
    // console.log(password);

    async function sendRequest(){
      try {
        const response = await  axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin"?"signin":"signup"}`,{
            name:name,
            email:email,
            password:password
        })
        const jwt = response.data;
        console.log(jwt);
        
        localStorage.setItem("token",jwt.jwt);
        navigate("/blog");
      } catch (e) {
            alert("Invalid credentials")
      }
    }
    

    return  <div className='bg-slate-300 h-screen flex justify-center '>
    <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center shadow-lg shadow-gray-600'>
            <h1 className='font-bold text-4xl pt-6'>{type=== "signin"?"Sign In":"Sign Up"}</h1>
            <p className='text-slate-500 text-md pt-1 px-4 pb-4'>Enter your information to create an account</p>
        
            {type === "signup" && (
                <div>
                    <h3 className='text-sm font-medium text-left py-2 px-3'>Name</h3>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='w-5/6 px-2 py-1 border rounded border-slate-200' />
                </div>
            )}
            {/* {type === "signin" && (
             <div className="flex flex-col">
            <h3 className="text-sm font-medium text-left py-2 px-3">Name</h3>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-5/6 px-2 py-1 border rounded border-slate-200"
        />
    </div>
)} */}


            <h3 className='text-sm font-medium text-left py-2 px-3'>Email</h3>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' className='w-5/6 px-2 py-1 border rounded border-slate-200' />

            <h3 className='text-sm font-medium text-left py-2 px-3'>Password</h3>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className='w-5/6 px-2 py-1 border rounded border-slate-200' />

            <button type="button" onClick={sendRequest} className=" w-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-2">{type=== "signin"?"Sign In":"Sign Up"}</button>
            
            <div className="text-slate-400 m-2">
                {type === "signin" ? "Don't have an account" : "Already have an account?"}
                <Link to={type==="signin"?"/signup":"/signin"} className="p-2 underline">
                {type==="signin"?"Sign In" : "Sign Up"}
                </Link>
            </div>

           </div>
        </div>
    </div>
}