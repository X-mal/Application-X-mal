import express from 'express'
import signupControllerTec from './signup.controller'
const router = express.Router()
router.post('/', signupControllerTec)
export default router