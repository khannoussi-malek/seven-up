import { Formiz, useForm } from "@formiz/core";
import FieldText from "../../components/FiledText/index";
import { useCreateAccount } from './account.service';
import {
  isEmail,
  isLength,
  isMaxLength,
  isMinLength,
  isPattern,
} from "@formiz/validations";
const Singup = () => {
  const form = useForm();
  const {
    mutate: createUser,
  } = useCreateAccount();

  return (
    <Formiz
      autoForm
      onValidSubmit={(values) => {
        console.log(values);
        createUser(values)}}
      connect={form}
    >
      <FieldText
        name="username"
        label="Login"
        required="Login is required"
        validations={[
          {
            rule: isMinLength(2),
            message: "Login is too short (min. 5 characters)",
          },
          {
            rule: isMaxLength(50),
            message: "Login is too long (max. 50 characters)",
          },
          {
            rule: isPattern(
              "^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$"
            ),
            message: "Username is invalid, don't use special characters",
          },
        ]}
      />
      <FieldText
        name="email"
        label="Email"
        required="Email is required"
        validations={[
          {
            rule: isMinLength(5),
            message: "Email is too short (min. 5 characters)",
          },
          {
            rule: isMaxLength(254),
            message: "Email is too long (max. 254 characters)",
          },
          {
            rule: isEmail(),
            message: "Email is invalid",
          },
        ]}
      />
      <FieldText
        name="password"
        label="Password"
        required="Password is required"
        type="password"
      />
      <FieldText
        name="phone_number"
        label="Phone Number"
        type="Number"
        validations={[
          {
            rule: isLength(8),
            message: "Phone Number is invalid",
          },
        ]}
      />
      <button type="submit">Submit</button>
    </Formiz>
  );
};

export default Singup;
