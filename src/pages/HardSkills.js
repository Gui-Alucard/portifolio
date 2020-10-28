import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CircularProgressBar from '../components/CircularProgressBar';
import Input from '../components/Input';

export default class HardSkills extends Component {
  render() {
    return (
      <main className="hardskills-container">
        <h2>HARD SKILLS</h2>
        <section className="hardskills-middle">
          <article className="container">
            <CircularProgressBar
              progress="80"
              skill="each do map"
            />
          </article>
          <aside className="menu-bar"></aside>
        </section>
        <footer className="footer">
          <Link to="/home">
            <div className="input-startover" />
            <Input
              className="input"
              type="button"
              value="Home"
            />
          </Link>
        </footer>
      </main>
    )
  }
}
