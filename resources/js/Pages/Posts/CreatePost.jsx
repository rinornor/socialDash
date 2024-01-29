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
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
                       
                            <form className='space-y-6' onSubmit={submit}>
                                <div>
                                    <div>
                                    <InputLabel className='block text-sm font-medium leading-6 text-gray-900'    htmlFor="title" value="Title"/>
                                    </div>
                                    <div className='mt-2'>
                                    <TextInput
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        id="title"
                                        type="text"
                                        name="title"
                                        value = {data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                    /> 
                                    </div>
                                </div>
                                <div>
                                
                                    <div className='mt-2'>
                                    <InputLabel className='block text-sm font-medium leading-6 text-gray-900'   htmlFor="content" value="Content"/>
                                    </div>
                                    <div>
                                    <textarea
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        id="content"
                                        type="textarea"
                                        name="content"
                                        value = {data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                    /> 
                                    </div>
                                
                                </div>
                                
                                
                                <PrimaryButton className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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