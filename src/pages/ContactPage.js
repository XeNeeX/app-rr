import React, {Component} from 'react';
import '../styles/ContactPage.css'
import {Prompt} from 'react-router-dom'

class ContactPage extends Component {
    state = { 
        value: ""
     }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ""
        })
    }
    handleChange = (e) => {
        if(e.target.value){
        this.setState({
            value: e.target.value,
        })
        }
    }

    render() { 
        return ( 
            <div className="contact">
                <form onSubmit = {this.handleSubmit}>
                    <h3>Napisz do nas!</h3>
                    <textarea onChange={this.handleChange} value={this.state.value} placeholder="Wpisz wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt when={this.state.value} message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić stronę? "/>
            </div>
         );
    }
}
 
export default ContactPage;