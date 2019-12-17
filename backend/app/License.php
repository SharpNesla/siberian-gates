<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class License extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'purchase_date', 'cost', 'eula', 'max_apply_count',
        'software_type_id', 'purchase_date',
        'expiration_date', 'comment'];

    public function softwareType()
    {
        return $this->belongsTo(SoftwareType::class);
    }
    public function software()
    {
        return $this->hasMany(Software::class);
    }
}
