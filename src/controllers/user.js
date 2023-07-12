const db = require('../../db');

exports.create = async (req, res) => {
  const {email, password} = req.body;
  const result = await db.query("INSERT INTO Users(email, password) VALUES ($1, $2) RETURNING *", [email, password]);
  console.log(result.rows[0]);
  res.status(201).json(result.rows[0]);
};