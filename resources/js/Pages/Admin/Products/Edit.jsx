import Breadchumb from "@/Components/Admin/Breadchumb";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function Edit(props) {
    console.log(props);
    const { product } = usePage().props;
    const { data, setData, post, errors } = useForm({
        name: product.name || "",
        price: product.price || "",
        cover: product.cover || null,
        imagesOld: product.images || null,
        images: null,
        video: product.video || "",
        description: product.description || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("products.update", product.id));
    };
    console.log(data);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Edit Product" />
            <Breadchumb
                menu="Products"
                LinkMenu={route("products.index")}
                item="Edit Product"
            />

            <h2 className="text-slate-800 font-bold text-2xl mb-4">
                Edit Product
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="form-control mb-3">
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
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full"
                        defaultValue={data.name}
                    />
                </div>

                <div className="form-control mb-3">
                    <label className="label" htmlFor="price">
                        <span className="label-text text-black">Price</span>
                    </label>
                    <input
                        onChange={(e) => setData("price", e.target.value)}
                        id="price"
                        type="text"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full"
                        defaultValue={data.price}
                    />
                </div>

                <div className="form-control mb-3">
                    <label className="label" htmlFor="cover">
                        <span className="label-text text-black">Cover</span>
                    </label>
                    <input
                        onChange={(e) => setData("cover", e.target.files[0])}
                        id="cover"
                        type="file"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full"
                    />
                </div>

                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text text-black">Old Cover</span>
                    </label>
                    <div className="w-32">
                        <img
                            className="w-full"
                            src={"/storage/" + `${data.cover}`}
                            alt=""
                        />
                    </div>
                </div>

                <div className="form-control mb-3">
                    <label className="label" htmlFor="images">
                        <span className="label-text text-black">Images</span>
                    </label>
                    <input
                        onChange={(e) => setData("images", e.target.files)}
                        id="images"
                        type="file"
                        placeholder="Type here"
                        className="placeholder:text-slate-300 bg-white text-slate-700 input input-bordered w-full"
                        multiple
                    />
                </div>

                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text text-black">
                            Images Galery
                        </span>
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                        {data.imagesOld.length > 0 &&
                            data.imagesOld.map((data, index) => {
                                return (
                                    <div className="w-32" key={index}>
                                        <img
                                            className="w-full"
                                            src={"/storage/" + `${data.image}`}
                                            alt=""
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="form-control mb-3">
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
                            defaultValue={data.video}
                        />
                    </label>
                </div>

                <div className="form-control mb-3">
                    <label className="label" htmlFor="description">
                        <span className="label-text text-black">
                            Description
                        </span>
                    </label>
                    <textarea
                        onChange={(e) => setData("description", e.target.value)}
                        id="description"
                        className="placeholder:text-slate-300 textarea textarea-bordered h-24 bg-white text-slate-700"
                        placeholder="Type here"
                        defaultValue={data.description}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </Authenticated>
    );
}
