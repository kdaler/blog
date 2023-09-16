import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
          setPost(json)
          setLoading(false)
      })
  }, []);

  return (
    <div className="post-detail">
        <h1>Post Detail</h1>
        {loading ? <h1>Loading....</h1> : (
            <>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
            </>
        )}

    </div>
  );
};

export default PostDetail;