import { Op } from "sequelize";
import Note from "../../../DB/model/note.model.js";
import User from "../../../DB/model/user.model.js";

export const addNote = async (req, res) => {
  const { title, content, userId } = req.body;
  const note = await Note.create({ title, content, userId });
  res.json({
    message: "added",
  });
};

export const deleteNote = async (req, res) => {
  const { id, userId } = req.body;
  try {
    const note = await Note.destroy({
      where: {
        [Op.and]: [{ id }, { userId }],
      },
    });
    res.json({
      message: "deleted",
    });
  } catch (error) {
    res.json({
      message: "error",
      error,
    });
  }
};

export const updateNote = async (req, res) => {
  const { id, title, content, userId } = req.body;
  const note = await Note.findOne({
    where: {
      id,
      userId,
    },
  });
  if (note) {
    await Note.update(
      { title, content },
      {
        where: {
          id,
          userId,
        },
      }
    );
    return res.json({
      message: "updated!",
    });
  }
  res.json({
    message: "not found",
  });
};

export const getNotesWithOwner = async (req,res)=>{
    const notes = await Note.findAll({
        include:{
            model:User
        }
    })
    if(notes.length){
    res.json({
        message:"result",
        notes
    })
}
res.json({
    message:"empty"
})
}

export const getAllNotes = async (req, res) => {
  const notes = await Note.findAll();
  if (notes.length) {
    return res.json({
      message: "done",
      notes,
    });
  }
  res.json({
    message: "empty",
  });
};
