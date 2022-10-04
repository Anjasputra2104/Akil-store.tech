<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentMethodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $payment = PaymentMethod::all();
        return Inertia::render('Admin/Payment/Index', [
            'payment' => $payment
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Payment/Create');
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
            'account' => 'required',
            'number' => 'required',
        ]);

        $create = new PaymentMethod();
        $create->account = $request->input('account');
        $create->number = $request->input('number');
        $create->on_behalf = $request->input('on_behalf');
        $create->save();

        return redirect()->route('paymentmethod.index');
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
        $payment = PaymentMethod::find($id);
        return Inertia::render("Admin/Payment/Edit", [
            'payment' => $payment
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PaymentMethod $paymentmethod)
    {
        $this->validate($request, [
            'account' => 'required',
            'number' => 'required',
        ]);
        $paymentmethod->update([
            'account' => $request->account,
            'number' => $request->number,
            'on_behalf' => $request->on_behalf,
        ]);

        return redirect()->route('paymentmethod.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PaymentMethod $paymentmethod)
    {
        $paymentmethod->delete();
        return redirect()->back();
    }
}
