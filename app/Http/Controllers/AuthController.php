<?php

namespace App\Http\Controllers;

// use Intervention\Image\Image;
use Image;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;


class AuthController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User 
     */
   



    public function register(Request $request)
    {

        // return $request->all();

        $validation = Validator::make($request->all(), [
            'surname' => 'required',
                'firstname'  => 'required',
                'secret_question_id'  => 'required',
                'staff_category_id' => 'required',
                'answer' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:8',
                'password_confirmation' => 'required|min:8|same:password',
        ]);

        if ($validation->fails()) {

            return response()->json(
                $validation->errors(), 422);
        }



        $allData = $request->all();
        $allData['password'] = bcrypt($allData['password']);

        $user = User::create($allData);

        // $resArray = [];
        // $resArray['token'] = $user->createToken('Personal Access Token')->accessToken;
        // $resArray['user'] = $user;

        return response()->json(['success' => true, 'user' => $user], 200);
    }


    /**
     * Login The User
     * @param Request $request
     * @return User
     */
   



    public function login(Request $request)
    {

        $validation = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
          

        ]);

        if ($validation->fails()) {

            return response()->json($validation->errors(), 422);
        }


        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
            'status_id' => 1

        ];


        if (!$token = JWTAuth::attempt($credentials)) {

            return response()->json(['error' => 'These credentials are invalid',

                'success' => false

            ], 401);

        }

        return response()->json(['success' => true, 'token' => $token], 200);




    }




    public function resetPassword(Request $request)
    {

        $validation = Validator::make($request->all(), [
            'answer' => 'bail|required',
            'secret_question_id' => 'required',
            'password' => 'bail|required|confirmed|min:8',
            'password_confirmation' => 'required|min:8|same:password',
        ]);

        if ($validation->fails()) {

            return response()->json(
                $validation->errors(), 422);
        }else{

       
        $matchCase = ['secret_question_id' =>  $request->secret_question_id, 'answer' => $request->answer, 'email' => $request->email];

        $secret_question = User::where($matchCase)->first();

        if($secret_question) {

            if($secret_question->update(['password' => bcrypt($request->password)])){
            return response()->json(['success' => 'password reset',

        ], 200);
    }
        }

        else {
            return response()->json(['error' => 'Invalid secret question or Answer',

                'status_code' => 422

            ], 422);
        }

    }


    }

    public function checkToken()
    {

        return response()->json(['success' => true], 200);
    }


    public function logout(Request $request)
    {

        $this->validate($request, [
            'token' => 'required'
        ]);

        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        }
        catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getUser(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        //  $user = JWTAuth::toUser($request->token);

        $user = JWTAuth::parseToken()->authenticate();

        $matchThese = ['status_id' => 1, 'id' => $user->id];


        $user = User::with('staffcategory')->where($matchThese)->get();
        
        return response()->json([
            'user' => $user,
        

        ]);
    }

    


   
}

