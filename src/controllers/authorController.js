const authorModel = require("../models/authorModel.js")
const validation = require("../validations/validator.js")






//=================================  Creating an Author  ======================================//

const createAuthor = async function(req, res){
    try{
        let body = req.body
        let {name, version, toDoList} = body

        if(!validation.emptyBody(body)) return res.status(400).send({status: false, message: "Body cannot be empty!"})

        if(!name) return res.status(400).send({status: false, message: "Name is mandatory!"})
        if(!validation.isValid(name)) return res.status(400).send({status: false, message: "The input string cannot be empty!"})
        body.name = body.name.trim().split(" ").filter(x => x).join(" ")

        if(!version) return res.status(400).send({status: false, message: "Version is mandatory!"})
        body.version = body.version.trim().split(" ").filter(x => x).join(" ")

        let create = await authorModel.create(body)
        return res.status(201).send({status: true, message: "Profile successfully created!", data: create})




    }catch(error){
        return res.status(500).send({status: false, message: error.message})
    }

};











//=====================================  Fetching Author Details  =================================//

const getToDoList = async function(req, res){
    try{
      let authorId = req.params.authorId
      
      if(!validation.idMatch(authorId)) return res.status(400).send({status: false, message: "Invalid Author ID in the params!"})
      let validId = await authorModel.findOne({_id: authorId})
      if(!validId) return res.status(404).send({status: false, message: "Author not found!"})

      res.status(200).send({status: true, message: `The 'To-Do-List' of ${validId.name} is as follows:`, data: validId.toDoList})
    }catch(error){
return res.status(500).send({status: false, message: error.message})
    }
};











//=================================  Deleting 3rd Task  ===================================//

const deleteTask = async function(req, res){
    try{
        let authorId = req.params.authorId
      
      if(!validation.idMatch(authorId)) return res.status(400).send({status: false, message: "Invalid Author ID in the params!"})
      let validId = await authorModel.findOne({_id: authorId})
      if(!validId) return res.status(404).send({status: false, message: "Author not found!"})

      let task = validId.toDoList
      if(task.length < 3){
        return res.status(400).send({status: false, message: "The To-Do-List contains less than 3 items and hence, deleting 3rd task will not be possible."})

      }
      let result = task.splice(2,1)

       await authorModel.findOneAndUpdate({_id: authorId}, {toDoList: task})

      res.status(204).send({status: true, message: `Removed the 3rd task successfully from ${validId.name}'s To-Do-List!`, data: validId})

      
    }catch(error){
        return res.status(500).send({status: false, message: error.message})
    }
};












//===========================  Updating the 2nd Task in To-Do-List  =================================//

const updateTask = async function(req, res){
    try{
        let authorId = req.params.authorId
        let body = req.body
        let {updateTask} = body

        if(!validation.idMatch(authorId)) return res.status(400).send({status: false, message: "Invalid Author ID in the params!"})
        let validId = await authorModel.findOne({_id: authorId})
        if(!validId) return res.status(404).send({status: false, message: "Author not found!"})

        if(!validation.emptyBody(body)) return res.status(400).send({status: false, message: "Body cannot be empty!"})

        if(!validation.isValid(updateTask)) return res.status(400).send({status: false, message: "The input string cannot be empty!"})

        let task = validId.toDoList
        if(task.length < 3){
            return res.status(400).send({status: false, message: "The To-Do-List contains less than 2 items and hence, updating the 2nd task will not be possible."})
    
          }

        let result = task.splice(1,1,updateTask)

        await authorModel.findOneAndUpdate({_id: authorId}, {toDoList: task, updatedAt: Date.now()})

        res.status(204).send({status:true, message: "Task updated successfully!", data: validId.toDoList})



    }catch(error){
        return res.status(500).send({status: false, message: error.message})
    }
}

module.exports = {createAuthor, getToDoList, deleteTask, updateTask}