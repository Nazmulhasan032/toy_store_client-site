import useTitle from "../../../Hook/UseTitle";


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold text-center my-5'>Welcome to my Blog page</h2>
            </div>
            <div className='container'>
                <h5 className='font-bold'>Question-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
                <p>
                    <b>Ans: </b> An access token and a refresh token are both commonly used in authentication and authorization protocols to enable secure access to resources on a server. <br />
                    Here is how access tokens and refresh tokens work: <br />

                    1.The user logs in to the application. <br />
                    2.The application requests an access token from the authorization server. <br />
                    3.The authorization server validates the user credentials and issues an access token. <br />
                    4.The application stores the access token in the browser local storage or in a cookie. <br />
                    5.The application uses the access token to access protected resources. <br />
                    For storing access tokens and refresh tokens: <br />
                    we can use local storage and http cookies. but local storage is easily reachable to unknown user. so http cookies is more secure than local storage.

                </p>
                <br />
                <h5 className='font-bold'>Question-2: Compare SQL and NoSQL databases?</h5>
                <p><b>Ans:</b> SQL and NoSQL databases are two different types of databases that store data in different ways. SQL databases are relational databases, which means that data is stored in tables that have rows and columns. NoSQL databases are non-relational databases, which means that data can be stored in a variety of ways, including key-value pairs, documents, and graphs. Also according to flexibility SQL is less flexible than NoSQL. and SQL is more expensive than NoSQL.


                </p>
<br />
                <h5 className='font-bold'>Question-3: Tell us the difference between nodejs and express js.</h5>
                <p><b>Ans:</b> Node.js is a runtime environment that allows to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js. Node.js provides the foundation for server-side JavaScript execution, while Express.js simplifies the process of building web applications and APIs by providing a set of features and abstractions. You can use Express.js within a Node.js environment to build web applications with ease.</p>
<br />
                <h5 className='font-bold'>Question-4: What is MongoDB aggregate and how does it work?</h5>
                <p><b>Ans:</b> MongoDB aggregate is a feature that allows you to perform complex operations on your data. MongoDB aggregate is based on the concept of pipelines, which are a series of stages that are applied to your data in sequence. Each stage performs an operation on the data, and the output of one stage is the input to the next stage.

                    MongoDB aggregate is a feature that allows you to perform complex operations on your data. MongoDB aggregate is based on the concept of pipelines, which are a series of stages that are applied to your data in sequence. Each stage performs an operation on the data, and the output of one stage is the input to the next stage.

                    The stages in a MongoDB aggregate pipeline can be used to filter, sort, group, reshape, and modify documents that pass through the pipeline. One of the most common use cases of MongoDB aggregate is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB aggregate goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on.

                    To use MongoDB aggregate, you need to use the aggregate() method on a collection object. The aggregate() method takes an array of stages as its argument. The following is an example of a simple MongoDB aggregate pipeline that calculates the total number of documents in a collection:

                    
                    Use code with caution. Learn more
                    This pipeline will first match all documents in the collection whose name field is equal to MongoDB. The second stage, count, will then count the number of documents that match the criteria. The output of the aggregate() method will be an array of documents, where each document contains the total number of documents in the collection.

                    MongoDB aggregate is a powerful tool that can be used to perform complex operations on your data. By using aggregate pipelines, you can easily filter, sort, group, reshape, and modify your data to meet your specific needs.</p>
                    <br />


            </div>
        </div>
    );
};

export default Blogs;