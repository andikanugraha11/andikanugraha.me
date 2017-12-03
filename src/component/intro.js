import React, { Component } from 'react';
import './test.css';

class Intro extends Component {

      render() {
        return (
          <div>
            <section className="intro">
                <div className="sp"></div>
                <div className="intro-content">
                    <img src="http://propertheme.com/img/slider/my-photo.jpg" alt=""/>
                    <div class="intro-text">
                        <h1>Hello I'am <strong> Andika Nugraha</strong></h1>
                        <div class="cd-headline clip is-full-width">
                            <span>I am web</span>
                            <span class="cd-words-wrapper">
                                <b class="is-visible">developer</b>
                                <b>designer</b>
                                <b>blogger</b>
                            </span>
                        </div>		
                        <p>Founder of ProperTheme. Professonal ui/ux and frontend developer based on germany. Aviable of freelancer.</p>
                    </div>
                </div>
            </section>
          </div>
        );
      }
}

export default Intro;
