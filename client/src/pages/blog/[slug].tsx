import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IBlog, IParams, RootStore} from "../../utils/types";
import {getAPI} from "../../utils/fetchData";
import Loading from "../../components/alert/Loading";
import {showErrorMsg} from "../../components/alert/Alert";
import DisplayBlog from "../../components/blog/DisplayBlog";
import {useSelector} from 'react-redux';


const DetailBlog = () => {

    const id = useParams<IParams>().slug
    const [blog, setBlog] = useState<IBlog>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const {socket} = useSelector((state: RootStore) => state)
    //Join Room
    useEffect(() => {
        if (!id||!socket) return;
        socket && socket.emit('joinRoom', id)

        return ()=>{
            socket.emit('outRoom', id)
        }
    }, [socket, id])

    useEffect(() => {
        if (!id) return;
        setLoading(true)
        getAPI(`blog/${id}`).then(res => {
            setBlog(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setError(err.response.data.msg)
            setLoading(false)
        })

        return () => setBlog(undefined)
    }, [id])


    if (loading) return <Loading/>
    return (
        <div className="my-4">
            {error && showErrorMsg(error)}
            {blog && <DisplayBlog blog={blog}/>}
        </div>
    )
        ;
}

export default DetailBlog;