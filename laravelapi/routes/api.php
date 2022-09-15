<?php

use App\Http\Controllers\API\MembreController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('membres', [MembreController::class, 'index']); 
Route::post('/ajouter-membre', [MembreController::class, 'store']);
// Route::post('/addUser', [MembreController::class, 'addUser']);

Route::get('/modifier-membre/{id}', [MembreController::class, 'modifier']);
Route::put('/update-membre/{id}', [MembreController::class, 'update']);
Route::delete('delete-membre/{id}', [MembreController::class, 'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
