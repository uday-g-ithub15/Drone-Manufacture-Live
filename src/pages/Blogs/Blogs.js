import React from 'react';
import Navbar from '../Shared/Header/Navbar';

const Blogs = () => {
    return (
        <>
            <Navbar />
            <section className='mt-24 text-accent bg-slate-50 h-screen p-3'>
                <article>
                    <h1 className='text-2xl font-semibold'>* How will you improve the performance of a React Application ? </h1>
                    <p></p>
                </article>
                <article>
                    <h1 className='text-2xl font-semibold'>* What are the different ways to manage a state in a React Application ?</h1>
                    <p></p>
                </article>
                <article>
                    <h1 className='text-2xl font-semibold'>* How does prototypical inheritance work ? </h1>
                    <p>

                    </p>
                </article>
                <article>
                    <h1 className='text-2xl font-semibold'>*  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p>

                    </p>
                </article>
                <article>
                    <h1 className='text-2xl font-semibold'>*  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p></p>
                </article>
                <article>
                    <h1 className='text-2xl font-semibold'>* What is a unit test? Why should write unit tests?</h1>
                </article>
            </section>
        </>
    );
};

export default Blogs;