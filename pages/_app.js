import { Component } from 'react';

import Link from 'next/link'

import '../styles/tailwind.css';

const Header = props => (
  <div className="">

  </div>
);

const BottomTabs = props => (
  <div className="bg-black">
    <nav className="grid grid-cols-5">
      <Link href="/" className="flex items-center justify-center">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-600"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" /></svg>
      </Link>
      <Link href="/" className="flex items-center justify-center">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-600"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" /></svg>
      </Link>
      <Link href="/" className="flex items-center justify-center">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-600"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" /></svg>
      </Link>
      <Link href="/" className="flex items-center justify-center">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-600"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" /></svg>
      </Link>
      <Link href="/" className="flex items-center justify-center">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-600"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" /></svg>
      </Link>
    </nav>
  </div>
);

const App = ({ Component, pageProps }) => (
  <div className="flex flex-col h-screen bg-black">
    <header className=""></header>
    <div className="flex-1">
      <Component {...pageProps} />
    </div>
    <footer>
      <BottomTabs></BottomTabs>
    </footer>
  </div>
);

export default App
