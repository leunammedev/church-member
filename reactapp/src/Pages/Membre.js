import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

class Membre extends Component
{

    state = {
        membres:[],
        loading: true,
    }
    async componentDidMount(){

        const res = await axios.get('http://localhost:8000/api/membres');
        // console.log(res.data.membre);
        if(res.data.status ===200)
        {
            this.setState({
                membres: res.data.membre,
               loading: false,
            });
        }
    }

    render() {

        var membre_HTMLTABLE = "";
        if(this.state.loading)
        {
            membre_HTMLTABLE = <tr><td colSpan="8"> <h3>Loading...</h3> </td></tr>
        }
        else
        {
            membre_HTMLTABLE =
            this.state.membres.map((item)  => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nom}</td>
                        <td>{item.prenom}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.mode}</td>
                        <td>
                            <Link to={`modifier-membre/${item.id}`} className="btn btn-success btn-sm">Modifier</Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                        </td>
                    </tr>
                );

            });
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Donnee Des Membres
                                    <Link to={'ajouter-membre'} className="btn btn-primary btn-sm float-end"> Ajouter membre</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                           <th>ID</th> 
                                           <th>Nom</th> 
                                           <th>Prenom</th> 
                                           <th>Email</th> 
                                           <th>Contact</th> 
                                           <th>Mode d'arriver</th> 
                                           <th>Modifier</th> 
                                           <th>Supprimer</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {membre_HTMLTABLE}
                                    </tbody>

                                </table>

                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        );
    }
}
export default Membre;
