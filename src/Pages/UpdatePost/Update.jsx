import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Update = (props) => {

    const {user} = useContext(AuthContext);


    const {handleUpdate} = props;


    
    return (
        <>
            <div>
                <form>
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
                                        <input type="text" name="toyName" defaultValue={user?.toyName} placeholder="Toy name" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Category</span>
                                        </label>
                                        <input type="text" name="category" defaultValue={user?.category} placeholder="sports || regular || mini" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Price</span>
                                        </label>
                                        <input type="text" name="price" defaultValue={user?.price} placeholder="price" className="input input-bordered" />

                                    </div>

                                </div>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Your Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Toy picture</span>
                                        </label>
                                        <input type="text" name='toyPicture' placeholder="Toy photo URL" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Available Quantity</span>
                                        </label>
                                        <input type="text" name='quantity' placeholder="available quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Description</span>
                                        </label>
                                        <textarea name="description" className="textarea textarea-bordered" placeholder="Description"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="form-control mt-6 mb-8">
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </form>
            </div>

        </>
    );
};

export default Update;