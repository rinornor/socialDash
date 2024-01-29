import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


export default function Friends({ auth, userFriends }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Friends</h2>}
        >
            <Head title="Friends" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                        <div className="mx-auto w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-70">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                        {
                            userFriends && userFriends.map((userFriend, index)=>{
                                return (
                                    

                                    <div key={index}>
                                        <li className='flex py-3 sm:py-4'>
                                        <div className='flex-1 min-w-0 ms-4'>
                                        <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>{userFriend.name}</p>  
                                        <p className='text-sm text-gray-500 truncate dark:text-gray-400'>{userFriend.email}</p>
                                        </div>
                                        <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                        <Link href={route('toggleFriend', [userFriend.id])} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Unfollow</Link>
                                        </div>
                                        </li>
                                    </div> 
                                    )
                            })
                        }
                        </ul>
                        </div>
                        
                        
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


