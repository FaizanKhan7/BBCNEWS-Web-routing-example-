import React, { useState, useEffect } from 'react';
import styles from "./services.module.css"

function About() {
    useEffect(() => {
        fetchNewItem();
    }, []);

    const [Newitem, setNewItem] = useState([]);

    const fetchNewItem = async () => {
        const NewBitdata = await fetch(
            'https://newsapi.org/v2/everything?q=bitcoin&apiKey=22834ea9211247c390fc7419f6b0f406'
        );


        const Newitem = await NewBitdata.json();
        console.log(Newitem.articles);
        setNewItem(Newitem.articles)

    }

    return (
        <div className={styles.newServices}>
            {Newitem.map(article => (
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

export default About;