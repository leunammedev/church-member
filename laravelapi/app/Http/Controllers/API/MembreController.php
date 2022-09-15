<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Membre;

class MembreController extends Controller
{
    public function index()
    {
        $membres = Membre::all();
        return response()->json([
            'status'=>200,
            'membre'=> $membres,
        ]);
    }

   public function store(Request $request)
   {
        // $request->validate(
     
        // [
        //     'nom'=>'required|max:191',
        //     'prenom'=>'required|max:191',
        //     'email'=>'required|email|max:191',
        //     'contact'=>'required|numeric|max:8|min:8',
        //     'mode'=>'required|max:191',
        // ]);

        // $validate = Membre::create($request->all());

        // if($validate->fails())
        // {
        //     return response()->json([
        //         'validate_err'=>$validate->messages(),
        //     ]);
        // }
        // else
        // {

        // }
            
            $membre = new Membre;
            $membre->nom = $request->input('nom');
            $membre->prenom = $request->input('prenom');
            $membre->email = $request->input('email');
            $membre->contact = $request->input('contact');
            $membre->mode = $request->input('mode');
            $membre->save();

            return response()->json([
                'status'=>200,
                'message'=>'Membre ajouter avec succes',
            ]);

   }

   public function modifier($id)
   {
    $membre = Membre::find($id);
    return response()->json([
        'status'=> 200,
        'membre' =>$membre,
    ]);
   }
   public function update(Request $request, $id)
   {
    $membre = Membre::find($id);
    $membre->nom = $request->input('nom');
    $membre->prenom = $request->input('prenom');
    $membre->email = $request->input('email');
    $membre->contact = $request->input('contact');
    $membre->mode = $request->input('mode');
    $membre->update();

    return response()->json([
        'status'=>200,
        'message'=>'Mise à jour effectuer avec succes',
    ]);
   
   }
   public function destroy($id)
   {
        $membre = Membre::find($id);
        $membre->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Membre supprimer effectuer avec succes',
        ]);
   }
}
