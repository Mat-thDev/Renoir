import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

//Atoms
export const darkMode = atomWithStorage<boolean>("darkMode", true);