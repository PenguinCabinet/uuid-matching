import { v5 as uuidv5 } from "uuid";

export type Profile = {
  name: string;
};

export function profile(index: number): Profile {
  const NAMESPACE = "610ff7b6-53de-49f3-87f4-2b71c1d6c830";
  return {
    name: uuidv5(String(index), NAMESPACE),
  };
}
