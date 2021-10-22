import bcrypt from "bcryptjs";

export const Encrypt = async (
  value: string,
  level: number
): Promise<string> => {
  const salt = await bcrypt.genSalt(level);
  const encryptedValue = await bcrypt.hash(value, salt);
  return encryptedValue;
};

export const CompareString = async (
  value: string,
  encryptedValue: string
): Promise<boolean> => {
  return await bcrypt.compare(value, encryptedValue);
};
