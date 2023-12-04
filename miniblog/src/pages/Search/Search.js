import React from "react";
import PostDetail from "../../components/PostDetail";
import styles from "./Search.module.css";
//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";
const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search);

    return(
        <div className={styles.search_container}>
        <h1>Results founds for: {search}</h1>
        <div className="post-list">
          {posts && posts.length === 0 && (
            <>
              <p>Not found posts for your search...</p>
              <Link to="/" className="btn btn-dark">
                go back
              </Link>
            </>
          )}
          {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        </div>
      </div>
    );
}

export default Search;