<?php

namespace App\Http\Controllers;

use App\Models\DrugDetail;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class DrugDetailController extends Controller
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


 

    public function search(Request $request){


        $name =  $request['s'];

        if($name){

        $allDrugs = DrugDetail::with('status')->where('name', 'like',  '%'.$name. '%')
                           ->orWhere('brand_name', 'like',  '%'.$name. '%')->get();


         $allDrug2 = DrugDetail::with('status')->where('name', 'like',  '%'.$name. '%')
         ->orWhere('brand_name', 'like',  '%'.$name. '%')->get();


         $totalDrugs = DrugDetail::with('status')->where('name', 'like',  '%'.$name. '%')
         ->orWhere('brand_name', 'like',  '%'.$name. '%')->get()->count();

        }else{

            $allDrugs = DrugDetail::with('status')->limit(50)->orderBy('id', 'DESC')->get();

            $allDrug2 = DrugDetail::with('status')->orderBy('id', 'DESC')->get();
    
    
            $totalDrugs = DrugDetail::all()->count();
    
        }
                   

        return response()->json([
            'allDrugs' => $allDrugs,
            'allDrug2' => $allDrug2,
            'totalDrugs' => $totalDrugs,
        ]);

        




    }


    public function allDrugs(){

        $allDrugs = DrugDetail::with('status')->limit(20)->orderBy('id', 'DESC')->get();

        $allDrug2 = DrugDetail::with('status')->orderBy('id', 'DESC')->get();


        $totalDrugs = DrugDetail::all()->count();



        return response()->json([
            'allDrugs' => $allDrugs,
            'allDrug2' => $allDrug2,
            'totalDrugs' => $totalDrugs,
        ]);

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
    public function store(Request $request, DrugDetail $DrugDetail)
    {
        //

     $all =  $request->validate([

              'name' => 'required',
             'brand_name' => 'required',
              'strength' => 'required', 
              'presentation' => 'required',
               'status_id' => 'required', 
            
        ]);

        $user = JWTAuth::parseToken()->authenticate();
       

         $all['user_id'] =  $user->id; 


         $DrugDetail->create($all);

         return response()->json([
             'success' => true
        ],201);


        

         
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DrugDetail  $drugDetail
     * @return \Illuminate\Http\Response
     */
    public function show(DrugDetail $drugDetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DrugDetail  $drugDetail
     * @return \Illuminate\Http\Response
     */
    public function edit(DrugDetail $drugDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DrugDetail  $drugDetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $request->validate([

           'id' => 'required'
          
      ]);

   

        $DrugDetail = DrugDetail::findOrFail($request->id);




        $user = JWTAuth::parseToken()->authenticate();
       
       
        if($DrugDetail->name){
            $DrugDetail->name = $request->name;
           }

           if($DrugDetail->brand_name){
            $DrugDetail->brand_name = $request->brand_name;
           }

           if($DrugDetail->strength){
            $DrugDetail->strength = $request->strength;
           }


           if($DrugDetail->presentation){
            $DrugDetail->presentation = $request->presentation;
           }


           if($DrugDetail->status_id){
            $DrugDetail->status_id = $request->status_id;
           }


            $DrugDetail->user_id = $user->id;
           

     if($DrugDetail->save()){
         return response()->json([
             'success' => true
        ],201);
    }



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DrugDetail  $drugDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

     $DrugDetail = DrugDetail::findOrFail($id);


     if($DrugDetail->delete()){
        return response()->json([
            'success' => true
       ],201);
   }

    }
}
