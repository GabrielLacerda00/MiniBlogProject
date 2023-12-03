import React from "react";
import styles from "./CreatePost.module.css";

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useAuthValue} from "../../context/AuthContext";

import {useInsertDocument} from "../../hooks/useInsertDocument";

const CreatePost = () =>{
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const navigate = useNavigate();
    const {user} = useAuthValue();
    const {insertDocument, response} = useInsertDocument("posts");
    
    console.log(response);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        //Validate url
        try {
            new URL(image)
        } catch (error) {
            setFormError("The image needs be a URL");
        }

        //Crate array tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
        //check values
        if (!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os campos!");
        }

        if(formError) return;

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        //redirect
        navigate("/");
    }

    return(
        <div className={styles.create_post}>
            <h2>Create post</h2>
            <p>Write about all you want and share</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input
                    type="text" 
                    name="title" 
                    required 
                    placeholder="Think a good title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                     />
                </label>
                <label>
                    <span>URL image:</span>
                    <input
                    type="text" 
                    name="image" 
                    required 
                    placeholder="insert an image that represents your post"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                     />
                </label>
                <label>
                    <span>Conteudo:</span>
                    <textarea
                    name="body"
                    required
                    placeholder="insert post content"
                    onChange={(e)=> setBody(e.target.value)}
                    value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                    type="text" 
                    name="tags" 
                    required 
                    placeholder="insert tags separated by commas"
                    onChange={(e) => setTags(e.target.value)}
                    value={tags}
                     />
                </label>
                {!response.loading && <button className="btn">Create post</button>}
                {response.loading && <button className="btn" disabled>wait...</button>}
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
            </form>
            
        </div>
    )
}

export default CreatePost;