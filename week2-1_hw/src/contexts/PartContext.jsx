import { createContext, useContext, useState } from "react";

const PartContext = createContext({
  part: "",
  selectPart: () => {},
});

export const PartProvider = ({ children }) => {
  const [part, setPart] = useState("");

  const selectPart = (selected) => {
    setPart(selected);
    console.log("선택 파트 변경: ", selected);
  };

  return (
    <PartContext.Provider value={{ part, selectPart }}>
      {children}
    </PartContext.Provider>
  );
};

export const usePart = () => useContext(PartContext);

export default PartProvider;
