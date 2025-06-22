import Img from "../assets/react.svg";
import "./style/Pages.css";

function Pages({ setLoggedIn }) {
  return (
    <div className="wrapper">
      <div className="login-box">
        <img className="img" src={Img} alt="react logo" />
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={() => setLoggedIn(true)}>Login</button>
      </div>
    </div>
  );
}

export default Pages;
