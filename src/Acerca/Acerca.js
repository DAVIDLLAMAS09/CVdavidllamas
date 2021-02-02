import React, { Component } from 'react'
//import $ from "jquery";
import frontend from '../img/frontend.png'
// import { Modal, Button } from 'react-bootstrap';

// import { Helmet } from "react-helmet";



export class Acerca extends Component {
   constructor(props){
       super(props);
           this.state={
                welcome:'paginaas de acerca'
           }
       
   }
    componentDidMount() {
        // $("#exampleModal").modal('show');
    }

    render() {
        return (
            <section className="section bg-about bg-light-about " id="about" style={{paddingTop:50,paddingBottom:50}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section_heading mb-4">
                                <h3 className="text-dark mb-1 font-weight-light text-uppercase">Este <span>soy yo</span></h3>
                                <div className="line position-relative"></div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="align-items-center mt-1 row">
                        <div className="col-md-6">
                            <div className="about-desc">
                                <p className=" f-15">Me llamo <strong> David Llamas </strong> tengo <strong>28 años</strong> y vivo en la Ciudad de México (CDMX). <br></br> Siempre me ha interesado todo lo relacionado a la tecnología así como Desarrollo de páginas web, desde el primer año de universidad descubrí el mundo web, así que decidí estudiar esta disciplina para terminar especializándome en el <strong>desarrollo de páginas y aplicaciones web</strong>  desde su diseño hasta la implementación.</p>
                                <p className="f-15">Desde mi primera línea en HTML, código de JS y mis primeros estilos CSS no he dejado de seguir aprendiendo.</p>
                                <div className="mt-5"><a className="btnAbout btn-custom mr-4" href="#skills">Ver portafolio</a></div>
                            </div>
                        </div>
                        <div className="col-md-6 aboutContent mt-4">
                            <div className="fondoAbout"></div>
                            <div className="about-img light-img position-relative p-4">
                                <img src={frontend} alt="" className="img-fluid mx-auto d-block imgAbout" />
                            </div>
                       </div>
                    </div>
                   
                </div>
            </section>
        )
    }
}

export default Acerca