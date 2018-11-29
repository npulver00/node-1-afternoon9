const messages = [];
let id = 0;


module.exports={

    create: (req, res)=>{
        console.log(req.body)
        const{text, time}= req.body
        const tempMessage= {
            time,
            text,
            id
        }
        messages.push(tempMessage)
        id++
        res.status(200).json(messages)
    },
    read: (req, res)=>{
      res.status(200).json(messages);
        
    },
    update: (req, res)=>{
        const{text}= req.body
        const{id}=req.params
      messages.forEach(e=>{
          if(e.id == id){
             e.text = text
          }
      })
      res.status(200).json(messages)
    },
    delete: (req, res)=>{
        const{id}=req.params
        messages.forEach((e,i)=>{
            if(e.id == id){
             messages.splice(i,1)
            }
        })
        res.status(200).json(messages)

        
    }
}
