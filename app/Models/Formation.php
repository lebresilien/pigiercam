<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    protected $fillable = [
        'name',
        'picture'
    ];

    protected $appends = ['full_picture'];

    public function getFullPictureAttribute()
    {
        return URL::to('/') . '/storage/' . ltrim($this->picture, '/');
    }

}
