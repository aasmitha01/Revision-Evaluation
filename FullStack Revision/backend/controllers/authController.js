import supabase from "../config/supabaseClient.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

export const signup = async (req,res)=>{

const {name,email,password} = req.body

const hashedPassword = await bcrypt.hash(password,10)

const {data,error} = await supabase
.from("users")
.insert([
{
name,
email,
password:hashedPassword,
balance:10000
}
])
.select()

if(error) return res.status(400).json(error)

const token = generateToken(data[0])

res.json({token,user:data[0]})

}

export const login = async (req,res)=>{

const {email,password} = req.body

const {data,error} = await supabase
.from("users")
.select("*")
.eq("email",email)
.single()

if(!data) return res.status(400).json({message:"User not found"})

const match = await bcrypt.compare(password,data.password)

if(!match) return res.status(400).json({message:"Wrong password"})

const token = generateToken(data)

res.json({token,user:data})

}