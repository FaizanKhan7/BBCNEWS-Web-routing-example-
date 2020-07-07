import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./technology.module.css";
import Header from "../components/Header/header";

class TechnologyNews extends Component {
  state = {
    loading: true,
    article: null,
  };

  async componentDidMount() {
    const url =
      "http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=22834ea9211247c390fc7419f6b0f406";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ article: data.articles[0], loading: false });
    console.log(data.articles[0]);
  }
  render() {
    return (
      <div className={styles.technologybg}>
        <Header />
        <div className={styles.technologyStyle}>
          <h1> Technology </h1>
        </div>
        <div>
          {this.state.loading || !this.state.article ? (
            <div>Loading</div>
          ) : (
            <div className={styles.technologyNews}>
              <a href={this.state.article.url}>
                <h2>{this.state.article.title}</h2>
              </a>
              <a href={this.state.article.url}>
                <img src={this.state.article.urlToImage} alt="" />
              </a>
              <p>
                {this.state.article.content}
                <a href={this.state.article.url}>Learn More</a>
              </p>
              <p>Source: {this.state.article.source.name}</p>
              <h4>Author - {this.state.article.author}</h4>
              <h4>Published On{this.state.article.author}</h4>
            </div>
          )}
        </div>
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
