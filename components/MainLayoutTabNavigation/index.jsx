"use client";

import { useEffect, useState } from "react";
import { Cpu, Grip, Home, SettingAlt } from "@/components/icons/dashed";
import { Cloud } from "@/components/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const iconsClassName = "h-6 w-6 mx-auto";
const NavBarItems = [
  {
    name: "اینترنت",
    icon: <Cloud className={iconsClassName} />,
    dis: "translate-x-0",
    link: "/fa/internet",
  },
  {
    name: "کور",
    icon: <Cpu className={iconsClassName} />,
    dis: "-translate-x-[4.275rem]",
    link: "/fa/core",
  },
  {
    name: "خانه",
    icon: <Home className={iconsClassName} />,
    dis: "-translate-x-[8.55rem]",
    link: "/fa/home",
  },
  {
    name: "تنظیمات",
    icon: <SettingAlt className={iconsClassName} />,
    dis: "-translate-x-[12.825rem]",
    link: "/fa/setting",
  },
  {
    name: "دستگاه‌ها",
    icon: <Grip className={iconsClassName} />,
    dis: "-translate-x-[17.1rem]",
    link: "/fa/devices",
  },
];

const getActiveIndex = (pathname) => {
  if (pathname) {
    if (pathname.includes("devices")) {
      return 4;
    } else if (pathname.includes("setting")) {
      return 3;
    } else if (pathname.includes("home")) {
      return 2;
    } else if (pathname.includes("core")) {
      return 1;
    } else if (pathname.includes("internet")) {
      return 0;
    } else {
      return 2;
    }
  }
};

const MainLayoutTabNavigation = () => {
  const pathname = usePathname();
  const [activeMenuIndex, setActiveMenuIndex] = useState(
    getActiveIndex(pathname),
  );
  useEffect(() => {
    setActiveMenuIndex(getActiveIndex(pathname));
  }, [pathname]);

  return (
    <div className="bg-[#383838] max-h-[4.4rem] px-6 rounded-t-xl overflow-hidden">
      <ul className="flex flex-row relative ">
        <span
          className={`bg-[#1C1F20] duration-500 ${NavBarItems[activeMenuIndex].dis} h-16 w-[4.275rem] absolute -top-8 rounded-full`}>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-8 -left-[0.78rem] rounded-tr-[0.6875rem] shadow-[0.25625rem_-0.3125rem_0_0_#1C1F20]"></span>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-8 -right-[0.78rem] rounded-tl-[0.6875rem] shadow-[-0.25625rem_-0.3125rem_0_0_#1C1F20]"></span>
        </span>
        {NavBarItems.map((menuItem, index) => (
          <li key={`NavBarItem_${index}`} className="w-[4.275rem]">
            <Link
              className="flex flex-col text-center pt-6"
              href={menuItem.link}
              // onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  activeMenuIndex === index && "-mt-6 text-white translate-x-0"
                }`}>
                {menuItem.icon}
              </span>
              <span
                className={`${
                  activeMenuIndex === index
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                }`}>
                {menuItem.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainLayoutTabNavigation;
