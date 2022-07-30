<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Carousel;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $carousel = Carousel::all();
        $products = Product::limit(6)->orderBy('created_at', 'desc')->get();
        return Inertia::render('Homepage', [
            "products" => $products,
            'carousel' => $carousel
        ]);
    }
}
