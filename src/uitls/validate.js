export const validateData = (email, password, name) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (name !== undefined && name.trim() === "") {
    return "Name is required.";
  }

  if (!email) return "Email required";
  if (!emailRegex) return "Email is not valid.";

  if (!password) return "Password required";
  if (!passwordRegex)
    return "Password is not valid. It must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.";

  return null;
};
