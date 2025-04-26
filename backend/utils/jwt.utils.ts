import jwt from "jsonwebtoken";

export function generateJWTToken(_id: string) {
  return jwt.sign({ _id }, process.env.JWT_SECRET || "nfdjbhes", {
    expiresIn: "5d",
  });
}

export function verifyJWTToken(token: string) {
  try {
    const secret = process.env.JWT_SECRET || "nfdjbhes";
    return jwt.verify(token, secret) as { _id: string };
  } catch (error) {
    throw error;
  }
}
