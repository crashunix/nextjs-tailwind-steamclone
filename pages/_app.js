import { Component } from 'react';

import Link from 'next/link'
import Head from 'next/head'

import { useRouter } from "next/router";

import '../styles/tailwind.css';

const BottomTabs = () => {
  const router = useRouter();
  return (
    <div className="bg-black px-4">
      <nav className="flex">
        <Link href="/" className="">
          <a className={`p-4 w-1/5 flex justify-center ${router.pathname === '/' ? 'border-t-4 border-blue-600' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-home ${router.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
          </a>
        </Link>
        <Link href="/confirm" className="">
          <a className={`p-4 w-1/5 flex justify-center ${router.pathname === '/confirm' ? 'border-t-4 border-blue-600' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-home ${router.pathname === '/confirm' ? 'text-blue-600' : 'text-gray-600'}`}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
          </a>
        </Link>
        <Link href="/store" className="">
          <a className={`p-4 w-1/5 flex justify-center ${router.pathname === '/store' ? 'border-t-4 border-blue-600' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-home ${router.pathname === '/store' ? 'text-blue-600' : 'text-gray-600'}`}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
          </a>
        </Link>
        <Link href="/messages" className="">
          <a className={`p-4 w-1/5 flex justify-center ${router.pathname === '/messages' ? 'border-t-4 border-blue-600' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-home ${router.pathname === '/messages' ? 'text-blue-600' : 'text-gray-600'}`}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          </a>
        </Link>
        <Link href="/profile" className="">
          <a className={`p-4 w-1/5 flex justify-center ${router.pathname === '/profile' ? 'border-t-4 border-blue-600' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-home ${router.pathname === '/profile' ? 'text-blue-600' : 'text-gray-600'}`}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </a>
        </Link>
      </nav>
    </div>
  )
};

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Steam Redesign</title>
    </Head>
    <div className="flex flex-col h-screen bg-black">
      <main className="flex-1 overflow-scroll">
        <Component {...pageProps} />
      </main>
      <footer className="sticky bottom-0">
        <BottomTabs></BottomTabs>
      </footer>
    </div>
  </>
);

export default App
