import { useForm } from "react-hook-form";

import { loginRequest } from "../../api/request";

import css from "./LoginPage.module.css";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit( async(data) => {
    await loginRequest(data)
  });

  return (
    <div className={css.login__container}>
      <h1 className={css.login__title}>Login</h1>
      <form onSubmit={onSubmit}>
        <div className={css.input__container}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            {...register("email")}
            autoFocus
            className={css.input__item}
            type="text"
            placeholder="Email"
          />
        </div>

        <div className={css.input__container}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            {...register("password")}
            autoFocus
            className={css.input__item}
            type="password"
            placeholder="Password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
