import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Addmembre extends Component
{
    state = {
        nom: '',
        prenom: '',
        email: '',
        contact: '',
        mode: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    enregistrerMembre = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/ajouter-membre', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                nom: '',
                prenom: '',
                email: '',
                contact: '',
                mode: '',
            });
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Ajout Des Membres
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end"> Retour</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <form onSubmit={this.enregistrerMembre}>

                                <div className="form-group mb-3">
                                        <label>Nom</label>
                                        <input type="text" name="nom" onChange={this.handleInput} value={this.state.nom} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Prenom</label>
                                        <input type="text" name="prenom" onChange={this.handleInput} value={this.state.prenom} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Contact</label>
                                        <input type="text" name="contact" onChange={this.handleInput} value={this.state.contact} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Mode d'arriver</label>
                                        <input type="text" name="mode" onChange={this.handleInput} value={this.state.mode} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Enregistrer Membre</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        );
    }
}
export default Addmembre;
