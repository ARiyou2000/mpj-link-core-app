// import Image from "next/image";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
import GeneralPageBody from "@/components/GeneralPageBody";

export const metadata = {
  title: "About - MPJ Link App",
  description: "About MPJ and Device",
};

const AboutPage = () => {
  return (
    <>
      <GeneralPageBody
        title={"درباره محصول"}
        className={"h-full px-4 flex flex-col gap-6"}>
        <div className={"h-full flex flex-col gap-6"}>
          {/*<AspectRatio ratio={2} className={""}>*/}
          {/*  <Image*/}
          {/*    src="/images/musicPlayerBackground.webp"*/}
          {/*    alt="MPJ-Link smart home"*/}
          {/*    // width={200}*/}
          {/*    // height={100}*/}
          {/*    fill*/}
          {/*    objectFit={"cover"}*/}
          {/*    className="rounded-card object-cover mx-auto saturate-150 contrast-75 brightness-75"*/}
          {/*  />*/}
          {/*</AspectRatio>*/}
          <div
            className={
              "text-xl text-white font-thin pb-8 px-4 flex flex-col gap-4"
            }>
            <p>
              یکی از کارایی مهم سیستم‌های هوشمند در زمینه اتوماسیون خانگی برای
              منازل و محل‌های کار است.
            </p>
            <p>
              امروزه نصب و اجرای سیستم های هوشمند مدیریتی و اتوماسیون خانگی
              (BMS) یکی از ضرورت های صنعت ساختمان به شمار می آیند. با نصب و
              اجرای سیستم مدیریت ساختمان (BMS)، کلیه تجهیزات الکتریکی مشترک
              ساختمان اعم از موتورخانه، سیستم‌های سرمایشی و گرمایشی، هوا سازها،
              چیلرها، آسانسورها، سونا و استخر، برق اضطراری، روشنایی، کنترل تردد،
              اعلام و اطفاء حریق، دوربین های مدار بسته و سیستم های حفاظتی همگی
              به صورت یکپارچه قابل کنترل هستند و به صورت خودکار توسط سنسورها و
              حسگرهای مختلف و برنامه های از قبل تعیین و تعریف شده تنظیم می‌شوند.
            </p>
            <p>
              بنابراین اهداف اتوماسیون ساختمان با توجه به عملکرد این تجهیزات بر
              اساس زمان های مختلف مصرف، از مدار خارج کردن تجهیزات در زمان هایی
              که بار مصرف کم است و یا اطلاع رسانی از معیوب شدن بخش های مختلف
              تحقق پیدا خواهند کرد.
            </p>
            <p>
              عملکرد پایه یک سیستم کامپیوتری مرکزی مدیریت هوشمند سه بخش مدیریت،
              کنترل و بهینه‌سازی انرژی را شامل می‌شود که به همین خاطر امروزه از
              مصارف پرکاربرد جوامع امروزی به حساب می‌آید.
            </p>
            <p>
              پلتفرم نرم افزاری MPJ-link امکان مانیتور و فرمان دهی سیستم هوشمند
              بدون نیاز به اینترنت در محدوده پوشش مودم کنترل سیستم بدون الزام
              تاچ پنل کنترل سیستم باکمک اسکن QR code کنترل بواسطه مرورگر مستقل
              از نوع سیستم عامل اندروید یا IOS ویندوز و غیره مستقل از نوع دستگاه
              اعم از موبایل و تبلت و لپتاب و کامپیوتر.
            </p>
          </div>
        </div>
      </GeneralPageBody>
    </>
  );
};

export default AboutPage;
