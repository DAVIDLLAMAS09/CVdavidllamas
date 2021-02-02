import React, { Component } from 'react'
import icoPrincipal from '../img/hero-7.png'
import David from '../img/uno.png'
export class HeaderText extends Component {
   constructor(props){
       super(props);
           this.state={
                welcome:'bienvenidos a mi porfolio'
           }
       
   }
    componentDidMount() {
        // $("#exampleModal").modal('show');
    }

    render() {
        return (
            <section className="hero-khulna welcome_area" id="home">
                <div className="home_barisal" style={{backgroundImage:`url(${icoPrincipal})`}}></div>
                <div className="container h-100">
                    <div className="row h-100 justify-content-between align-items-center">
                        <div className="col-12 col-md-6 headerPhone">
                        
                            <div className="welcome_text_area">
                                <h2 className="wow fadeInUp"  style={{visibility:'visible'}}>¡HOLA! <br></br> Soy<span> David Llamas  </span> <br></br><span> Desarrollador Web Frontend.</span></h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                        
                            <div className="welcome_area_thumb text-center">
                                <img  src={David} alt="hola" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
         
        )
    }
}

export default HeaderText

