import jwt from "jsonwebtoken";

export const createSecretToken = (user) => {
  return jwt.sign({ user }, "" + process.env.SECRET_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
