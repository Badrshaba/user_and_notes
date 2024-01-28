import { Router } from "express";
import * as uC from './user.controller.js'
const router = Router()

router.post('/sign_up',uC.sign_up)
router.post('/sign_in',uC.sign_in)
router.put('/update_user',uC.updateUser)
router.delete('/delete_User',uC.deleteUser)
router.post('/search_user_like',uC.searchUserLike)
router.post('/search_user_between',uC.searchUserBetween)
router.post('/search_user_in',uC.searchUserIn)
router.get('/users_oldest',uC.getOldest)
router.get('/getallusers', uC.getAllUsers)


export default router