import Head from 'next/head'
import Image from 'next/image'
import bg from '../images/bg.png'
import Link from 'next/link'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'
import Router from 'next/router'



const url = 'http://127.0.0.1:8000';


export default function Login() {
    const initialValue = {
        email: '',
        password: ''
    };

    const [user, setUser] = useState(initialValue);
    const [credentialsError, setCredentialsError] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const click = () =>{
        setCredentialsError(false);
        axios.post(`${url}/login`,user).then(response => {
            const cookies = new Cookies();
                        cookies.set('token', response.data.token, { path: '/' });
                        console.log("Success ", response);
                        Router.push('/')
                        
          }).catch(error => {
            
            
            
              if (error.response.data.message === "The user does not exist") {
                    setCredentialsError(true);
                    setErrMessage(error.response.data.message);
                    return
                }
              
              if (error.response.data.message === "incorrect email or password") {
                    setCredentialsError(true);
                    setErrMessage(error.response.data.message);
                    return
                return
              }
        
        });
        
        
    }
        
   
    return (
        <div>
            <Head>
                <title> Login</title>
                <meta name="description" content="Login" />
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>

                <div className='bg-green md:flex items-center hidden '>
                    <div className='justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                        {/* <div className='text-center w-full pl-72 '> */}
                        <Image src={bg} height={'1000px'} alt='test' />
                    </div>
                </div>

                <div className='flex items-center bg-beige'>
                    <div className='text-center w-96 mx-auto p-5'>
                        {/* <div className='justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'> */}
                        <div className='w-52 md:hidden'>
                            <Image src={bg} />
                        </div>
                        <h1 className='font-bold font-Poppins text-4xl text-left my-4'>Log In</h1>
                        <div>
                            <input 
                            type={"text"}
                            onChange ={(e) => onValueChange(e)}
                            name='email'
                            className={` bg-gray-100 outline-none w-full font-Poppins rounded-2xl h-12 p-5 mb-6 `} placeholder='Email Address'></input>
                        </div>     
                        <div>
                            <input
                             type={"password"}
                              onChange ={(e) => onValueChange(e)} 
                              name='password' 
                              className='bg-gray-100 outline-none w-full font-Poppins rounded-2xl h-12 p-5 mb-2' 
                              placeholder='Password'>

                              </input>
                            
                        </div> 
                        {credentialsError && <h3 className={'text-red mb-3'}>{errMessage}</h3>}
                        <div>
                            <button onClick={click} className='bg-black w-full rounded-2xl h-14 mt-3 mb-5 flex items-center justify-center text-white hover:bg-gray-100 hover:text-black'>
                                Login
                            </button>
                            
                        </div>
                        <p className='font-Poppins text-left text-sm text-gray-500 mb-2'>
                            Don't have an account?
                        </p>

                        <p className='font-Poppins font-medium text-left text-sm text-zpurple'>
                            <Link href={"/register"}>
                                <button className='hover:text-gray-500'>Get started</button>
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}