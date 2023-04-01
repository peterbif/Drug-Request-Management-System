<?php

namespace App\Http\Controllers;

use App\Imports\DrugDetailImport;
use App\Models\DrugDetail;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Maatwebsite\Excel\Facades\Excel;

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
                           ->orWhere('brand_name', 'like',  '%'.$name. '%')
                           ->orWhere('alternative_name', 'like',  '%'.$name. '%')
                           ->get();


         $allDrug2 = DrugDetail::with('status')->where('name', 'like',  '%'.$name. '%')
         ->orWhere('brand_name', 'like',  '%'.$name. '%')
         ->orWhere('alternative_name', 'like',  '%'.$name. '%')
         ->get();


         $totalDrugs = DrugDetail::with('status')->where('name', 'like',  '%'.$name. '%')
         ->orWhere('brand_name', 'like',  '%'.$name. '%')
         ->orWhere('alternative_name', 'like',  '%'.$name. '%')
         ->get()->count();

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

    public function uploadFiles( Request $request){

     return $request->all();

    

     return $file = $request->file('file')->getRealPath();

    Excel::import(new DrugDetailImport ,  $file);
    // $ext = $file->getClientOriginalExtension();
    // $type = $this->getType($ext);
    // $fileName = $request['name'] . '.' . $ext;

    //     if (Storage::putFileAs('/storage/uploads', $file, fileName)) {
    //     // Make sure you storage the location of the file somewhere. For example in your database
    // }
    
    // Return a proper response
    return response()->json([
        'success' => true,
    ]);
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
             'gen_id'=> 'required',
             'brand_name' => 'required',
             'alternative_name' => 'required',
             'strength' => 'required', 
             'presentation' => 'required',
             'status_id' => 'required', 
            
        ]);

        $user = JWTAuth::parseToken()->authenticate();
       

         $all['user_id'] =  $user->id; 
         $all['root'] =  $request->root; 



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

    //    return  $request->all();
        //
        $request->validate([

           'id' => 'required'
          
      ]);

   

        $DrugDetail = DrugDetail::findOrFail($request->id);



        $user = JWTAuth::parseToken()->authenticate();
       
       
        if($request->name){
            $DrugDetail->name = $request->name;
           }

           if($request->gen_id){
            $DrugDetail->gen_id = $request->gen_id;
           }


           

           if($request->brand_name){
            $DrugDetail->brand_name = $request->brand_name;
           }

           if($request->strength){
            $DrugDetail->strength = $request->strength;
           }

           if($request->alternative_name){
            $DrugDetail->alternative_name = $request->alternative_name;
           }

           if($request->root){
            $DrugDetail->root = $request->root;
           }


           

           if($request->presentation){
            $DrugDetail->presentation = $request->presentation;
           }

           if($request->status_id){
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
