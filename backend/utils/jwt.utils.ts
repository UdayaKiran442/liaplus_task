import jwt from "jsonwebtoken";

export function generateJWTToken(userId: string) {
  return jwt.sign({ userId }, process.env.JWT_SECRET || "nfdjbhes", {
    expiresIn: "5d",
  });
}
