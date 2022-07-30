<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WhatsappNumber;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WhatsappNumberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $whatapp = WhatsappNumber::all();
        return Inertia::render('Admin/Whatsapp/Index', [
            'whatsapp' => $whatapp
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Whatsapp/Create');
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
            'number' => 'required',
        ]);


        $create = new WhatsappNumber();
        $create->name = $request->input('name');
        $create->number = $request->input('number');
        $create->save();

        return redirect()->route('whatsapp.index');
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
        $whatsapp = WhatsappNumber::find($id);
        return Inertia::render("Admin/Whatsapp/Edit", [
            'whatsapp' => $whatsapp
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WhatsappNumber $whatsapp)
    {
        $this->validate($request, [
                'name' => 'required',
                'number' => 'required',
        ]);
        $whatsapp->update([
                'name' => $request->name,
                'number' => $request->number,
        ]);

        return redirect()->route('whatsapp.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(WhatsappNumber $whatsapp)
    {
        $whatsapp->delete();
        return redirect()->back();
    }
}
