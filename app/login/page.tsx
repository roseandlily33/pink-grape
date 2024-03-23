'use client';
import React from 'react';
import Head from 'next/head';
import Logo from '../../public/NEXTFLIX.svg'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {magic} from '../utils/magic';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [userMsg, setUserMsg] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleOnChangeEmail = (e:any) => {
    setUserMsg('');
    const email = e.target.value;
    if(email){
      setEmail(email);
    } else {
      setUserMsg('Enter a valid email');
    }
  };
  // const handleLoginWithEmail = (e:any) => {
  //   console.log(e)
  // }
  const handleLoginWithEmail = async(e:any) => {
    e.preventDefault();
    router.push('/');
    if (email) {
      try {
        setIsLoading(true);
        const didToken = await magic.auth.loginWithMagicLink({ email: 'hello@example.com' });

    if (didToken) {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${didToken}`,
          'Content-Type': 'application/json',
        },
      });

      const loggedInResponse = await response.json();
      if (loggedInResponse.done) {
        router.push('/');
      } else {
        setIsLoading(false);
        setUserMsg('Something went wrong logging in');
      }
    }
  } catch (error) {
    // Handle errors if required!
    console.error('Something went wrong logging in', error);
    setIsLoading(false);
  }
} else {
  // show user message
  setIsLoading(false);
  setUserMsg('Enter a valid email address');
}
  }
  return (
    
    <div className="backgroundImage h-screen">
    <Head>
    <title>Nextflix Sign In</title>
    </Head>

    <header className=" p-5 ">
        <Link href="/">
          <Image src={Logo} alt="nextflix logo" className='logo' width={10} height={20} />
        </Link>
    </header>

    <main className="p-3 flex  m-auto justify-center content-center h-screen">
        <div className="p-8 flex gap-3 flex-col justify-center content-center w-60 h-60 mt-40  bg-neutral-900 rounded-md">
          <h1 className="">Sign In</h1>

          <input
            type="text"
            value={email}
            placeholder="Email address"
            className="p-2 rounded-md"
            onChange={handleOnChangeEmail}
          />

          <p className="">{userMsg}</p>
          <button onClick={handleLoginWithEmail} className="">
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </main>
    </div>
  )
}
