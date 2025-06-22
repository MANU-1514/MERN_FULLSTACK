import "./style/AfterLogin.css";

function AfterLogin({ setLoggedIn }) {
  return (
    <div className="after-wrapper">
      <div className="after-box">
        <h1>Welcome, Manu! 🎉</h1>
        <p>You have successfully logged in.</p>
        <button onClick={() => setLoggedIn(false)}>Logout</button>  {/* ✅ Logout handler */}
      </div>
    </div>
  );
}

export default AfterLogin;
