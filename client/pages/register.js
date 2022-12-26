import Head from 'next/head'
import Image from 'next/image'
import bg from '../images/bg.png'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie'
import Router from 'next/router'

const url = 'http://127.0.0.1:8000';

const initialValue = {
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
}


export default function register() {

    const [user, setUser] = useState(initialValue);
    const [credentialsError, setCredentialsError] = useState(false);
    const [errMessage, setErrMessage] = useState('');


    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const click = () => {
        setCredentialsError(false);
        axios.post(`${url}/signup`,user).then(response => {
            const cookies = new Cookies();
            cookies.set('token', response.data.token, { path: '/' });
            console.log("Success ", response);
            Router.push('/')
          }).catch(error => {
            if (error.response.data.message === "invalid email.") {
                setCredentialsError(true);
                setErrMessage(error.response.data.message);
                return
            }

            if (error.response.data.message === "email already exist") {
                setCredentialsError(true);
                setErrMessage(error.response.data.message);
                return
            }

            if (error.response.data.message === "Passwords are not the same") {
                setCredentialsError(true);
                setErrMessage(error.response.data.message);
                return
            }

          });


    }

    return (
        <div>
            <Head>
                <title>Register</title>
                <meta name="description" content="Register" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>

                <div className='bg-green md:flex items-center hidden '>
                    <div className='justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                        <Image src={bg} height={'1000px'} alt='test' />
                    </div>
                </div>

                <div className='flex items-center bg-beige'>
                    <div className='text-center w-96 mx-auto p-5'>
                        <div className='w-52 md:hidden'>
                            <Image src={bg} height={"1000px"} width={"755px"} alt='test' />
                        </div>
                        <h1 className='font-bold font-Poppins text-4xl text-left my-4'>Register</h1>
                        <div>
                            <input type={"text"} onChange ={(e) => onValueChange(e)} name='fullName' className='bg-gray-100 outline-none w-full font-Poppins rounded-2xl h-12 p-5 mb-6' placeholder='full name'></input>
                        </div>
                        <div>
                            <input type={"email"} onChange ={(e) => onValueChange(e)} name='email' className='bg-gray-100 outline-none w-full font-Poppins rounded-2xl h-12 p-5 mb-6' placeholder='Email Address'></input>
                        </div>
                        <div>
                            <input type={"password"} onChange ={(e) => onValueChange(e)} name='password' className='bg-gray-100 outline-none w-full font-Poppins rounded-2xl h-12 p-5 mb-6' placeholder='Password'></input>
                        </div>
                        <div>
                            <input type={"password"} onChange ={(e) => onValueChange(e)} name='passwordConfirm' className='bg-gray-100 outline-none w-full font-Poppins rounded-2xl h-12 p-5 mb-6' placeholder='Confirm Password'></input>
                        </div>
                        {credentialsError && <h3 className={'text-red mb-3'}>{errMessage}</h3>}

                        <button onClick={() => click()} className='bg-black w-full rounded-2xl h-14 mb-5 flex items-center justify-center text-white hover:bg-gray-100 hover:text-black'>
                            Register
                        </button>

                        <p className='font-Poppins text-left text-sm text-gray-500 mb-2'>
                            already have an account?
                        </p>

                        <p className='font-Poppins font-medium text-left text-sm text-zpurple'>
                            <Link href={"/login"}>
                                <button className='hover:text-gray-500'>Sign in</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}