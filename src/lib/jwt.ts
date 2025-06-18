var jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || "";

const signJwt = (payload: object) => {
  return jwt.sign(payload, SECRET, { expiresIn: "1d" });
}

const verifyJwt = (token: string) => {
  try {
    return jwt.verify(token, SECRET)
  } catch {
    return null;
  }
}

export  { signJwt, verifyJwt }