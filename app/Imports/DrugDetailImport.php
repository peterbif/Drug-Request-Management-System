<?php

namespace App\Imports;

use App\Models\DrugDetail;
use Maatwebsite\Excel\Concerns\ToModel;

class DrugDetailImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new DrugDetail([
            //
            'gen_id' => $row[0],
            'name' => $row[1],
            'brand_name' => $row[2],
            'alternative_name' => $row[3],
            'strength' => $row[4],
            'route' => $row[5],
            'presentation' => $row[6],
        
        ]);

    
    }
}
