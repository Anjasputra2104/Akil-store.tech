import Breadchumb from "@/Components/Admin/Breadchumb";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function Create(props) {
    const { data, setData, post, errors, progress } = useForm({
        announcement: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("announcement.store"));
    };

    console.log(data);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Add Announcement" />
            <Breadchumb
                menu="Announcement"
                LinkMenu={route("announcement.index")}
                item="Add Announcement"
            />

            <h2 className="text-slate-800 font-bold text-2xl mb-4">
                Add Announcement
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="form-control mb-3 max-w-md">
                    <label className="label" htmlFor="announcement">
                        <span className="label-text text-black">
                            Announcement
                        </span>
                    </label>
                    <textarea
                        onChange={(e) =>
                            setData("announcement", e.target.value)
                        }
                        id="announcement"
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
