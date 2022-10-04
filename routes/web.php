<?php

use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\Admin\CarouselController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PaymentMethodController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\WhatsappNumberController;
use App\Http\Controllers\User\CheckoutController;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\UserProductsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class)->name('homepage');

Route::get('/Checkout', CheckoutController::class)->name('checkout');
Route::get('/All-Products', [UserProductsController::class, 'index'])->name('allproducts');
Route::get('/productdetail', [UserProductsController::class, 'show'])->name('productdetail.show');

Route::get('/admin', DashboardController::class)->middleware(['auth'])->name('dashboard');

Route::resource('products', ProductController::class)->middleware(['auth']);
Route::post('products/{product}', [ProductController::class, 'update'])->name('products.update')->middleware(['auth']);
Route::delete('products/{id}/{idImage}', [ProductController::class, 'deleteImage'])->name('products.deleteImage')->middleware(['auth']);

Route::resource('paymentmethod', PaymentMethodController::class)->middleware(['auth']);
Route::post('paymentmethod/{paymentmethod}', [PaymentMethodController::class, 'update'])->name('paymentmethod.update')->middleware(['auth']);

Route::resource('whatsapp', WhatsappNumberController::class)->middleware(['auth']);
Route::post('whatsapp/{whatsapp}', [WhatsappNumberController::class, 'update'])->name('whatsapp.update')->middleware(['auth']);

Route::resource('announcement', AnnouncementController::class)->middleware(['auth']);
Route::post('announcement/{announcement}', [AnnouncementController::class, 'update'])->middleware(['auth'])->name('announcement.update');

Route::resource('carousel', CarouselController::class)->middleware(['auth']);
Route::post('carousel/{carousel}', [CarouselController::class, 'update'])->name('carousel.update')->middleware(['auth']);




require __DIR__ . '/auth.php';
