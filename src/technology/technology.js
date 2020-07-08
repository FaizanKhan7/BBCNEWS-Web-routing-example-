import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./technology.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";

class TechnologyNews extends Component {
  state = {
    loading: true,
    allArticles: [],
  };

  async componentDidMount() {
    const url =
      "http://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=22834ea9211247c390fc7419f6b0f406";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ allArticles: data.articles, loading: false });
    console.log(data);
  }
  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }

    if (!this.state.allArticles.length) {
      return <div> There are no articles </div>;
    }
    return (
      <div className={styles.technologybg}>
        <Header />
        <div className={styles.technologyStyle}>
          <h1> Technology </h1>
        </div>
        <div>
          <div className={styles.technologyNews}>
            {this.state.allArticles.map((article) => (
              <>
                <a href={article.url}>
                  <h2>{article.title}</h2>
                </a>
                <a href={article.url}>
                  <img src={article.urlToImage} alt="" />
                </a>
                <p>
                  {article.content}
                  <a href={article.url}>Learn More</a>
                </p>
                <p>Source: {article.source.name}</p>
                <h4>Author - {article.author}</h4>
                <h4>Published On{article.author}</h4>
                <div className={styles.underline}></div>
              </>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function TechnologyRoutes() {
  return (
    <Switch>
      <Route path="/technology" exact component={TechnologyNews} />
    </Switch>
  );
}

export default TechnologyRoutes;
