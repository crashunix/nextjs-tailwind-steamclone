import { Component } from 'react';

import Link from 'next/link'

import '../styles/tailwind.css';

const Header = props => (
  <div className="bg-white">
    <div className="container mx-auto flex justify-between items-center py-4">
      <h3 className="text-xl">Logo</h3>
      <h4 className="text-sm text-gray-600">{props.pageTitle}</h4>
      <nav>
        <Link href="/">
          <a className="font-medium p-2 text-gray-800 hover:text-gray-600">Home</a>
        </Link>
        <Link href="/profile">
          <a className="font-medium p-2 text-gray-800 hover:text-gray-600">Profile</a>
        </Link>
        <Link href="/services">
          <a className="font-medium p-2 text-gray-800 hover:text-gray-600">Services</a>
        </Link>
        <Link href="/contact">
          <a className="font-medium p-2 text-gray-800 hover:text-gray-600">Contact</a>
        </Link>
      </nav>
    </div>
  </div>
);

const App = ({ Component, pageProps }) => (
  <>
    <Header pageTitle={Component.pageTitle}></Header>
    <Component {...pageProps} />
  </>
);

export default App
