import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="headerMainText">Spiderman</h1>
      <nav>
        <ul className="navUl">
          <li className="navLi">
            <a href="https://localhost:3000">Home</a>
          </li>
          <li className="navLi">
            <a href="https://localhost:3000">Comics</a>
          </li>
          <li className="navLi">
            <a href="https://localhost:3000">History</a>
          </li>
          <li className="navLi">
            <a href="https://localhost:3000">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
