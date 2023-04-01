<?php

// use App\Http\Controllers\StaffController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


//auth prefix
// Route::group(['prefix' => 'auth'], function () {

//     Route::post('/login', 'AuthController@login');

//     Route::post('/register', 'AuthController@register');

//     Route::post('/resetPassword', 'AuthController@resetPassword');


    


// });

Route::group(['prefix' => 'auth'], function () {

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('/resetPassword', 'resetPassword');

    // Route::post('refresh', 'refresh');

});

});


//staffCategorycontroller
Route::controller(StaffCategoryController::class)->group(function () {

Route::get('/getAllStaffCategories','index');



});






//staffcontroller
Route::controller(StaffController::class)->group(function () {

    
    
    Route::get('/getAllStaff', 'getAllStaff');
    
    });


    
    // Route::get('/getAllFabrics', 'SalesController@getAllFabrics');


Route::get('/allSecretQuestions', 'SecretQuestionsController@index');

Route::get('/search/staff', 'StaffController@search');


Route::get('/search/staffCategory', 'StaffCategoryController@search');



Route::get('/allStatuses', 'StatusController@index');

Route::get('/search/drug', 'DrugDetailController@search');


Route::get('/allDrugs', 'DrugDetailController@allDrugs');

Route::post('/importFile', 'DrugDetailController@uploadFiles');






















// Route::apiResource('posts', PostController::class)->middleware('auth:sanctum');


// Route::group(['namespace' => 'Dashboard', 'middleware' => ['auth:web'], 'prefix' => 'dashboard'], function () {
//     $this->group(['prefix' => 'administrator'], function () {
//         $this->get('panel', 'AdminController@index');
// });

// Route::middleware('auth:sanctum')->group(function () {    Route::get('/me', 'AuthController@me');});

//protect api using 


// Route::apiResource('/staffs', StaffController::class)->middleware('auth:sanctum');



    Route::middleware('jwtauth')->group(function () {


    Route::apiResource('/staffs', 'StaffController');

    Route::post('/uploadPassport', 'StaffController@uploadPassport');

    Route::post('/user', 'AuthController@getUser');

    Route::post('/checkToken', 'AuthController@checkToken');

   
    // Route::get('/getallFabrics', 'FabricsMaterialController@getAllFabricss');

    // Route::get('/getAllSales', 'SalesController@getAllSales');

    // Route::post('/getAllAnniversaries', 'AnniversaryController@getAllAnniversaries');

    // Route::post('/getAllWeddings', 'AnniversaryController@getAllWeddings');


    
    

    Route::apiResource('/drugs', 'DrugDetailController');


    // Route::get('/getAllDrugs', 'DrugDetailController@getAllDrugs');

    
    Route::apiResource('/staffCategory', 'StaffCategoryController');

    Route::get('/allStaffCategory', 'StaffCategoryController@allStaffCategory');


    // Route::apiResource('/orders', 'OrderController');




    // Route::apiResource('/fabrics', 'FabricsMaterialController');

    // Route::apiResource('/sales', 'SalesController');


    Route::post('/logout', 'AuthController@logout');

    // Route::get('/todayDelivery', 'OrderController@todayDelivery');


    

    



    

    


    


});