<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Favorite extends Model
{
    use HasFactory;

    protected $fillable = ['status'];


    protected function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    protected function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


}
