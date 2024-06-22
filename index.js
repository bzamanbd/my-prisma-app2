import express from "express"
import 'dotenv/config' 
import { PrismaClient } from "@prisma/client"

const app = express() 
const port = process.env.PORT || 3003


const prisma = new PrismaClient()


app.use(express.json())

app.get('/',(req,res)=>{ 
    res.status(200).json({ message:"This is home route"})
})

app.post('/users',async (req,res)=>{ 
    const {name,email,phone} = req.body
    try {
        const oldUser = await prisma.user.findUnique({ where:{email}})
        if (oldUser) {
            return res.status(401).json({ 
                Error: `${email} already in used. Try with new email`
            })
        }
        const user = await prisma.user.create({ data:{name,email,phone}}) 
        res.status(201).json({ 
            Message:"New user added successfully👍", 
            user
        })
        
    } catch (error) {
        res.status(500).json({ 
            Error:'Something went wrong!', 
            error
        })
    }
})

app.get('/users',async (req,res)=>{ 
    try {
        const users = await prisma.user.findMany()
        if (!users) {
            return res.status(404).json({ 
                Message:"No user found!", 
                users
            })
        }
        res.status(200).json({ 
            Message:`Total ${users.length} user found`, 
            users
        })
        
    } catch (error) {
        res.status(200).json({ 
            Error:'Something went wrong!',
            error
        })
    }
})

app.listen(port,()=>console.log(`app runs on http://localhost:${port}`))