import { Router } from "express";
import * as uC from './notes.contoller.js'
const router = Router()

router.post('/addnote',uC.addNote)
router.delete('/deletenote',uC.deleteNote)
router.put('/updatenote',uC.updateNote)
router.get("/get_notes_with_owner",uC.getNotesWithOwner)
router.get('/getnotes', uC.getAllNotes)




export default router 