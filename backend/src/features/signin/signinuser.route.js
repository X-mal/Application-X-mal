import express from 'express'
import signinController from './signinuser.controller.js'
const signInRouter = express.Router()
signInRouter.post('/', signinController)
export default signInRouter