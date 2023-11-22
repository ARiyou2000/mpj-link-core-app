import { useState } from "react";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";

const useHertakiUpdate = () => {
  const [registerUpdateHandler] = useRegisterUpdateToast();

  const [hertakiUpdateFlag, setHertakiUpdateFlag] = useState(false);
  const handelHertakiUpdate = async (fistAction, secondAction) => {
    setHertakiUpdateFlag((prevState) => !prevState);
    if (hertakiUpdateFlag) {
      await registerUpdateHandler(fistAction);
    } else {
      await registerUpdateHandler(secondAction);
    }
  };

  return handelHertakiUpdate;
};

export default useHertakiUpdate;
