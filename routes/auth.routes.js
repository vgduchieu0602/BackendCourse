import {Router} from 'express';

const authRouter = Router()

authRouter.get('/sign-up', (req, res) => {
    res.send("Sign-up")
})
authRouter.get('/sign-in', (req, res) => {
    res.send("Sign-in")
})
authRouter.get('/sign-out', (req, res) => {
    res.send("Sign-out")
})

export default authRouter;