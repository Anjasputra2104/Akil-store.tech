import Breadchumb from "@/Components/Admin/Breadchumb";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function Create(props) {
    const { data, setData, post, errors, progress } = useForm({
        account: null,
        number: null,
        on_behalf: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("paymentmethod.store"));
    };

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Add Payment Method" />
            <Breadchumb
                menu="Payment"
                LinkMenu={route("paymentmethod.index")}
                item="Add Payment Method"
            />

            <h2 className="text-slate-800 font-bold text-2xl mb-4">
                Add Payment Method
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="name">
                        <span className="label-text text-black">Account</span>
                    </label>
                    <input
                        onChange={(e) => setData("account", e.target.value)}
                        id="account"
                        type="text"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                    />
                </div>

                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="price">
                        <span className="label-text text-black">Number</span>
                    </label>
                    <input
                        onChange={(e) => setData("number", e.target.value)}
                        id="number"
                        type="text"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                    />
                </div>

                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="price">
                        <span className="label-text text-black">On_behalf</span>
                    </label>
                    <input
                        onChange={(e) => setData("on_behalf", e.target.value)}
                        id="on_behalf"
                        type="text"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </Authenticated>
    );
}
