import React from "react";

const Footer = () => {
  const myfooter = {
    position: "relative",
    width: "100%",
    top: "70vh",
  };

  return (
    <div className="bg-dark text-light py-3 myfooter" style={myfooter}>
      <p className="text-center">
        {" "}
        Copyright &copy; https://jeminbutani.github.io/MyTodoList/
      </p>
    </div>
  );
};

export default Footer;
