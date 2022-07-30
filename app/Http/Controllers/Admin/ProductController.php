<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::orderBy('created_at', 'desc')->get();
        return Inertia::render('Admin/Products/Index', [
            "products" => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Admin/Products/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'cover' => 'mimes:png,jpg,jpeg'
        ]);

        $image_path = "";

        if ($request->hasFile('cover')) {
            $image_path = $request->file('cover')->store('images/products', 'public');
        }

        $product = new Product();
        $product->name = $request->input('name');
        $product->cover = $image_path;
        $product->video = $request->input('video');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->save();

        if($request->hasFile("images")){
                $files=$request->file("images");
                foreach($files as $file){
                    $image_path = $file->store('images/products', 'public');
                    $image = new ProductImage();
                    $image->product_id = $product->id;
                    $image->image = $image_path;
                    $image->save();
                }
            }

        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::where('id',$id)->with('images')->firstOrfail();
        return Inertia::render("Admin/Products/Edit", [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        $image_path = "";

        if ($request->hasFile('cover')) {
            unlink(public_path('storage/'. $product->cover));
            $image_path = $request->file('cover')->store('images/products', 'public');
            $product->update([
                'name' => $request->name,
                'price' => $request->price,
                'video' => $request->video,
                'description' => $request->description,
                'cover' => $image_path
            ]);
        } else{
            $product->update([
                'name' => $request->name,
                'price' => $request->price,
                'description' => $request->description,
                'video' => $request->video,
            ]);
        }

        if($request->hasFile("images")){
                $files=$request->file("images");
                foreach($files as $file){
                    $image_path = $file->store('images/products', 'public');
                    $image = new ProductImage();
                    $image->product_id = $product->id;
                    $image->image = $image_path;
                    $image->save();
                }
            }


        return redirect()->route('products.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $productImage = ProductImage::where('product_id', $product->id)->get();
        foreach($productImage as $image){
            unlink(public_path('storage/'. $image->image));
            $image->delete();
        }
        unlink(public_path('storage/'. $product->cover));
        $product->delete();
        return redirect()->back();
    }

    public function deleteImage($id,ProductImage $idImage)
    {
        // dd($idImage);
        unlink(public_path('storage/'. $idImage->image));
        $idImage->delete();
        return redirect()->back();
    }
}
