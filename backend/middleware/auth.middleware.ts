import { Request, Response, NextFunction } from "express";

import { getUserByIdInDB } from "../repository/user/user.repository";

import { verifyJWTToken } from "../utils/jwt.utils";

export interface AuthRequest extends Request {
  user?: any;
}

export async function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "No token provided" });
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyJWTToken(token);
    const userId = decoded._id;
    const user = await getUserByIdInDB(userId);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }
}

export async function adminMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (!req.user || req.user.role !== "admin") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  next();
}