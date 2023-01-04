<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\StaffCategory;

class StaffCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allStaffCategories = StaffCategory::all();

        return response()->json([
        'allStaffCategories' => $allStaffCategories
        ]);
    }




    public function search(Request $request){


       $name =  $request['s'];

        $allStaffCategory = StaffCategory::where('name', 'like',  '%'.$name. '%')->get();
                
        return response()->json([
            'allStaffCategory' => $allStaffCategory
        ]);

        




    }


    public function allStaffCategory(){

        $allStaffCategory = StaffCategory::orderBy('id', 'DESC')->get();


        $totalStaff = StaffCategory::all()->count();



        return response()->json([
            'allStaffCategory' => $allStaffCategory,
            'totalStaff' => $totalStaff,
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
    public function store(Request $request, StaffCategory $staffCategory)
    {
        //

    //    return $request->all();

        $request->validate([
            'name' => 'required'
        ]);


        $staffCategory->create([
          'name' =>   $request->name
            
        ]);

        return response()->json([
            'success' => true
        ], 201);

    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StaffCategory  $staffCategory
     * @return \Illuminate\Http\Response
     */
    public function show(StaffCategory $staffCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StaffCategory  $staffCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(StaffCategory $staffCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StaffCategory  $staffCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //

        $request->validate([
            'id' => 'required'
        ]);


        $staffCategory = StaffCategory::findOrFail($request->id);

        $staffCategory->name = $request->name;


        if($staffCategory->save()){

            return response()->json([
                'success' => true
            ], 201);
    
        }
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StaffCategory  $staffCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $staffCategory = StaffCategory::findOrFail($id);

        if($staffCategory->delete()){

            return response()->json([

                'success' => 'deleted successfully'

            ]
            );
        }
    }
}
