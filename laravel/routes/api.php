<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;
use App\Http\Middleware\RequestsNum;

Route::middleware(RequestsNum::class)->group(function () {

Route::prefix("/users")->group(function() {
    Route::get("/", [UserController::class, "index"]);
    Route::post("/", [UserController::class, "store"]);
    Route::get("/{id}", [UserController::class, "show"]);
    Route::put("/{id}", [UserController::class, "update"]);
    Route::delete("/{id}", [UserController::class, "destroy"]);
  });

Route::prefix("/projects")->group(function() {
    Route::get("/", [ProjectController::class, "index"]);
    Route::post("/", [ProjectController::class, "store"]);
    Route::get("/{id}", [ProjectController::class, "show"]);
    Route::put("/{id}", [ProjectController::class, "update"]);
    Route::delete("/{id}", [ProjectController::class, "destroy"]);
  });
  
});