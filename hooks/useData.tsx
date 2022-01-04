import React from "react";
import { TValues } from "../components/modal/Modal";

export const useData = () => {
  
  const [transferList, setTransferList] = React.useState<TValues[]>([]);
  // const 
  return {
    transferList,
    setTransferList
  }  
}