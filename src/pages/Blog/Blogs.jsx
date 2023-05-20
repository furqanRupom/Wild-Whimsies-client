import { useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTittle";

const Blogs = () => {
    const location = useLocation()
    const routesName = location.pathname
    useTitle(routesName .slice(1));
  return (
    <div className="mt-32 mb-8">
      <div>
        <h1 className=" py-3 font-Raleway text-4xl">
          Frequently Asked Questions
        </h1>
        <div className="w-full h-[0.14rem] bg-gray-100 mt-8 mb-16">
          <div className="w-36 bg-lime-500 h-full"></div>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-bold py-2">
            1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h1>

          <p className="leading-relaxed text-md">
           <span className="underline font-semibold">Access Token : </span> An access token is a credential that is used to authorize and authenticate a user's access to a protected resource, such as an API or a web application. It is typically issued by an authorization server after the user successfully logs in or grants permission. The access token contains information about the user and their authorization, and it has a limited lifespan.
           <br />
           <span className="underline font-semibold">Refresh Token : </span>
           A refresh token, on the other hand, is a credential that is used to obtain a new access token when the current one expires. It is also issued by the authorization server alongside the access token. The refresh token is long-lived and can be used to request a new access token without requiring the user to log in again.

           <br />
           <span className="underline font-semibold">Store Data : </span>
           To store these tokens on the client-side, it is recommended to use secure storage mechanisms provided by the platform or framework you are using. For web applications, you can store them in an HTTP-only cookie or in the browser's local storage. For mobile applications, you can use secure storage options like Keychain on iOS or SharedPreferences on Android. The goal is to store the tokens in a way that they are secure from unauthorized access and cannot be easily tampered with.
          </p>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-bold py-2">
            2. Compare SQL and NoSQL databases?
          </h1>

          <p className="leading-relaxed text-md">
          <span className="underline font-semibold">SQL database : </span>
          SQL databases, also known as relational databases, organize data in tables with rows and columns. They use structured query language (SQL) to define and manipulate the data. SQL databases provide strong data consistency, support complex queries, and have well-defined schemas, which enforce data integrity. They are a good fit for structured data and applications that require strict data consistency.
          <br />
          <span className="underline font-semibold">NoSQL database : </span>

          NoSQL databases, on the other hand, store data in a non-tabular format, such as key-value pairs, documents, or graphs. They are designed to handle large amounts of unstructured or semi-structured data. NoSQL databases prioritize scalability, flexibility, and high-performance. They often sacrifice strict data consistency for increased scalability and availability. NoSQL databases are suitable for applications with rapidly changing data, large-scale distributed systems, and scenarios where horizontal scalability is crucial.
          </p>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-bold py-2">
            3. What is express js and what is Nest js ?
          </h1>
          <p className="leading-relaxed text-md">
          <span className="underline font-semibold">Express js : </span>
          Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. With Express.js, developers have fine-grained control over the request and response handling process, allowing for the creation of customized and efficient server-side applications.

          <br />
          <span className="underline font-semibold">Nest js : </span>
          Nest.js is a progressive Node.js framework for building scalable and maintainable server-side applications. It leverages TypeScript and incorporates elements of object-oriented programming, functional programming, and reactive programming. Nest.js follows a modular architecture and provides a built-in dependency injection system, making it easy to develop complex and scalable applications
          </p>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-bold py-2">
            4.What is MongoDB aggregate and how does it work?
          </h1>

          <p className="leading-relaxed text-md">
            {" "}
            MongoDB's aggregate is a data analysis tool that lets you perform complex operations on MongoDB collections. It works by defining a sequence of stages to process and transform data in a pipeline fashion, enabling advanced computations and aggregations.
            <br />
            The aggregate framework works by chaining together various stages that define the data processing pipeline. Each stage performs a specific operation on the input documents and passes the results to the next stage. Some common stages include filtering documents, grouping them, calculating aggregations, sorting, and transforming data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
