function Header() {
  return (
    <header>
      <video src={require('../img/video.mp4')} loop autoPlay muted></video>
      <h1>Gopinatha Engineering</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
