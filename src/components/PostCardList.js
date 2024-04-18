import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./PostCardList.module.css"; 
import imageLoading from '../assets/istockphoto-1335247217-612x612.jpg';

export default function PostCardList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const responseData = await response.json();
                setPosts(responseData.slice(0, 20));
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.postCardList}>
            {loading ? (
                <div className={styles.loadingImageContainer}>
                    <img src={imageLoading} alt="Loading" />
                </div>
            ) : posts.length > 0 ? (
                posts.map((post, index) => (
                    <Card key={index} title={post.title} body={post.body} />
                ))
            ) : (
                <div className={styles.noPosts}>
                    No posts available
                </div>
            )}
        </div>
    );
}
