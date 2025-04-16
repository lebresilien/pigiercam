<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

class News extends Model
{
    protected $table = "news";

    protected $fillable = [
        'name',
        'cover',
        'slug',
        'description'
    ];

    protected $appends = ['full_slug', 'full_cover'];

    public function getFullSlugAttribute(): string
    {
        return URL::to('/') . '/' . ltrim($this->slug, '/');
    }

    public function getFullCoverAttribute()
    {
        return URL::to('/') . '/storage/' . ltrim($this->cover, '/');
    }
}
