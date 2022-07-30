import Breadchumb from "@/Components/Admin/Breadchumb";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function Create(props) {
    const { data, setData, post, errors, progress } = useForm({
        name: null,
        price: null,
        cover: null,
        images: null,
        video: null,
        description: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("products.store"));
    };

    console.log(data);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Edit Product" />
            <Breadchumb
                menu="Products"
                LinkMenu={route("products.index")}
                item="Add Product"
            />

            <h2 className="text-slate-800 font-bold text-2xl mb-4">
                Add Product
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="name">
                        <span className="label-text text-black">
                            Product Name
                        </span>
                    </label>
                    <input
                        onChange={(e) => setData("name", e.target.value)}
                        id="name"
                        type="text"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                    />
                </div>

                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="price">
                        <span className="label-text text-black">Price</span>
                    </label>
                    <input
                        onChange={(e) => setData("price", e.target.value)}
                        id="price"
                        type="text"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                    />
                </div>

                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="cover">
                        <span className="label-text text-black">Cover</span>
                    </label>
                    <input
                        onChange={(e) => setData("cover", e.target.files[0])}
                        id="cover"
                        type="file"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                    />
                </div>

                <div className="form-control max-w-md mb-3">
                    <label className="label" htmlFor="images">
                        <span className="label-text text-black">Images</span>
                    </label>
                    <input
                        onChange={(e) => setData("images", e.target.files)}
                        id="images"
                        type="file"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full max-w-md"
                        multiple
                    />
                </div>

                <div className="form-control mb-3 max-w-md">
                    <label className="label" htmlFor="video">
                        <span className="label-text text-black">Video</span>
                    </label>
                    <label className="input-group">
                        <span className="bg-slate-200">Url</span>
                        <input
                            onChange={(e) => setData("video", e.target.value)}
                            type="text"
                            placeholder="https://youtu.be/....."
                            className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full"
                        />
                    </label>
                </div>

                <div className="form-control mb-3 max-w-md">
                    <label className="label" htmlFor="description">
                        <span className="label-text text-black">
                            Description
                        </span>
                    </label>
                    <textarea
                        onChange={(e) => setData("description", e.target.value)}
                        id="description"
                        className="placeholder:text-slate-300 textarea textarea-bordered h-24 max-w-md bg-white text-slate-700"
                        placeholder="Type here"
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </Authenticated>
    );
}
