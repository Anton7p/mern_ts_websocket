import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from "react-router-dom";
import {IBlog, IParams, RootStore} from "../../utils/types";
import {getBlogsByCategoryId} from "../../redux/actions/blogAction";

import NotFound from "../../components/global/NotFound";
import CardVert from "../../components/cards/CardVert";
import Loading from '../../components/alert/Loading';
import Pagination from "../../components/global/Pagination";

function BlogsByCategory() {
    const {categories, blogsCategory} = useSelector((state: RootStore) => state)
    const {slug} = useParams<IParams>()
    const dispatch = useDispatch()

    const [categoryId, setCategoryId] = useState('')
    const [blogs, setBlogs] = useState<IBlog[]>()
    const [total, setTotal] = useState<number>(0)

    const history = useHistory()
    const {search} = history.location
    useEffect(() => {
        const category = categories.find(item => item.name === slug)
        if (category) {
            setCategoryId(category._id)
        }
    }, [slug, categories])


    useEffect(() => {
        if (!categoryId) return;
        if (blogsCategory.every(item => item.id !== categoryId)) {
            dispatch((getBlogsByCategoryId(categoryId, search)))
        } else {
            const data = blogsCategory.find(item => item.id === categoryId)
            if (!data) return;
            setBlogs(data.blogs)
            setTotal(data.total)
            if (data.search) history.push(data.search)
        }

    }, [categoryId, blogsCategory, dispatch, search])

    const handlePagination = (num: number) => {
        const search = `?page=${num}`
        dispatch((getBlogsByCategoryId(categoryId, search)))
    }
    if (!blogs) return <Loading/>
    return (
        <div className={"blogs_category"}>
            <div className="show_blogs">
                {
                    blogs?.map(blog => (
                        <CardVert key={blog._id} blog={blog}/>
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
    )
        ;
}

export default BlogsByCategory;