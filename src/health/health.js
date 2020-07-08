import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./health.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";

class HealthNews extends Component {
  state = {
    loading: true,
    allArticle: [],
  };
  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=22834ea9211247c390fc7419f6b0f406";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ allArticle: data.articles, loading: false });

    // console.log(data.articles[0]);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    if (!this.state.allArticle.length) {
      return <div> There are no articles </div>;
    }
    return (
      <div className={styles.healthbg}>
        <Header />
        <div className={styles.healthStyle}>
          <h1>Health</h1>
        </div>
        <div>
          <div className={styles.healthnews}>
            {this.state.allArticle.map((article) => (
              <>
                <a href={article.url}>
                  <h2>{article.title}</h2>
                </a>
                <a href={article.url}>
                  <img src={article.urlToImage} alt="" />
                </a>
                <p>
                  {article.content}
                  <a href={article.url}>Read More</a>
                </p>
                <p>Source: {article.source.name}</p>
                <h4>Author - {article.author}</h4>
                <h4>Published On - {article.publishedAt}</h4>
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

function HealthRoutes() {
  return (
    <Switch>
      <Route path="/health" exact component={HealthNews} />
    </Switch>
  );
}

export default HealthRoutes;
