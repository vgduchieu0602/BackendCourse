import {Router} from 'express'

const userRoutes = Router()

userRoutes.get('/', (req, res) => {
    res.send({title: "Get all user"})
})

userRoutes.get('/:id', (req, res) => {
    res.send({title: "Get detail user"})
})

userRoutes.post('/', (req, res) => {
    res.send({title: "Creat new user"})
})

userRoutes.put('/:id', (req, res) => {
    res.send({title: "Update user"})
})

userRoutes.delete('/:id', (req, res) => {
    res.send({title: "Delete user"})
})

export default userRoutes