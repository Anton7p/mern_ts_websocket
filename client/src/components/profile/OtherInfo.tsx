import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOtherInfo} from "../../redux/actions/userAction";
import {IUser, RootStore} from "../../utils/types";
import Loading from "../global/Loading";



interface IProps {
    id: string
}

const OtherInfo: FC<IProps> = ({id}) => {
    const {otherInfo} = useSelector((state: RootStore) => state)

    const [other, setOther] = useState<IUser>()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!id) return;
        if (otherInfo.every(user => user._id !== id)) {
            dispatch(getOtherInfo(id))
        } else {
            const newUser = otherInfo.find(user => user._id === id)
            if (newUser) setOther(newUser)
        }


    }, [id, otherInfo, dispatch])


    if (!other) return <Loading/>
    return (
        <div className="profile_info text-center rounded">
            <div className="info_avatar">

                <img src={other.avatar} alt="avatar"/>
            </div>
            <h5 className="text-uppercase text-danger">
                {other.role}
            </h5>

            <div>
                Name: <span className="text_info">
               {other.name}
                </span>
            </div>
            <div>Email</div>
            <span className="text_info">
                {other.account}
            </span>
            <div>
                Join Date: <span style={{color:"#ffc107"}}>
               {new Date(other.createdAt).toLocaleString()}
                </span>
            </div>
        </div>
    );
}

export default OtherInfo;