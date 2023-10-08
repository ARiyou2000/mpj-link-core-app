import { cn } from "@/lib/utils";
import { ChevronLeft, Info, SettingAlt } from "@/components/icons/dashed";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata = {
  title: "Setting - MPJ Link App",
  description: "System and user setting page",
};

const settingItemsStyleClassName =
  "px-2.5 py-6 flex flex-row items-center justify-between bg-black bg-opacity-50 rounded-xl text-milkwhite";
const iconsStyleClassName = "w-6 h-6";

const SettingPage = ({ className }) => {
  return (
    <>
      <div className={cn("h-full flex flex-col px-4 pt-14", className)}>
        <h3 className={"text-lg p-4"}>تنظیمات</h3>
        <ScrollArea className={"flex-1 h-0 w-full"}>
          <div className={"h-full flex flex-col gap-1.5 pb-5"}>
            <Link
              href={"/setting/system"}
              className={settingItemsStyleClassName}>
              <h2 className={"flex flex-row items-center gap-4"}>
                <SettingAlt className={iconsStyleClassName} />
                <span>تنظیمات دستگاه</span>
              </h2>
              <ChevronLeft className={iconsStyleClassName} />
            </Link>
            <Link href={"/about"} className={settingItemsStyleClassName}>
              <h2 className={"flex flex-row items-center gap-4"}>
                <Info className={iconsStyleClassName} />
                <span>درباره محصول</span>
              </h2>
              <ChevronLeft className={iconsStyleClassName} />
            </Link>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default SettingPage;
