import {IUser} from "../../utils/types";
import {IAuth} from "./authType";


export const PROFILE = "PROFILE"

export interface IProfile {
    avatar: File | string,
    name: string,
    auth: IAuth
}

export interface IProfileType {
    type: typeof PROFILE
    payload: IProfile
}

export const GET_OTHER_INFO = "GET_OTHER_INFO"

export interface IGetOtherInfo {
    type: typeof GET_OTHER_INFO
    payload: IUser

}

