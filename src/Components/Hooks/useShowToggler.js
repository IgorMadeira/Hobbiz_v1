import { useState } from "react";

const useToggler = () => {
  const [showState, setShowState] = useState(false);
  const toggler = () => {
    setShowState((prevState) => {
      setShowState(!prevState);
    });
  };

  return [showState, toggler];
};

export default useToggler;
