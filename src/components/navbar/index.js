import React, { useState } from "react";
import { scroller } from "react-scroll";
import useDarkMode from "../../hooks/useDarkMode";
import IMAGES from "../../images/index";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();

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
      className="my-12 p-2 mr-2 font-black text-2xl md:text-4xl text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-900 cursor-pointer rounded-r-3xl"
      button
      onClick={() => scrollToElement(item.where)}
      key={item.where}
    >
      {item.value}
    </h1>
  );

  return (
    <div className="fixed w-screen h-16 z-50">
      <div
        className="fixed top-0 left-0 m-2 text-2xl"
        onClick={() => setTheme(colorTheme)}
      >
        {colorTheme === "light" ? (
          <img
            className="w-10 p-2 rounded-full bg-gray-100"
            src={IMAGES.light}
            alt="light"
          ></img>
        ) : (
          <img
            className="w-10 p-2 rounded-full bg-gray-100"
            src={IMAGES.dark}
            alt="dark"
          ></img>
        )}
      </div>
      {showNav ? (
        <div className="fixed right-0 z-50 w-1/2 md:w-1/5 h-screen bg-gray-200">
          <button
            onClick={() => {
              closeNav();
            }}
            className="absolute right-0 m-2 px-1 rounded-lg hover:bg-gray-300"
          >
            <img className="w-8" src={IMAGES.close} alt="close"></img>
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
          <img className="w-10" src={IMAGES.menu} alt="menu"></img>
        </button>
      )}
    </div>
  );
}
