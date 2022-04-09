import { useCallback, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../fake-api/user";
import { useUserStore } from "../../../stores/user";

function Login(props: PropsType) {
  const storeUser = useUserStore();
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      setSubmitting(true);
      login(email, password).then((response) => {
        if (response.access_token && response.user_id && response.full_name) {
          storeUser.login(
            response.access_token,
            response.user_id,
            response.full_name
          );

          navigate("/products/shopping-cart");
        } else {
          setSubmitting(false);
        }
      });
    },
    [email, password]
  );

  return (
    <div className="card p-4">
      <h4>Login</h4>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={onEmailChange}
            disabled={submitting}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
            disabled={submitting}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
