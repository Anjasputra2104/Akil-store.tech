import Breadchumb from "@/Components/Admin/Breadchumb";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function Create(props) {
    const { data, setData, post, errors, progress } = useForm({
        tag: null,
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("carousel.store"));
    };
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Edit Carousel" />
            <Breadchumb
                menu="Carousel"
                LinkMenu={route("carousel.index")}
                item="Add Carousel"
            />

            <h2 className="text-slate-800 font-bold text-2xl mb-4">
                Add Carousel
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="name">
                        <span className="label-text text-black">Tag</span>
                    </label>
                    <input
                        onChange={(e) => setData("tag", e.target.value)}
                        id="tag"
                        type="text"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                    />
                </div>

                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="image">
                        <span className="label-text text-black">Image</span>
                    </label>
                    <input
                        onChange={(e) => setData("image", e.target.files[0])}
                        id="image"
                        type="file"
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
