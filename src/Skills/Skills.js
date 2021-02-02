import React, { Component } from 'react'
// import $ from "jquery";
import SkillComponent from './skillComponent';
import { Link } from 'react-router-dom';

// import images
import  jqueryLogo from '../img/jquery.png';
import angularLogo from '../img/angular.png';
import gitLogo from '../img/git.png';
import bootstrapLogo from '../img/bootstrap.png';
import css3Logo from '../img/css3.png';
import html5Logo from '../img/html5.png';
import jsLogo from '../img/js.png';
import mysqlLogo from '../img/mysql.png';
import phpLogo from '../img/php.png';
import reactLogo from '../img/react.png';
import seoLogo from '../img/seo.jpg';
import nodejs from '../img/node-js.jpg'
// portfolio
import firebaseAuth from '../img/firebaseAuth.png'


export class Skills extends Component {
   constructor(props){
       super(props);
           this.state={
            // components
            keyfeatures : [
              { image : jqueryLogo, title : "jQuery" },
              { image : angularLogo, title : "Angular" },
              { image : gitLogo, title : "Git" },
              { image : bootstrapLogo, title : "Bootstrap" },
              { image : css3Logo, title : "Css3" },
              { image : html5Logo, title : "Html5" },
              { image : jsLogo, title : "Javascript" },
              { image : mysqlLogo, title : "Mysql" },
              { image : phpLogo, title : "php" },
              { image : reactLogo, title : "React" },
              { image : seoLogo, title : "Posicionamiento web seo" },
              {image:nodejs, title:'Node js'}
          ],
          portfolio : [
            { imageUrl : firebaseAuth, title : "Autenticacion con Firebase & React js", field : "Aplicación de autenticacion (cuenta,google,facebook) desarrollada con react js (Hooks) en el front end, firebase (auth,firestore) como backend.", author : "david llamas", date : "9 December, 2020" },
        ]
           }
       
   }

    
    componentDidMount() {
        // $("#exampleModal").modal('show');
    }

    render() {
        
        return (
            <section className="section bg-skills bg-light-about " id="skills" style={{paddingTop:50,paddingBottom:50}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section_heading mb-4">
                                <h3 className="text-dark mb-1 font-weight-light text-uppercase"><span>Skills</span></h3>
                                <div className="line position-relative"></div>
                            </div>
                        </div>
                    </div>                   
                    <div className="row">     
                            <SkillComponent data={this.state.keyfeatures} />
                    </div>

                    <div className=" mt-5 row">
                        <div className="col-lg-6">
                            <div className="section_heading mb-4">
                                <h3 className="text-dark mb-1 font-weight-light text-uppercase"><span>Portafolio</span></h3>
                                <div className="line position-relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:40}}>
                       
                            {
                                this.state.portfolio.map((work, key) =>
                                    <div lg="6" md="6" key={key} className="mt-4 pt-2 col-md-6 col-lg-6">
                                        <div className="work-container position-relative rounded">
                                                <img src={work.imageUrl} className="img-fluid rounded"  alt="portfolio" />
                                                <div className="overlay-work"></div>
                                                <div className="content">
                                                    <a href="https://github.com/DAVIDLLAMAS09/login-firebase" className="title text-white d-block font-weight-bold">{work.title}</a>
                                                    <small className="text-light">{work.field}</small>
                                                </div>
                                                <div className="client">
                                                    <small className="text-light user d-block"><i className="mdi mdi-account"></i> {work.author}</small>
                                                    <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {work.date}</small>
                                                </div>
                                        </div>
                                    </div>
                                )
                            } 
                    </div>
                   
                   
                </div>
            </section>
        )
    }
}

export default Skills