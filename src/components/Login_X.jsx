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
    <div className="container">
      <form
        className="login"
        onSubmit={e => login(e)}>
        <h4 className="capitalize">Welcome! Enter yuor email and password to continue</h4>
        <br />
        <div className="test_data">
          <h5 className="capitalize"> <strong> Test data</strong></h5>
          <div className="test">
            <i className='bx bx-envelope bx-sm'></i>romy@gmail.com
          </div>
          <div className="test">
            <i className='bx bx-lock-alt bx-sm'></i>romy123
          </div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
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
            placeholder="Enter your password"
          />
        </div>
        <br />
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