import Guest, { getchart } from "@/Layouts/Guest";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function Checkout({ payment }) {
    const [chart, setChart] = useState(getchart());
    const [conti, setConti] = useState(false);
    const [contiVal, setContiVal] = useState({
        nameCus: "",
        emailOrNumber: "",
        paymentMethod: "",
        notes: "",
    });

    const deleteItem = (idProduct) => {
        const filter = chart.filter((element, index) => {
            return element.idProduct !== idProduct;
        });
        setChart(filter);
    };

    const handleChange = (e) => {
        setContiVal({ ...contiVal, [e.target.name]: e.target.value });
    };

    return (
        <Guest header="Checkout" chart={chart} setChart={setChart}>
            <div className="mt-6"></div>
            <div className="flex justify-between">
                <h3 className="text-2xl font-bold">
                    <span className="text-primary">Chart</span> Products
                </h3>
            </div>
            <hr className="mt-3 mb-6" />
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-9/12 px-4">
                    {chart.length > 0 ? (
                        chart.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-between mb-4 items-center"
                                >
                                    <div className="flex gap-3 items-center">
                                        <div className="w-20 md:w-32 h-20 md:h-32">
                                            <img
                                                className="bg-cover w-full h-full shadow-xl rounded"
                                                src={
                                                    "/storage/" +
                                                    `${data.cover}`
                                                }
                                                alt="Shoes"
                                            />
                                        </div>
                                        <div>
                                            <Link
                                                href={route(
                                                    "productdetail.show",
                                                    {
                                                        id: data.idProduct,
                                                    }
                                                )}
                                                className="text-primary font-medium text-2xl mt-0"
                                            >
                                                {data.name}
                                            </Link>
                                            <div className="font-bold">
                                                Rp. {data.prices}
                                            </div>
                                            <div>
                                                Qty :{" "}
                                                <span className="font-bold">
                                                    {data.qty}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${conti ? "hidden" : ""}`}>
                                        <button
                                            value={data.idProduct}
                                            onClick={() =>
                                                deleteItem(data.idProduct)
                                            }
                                            className="btn btn-xs btn-error border-none hover:bg-red-500 text-white font-bold"
                                        >
                                            delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <>
                            <div className="flex items-center justify-center mt-10">
                                No Products
                            </div>
                        </>
                    )}
                </div>
                <div className="w-full md:w-3/12 px-4">
                    <div className="card bg-slate-800 rounded-lg shadow-xl">
                        <div className="card-body p-4">
                            <h2 className="card-title mb-4">
                                shopping summary
                            </h2>
                            <p className="mb-2">
                                Subtotal :{" "}
                                <span className="text-primary">
                                    Rp.
                                    {chart.length > 0 &&
                                        chart
                                            .map((data) => data.prices)
                                            .reduce((a, b) => a + b)}
                                </span>
                            </p>
                            <div className="card-actions justify-end">
                                <a
                                    href="#order"
                                    onClick={() => setConti(true)}
                                    className="btn btn-primary w-full"
                                >
                                    Checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="order"
                className={`mt-8 bg-slate-800 p-6 rounded ${
                    conti ? "" : "hidden"
                }`}
            >
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
                            <option value="default" disabled>
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
                                        {method.account} - {method.number}
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
                    <div className="px-4 mt-4 flex justify-between w-full">
                        <a
                            target="_blank"
                            href={`https://api.whatsapp.com/send?phone=6289529591732&text=Halo%20Admin..%20Saya%20mau%20beli%20%0A%0A${chart.map(
                                (data) => {
                                    return `*${data.name}*%0ARp.%20${data.prices}%0A*Qty*%20:%20${data.qty}%0A-------------------------%0A%0A`;
                                }
                            )}%0A*Total*%20:%20Rp.%20${
                                chart.length > 0 &&
                                chart
                                    .map((data) => data.prices)
                                    .reduce((a, b) => a + b)
                            }%0A*Nama*%20:%20${contiVal.nameCus}%20(${
                                contiVal.emailOrNumber
                            })%0A*Metode%20Pembayaran*%20:%20Pulsa%20${
                                contiVal.paymentMethod
                            }%0A*Note*%20:%20${contiVal.notes}%0A`}
                            htmlFor="my-modal-5"
                            className="btn btn-primary"
                        >
                            Order
                        </a>
                        <button
                            className="btn btn-ghost btn-active hover:btn-primary"
                            onClick={() => setConti(!conti)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
