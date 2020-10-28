import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
const { personalInfo } = require('../data');

export default class Home extends Component {
  render() {
    const { about } = personalInfo;
    return (
      <main className="home-container">
        <article className="home-article">
          <header className="header-container">
            <section className="header-about">
              <h3>Starting</h3>
              <p className="about">{ about.aboutEn }</p>
              <p className="intro">{ about.introduction }</p>
            </section>
            <div className="image-nowme" />
          </header>
          <nav className="home-links">
            <Link to="/hardskills">
              <div className="box-link">
                <div className="hard-img" />
                <Input
                  className="input"
                  type="button"
                  value="Hard Skills"
                />
              </div>
            </Link>
            <Link to="/thiscode">
              <div className="box-link">
                <div className="code-img" />
                <Input
                  className="input"
                  type="button"
                  value="This Code"
                />
              </div>
            </Link>
            <Link to="/innerlife">
              <div className="box-link">
                <div className="inner-img" />
                <Input
                  className="input"
                  type="button"
                  value="Inner Life"
                />
              </div>
            </Link>
          </nav>
        </article>
        <footer className="footer">
          <Link to="/">
            <div className="input-startover" />
            <Input
              className="input"
              type="button"
              value="Start Over"
            />
          </Link>
        </footer>
      </main>
    )
  }
}
