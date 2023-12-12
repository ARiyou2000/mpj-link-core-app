import { ReactNode } from "react";

export const metadata = {
  title: "Home - MPJ Link App",
  description: "Check Zones and Scenarios",
};

type PropsT = { zonePage: ReactNode; scenarioPage: ReactNode };
const HomePage = ({ zonePage, scenarioPage }: PropsT) => {
  return (
    <>
      <div
        className={
          "w-full h-full flex flex-col gap-8 landscape:gap-2.5 pt-8 landscape:pt-0"
        }>
        <div className={"w-full flex flex-col items-start"}>
          <h3 className={"px-4"}>زون ها</h3>
          {zonePage}
        </div>

        <div className={"flex-1 h-0 px-1 flex flex-col gap-5 items-start"}>
          <h3 className={"px-3"}>سناریو ها</h3>
          {scenarioPage}
        </div>
      </div>
    </>
  );
};
export default HomePage;
