<?php


use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $posts = Post::all();
    return Inertia::render('Dashboard', ['posts' => $posts]);
})->middleware(['auth', 'verified'])->name('dashboard');

// Post Routes

Route::resource('/post', PostController::class);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // For friendships:
    Route::get('toggleFriend/{id}', [UserController::class, 'toggleFriend'])->name('toggleFriend');
    Route::get('getFriends', [UserController::class, 'getFriends'])->name('getFriends');
    Route::get('findFriends', [UserController::class, 'findFriends'])->name('findFriends');
});

require __DIR__.'/auth.php';
