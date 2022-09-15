import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


class Modifiermembre extends Component 
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

    async componentDidMount() {
        const memb_id = this.props.match.params.id;
        // console.log(memb_id);
        const res = await axios.get(`http://localhost:8000/api/modifier-membre/${memb_id}`);
        if (res.data.status === 200) {
            this.setState({
                nom: res.data.membre.nom,
                prenom: res.data.membre.prenom,
                email: res.data.membre.email,
                contact: res.data.membre.contact,
                mode: res.data.membre.mode,
            });
        }

    }

    updateMembre = async (e) => {
        e.preventDefault();

        document.getElementById('updatbtn').disabled = true;
        document.getElementById('updatbtn').innerText = "Mise à Jour";
        const memb_id = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-membre/${memb_id}`, this.state);
        if (res.data.status === 200) 
        {
            // console.log(res.data.message);
            swal({
                title: "Mise à Jour!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
            });
            document.getElementById('updatbtn').disabled = false;
            document.getElementById('updatbtn').innerText = "Mettre à Jour";
        }
    }

        render() {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Modifier Membres
                                        {/* <Link to={'/'} className="btn btn-primary btn-sm float-end"> Retour</Link> */}
                                        <a href='/' className="btn btn-primary btn-sm float-end"> Retour</a>
                                    </h4>
                                </div>
                                <div className="card-body">

                                    <form onSubmit={this.updateMembre}>

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
                                            {/* <input type="text" name="mode" onChange={this.handleInput} value={this.state.mode} className="form-control" /> */}
                                            <select class="form-select" aria-label="Default select example">
                                                <option>Attestation</option>
                                                <option>Bapteme</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-3">
                                            <button type="submit" id="updatbtn" className="btn btn-primary">Mettre à Jour</button>
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
export default Modifiermembre;
