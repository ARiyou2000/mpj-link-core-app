import MainLayoutHeader from "@/components/MainLayoutHeader";

const FavoriteScenarioLayout = ({ children }) => {
  return (
    <>
      <div className={"h-full w-full flex flex-col justify-between"}>
        <MainLayoutHeader />
        <div className={"flex-1 h-0 pt-3"}>{children}</div>
      </div>
    </>
  );
};

export default FavoriteScenarioLayout;
