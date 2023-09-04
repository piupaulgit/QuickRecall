import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import PageTitle from "./PageTitle";

const PageContainer = ({ children, title }) => {
  const [showMenu, setShowMenu] = useState(false);
  const {user} = useSelector((state) => state.user)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=" rounded-lg bg-white m-4 p-4 min-h-screen">
      <div className="flex gap-3 items-center mb-3">
        <div className=" relative">
          <button
            onClick={toggleMenu}
            className=" rounded-full h-[40px] w-[40px] bg-yellow-500 flex justify-center items-center text-white"
          >
            <FiMenu size={20} />
          </button>
          {showMenu && (
            <div className=" bg-gray-200 absolute top-0 rounded-md w-[300px] min-h-screen">
              <div className="flex justify-between border-gray-400 border-b-[1px] p-4">
                <div className="flex gap-2 justify-center items-center">
                  <span className=" bg-gray-400 rounded-full w-[35px] h-[35px] block"></span>
                  <span className=" text-sm">{user.email}</span>
                </div>
                <button onClick={toggleMenu}>
                  <RxCross2 size={20} />
                </button>
              </div>
              <ul>
                <li>Some</li>
                <li>Some</li>
                <li>Some</li>
                <li>Some</li>
                <li>Some</li>
                <li>Some</li>
              </ul>
            </div>
          )}
        </div>
        <PageTitle title={title} />
      </div>
      {children}
    </div>
  );
};

export default PageContainer;
