import jwt from "jsonwebtoken";

export const authenticate = (req) => {
  const token = req.cookies.token;
  if (!token) {
    return null;
  }
  return jwt.verify(token, "" + process.env.SECRET_KEY)
};
