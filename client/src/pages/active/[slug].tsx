import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IParams} from "../../utils/types";
import {postAPI} from "../../utils/fetchData";
import {showErrorMsg, showSuccessMsg} from "../../components/alert/Alert";

function Active() {
    const {slug}: IParams = useParams()

    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')


    useEffect(() => {
        if (slug) {

            postAPI('active', {
                active_token: slug
            }).then(res => setSuccess(res.data.msg))
                .catch(err => setErr(err.response.data.msg))
        }
    }, [slug])

    return (
        <div>
            {err && showErrorMsg(err)}
            {success && showSuccessMsg(success)}
        </div>
    )
        ;
}

export default Active