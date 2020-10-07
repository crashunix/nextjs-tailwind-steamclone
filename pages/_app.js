import { Component } from 'react';

import Link from 'next/link'
import Head from 'next/head'

import { useRouter } from "next/router";

import '../styles/tailwind.css';

const Header = props => (
  <div className="bg-black px-4 pt-5 pb-16 flex justify-between items-center">
    <div className="flex justify-between items-center">
      <img className="rounded-md h-12 w-12 object-cover" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9e/9e1c7583dc792a199ae3ac2e15e6b91e64badae1_full.jpg"></img>
      <div className="flex flex-col ml-3">
        <div className="flex">
          <span className="text-white text-lg">crash</span><span className="text-white font-bold text-lg">unix</span>
          <button className="ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down text-white"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
        </div>
        <span className="text-gray-300 text-xs">Juan Macário</span>
      </div>
    </div>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell text-gray-600"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
    </button>
  </div>
);

const BottomTabs = props => {
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
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
      <footer>
        <BottomTabs></BottomTabs>
      </footer>
    </div>
  </>
);

export default App
