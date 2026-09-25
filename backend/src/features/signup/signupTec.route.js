import express from 'express'
import signupControllerTec from './signupTec.controller.js'
const signUpRouterTec = express.Router()
signUpRouterTec.post('/', signupControllerTec)
export default signUpRouterTec





