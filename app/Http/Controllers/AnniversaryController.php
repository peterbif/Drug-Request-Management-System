<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Customer;
use App\Models\Anniversary;
use Illuminate\Http\Request;

class AnniversaryController extends Controller
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


  
    




    public function getAllWeddings(){



        $day = Carbon::now()->format('d');
        $month = Carbon::now()->format('m');


       // return  $date2 = Carbon::today();

       $allWeddings = Customer::with('CustomerContact')->whereDay('wedding_date',  $day)
                                     ->WhereMonth('wedding_date', '=', $month)
                                    ->orderBy('id', 'DESC')->get();

       $allWeddings2 = Customer::with('CustomerContact')->whereDay('wedding_date',  $day)
                                                ->WhereMonth('wedding_date', '=', $month)
                                   //   ->orWhereMonth('wedding_date', '=', $date)
                                                ->orderBy('id', 'DESC')->get();

       $totalWeddings = Customer::with('CustomerContact')->whereDay('wedding_date',  $day)
                                                   ->WhereMonth('wedding_date', '=', $month)
                                       // ->orWhereMonth('wedding_date', '=', $date)
                                        ->orderBy('id', 'DESC')->get()->count();

       



       
       return response()->json([
           'allWeddings' => $allWeddings,
           'allWeddings2' => $allWeddings2,
           'totalWeddings' => $totalWeddings,
          
           
       ],201);

 
   }



    public function getAllAnniversaries(){



         $day = Carbon::now()->format('d');
         $month = Carbon::now()->format('m');


        // return  $date2 = Carbon::today();




        $allAnniversaries = Customer::with('CustomerContact')->whereDay('date_of_birth',  $day)
                                      ->WhereMonth('date_of_birth', '=', $month)
                                     ->orderBy('id', 'DESC')->get();

        $allAnniversaries2 = Customer::with('CustomerContact')->whereDay('date_of_birth',  $day)
                                                 ->WhereMonth('date_of_birth', '=', $month)
                                    //   ->orWhereMonth('wedding_date', '=', $date)
                                                 ->orderBy('id', 'DESC')->get();

        $totalAnniversaries = Customer::with('CustomerContact')->whereDay('date_of_birth',  $day)
                                                    ->WhereMonth('date_of_birth', '=', $month)
                                        // ->orWhereMonth('wedding_date', '=', $date)
                                         ->orderBy('id', 'DESC')->get()->count();

        



        
        return response()->json([
            'allAnniversaries' => $allAnniversaries,
            'allAnniversaries2' => $allAnniversaries2,
            'totalAnniversaries' => $totalAnniversaries,
           
            
        ],201);

  
    }





    public function search(Request $request){



        // $day = Carbon::now()->format('d');
        // $month = Carbon::now()->format('m');

     
       $date_from = $request->date_from;
       $date_to = $request->date_to;
       $name = $request->searchName;



      if($date_from){


          $day = date("d", strtotime($date_from));

          $month = date("m", strtotime($date_from));




       $allAnniversaries = Customer::with('CustomerContact')->whereDay('date_of_birth',  $day)
                                     ->WhereMonth('date_of_birth', '=', $month)
                                    ->orderBy('id', 'DESC')->get();

       $allAnniversaries2 = Customer::with('CustomerContact')->whereDay('date_of_birth',  $day)
                                                ->WhereMonth('date_of_birth', '=', $month)
                                   //   ->orWhereMonth('wedding_date', '=', $date)
                                                ->orderBy('id', 'DESC')->get();

       $totalAnniversaries = Customer::with('CustomerContact')->whereDay('date_of_birth',  $day)
                                                   ->WhereMonth('date_of_birth', '=', $month)
                                       // ->orWhereMonth('wedding_date', '=', $date)
                                        ->orderBy('id', 'DESC')->get()->count();
      }else if($name){




        $allAnniversaries = Customer::with('CustomerContact')
        ->where('surname', 'LIKE', '%'.$name.'%')
         ->orWhere('firstname', 'LIKE', '%'.$name.'%')
       ->orderBy('id', 'DESC')->get();

          $allAnniversaries2 = Customer::with('CustomerContact')
               
          ->where('surname', 'LIKE', '%'.$name.'%')
          ->orWhere('firstname', 'LIKE', '%'.$name.'%')
                   ->orderBy('id', 'DESC')->get();

            $totalAnniversaries = Customer::with('CustomerContact')
           ->where('surname', 'LIKE', '%'.$name.'%')
           ->orWhere('firstname', 'LIKE', '%'.$name.'%')
          // ->orWhereMonth('wedding_date', '=', $date)
           ->orderBy('id', 'DESC')->get()->count();

         
      }else{

        $this->getAllAnniversaries();
      }

       



       
       return response()->json([
           'allAnniversaries' => $allAnniversaries,
           'allAnniversaries2' => $allAnniversaries2,
           'totalAnniversaries' => $totalAnniversaries,
          
           
       ],201);


   }





   public function search2(Request $request){



    // $day = Carbon::now()->format('d');
    // $month = Carbon::now()->format('m');

 
   $date_from = $request->date_from;
   $date_to = $request->date_to;
   $name = $request->searchName;



  if($date_from){


      $day = date("d", strtotime($date_from));

      $month = date("m", strtotime($date_from));




   $allWeddings = Customer::with('CustomerContact')->whereDay('wedding_date',  $day)
                                 ->WhereMonth('wedding_date', '=', $month)
                                ->orderBy('id', 'DESC')->get();

   $allWeddings2 = Customer::with('CustomerContact')->whereDay('wedding_date',  $day)
                                            ->WhereMonth('wedding_date', '=', $month)
                               //   ->orWhereMonth('wedding_date', '=', $date)
                                            ->orderBy('id', 'DESC')->get();

   $totalWeddings = Customer::with('CustomerContact')->whereDay('wedding_date',  $day)
                                               ->WhereMonth('wedding_date', '=', $month)
                                   // ->orWhereMonth('wedding_date', '=', $date)
                                    ->orderBy('id', 'DESC')->get()->count();
  }else if($name){




    $allWeddings = Customer::with('CustomerContact')
    ->where('surname', 'LIKE', '%'.$name.'%')
     ->orWhere('firstname', 'LIKE', '%'.$name.'%')
   ->orderBy('id', 'DESC')->get();

      $allWeddings2 = Customer::with('CustomerContact')
           
      ->where('surname', 'LIKE', '%'.$name.'%')
      ->orWhere('firstname', 'LIKE', '%'.$name.'%')
               ->orderBy('id', 'DESC')->get();

        $totalWeddings = Customer::with('CustomerContact')
       ->where('surname', 'LIKE', '%'.$name.'%')
       ->orWhere('firstname', 'LIKE', '%'.$name.'%')
      // ->orWhereMonth('wedding_date', '=', $date)
       ->orderBy('id', 'DESC')->get()->count();

     
  }else{

    $this->getAllWeddings();
  }

   



   
   return response()->json([
       'allWeddings' => $allWeddings,
       'allWeddings2' => $allWeddings2,
       'totalWeddings' => $totalWeddings,
      
       
   ],201);


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
     * @param  \App\Models\Anniversary  $anniversary
     * @return \Illuminate\Http\Response
     */
    public function show(Anniversary $anniversary)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Anniversary  $anniversary
     * @return \Illuminate\Http\Response
     */
    public function edit(Anniversary $anniversary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Anniversary  $anniversary
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Anniversary $anniversary)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Anniversary  $anniversary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Anniversary $anniversary)
    {
        //
    }
}
