import React from 'react';
import Navbar from '../Shared/Header/Navbar';

const Blogs = () => {
    return (
        <>
            <Navbar />
            <section className='mt-24 text-accent bg-slate-50 h-screen p-3'>
                <article>
                    <h1 className='text-2xl font-semibold'>* How will you improve the performance of a React Application ? </h1>
                    <p>
                        For make performance of a react application, we have to make sure that components receive only necessary props. It will let us yhe over rendering unnecessary features. We have to keep components state local.
                    </p>
                </article>

                <article>
                    <h1 className='text-2xl font-semibold'>* What are the different ways to manage a state in a React Application ?</h1>
                    <div>
                        <p>There are 4 ways to manage a state.</p>
                        <ol>
                            <li>Local</li>
                            <li>Global</li>
                            <li>Server</li>
                            <li>URL</li>
                        </ol>
                    </div>
                </article>
                <article>
                    <h1 className='text-2xl font-semibold'>*  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p>
                        We don't set state  [...] because it doesn't change the state immediately, instead it creates a pending state transition. To ignore this problem we use useState hook.
                    </p>
                </article>
                <article>
                    <h1 className='text-2xl font-semibold'>*  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p>
                        To find products by name, i'll use use array filter method. Because there be many items with same name.
                    </p>
                </article>
                <article>
                    <h1 className='text-2xl font-semibold'>* What is a unit test? Why should write unit tests?</h1>
                    <p>
                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                    </p>
                </article>
            </section>
        </>
    );
};

export default Blogs;