import react from "react";

import { urlObjectKeys } from "next/dist/next-server/lib/utils";

import HeaderNotification from "../components/HeaderNotification";
import SteamGuard from "../components/SteamGuard";
import Confirmations from "../components/Confirmations";
import TodaysDeals from "../components/TodaysDeals";

const Home = props => {
  return (
    <>
      <HeaderNotification currentUser={props.currentUser} />
      <SteamGuard />
      <Confirmations />
      <TodaysDeals deals={props.todaysDeals} />
    </>
  );
};

Home.pageTitle = "Home";

export default Home;
