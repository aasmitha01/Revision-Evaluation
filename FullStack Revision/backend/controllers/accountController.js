import supabase from "../config/supabaseClient.js"

export const getBalance = async (req, res) => {

  const { data, error } = await supabase
    .from("users")
    .select("balance")
    .eq("id", req.user.id)
    .single()

  if (error) {
    return res.status(500).json({ message: error.message })
  }

  res.json(data)
}
export const transferMoney = async (req,res)=>{

const senderId = req.user.id
const {receiverId,amount} = req.body

// get sender
const {data:sender} = await supabase
.from("users")
.select("*")
.eq("id",senderId)
.single()

if(sender.balance < amount){
return res.status(400).json({message:"Insufficient balance"})
}

// deduct sender balance

await supabase
.from("users")
.update({balance: sender.balance - amount})
.eq("id",senderId)

// add receiver balance

const {data:receiver} = await supabase
.from("users")
.select("*")
.eq("id",receiverId)
.single()

await supabase
.from("users")
.update({balance: receiver.balance + amount})
.eq("id",receiverId)

// transaction records

await supabase.from("transactions").insert([
{
sender_id: senderId,
receiver_id: receiverId,
amount,
transaction_type:"debit"
},
{
sender_id: senderId,
receiver_id: receiverId,
amount,
transaction_type:"credit"
}
])

res.json({message:"Transfer successful"})

}