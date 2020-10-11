import { useState, useEffect } from "react";

import Head from "next/head";

import "../styles/tailwind.css";
import BottomTabs from "../components/BottomTabs";

const App = ({ Component, pageProps }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [confirmations, setConfirmations] = useState({});
  const [todaysDeals, setTodaysDeals] = useState({});
  const [gamesActivity, setGamesActivity] = useState({});

  useEffect(() => {
    getCurrentUser();
    getConfirmations();
    getTodaysDeals();
    getGamesActivity();
  }, []);

  const getCurrentUser = () => {
    fetch("/api/currentUser")
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  };

  const getConfirmations = () => {
    fetch("/api/confirmations")
      .then((res) => res.json())
      .then((data) => setConfirmations(data));
  };
  
  const getTodaysDeals = () => {
    fetch("/api/todaysDeals")
      .then((res) => res.json())
      .then((data) => setTodaysDeals(data));
  };

  const getGamesActivity = () => {
    fetch("/api/gamesActivity")
      .then((res) => res.json())
      .then((data) => setGamesActivity(data));
  };

  return (
    <>
      <Head>
        <title>Steam Redesign</title>
      </Head>
      <div className="flex flex-col h-screen bg-black">
        <main className="flex-1 overflow-scroll">
          <Component
            currentUser={currentUser}
            confirmations={confirmations}
            todaysDeals={todaysDeals}
            gamesActivity={gamesActivity}
            {...pageProps}
          />
        </main>
        <footer className="sticky bottom-0">
          <BottomTabs />
        </footer>
      </div>
    </>
  );
};

export default App;
