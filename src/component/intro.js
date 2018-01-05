import React, { Component } from 'react';
import Typist from 'react-typist';
import './home.css';

class Intro extends Component {
    render() {
        return (
            <div>
            <section className="intro">
                <div className="sp"></div>
                <div className="intro-content">
                    <img src="https://instagram.fcgk10-1.fna.fbcdn.net/t51.2885-15/e35/16122725_164386350720746_4895664097783185408_n.jpg" alt=""/>
                    <div className="intro-text">
                        <h1>Hello I'am <strong> Andika Nugraha</strong></h1>
                        <div className="cd-headline clip is-full-width">
                            <span className="cd-words-wrapper">
                                <Typist ms={100}>
                                    <b>Fullstack Developer</b>
                                </Typist>
                            </span>
                        </div>		
                        <p>based on Jabodetabek</p>
                    </div>
                    <div className="social-links">
                        <a href="http://www.github.com/AndikaNugraha11"><i className="fa fa-github"></i></a>
                        <a href="https://plus.google.com/u/0/+AndikaNugraha11"><i className="fa fa-google"></i></a>
                        <a href="https://id.linkedin.com/in/andika-nugraha-256049102"><i className="fa fa-linkedin"></i></a>
                        <a href="http://www.instagram.com/Andika.nugr"><i className="fa fa-instagram"></i></a>
                        <a href="http://www.facebook.com/AndikaNugraha11"><i className="fa fa-facebook"></i></a>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Intro;
