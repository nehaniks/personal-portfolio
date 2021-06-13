import React, { useState } from "react";
import { scroller } from "react-scroll";
import menu from "../../images/menu.png";
import close from "../../images/close.png";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const links = [
    { where: "about", value: "ABOUT" },
    { where: "skills", value: "SKILLS" },
    { where: "projects", value: "PROJECTS" },
    { where: "contact", value: "CONTACT" },
  ];

  const openNav = () => {
    setShowNav(true);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    closeNav();
  };

  const renderItem = (item) => (
    <h1
      className="my-12 p-2 font-black text-4xl text-gray-900 hover:bg-white cursor-pointer"
      button
      onClick={() => scrollToElement(item.where)}
      key={item.where}
    >
      {item.value}
    </h1>
  );

  return (
    <div className="fixed w-screen h-16 z-50">
      {showNav ? (
        <div className="fixed right-0 z-50 w-1/4 h-screen bg-gray-200">
          <button
            onClick={() => {
              closeNav();
            }}
            className="absolute right-0 m-2 px-1 rounded-lg hover:bg-gray-300"
          >
            <img className="w-8" src={close} alt="close"></img>
          </button>

          <div>{links.map((item) => renderItem(item))}</div>
        </div>
      ) : (
        <button
          onClick={() => {
            openNav();
          }}
          className="fixed top-0 right-0 m-2 px-1 rounded-lg bg-gray-100 hover:bg-gray-300"
        >
          <img className="w-10" src={menu} alt="menu"></img>
        </button>
      )}
    </div>
  );
}
