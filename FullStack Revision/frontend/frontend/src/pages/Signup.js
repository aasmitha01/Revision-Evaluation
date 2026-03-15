import { useState } from "react"
import API from "../api"
import { useNavigate } from "react-router-dom"

function Signup() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleSignup = async () => {

    try{

      const res = await API.post("/auth/signup",{
        name,email,password
      })

      localStorage.setItem("token",res.data.token)

      navigate("/dashboard")

    }catch(err){
      alert("Signup failed")
    }

  }

  return(
    <div>
      <h2>Signup</h2>

      <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={handleSignup}>Signup</button>

    </div>
  )
}

export default Signup