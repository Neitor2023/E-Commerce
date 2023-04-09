import { useState } from "react";
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = e => {
    console.log("email ", email)
    console.log("password ", password)
    e.preventDefaultd
  }
  return (
    <div>
      <form
        className="login"
        onSubmit={e => login(e)}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
          >Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;