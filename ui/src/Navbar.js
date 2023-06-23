import logo from "./logo.svg";
import "./Navbar.css";
export const Navbar = (props) => {
  return (
    <>
      <header>
        <img src={logo} />
        <h1 id="Title"></h1>
        <nav>
          <a href="/create-quiz">create quiz</a>
          <a href="/quiz">quiz</a>
          <a>login</a>
        </nav>
      </header>
      <body>{props.children}</body>
    </>
  );
};
