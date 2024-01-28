import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


export default function Friends({ auth, friendsToBe }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Friends</h2>}
        >
            <Head title="Friends" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        {
                            friendsToBe && friendsToBe.map((friendToBe, index)=>{
                                return (
                                    <div className='flex' key={index}>
                                        <p className='flex-auto w-80'>{friendToBe.name}</p>  
                                        <Link href={route('toggleFriend', [friendToBe.id])} className='flex-auto w-20'>Follow</Link>
                                    </div> 
                                    )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}