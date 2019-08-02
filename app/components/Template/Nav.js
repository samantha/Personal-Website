import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
            </Link>
            <header>
                <h2>Samantha Hangsan</h2>
                <p>
                    <a href="mailto:samanthahangsan@gmail.com">
                        samanthahangsan@gmail.com
                    </a>
                </p>
            </header>
        </section>

        {/* <section className="blurb">
            <h2>About</h2>
            <p>
                
            </p>
            <ul className="actions">
                <li>
                    {window.location.pathname !== `${BASE_PATH}/resume` ? (
                        <Link to="/resume" className="button">
                            Learn More
                        </Link>
                    ) : (
                        <Link to="/about" className="button">
                            About Me
                        </Link>
                    )}
                </li>
            </ul>
        </section> */}

        <section id="footer">
            <ul className="icons">
                {data.map(s => (
                    <li key={s.label}>
                        <a href={s.link}>
                            <FontAwesomeIcon icon={s.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    </section>
);

export default Nav;
