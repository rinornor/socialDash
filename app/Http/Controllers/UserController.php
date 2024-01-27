<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function toggleFriend($id)
    {
        $userFriends = auth()->user()->friends();
        // if($userFriends->findOrFail($id)){
        //     $userFriends->detach([$id]);
        // }
        // $userFriends->attach([$id]);

        
        // The above solution worked with attach but not with detach method so I changed to the following:
        $userFriends->toggle([$id]);
    }

    public function getFriends(){
        $userFriends = auth()->user()->friends()->get();
        return Inertia::render('Friendship/Friends', ['userFriends' => $userFriends]);
    }

    public function findFriends(){
        $friendsToBe = DB::table('users')
        ->select('users.*')
        ->whereNotExists(function ($query) {
            $query->from('friend_user')
            ->select('*')
            ->where('friend_user.friend_id','=',DB::raw('users.id'));
            })->get();
        // $friendsToBe = User::where('id', '!=', Auth::id())->get();

        return Inertia::render('Friendship/FindFriends', ['friendsToBe' => $friendsToBe]);
    }
}
