import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

const signJwt = async (payload: object) => {
  return await new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(secret);
}

const verifyJwt = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    console.error("Erro ao verificar JWT:", err);
    return null;
  }
}

export { signJwt, verifyJwt }