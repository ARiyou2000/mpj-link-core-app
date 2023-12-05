import LoadingSpinner from "@/components/loading/LoadingSpinner";
import React, { ReactNode } from "react";

const GeneralListStatus = ({
  list,
  loading,
  empty,
}: {
  list: any[] | undefined | null;
  loading?: ReactNode;
  empty?: ReactNode;
}) => {
  console.log(list);
  if (!list) {
    return (
      <div className={"flex w-full h-full items-center justify-center"}>
        {loading || <LoadingSpinner />}
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className={"flex w-full h-full items-center justify-center"}>
        {empty || <h2>Empty List</h2>}
      </div>
    );
  }

  // if it's not neither loading nor empty list return false so actual component shows up
  return false;
};

export default GeneralListStatus;

//use it with or condition like:
// return ( <GeneralListStatus list={myList}/> || <div ... )
