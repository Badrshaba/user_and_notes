import { Op, Sequelize } from "sequelize";
import User from "../../../DB/model/user.model.js";

export const sign_up = async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    const user = await User.create({ name, email, password, age });
    res.json({
      message: "done",
    });
  } catch (error) {
    res.json({
      message: "sign up error",
      error,
    });
  }
};

export const sign_in = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.json({
      message: "email not found",
    });
  }
  if (user.password != password) {
    return res.json({
      message: "password not found",
    });
  }
  res.json({
    message: "wellcome",
  });
};

export const updateUser = async (req, res) => {
  const { id, name, email, password, age } = req.body;

  try {
    const userId = await User.findByPk(id);
    if (userId) {
      const user = await User.update(
        { name, email, password, age },
        {
          where: {
            id,
          },
        }
      );
      return res.json({
        message: "updated!",
        user,
      });
    }
  } catch (err) {
    res.json({
      message: "update error",
      err,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  const userFind = await User.findByPk(id);
  if (userFind) {
    const user = await User.destroy({ where: { id } });
    res.json({
      message: "deleted!",
    });
  }
  res.json({
    message: "not found",
  });
};

export const searchUserLike = async (req, res) => {
  const { char, age } = req.body;
  const users = await User.findAll({
    where: {
      [Op.and]: [
        { name: { [Op.like]: `${char}%` } },
        { age: { [Op.gt]: age } },
      ],
    },
  });
  if (users.length) {
    return res.json({
      message: "done",
      users,
    });
  }
  res.json({
    message: "not found",
  });
};

export const searchUserBetween = async (req, res) => {
  const { firstAge, secondAge } = req.body;
  const users = await User.findAll({
    where: {
      age: { [Op.between]: [firstAge, secondAge] },
    },
  });
  if (users.length) {
    return res.json({
      message: "done",
      users,
    });
  }
  res.json({
    message: "not found",
  });
};

export const getOldest = async (req, res) => {
  const users = await User.findAll({
    order: [["age", "DESC"]],
    limit: 3,
  });
  res.json({
    message: "result",
    users,
  });
};

export const searchUserIn = async (req, res) => {
  const { usersId } = req.body;
  const users = await User.findAll({
    where: {
      id: { [Op.in]: [...usersId] },
    },
  });
  if (users.length) {
    return res.json({
      message: "done",
      users,
    });
  }
  res.json({
    message: "not found",
  });
};

export const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  if (users.length) {
    return res.json({
      message: "done",
      users,
    });
  }
  res.json({
    message: "empty",
  });
};
