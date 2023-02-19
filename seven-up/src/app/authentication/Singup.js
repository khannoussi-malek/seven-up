import { Formiz, useForm } from "@formiz/core";
import FieldText from "../../components/FiledText/index";
import { useCreateAccount } from "./account.service";
import "./singup.css";
import {
  isEmail,
  isLength,
  isMaxLength,
  isMinLength,
  isPattern,
} from "@formiz/validations";
const Singup = () => {
  const form = useForm();
  const { mutate: createUser } = useCreateAccount();

  return (
    <div className="login-page">
      <div className="container">
        <div className="formiz">
          <Formiz
            autoForm
            onValidSubmit={(values) => {
              createUser(values);
            }}
            connect={form}>
            <FieldText
              name="username"
              label="UserName:"
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
              label="Email:"
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
              label="Password:"
              required="Password is required"
              type="password"
            />
            <FieldText
              name="phone_number"
              label="Phone Number:"
              type="Number"
              validations={[
                {
                  rule: isLength(8),
                  message: "Phone Number is invalid",
                },
              ]}
            />
            <button type="submit">Sing-up</button>
          </Formiz>
        </div>
        <div className="text-intro">
          <img src=".\Assets\logo.png"></img>
          <h2> Welcom here!</h2>
          <p>
            Our application Provides a Solution For Locating the best Zone to
            put Your hive without killing Honest or spreading any kind of toxic
            substance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
