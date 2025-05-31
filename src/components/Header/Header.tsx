import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-5 border-1">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex justify-between gap-3">
        <p>Experience</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
        <p>username</p>
      </div>
    </div>
  );
}

export default Header;
