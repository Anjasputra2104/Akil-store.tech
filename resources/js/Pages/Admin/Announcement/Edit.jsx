import Breadchumb from "@/Components/Admin/Breadchumb";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import { pullAt } from "lodash";
import React from "react";

export default function Edit(props) {
    const { announcement } = usePage().props;
    const { data, setData, post, errors } = useForm({
        announcement: announcement.announcement || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("announcement.update", announcement.id));
    };
    console.log(data);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Edit Product" />
            <Breadchumb
                menu="Announcement"
                LinkMenu={route("announcement.index")}
                item="Edit Announcement"
            />

            <h2 className="text-slate-800 font-bold text-2xl mb-4">
                Edit Announcement
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
                        defaultValue={data.announcement}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </Authenticated>
    );
}
