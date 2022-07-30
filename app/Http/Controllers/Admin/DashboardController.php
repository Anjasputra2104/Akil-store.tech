<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use App\Models\Product;
use App\Models\WhatsappNumber;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $product = Product::all()->count();
        $payment = PaymentMethod::all()->count();
        $whatsapp = WhatsappNumber::all();
        return Inertia::render('Admin/Dashboard',[
            'product' => $product,
            'payment' => $payment,
        ]);
    }
}
