import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IBlog, IParams, RootStore} from "../../utils/types";
import {useHistory, useParams} from "react-router-dom";
import { getBlogsByUserId} from "../../redux/actions/blogAction";

import CardHoriz from "../cards/CardHoriz";
import Pagination from "../global/Pagination";
import Loading from "../global/Loading";

function UserBlogs() {

    const {userBlogs} = useSelector((state: RootStore) => state)

    const user_id = useParams<IParams>().slug
    const dispatch = useDispatch()
    const [blogs, setBlogs] = useState<IBlog[]>()
    const [total, setTotal] = useState(0)
    const history = useHistory()
    const {search}=history.location

    useEffect(() => {
        if (!user_id) return;

        if (userBlogs.every(item => item.id !== user_id)) {
            dispatch(getBlogsByUserId(user_id,search))
        } else {
            const data = userBlogs.find(item => item.id === user_id)
            if (!data) return;
            setBlogs(data.blogs)
            setTotal(data.total)
            if(data.search) history.push(data.search)
        }

    }, [user_id, userBlogs, dispatch,history,search])

    const handlePagination = (num: number) => {
        const search = `?page=${num}`
        dispatch(getBlogsByUserId(user_id, search))
    }

    if (!blogs) return <Loading/>;

    if(blogs.length===0)return(
        <h3 className="text-center">No Blogs</h3>
    )

    return (

        <div>
            <div>
                {
                    blogs.map(blog => (
                        <CardHoriz blog={blog} key={blog._id}/>
                    ))
                }
            </div>
            {
                total > 1 &&
                <Pagination
                    callback={handlePagination}
                    total={total}
                />
            }
        </div>
    );
}

export default UserBlogs;