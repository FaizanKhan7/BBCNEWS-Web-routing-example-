import React, { useState, useEffect } from 'react';
import styles from "./services.module.css"

function Services() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'http://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'apiKey=22834ea9211247c390fc7419f6b0f406'
        );


        const items = await data.json();
        console.log(items.articles);
        setItems(items.articles)

    }

    return (
        <div className={styles.newServices}>
            {items.map(article => (
                <>
                    <h1>{article.title}</h1>
                    <img src={article.urlToImage} alt="bbc-images" />
                    <p>{article.description}</p>
                    <p>{article.content}</p>
                    <h4>{article.publishedAt}</h4>


                </>
            ))}

        </div >
    );
}

export default Services;