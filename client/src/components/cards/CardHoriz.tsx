import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {IBlog} from "../../utils/types";

interface IProps {
    blog: IBlog
}

const CardHoriz: FC<IProps> = ({blog}) => {
    return (
        <div className="card mb-3" style={{minWidth: "280"}}>
            <div className="row g-0 p-2">
                <div className="col-md-4" style={{minHeight: "150px",maxHeight: "170px", overflow: "hidden"}}>

                    {
                        blog.thumbnail &&
                        <>
                            {
                                typeof (blog.thumbnail) === "string"
                                    ? <Link to={`/blog/${blog._id}`}>
                                        <img src={blog.thumbnail}
                                             className="img-fluid rounded-start"
                                             alt="thumbnail"/>
                                    </Link> : <img src={URL.createObjectURL(blog.thumbnail)}
                                                   className="w-100 h-100"
                                                   alt="thumbnail" style={{objectFit:"cover"}}/>
                            }
                        </>
                    }

                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to={`/blog/${blog._id}`}
                            className="text-capitalize text-decoration-none">
                                {blog.title}
                            </Link>
                        </h5>
                        <p className="card-text">{blog.description}</p>
                        <p className="card-text text-right ">
                            <small className="text-muted text-right d-block">{new Date(blog.createdAt).toLocaleString()}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardHoriz;