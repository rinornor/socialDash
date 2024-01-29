import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, posts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        {posts && posts.map((post, index) => {
                               return  (<div className='flex mx-auto flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
                                 key={index}>
                                    <div className='flex flex-col justify-between p-4 leading-normal'>
                                    <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{post.title}</h1>
                                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{post.content}</p>
                                    </div>
                                    {/* <p>{post.created_at}</p> */}
                                    
                                 </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
