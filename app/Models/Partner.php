<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

class Partner extends Model
{
    protected $fillable = [
        'name',
        'picture'
    ];
}
