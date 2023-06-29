import { useUID } from "react-uid";
import { PREFIX } from "../constants/common.constants";

export const useId = (prefix?: string) => {
  const uuid = useUID();
  return `${PREFIX}${prefix ? `-${prefix}` : ""}-${uuid}`;
};
