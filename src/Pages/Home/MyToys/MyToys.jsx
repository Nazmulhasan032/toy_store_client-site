
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useTitle from "../../../Hook/UseTitle";


const MyToys = () => {
    useTitle('MyToys')
    const { user } = useContext(AuthContext);
    const [control, setControl] = useState(false);

    const [toys, setToys] = useState([]);




    useEffect(() => {
        fetch(`https://nazmul-store-server.vercel.app/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [user, control]);


   

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure want to delete?");
        if (proceed) {
            fetch(`https://nazmul-store-server.vercel.app/allToys/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = toys.filter((toy) => toy._id !== id);
                        setToys(remaining);
                    }
                });
        }
    };



    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const id = form._id.value;
        const email = form.email.value;
        const name = form.name.value;
        const toyName = form.toyName.value;
        const category = form.category.value;
        const price = form.price.value;
        const picture = form.toyPicture.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToys =(id, email, name, toyName, category, price, picture, quantity, description);

        fetch(`https://nazmul-store-server.vercel.app/updateToy/${id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(updateToys),
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                setControl(!control);

            }
        });
        
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr className="text-center">
                        <th>Your Posted Product</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map((toy) => (
                        <tr key={toy._id} data-aos="fade-up">
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={toy.picture}
                                                alt="Avatar Tailwind CSS Component"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{toy.toyName}</div>
                                        <div className="text-sm opacity-50">Seller: {toy.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Email: {toy.email}
                                <br />
                                <span className="badge badge-ghost badge-sm">Category: {toy.category}</span>
                            </td>
                            <td>Price: ${toy.price}</td>
                            <td>
                                <div className="flex items-center justify-center space-x-2">
                                    <label htmlFor={`my-modal-${toy._id}`} className="btn btn-primary">
                                        Edit
                                    </label>
                                    <button onClick={() => handleDelete(toy._id)} className="btn btn-ghost btn-xs">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
            {toys.map((toy) => (
                <div key={toy._id}>
                    <input type="checkbox" id={`my-modal-${toy._id}`} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-full max-w-3xl">
                            {/* modal form start here */}
                        <form onSubmit={handleUpdate}>
                    <h2 className='text-3xl font-bold text-center'>Update Your Product</h2>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="card flex-shrink-0 w-full max-w-sm">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Your Email</span>
                                        </label>
                                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Toy name</span>
                                        </label>
                                        <input type="text" name="toyName" defaultValue={toy.toyName} placeholder="Toy name" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Category</span>
                                        </label>
                                        <input type="text" name="category" defaultValue={toy.category} placeholder="sports || regular || mini" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Price</span>
                                        </label>
                                        <input type="text" name="price" defaultValue={toy.price} placeholder="price" className="input input-bordered" />
                                        <input className="hidden" type="text" name="_id" defaultValue={toy._id} />

                                    </div>

                                </div>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Your Name</span>
                                        </label>
                                        <input type="text" name='name' defaultValue={toy.name} placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Toy picture</span>
                                        </label>
                                        <input type="text" name='toyPicture' defaultValue={toy.picture} placeholder="Toy photo URL" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Available Quantity</span>
                                        </label>
                                        <input type="text" name='quantity' defaultValue={toy.quantity} placeholder="available quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Description</span>
                                        </label>
                                        <textarea name="description" defaultValue={toy.description} className="textarea textarea-bordered" placeholder="Description"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="form-control mt-6 mb-8">
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </form>
                {/* modal form end here */}
                            <div className="modal-action">
                                <label htmlFor={`my-modal-${toy._id}`} className="btn">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyToys;
