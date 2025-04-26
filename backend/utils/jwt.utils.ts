import jwt from "jsonwebtoken";

export function generateJWTToken(userId: string) {
  return jwt.sign({ userId }, process.env.JWT_SECRET || "nfdjbhes", {
    expiresIn: "5d",
  });
}

export function verifyJWTToken(token: string) {
  try {
    const secret = process.env.JWT_SECRET || "nfdjbhes";
    return jwt.verify(token, secret) as { userId: string };
  } catch (error) {
    throw error;
  }
}
