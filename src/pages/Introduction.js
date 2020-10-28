import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import A from '../components/A';
const { personalInfo } = require('../data');

export default class Introduction extends Component {
  render() {
    const { contact, shortName } = personalInfo;
    return (
      <main className="intro-main">
        <article className="intro-container">
          <section className="intro-section-info">
            <section>
              <div className="intro-section-title">
                <h2>{ shortName }</h2>
                <p>WEB DEVELOPER</p>
              </div>
              <div className="intro-section-links">
                <A href={ contact.gitHub } className="links github" />
                <A href={ contact.linkedIn } className="links linkedin" />
              </div>
            </section>
            <div className="intro-section-lets-start">
              <Link to="/home">
                <Input
                  className="input-lets-start"
                  type="button"
                  value="Let's Start"
                />
              </Link>
            </div>
          </section>
          <section className="intro-section-color">
            <div className="div-left"></div>
            <div className="div-rigth"></div>
          </section>
        </article>
      </main>
    )
  }
}
