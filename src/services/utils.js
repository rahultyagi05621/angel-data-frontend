export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Only letters and spaces, 2 to 50 characters long
  return nameRegex.test(name);
};

export const validateForm = (formData) => {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;
  const zipPattern = /^\d{5}$/;
  const ssnPattern = /^\d{3}-\d{2}-\d{4}$/; // Example SSN pattern

  if (!formData.firstName.trim()) errors.firstName = "First name is required.";
  if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
  if (!emailPattern.test(formData.email))
    errors.email = "Invalid email address.";
  if (!phonePattern.test(formData.mobile))
    errors.mobile = "Invalid mobile number (must be 10 digits).";
  if (!formData.ipAddress.trim()) errors.ipAddress = "IP address is required.";
  if (!formData.city.trim()) errors.city = "City is required.";
  if (!formData.streetAddress.trim())
    errors.streetAddress = "Street address is required.";
  if (!zipPattern.test(formData.zipCode))
    errors.zipCode = "Invalid zip code (must be 5 digits).";
  if (!formData.accountNumber.trim())
    errors.accountNumber = "Account number is required.";
  if (!ssnPattern.test(formData.ssn))
    errors.ssn = "Invalid SSN (format: XXX-XX-XXXX).";
  if (!formData.loanAmount.trim() || isNaN(formData.loanAmount))
    errors.loanAmount = "Loan amount must be a number.";
  if (!formData.licenseNo.trim())
    errors.licenseNo = "License number is required.";
  if (!formData.licenseState.trim())
    errors.licenseState = "License state is required.";

  return errors;
};
