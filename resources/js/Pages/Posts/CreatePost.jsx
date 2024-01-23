import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import { useState } from 'react';



export default function CreatePost({ auth }) {
    const {
        data,
        setData,
        post,
        errors,
    }  = useForm({title:'' , content: ''});

    const submit = (e) => {
        e.preventDefault();
        post(route('post.store'))
        setData({title: '', content: ''});
    }
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Create Post</h2>}
        >
            <Head title="Create Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100" >
                       
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel    htmlFor="title" value="Title"/>
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value = {data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                    /> 
                                </div>
                                <div>
                                    <InputLabel    htmlFor="content" value="Content"/>
                                    <textarea
                                        id="content"
                                        type="textarea"
                                        name="content"
                                        value = {data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                    /> 
                                </div>
                                
                                
                                <PrimaryButton className="ms-4">
                        Create
                    </PrimaryButton>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}