import express from 'express'
import signupControllerTec from './signup.controller.js'
const router = express.Router()
router.post('/', signupControllerTec)
export default router.all






