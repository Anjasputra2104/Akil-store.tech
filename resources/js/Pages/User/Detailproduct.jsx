import Productdescription from "@/Components/User/Productdescription";
import Guest, { getchart } from "@/Layouts/Guest";
import { Link } from "@inertiajs/inertia-react";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Detailproduct({ payment, detail, whatsappNumber }) {
    const [qty, setQty] = useState(1);
    const [now, setNow] = useState({
        idProduct: "",
        name: "",
        cover: "",
        prices: "",
        qty: "",
        nameCus: "",
        emailOrNumber: "",
        paymentMethod: "",
        notes: "",
    });
    const [chart, setChart] = useState(getchart());

    const addToChart = () => {
        var sama = chart.filter((el) => {
            return el.idProduct === detail.id;
        });

        var beda = chart.filter((el) => {
            return el.idProduct !== detail.id;
        });

        if (sama.length > 0) {
            var inputupdatechart = {
                idProduct: detail.id,
                name: detail.name,
                cover: detail.cover,
                prices: detail.price * (sama[0].qty + qty),
                qty: sama[0].qty + qty,
            };
            setChart([...beda, inputupdatechart]);
        } else {
            var inputchart = {
                idProduct: detail.id,
                name: detail.name,
                cover: detail.cover,
                prices: detail.price * qty,
                qty: qty,
            };
            setChart([...chart, inputchart]);
        }
        setQty(1);
    };

    const decreaseqty = () => {
        if (qty > 1) {
            return setQty(qty - 1);
        }
    };

    const handleChange = (e) => {
        setNow({ ...now, [e.target.name]: e.target.value });
    };

    const buyNow = () => {
        var inputsetNow = {
            idProduct: detail.id,
            name: detail.name,
            cover: detail.cover,
            prices: detail.price * qty,
            qty: qty,
            nameCus: "",
            emailOrNumber: "",
            paymentMethod: "",
            notes: "",
        };
        setNow(inputsetNow);
    };

    return (
        <Guest header={detail.name} setChart={setChart} chart={chart}>
            <div className="mt-6"></div>
            <div className="flex justify-between">
                <h3 className="text-2xl font-bold">
                    <span className="text-primary">Details</span> Product
                </h3>
            </div>
            <hr className="mt-3 mb-6" />
            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-6/12 h-auto px-4">
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper mb-6 h-80 md:h-[700px] lg:h-96 rounded-md hover:cursor-pointer"
                    >
                        <SwiperSlide>
                            <img
                                src={"/storage/" + `${detail.cover}`}
                                className="bg-cover w-full h-80 md:h-[700px] lg:h-[400px] shadow-xl rounded"
                                alt={detail.name}
                            />
                        </SwiperSlide>
                        {detail.images.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img
                                        src={"/storage/" + `${data.image}`}
                                        className="bg-cover w-full h-80 md:h-[700px] lg:h-[400px] shadow-xl rounded"
                                        alt={data.id}
                                    />
                                </SwiperSlide>
                            );
                        })}{" "}
                        {detail.video && (
                            <SwiperSlide>
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${detail.video}`}
                                ></iframe>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-2xl font-bold py-4">{detail.name}</h2>
                    <hr className="opacity-30" />
                    <h3 className="py-4 text-2xl text-blue-800 font-bold">
                        Rp. {detail.price}
                    </h3>
                    <div className="flex flex-wrap -m-1">
                        <div className="btn-group w-full lg:w-4/12 flex p-1 lg:py-0">
                            <button
                                className="btn bg-slate-800 px-5"
                                onClick={decreaseqty}
                            >
                                -
                            </button>
                            <button className="btn btn-ghost flex-grow">
                                {qty}
                            </button>
                            <button
                                className="btn bg-slate-800 px-5"
                                onClick={() => setQty(qty + 1)}
                            >
                                +
                            </button>
                        </div>
                        <div className="w-6/12 lg:w-4/12 flex p-1 lg:py-0">
                            <button
                                onClick={addToChart}
                                className="btn bg-slate-800 flex flex-grow gap-2 items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span>Add Chart</span>
                            </button>
                        </div>
                        <div className="w-6/12 lg:w-4/12 flex p-1 lg:py-0">
                            <label
                                onClick={buyNow}
                                htmlFor="my-modal-5"
                                className="btn bg-slate-800 flex-grow"
                            >
                                Buy Now
                            </label>
                        </div>
                    </div>
                    <Productdescription detail={detail} />
                </div>
            </div>
            {/* modal buy now */}

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-xl p-0 rounded-md">
                    <div className="modal-header bg-slate-800 flex justify-between px-4 py-2 ">
                        <h3 className="text-lg mt-0">
                            <span className="font-bold ">Buy </span>From
                            Whatsapp
                        </h3>
                        <label
                            htmlFor="my-modal-5"
                            className="btn btn-sm btn-circle btn-primary"
                        >
                            ✕
                        </label>
                    </div>

                    <div className="modal-body p-4 bg-neutral">
                        <div className="flex flex-wrap">
                            <div className="w-8/12 lg:w-9/12">
                                <h3 className="text-xl capitalize font-bold">
                                    {now.name}
                                </h3>
                                <div className="flex flex-wrap mt-4 text-sm">
                                    <div className="w-7/12">Qty</div>
                                    <div className="w-5/12">: {now.qty}</div>
                                    <div className="w-7/12">Subtotal</div>
                                    <div className="w-5/12">
                                        :{" "}
                                        <span className="text-primary">
                                            Rp. {now.prices}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-4/12 lg:w-3/12">
                                <img
                                    className="bg-cover w-full h-28 lg:h-32 shadow-xl rounded"
                                    src={
                                        now.cover &&
                                        "/storage/" + `${now.cover}`
                                    }
                                    alt="Shoes"
                                />
                            </div>
                        </div>
                    </div>
                    <form className="modal-footer bg-slate-800 p-4">
                        <div className="modal-form flex flex-wrap -mx-4">
                            <div className="w-6/12 px-4">
                                <input
                                    type="text"
                                    name="nameCus"
                                    placeholder="Name"
                                    className="w-full input input-ghost"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="w-6/12 px-4">
                                <input
                                    type="text"
                                    name="emailOrNumber"
                                    placeholder="Email or Number"
                                    className="w-full input input-ghost"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="w-full px-4 mt-4">
                                <select
                                    defaultValue="default"
                                    name="paymentMethod"
                                    className="select select-ghost w-full"
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option disabled value="default">
                                        Chose Payment Method
                                    </option>
                                    {payment.map((method, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={
                                                    method.account -
                                                    method.number -
                                                    method.on_behalf
                                                        ? ` O/b ${method.on_behalf}`
                                                        : null
                                                }
                                            >
                                                {method.account} -{" "}
                                                {method.number}
                                                {method.on_behalf
                                                    ? ` O/b ${method.on_behalf}`
                                                    : null}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="w-full mt-4 px-4">
                                <textarea
                                    name="notes"
                                    className="textarea textarea-ghost w-full"
                                    placeholder="Notes"
                                    onChange={(e) => handleChange(e)}
                                ></textarea>
                            </div>
                        </div>
                        <label className="modal-action" htmlFor="my-modal-5">
                            <a
                                target="_blank"
                                href={`https://web.whatsapp.com/send?phone=${whatsappNumber[0].number}&text=Halo%20Admin..%20I%20want%20buy%20*${now.name}.*%0A%0A*Qty*%20:%20${now.qty}%0A*price*%20:%20Rp.${now.prices}%0A_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%0A%0A*Payment%20Method*%20:%0A${now.paymentMethod}%0A%0A*Notes*%20:%20${now.notes}%0AO/b.%0A*${now.nameCus}*%20(%20${now.emailOrNumber}%20)%0A%0A`}
                                htmlFor="my-modal-5"
                                className="btn btn-primary w-full"
                            >
                                Order
                            </a>
                        </label>
                    </form>
                </div>
            </div>
        </Guest>
    );
}
