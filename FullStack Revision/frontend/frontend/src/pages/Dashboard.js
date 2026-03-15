import { useEffect,useState } from "react"
import API from "../api"
import { Link } from "react-router-dom"

function Dashboard(){

  const [balance,setBalance] = useState(0)

  useEffect(()=>{

    API.get("/account/balance")
    .then(res=>{
      setBalance(res.data.balance)
    })

  },[])

  return(

    <div>

      <h2>Dashboard</h2>

      <h3>Balance: ₹{balance}</h3>

      <Link to="/send">Send Money</Link>
      <br/>
      <Link to="/statement">Account Statement</Link>

    </div>

  )
}

export default Dashboard