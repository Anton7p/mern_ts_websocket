import {IUser} from "../../utils/types";
import {GET_OTHER_INFO, IGetOtherInfo} from "../types/profileType";


const otherInfoReducer = (state: IUser[] = [], action: IGetOtherInfo): IUser[] => {
    switch (action.type) {
        case GET_OTHER_INFO:
            return [...state, action.payload]
        default:
            return state
    }
}

export default otherInfoReducer;