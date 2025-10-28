import parsePhoneNumber from "libphonenumber-js";
const phoneRegex84 = /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/;

export const validatePhone84 = (val: string) => {
  try {
    return (
      phoneRegex84.test(val) &&
      val.length > 9 &&
      parsePhoneNumber(val, "VN")?.nationalNumber.length === 9
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};
