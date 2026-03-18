import {IconType} from "react-icons";

import {HiOutlineBellAlert, HiOutlineRocketLaunch,} from "react-icons/hi2";


export const iconLibrary: Record<string, IconType> = {
    rocket: HiOutlineRocketLaunch,
    alert: HiOutlineBellAlert
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;