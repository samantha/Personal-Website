import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Hello there.</Link></h2>
        </div>
      </header>
      <p>
        Hi, welcome. I&apos;m Samantha (I also go by Sam). For one more thrilling
        year, I will be finishing my post-bacc in Computer Science at
        Long Beach State, absorbing as much CS as possible. As a
        passionate advocate for women in tech, I enjoy seeking novel
        solutions at the crossroads of artificial intelligence and
        machine learning, language, music, and art.
        <br></br> 
        <br></br>
        Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
