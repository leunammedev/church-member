import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


const Addmembre = ()=>{
    const [state,setState]=useState({
        nom: '',
        prenom: '',
        email: '',
        contact: '',
        mode: '',
               

    })
    const handleInput = (e) => {
                setState({
                    ...state,
                    [e.target.name]: e.target.value
                });
            }
   const enregistrerMembre = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/ajouter-membre',state);
        console.log(res);
        swal({
            title: "Reussie!",
            text: res.data.message,
            icon: "success",
            button: "OK!",
        });
        setState({
            nom: '',
            prenom: '',
            email: '',
            contact: '',
            mode: '',
                   
    
        });
    }
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Ajout Des Membres
                            {/* <Link to={'/'} className="btn btn-primary btn-sm float-end"> Retour</Link> */}
                            <a href='/' className="btn btn-primary btn-sm float-end"> Retour</a>
                        </h4>
                    </div>
                    <div className="card-body">

                        <form onSubmit={enregistrerMembre}>

                        <div className="form-group mb-3">
                                <label>Nom</label>
                                <input type="text" name="nom" onChange={handleInput} value={state.nom} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Prenom</label>
                                <input type="text" name="prenom" onChange={handleInput} value={state.prenom} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Email</label>
                                <input type="text" name="email" onChange={handleInput} value={state.email} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Contact</label>
                                <input type="text" name="contact" onChange={handleInput} value={state.contact} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Mode d'arriver</label>
                                <input type="text" name="mode" onChange={handleInput} value={state.mode} className="form-control" />
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
    )
}

// class Addmembre extends Component
// {
//     state = {
//         nom: '',
//         prenom: '',
//         email: '',
//         contact: '',
//         mode: '',
       
//     }

//     handleInput = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     enregistrerMembre = async (e) => {
//         e.preventDefault();

//         const res = await axios.post('http://localhost:8000/api/ajouter-membre', this.state);
//         console.log(res);
//         // if(res.data.status === 200)
//         // {
//         //     console.log(res.data.message);
//         //     swal({
//         //         title: "reussie!",
//         //         text: res.data.message,
//         //         icon: "success",
//         //         button: "OK!",
//         //     });
//         //     // this.setState({
//         //     //     nom: '',
//         //     //     prenom: '',
//         //     //     email: '',
//         //     //     contact: '',
//         //     //     mode: '',
//         //     // });
//         // }
  
//     }

//     render() {
//         return(
            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-12">
            //             <div className="card">
            //                 <div className="card-header">
            //                     <h4>Ajout Des Membres
            //                         <Link to={'/'} className="btn btn-primary btn-sm float-end"> Retour</Link>
            //                     </h4>
            //                 </div>
            //                 <div className="card-body">

            //                     <form onSubmit={this.enregistrerMembre}>

            //                     <div className="form-group mb-3">
            //                             <label>Nom</label>
            //                             <input type="text" name="nom" onChange={this.handleInput} value={this.state.nom} className="form-control" />
            //                         </div>
            //                         <div className="form-group mb-3">
            //                             <label>Prenom</label>
            //                             <input type="text" name="prenom" onChange={this.handleInput} value={this.state.prenom} className="form-control" />
            //                         </div>
            //                         <div className="form-group mb-3">
            //                             <label>Email</label>
            //                             <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
            //                         </div>
            //                         <div className="form-group mb-3">
            //                             <label>Contact</label>
            //                             <input type="text" name="contact" onChange={this.handleInput} value={this.state.contact} className="form-control" />
            //                         </div>
            //                         <div className="form-group mb-3">
            //                             <label>Mode d'arriver</label>
            //                             <input type="text" name="mode" onChange={this.handleInput} value={this.state.mode} className="form-control" />
            //                         </div>
            //                         <div className="form-group mb-3">
            //                             <button type="submit" className="btn btn-primary">Enregistrer Membre</button>
            //                         </div>
            //                     </form>

            //                 </div>
            //             </div>
                            
            //         </div>
            //     </div>
            // </div>
//         );
//     }
// }
export default Addmembre;
