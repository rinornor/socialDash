import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Post({postimi, theRoute}) {
    return (
            <div className="p-6 text-gray-900 dark:text-gray-100">
                    <div>      
                        <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{postimi.title}</h1>    
                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{postimi.content}</p>
                        {/* <p>{post.created_at}</p> */}
                        <Link className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' href={theRoute}>Edit</Link>
                    </div>
            </div>
    );
}