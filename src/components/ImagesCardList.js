import React, { useState, useEffect } from "react";
import Card from './Card'
import styles from "./PostCardList.module.css"; 

export default function ImagesCardList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/photos"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const responseData = await response.json();
                setImages(responseData.slice(0, 20));
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);
    console.log(images)
    // console.log(comments);
    return (
        <div className={styles.postCardList}>
            {images.map((img, index) => (
                <Card key={index} title={img.title || img.name} url={img.url} thumbnailUrl={img.thumbnailUrl} atImageList={true}/>
            ))}
        </div>
    );
}
