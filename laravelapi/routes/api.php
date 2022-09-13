<?php

use App\Http\Controllers\API\MembreController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('membres', [MembreController::class, 'index']); 
Route::post('/ajouter-membre', [MembreController::class, 'store']);
Route::get('/modifier-membre/{id}', [MembreController::class, 'modifier']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
