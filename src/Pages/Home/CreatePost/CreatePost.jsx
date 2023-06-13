import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../Hook/UseTitle';

const CreatePost = () => {
    useTitle('Post');

    const { user } = useContext(AuthContext);



    const handlePost = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const toyName = form.toyName.value;
        const category = form.category.value;
        const price = form.price.value;
        const picture = form.toyPicture.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const postOrder = {
            email,
            name,
            toyName,
            category,
            price,
            picture,
            quantity,
            description
        };
        console.log(postOrder);
        fetch('https://nazmul-store-server.vercel.app/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Congrats! Your post has been added successfully.');
                    // <div className="toast toast-top toast-end">
                    //     <div className="alert alert-success">
                    //         <div>
                    //             <span>Congrats! Your post has been added successfully.</span>
                    //         </div>
                    //     </div>
                    // </div>

                }


            })



    }

    return (
        <>
            <div>
                <form onSubmit={handlePost}>
                    <h2 className='text-3xl font-bold text-center'>Post Your Product</h2>
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
                                        <input type="text" name="toyName" placeholder="Toy name" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Category</span>
                                        </label>
                                        <input type="text" name="category" placeholder="sports || regular || mini" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="price" className="input input-bordered" />

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
                        <input className="btn btn-primary" type="submit" value="Post" />
                    </div>
                </form>
            </div>

        </>
    );
};

export default CreatePost;