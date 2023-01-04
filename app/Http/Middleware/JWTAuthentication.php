<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class JWTAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            //code...
          $user =  JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            //throw $th;
            if($e instanceof TokenExpiredException){
            $newToken = JWTAuth::parseToken()->refresh();
           return response()->json(['success'=>false, 'token'=> $newToken,  'status'=>'Token Expired'], 200);
            }
            else if($e instanceof TokenInvalidException){
           return response()->json(['success'=>false, 'message'=>'Token Invalid'], 401);

            }else{
           return response()->json(['success'=>false, 'message'=>'Token not found'], 401);

            }

            
        }
        return $next($request);
    }
}
