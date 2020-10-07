const Home = () => (
  <div className="overflow-y-auto">
    <div className="px-4 bg-black">
      <p className="text-white font-normal mb-4">Steam Guard</p>
      <div className="flex justify-between items-center">
        <div className="flex">
          <span className="text-white text-5xl font-medium tracking-widest leading-4">C89H</span>
          <span className="text-gray-300 text-5xl font-medium tracking-widest leading-4">X</span>
        </div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings text-gray-600"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></button>
      </div>
      <div className="pt-5 py-10">
        <div className="bg-gray-800 rounded-sm">
          <div className="bg-blue-400 h-1 w-2/5 rounded-sm"></div>
        </div>
      </div>
    </div>
    <div className="px-4 py-5 bg-black">
      <p className="text-white font-normal mb-4">Confirmations</p>
      <div className="grid gap-3">
        <div className="bg-gray-800 px-4 py-6 rounded-lg">
          <div className="w-1/2">
            <span className="text-white">Nothing to confirm</span>
            <p className="text-white text-xs text-gray-400">You don't have anything to confirm right now.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-4 bg-black">
      <div className="grid grid-cols-1">
        <div className="p-4 bg-gray-800 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Today's Deals</span>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right text-white"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-500 rounded-lg flex-1 p-3 pb-10">
              <div className="flex flex-col w-2/3">
                <span className="text-gray-200 text-xs">01:06:35</span>
                <span className="text-white font-medium text-md">The Witcher 3: Wild Hunt</span>
                <div className="flex">
                  <span className="text-3xl font-bold text-white">-30</span>
                  <span className="text-lg text-gray-200 mt-1">%</span>
                </div>
              </div>
            </div>
            <div className="bg-orange-400 rounded-lg flex-1 p-3 pb-10">
              <div className="flex flex-col w-2/3">
                <span className="text-gray-200 text-xs">06:24:44</span>
                <span className="text-white font-medium text-md">Just Cause 4</span>
                <div className="flex">
                  <span className="text-3xl font-bold text-white">-25</span>
                  <span className="text-lg text-gray-200 mt-1">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Home.pageTitle = "index";

export default Home;