import { useState } from "react"
import API from "../api"

function SendMoney(){

  const [receiverId,setReceiverId] = useState("")
  const [amount,setAmount] = useState("")

  const handleTransfer = async ()=>{

    try{

      await API.post("/account/transfer",{
        receiverId,
        amount
      })

      alert("Transfer Successful")

    }catch(err){
      alert("Transfer Failed")
    }

  }

  return(

    <div>

      <h2>Send Money</h2>

      <input placeholder="Receiver ID" onChange={(e)=>setReceiverId(e.target.value)} />
      <input placeholder="Amount" onChange={(e)=>setAmount(e.target.value)} />

      <button onClick={handleTransfer}>Send</button>

    </div>

  )
}

export default SendMoney