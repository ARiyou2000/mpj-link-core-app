"use client";

import { useEffect, useState } from "react";
import { Cpu, Grip, Home, SettingAlt } from "@/components/icons/dashed";
import { Cloud } from "@/components/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const iconsClassName = "h-6 w-6";
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
    <div className="bg-[#383838] w-full landscape:h-full landscape:w-auto px-6 landscape:px-6 rounded-t-xl landscape:rounded-r-xl landscape:rounded-tl-none overflow-hidden">
      <ul className="flex flex-row landscape:flex-col landscape:h-full justify-evenly items-center">
        {NavBarItems.map((menuItem) => (
          <Link
            className={"flex-1"}
            href={menuItem.link}
            key={`NavBarItem_${menuItem.link}`}>
            <li className="w-full h-full flex flex-col items-center justify-center text-center pt-6 landscape:pt-0 landscape:w-auto relative transition">
              {activeMenuIndex === menuItem.link && (
                <motion.span
                  layoutId="bubble"
                  // style={{ rotate: 90 }}
                  className={`bg-[#1C1F20] h-16 w-16 rounded-full my-auto mx-auto absolute -top-8 landscape:top-auto landscape:-right-14`}
                  transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}>
                  <span className="w-3.5 h-3.5 bg-transparent absolute top-8 landscape:-top-3 -left-[0.78rem] landscape:left-auto landscape:rotate-90 rounded-tr-[0.6875rem] shadow-[0.25625rem_-0.3125rem_0_0_#1C1F20]"></span>
                  <span className="w-3.5 h-3.5 bg-transparent absolute top-8 landscape:top-auto landscape:-bottom-3 -right-[0.78rem] landscape:right-auto landscape:rotate-90 rounded-tl-[0.6875rem] shadow-[-0.25625rem_-0.3125rem_0_0_#1C1F20]"></span>
                </motion.span>
              )}
              <span
                className={`inline-flex items-center justify-center text-xl cursor-pointer duration-300 ${
                  activeMenuIndex === menuItem.link &&
                  "-translate-y-6 text-white landscape:translate-y-0 landscape:translate-x-5"
                }`}>
                {menuItem.icon}
              </span>
              <span
                className={`duration-300 landscape:hidden ${
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
