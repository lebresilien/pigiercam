<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

class Testimony extends Model
{
    protected $fillable = [
        'description',
        'picture',
        'star',
        'bio'
    ];

    protected $appends = ['full_picture'];

    public function getFullPictureAttribute()
    {
        return URL::to('/') . '/storage/' . ltrim($this->picture, '/');
    }
}
