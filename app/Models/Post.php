<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'title', 'content', ];

    protected $appends = ['author'];

 



    public function user(): BelongsTo 
    {
        return $this->belongsTo(User::class);
    }

    public function comment(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function favorite(): HasMany
    {
        return $this->hasMany(Favorite::class);
    }


    public function getAuthorAttribute(): string 
    {
        return $this->user->name;
    }

   




    
}
