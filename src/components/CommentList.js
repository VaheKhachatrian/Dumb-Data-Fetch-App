import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./PostCardList.module.css";

export default function PostCardList() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/comments"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const responseData = await response.json();
                setComments(responseData.slice(0, 20));
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.postCardList}>
            {comments.map((comment, index) => (
                <Card key={index} title={comment.title || comment.name} body={comment.body} id={comment.id} email={comment.email}/>
            ))}
        </div>
    );
}
