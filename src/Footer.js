import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright @ 2021 Gypzeez</p>
          <a href="#1" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
