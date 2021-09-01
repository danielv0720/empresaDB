// requerir el modelo
const Person = require('../models/Person')

const appController = {}

/*
{
    getPato: () => {}
    getPato: () => {}
    getPato: () => {}
    getPato: () => {}
}
*/

appController.getPato = (req, res) => {
    res.status(200).json({message: "soy un pato"})
}

appController.getWanda = (req, res) => {
    res.status(200).json({message: "soy Wanda"})
}

appController.getMichael = (req, res) => {
    res.status(200).json({message: "soy Michael"})
}

appController.sayMyName = (req, res) => {
    /* your code here */
    const name = req.body.name
    console.log(req)
    res.status(200).json({message: `Hi ${name}`})
}

appController.upadateName = (req, res) => {
    const idName = req.params.idName
    const name = req.body
    console.log(req.params)
    res.status(200).json({message: `Hi ${name}, name updated!`, idName: idName})
}

appController.deleteName = (req, res) => {
    const idName = req.params.idName
    console.log(req.params)
    res.status(200).json({message: `name Deleted!`, idName: idName})
}

appController.createPerson = async (req, res) => {

    try {
        const newPerson = new Person({
            name: req.body.name,
            lastName: req.body.lastName,
            age: req.body.age,
            dni: req.body.dni
        })
    
        await newPerson.save()
        
        res.status(201).json({message: "Person created!"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = appController