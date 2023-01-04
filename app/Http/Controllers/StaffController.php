<?php

namespace App\Http\Controllers;

use Image;
use App\Models\User;
use App\Models\Staff;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

      // all user and staff

      public function getAllStaff(){

        $allstaff = User::limit(50)->orderBy('id', 'DESC')->get();

        $allstaff2 = User::all();

        $totalStaff = User::all()->count();



        return response()->json([
            'allstaff' => $allstaff,
            'allstaff2'  => $allstaff2,
            'totalStaff' => $totalStaff,
        ]);

        
    }

    public function search(Request $request){


        $name =  $request['s'];

        $allStaff = User::with('staffcategory')->where('surname', 'like',  '%'.$name. '%')
                           ->orWhere('firstname', 'like',  '%'.$name. '%')->get();

        return response()->json([
            'allStaff' => $allStaff
        ]);

        




    }
    public function uploadPassport(Request $request){

    // return $request->passport;

        $request->validate([
            'id' => 'required',
            // 'passport' => 'required|image|mimes:jpg,jpeg,png,gif',
            'passport' => 'required',

        ]);
            
        

        $staff = User::findOrFail($request->id);

        // return $staff->passport;


        $photo = $request->file('passport');
        if ($photo) {
            $image = $request->file('passport');
            $name = time().'.'.$image->getClientOriginalExtension();
            
            $destinationPath = public_path('/thumbnail');
            $imgFile = Image::make($image->getRealPath());
            $imgFile->resize(150, 150, function ($constraint) {
                $constraint->aspectRatio();
            })->save($destinationPath.'/'.$name);
            $destinationPath = public_path('/passports');
            $image->move($destinationPath, $name);

          

         if($staff->passport){

            $passportPhoto = public_path('/passports/').$staff->passport;

           
            if (file_exists($passportPhoto)) {
                @unlink($passportPhoto);
            }
         }


         $staff->passport = $name;
        }

        
           
            if($staff->save()){

                return response()->json(['success' => 'Passport successfully uploaded']);
            }
        }
        
        
    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function show(Staff $staff)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function edit(Staff $staff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //

        $request->validate([
            'id' => 'required',
            
        ]);

        $staff = User::findOrFail($request->id);

        if($request->surname){
        $staff->surname = $request->surname;
        }
        if($request->firstname){
         $staff->firstname = $request->firstname;
         }
       
        if($request->secret_question_id){
         $staff->secret_question_id = $request->secret_question_id;
         }
        if($request->answer){
         $staff->answer = $request->answer;
            }

       if($request->staff_category_id){
        $staff->staff_category_id = $request->staff_category_id;
                   }
        if($request->email){
         $staff->email = $request->email;
         }

         
           if($request->password){
            $staff->password = bcrypt($request->password);
            }
           

      if($staff->save()){

        return response()->json([
           'success' => 'Staff updated successfully.'
        ]);

        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $user = User::findOrFail($id);

        if($user->delete()){

            return response()->json([

                'success' => 'deleted successfully'

            ]
            );
        }
    }
}
