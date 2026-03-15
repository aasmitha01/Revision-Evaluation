import { useEffect,useState } from "react"
import API from "../api"

function Statement(){

  const [transactions,setTransactions] = useState([])

  useEffect(()=>{

    API.get("/account/statement")
    .then(res=>{
      setTransactions(res.data)
    })

  },[])

  return(

    <div>

      <h2>Account Statement</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>

        {transactions.map((t)=>(
          <tr key={t.id}>

            <td>{t.created_at}</td>

            <td style={{
              color: t.transaction_type === "credit" ? "green" : "red"
            }}>
              {t.transaction_type}
            </td>

            <td>₹{t.amount}</td>

          </tr>
        ))}

        </tbody>

      </table>

    </div>

  )
}

export default Statement