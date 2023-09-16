import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Home;
