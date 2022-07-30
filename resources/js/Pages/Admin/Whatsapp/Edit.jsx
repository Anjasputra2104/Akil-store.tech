import Breadchumb from "@/Components/Admin/Breadchumb";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function Edit(props) {
    const { whatsapp } = usePage().props;
    const { data, setData, post, errors } = useForm({
        name: whatsapp.name || "",
        number: whatsapp.number || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("whatsapp.update", whatsapp.id));
    };
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Edit Whatsapp Number" />
            <Breadchumb
                menu="Whatsapp"
                LinkMenu={route("whatsapp.index")}
                item="Edit whatsapp Number"
            />

            <h2 className="text-slate-800 font-bold text-2xl mb-4">
                Edit Whatsapp Number
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="name">
                        <span className="label-text text-black">Name</span>
                    </label>
                    <input
                        onChange={(e) => setData("name", e.target.value)}
                        id="name"
                        type="text"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                        defaultValue={data.name}
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
                        defaultValue={data.number}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </Authenticated>
    );
}
