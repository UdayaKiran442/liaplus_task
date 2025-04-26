import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {}
}

export async function comparePassword({
  password,
  hashedPassword,
}: {
  password: string;
  hashedPassword: string;
}) {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {}
}
