"use client";

import { useEffect, useState } from "react";
import { Cpu, Grip, Home, SettingAlt } from "@/components/icons/dashed";
import { Cloud } from "@/components/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const iconsClassName = "h-6 w-6 mx-auto";
const NavBarItems = [
  {
    name: "اینترنت",
    icon: <Cloud className={iconsClassName} />,
    link: "/internet",
  },
  {
    name: "کور",
    icon: <Cpu className={iconsClassName} />,
    link: "/core",
  },
  {
    name: "خانه",
    icon: <Home className={iconsClassName} />,
    link: "/home",
  },
  {
    name: "تنظیمات",
    icon: <SettingAlt className={iconsClassName} />,
    link: "/setting",
  },
  {
    name: "دستگاه‌ها",
    icon: <Grip className={iconsClassName} />,
    link: "/devices",
  },
];

const getActiveIndex = (pathname) => {
  if (pathname) {
    if (pathname.includes("devices")) {
      return "/devices";
    } else if (pathname.includes("setting")) {
      return "/setting";
    } else if (pathname.includes("home")) {
      return "/home";
    } else if (pathname.includes("core")) {
      return "/core";
    } else if (pathname.includes("internet")) {
      return "/internet";
    } else {
      return "/home";
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
      <ul className="flex flex-row justify-evenly">
        {NavBarItems.map((menuItem) => (
          <Link href={menuItem.link} key={`NavBarItem_${menuItem.link}`}>
            <li className="flex flex-col text-center pt-6 w-[4.275rem] relative transition">
              {activeMenuIndex === menuItem.link && (
                <motion.span
                  layoutId="bubble"
                  className={`bg-[#1C1F20] h-16 w-[4.275rem] absolute -top-8 rounded-full bg-clip-content`}
                  transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}>
                  <span className="w-3.5 h-3.5 bg-transparent absolute top-8 -left-[0.78rem] rounded-tr-[0.6875rem] shadow-[0.25625rem_-0.3125rem_0_0_#1C1F20]"></span>
                  <span className="w-3.5 h-3.5 bg-transparent absolute top-8 -right-[0.78rem] rounded-tl-[0.6875rem] shadow-[-0.25625rem_-0.3125rem_0_0_#1C1F20]"></span>
                </motion.span>
              )}
              <span
                className={`text-xl cursor-pointer duration-300 ${
                  activeMenuIndex === menuItem.link &&
                  "-translate-y-6 text-white"
                }`}>
                {menuItem.icon}
              </span>
              <span
                className={`duration-300 ${
                  activeMenuIndex === menuItem.link
                    ? "opacity-100 -translate-y-2"
                    : "opacity-0 translate-y-10 "
                }`}>
                {menuItem.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MainLayoutTabNavigation;
