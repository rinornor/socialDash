import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Post({postimi, theRoute}) {
    return (
            <div className="p-6 text-gray-900 dark:text-gray-100">
                    <div>      
                        <h1>{postimi.title}</h1>    
                        <p>{postimi.content}</p>
                        {/* <p>{post.created_at}</p> */}
                        <Link href={theRoute}>Edit</Link>
                    </div>
            </div>
    );
}