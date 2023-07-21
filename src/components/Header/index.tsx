import React from "react";

import { FaSearch, FaBell, FaUserFriends } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import UK_Flag from "../../assets/images/uk-flag.png";
import User from "../../assets/images/user.png";

export default function Header() {
  return (
    <div className="content-center items-center p-5 w-full">
      <div className="pl-5 float-left">
        <button>
          <FaSearch className="w-[30px] h-[30px]" />
        </button>
      </div>
      <div className="pr-5 flex float-right">
        <button>
          <img
            src={UK_Flag}
            className="w-[40px] h-[30px] ml-[30px] mr-[30px]"
            alt=""
          />
        </button>
        <button>
          <FaBell className="w-[30px] h-[30px] ml-[30px] mr-[30px]" />
        </button>
        <button>
          <FaUserFriends className="w-[30px] h-[30px] ml-[30px] mr-[30px]" />
        </button>
        <button>
          <AiFillSetting className="w-[30px] h-[30px] ml-[30px] mr-[30px]" />
        </button>
        <button>
          <img src={User} className="w-[40px] h-[30px] ml-[30px]" alt="" />
        </button>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
