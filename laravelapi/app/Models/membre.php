<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class membre extends Model
{
    use HasFactory;
    protected $table = 'membres';
    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'contact',
        'mode',
    ];
}
