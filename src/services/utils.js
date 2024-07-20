export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Only letters and spaces, 2 to 50 characters long
  return nameRegex.test(name);
};
