import React from "react";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            Employee Management System
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
