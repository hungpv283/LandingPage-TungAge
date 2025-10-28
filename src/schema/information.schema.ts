import { validatePhone84 } from "@/constants/helper";
import * as yup from "yup";

export const informationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Vui lòng nhập Họ và tên")
    .matches(
      /^[a-zA-Z0-9\s\u00C0-\u024F\u1E00-\u1EFF]*$/,
      "Họ và tên không được chứa ký tự đặc biệt"
    ),
  phoneNumber: yup
    .string()
    .required("Chưa nhập Số điện thoại")
    .test("valid", "Số điện thoại không hợp lệ.", (val = "") => {
      return validatePhone84(val);
    }),
  email: yup
    .string()
    .required("Vui lòng nhập Email")
    .email("Email không hợp lệ"),
  message: yup
    .string()
    .required("Vui lòng nhập lời nhắn")
    .max(500, "Lời nhắn không được vượt quá 500 ký tự"),
});
