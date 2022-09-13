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
}
