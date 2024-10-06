import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
    return (
        <section className='w-full mt-3 h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] flex flex-col justify-center items-center'>
                <h2 className='font-bold text-3xl uppercase'>Contact with us</h2>
                <div className='w-full h-[600px] border flex flex-col lg:flex-row justify-center'>
                    <div className='flex w-full lg:w-1/2 flex-col text-2xl justify-center border-r-2 px-2'>
                        <p>Street: street 21/a</p>
                        <p>Zip-code: 21-222</p>
                        <p>Phone number: 882 921 021</p>
                        <p>NIP: 21313123131231</p>
                    </div>
                    <div className='w-full lg:w-1/2 p-2' >
                        <form>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='name' className='mb-2'>Full name</label>
                                <input id='name' className='border p-2' required />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='City' className='mb-2'>Email</label>
                                <input type='text' id='City' className='border p-2' required />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='Address' className='mb-2'>Topic</label>
                                <input type='text' id='Address' className='border p-2' required />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='mb-2'>Message</label>
                                <textarea className='border p-2' />
                            </div>
                            <Button type='submit' className='bg-green-600 w-full hover:bg-green-400'>Send</Button>
                        </form>
                    </div>
                </div>
                <div className='w-full'>
                    <iframe height={200} className='mt-3 w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.722689090268!2d20.002566870103305!3d50.03016574685852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644a31c1b1ffd%3A0xdd8d49e0fb5bde4b!2sPla%C5%BCa%20Bagry!5e0!3m2!1spl!2spl!4v1728235209033!5m2!1spl!2spl" ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact