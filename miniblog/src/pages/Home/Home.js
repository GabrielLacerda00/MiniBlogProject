import React, { useState } from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";

const Home = () => {
    const [query, setQuery] = useState("");
    const {documents: posts, loading} = useFetchDocuments("posts");
    const navigate = useNavigate();
    
    const handleSubmit = (e) =>{
        e.preventDefaut();
        if (query) {
            return navigate(`/search?q=${query}`);
        };   
    };

    return(
        <div className={styles.home}>
            <h1>see recent posts</h1>
            <form onSubmit={handleSubmit} className={styles.search_form}>
                <input 
                type="text"  
                placeholder="Search for tags" 
                onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-dark">Search</button>
            </form>
            <div className="post-list">
                {loading && <p>Loading...</p>}
                {posts && posts.map((post) => (<PostDetail key={post.id} post={post} />))}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Posts not found</p>
                        <Link to="/posts/create" className="btn">Create yours first post</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;