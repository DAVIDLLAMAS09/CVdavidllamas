import React, { Component } from 'react'
import axios from 'axios';


export class Contacto extends Component {
   constructor(props){
       super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }
       
   }

   componentDidMount(){
       this.getEmpleados();
   }

   handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }


  async getEmpleados() {
    try {
      const res = await axios.get('http://api.lhsunglasses.com.mx/obtenerdatos.php');
      console.log(res.data);
          this.setState({
              empleado:res.data
            })
          
       } catch (error) {
         console.error(error);
       }
}

    render() {
        return (
            <React.Fragment>
            {/* contact Start */}
            <form action="#" >
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."
                    value={this.state.fname}
                    onChange={e => this.setState({ fname: e.target.value })}
                />
                <label>Last Name</label>
                <input type=" text" id="lname" name="lastname" placeholder="Your last name.."
                    value={this.state.lname}
                    onChange={e => this.setState({ lname: e.target.value })}
                />


                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                />


                <label>Message</label>
                <textarea id="message" name="message" placeholder="Write something.."
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                ></textarea>
                <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
            </form >

            
        </React.Fragment>
        )
    }
}

export default Contacto