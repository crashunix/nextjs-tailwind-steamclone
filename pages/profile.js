import { useState, useEffect } from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';

const Header = props => (
  <div className="bg-black px-4 py-5">
    <div className="flex justify-end items-center">
      <button className="text-gray-400 text-xs mb-2">EDIT</button>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <img className="rounded-md h-20 w-20 object-cover" src={props.user.avatarfull}></img>
        <div className="flex flex-col ml-3">
          <div className="flex items-center">
            <img src="https://cdn.webshopapp.com/shops/94414/files/54037182/japan-flag-icon-free-download.jpg" className="h-3 w-3 rounded-full object-cover" alt="Japan" />
            <span className="text-xs text-white ml-1">日本</span>
          </div>
          <div className="flex">
            <span className="text-white text-xl">{props.user.personaname}</span>
          </div>
          <div className="bg-red-500 text-white rounded-sm text-xs flex items-center justify-center w-16 mt-1">Level 17</div>
        </div>
      </div>
      <button className="bg-gray-800 p-1 rounded-lg">
        <img src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png" alt="Líder da Comunidade" />
      </button>
    </div>
    <p className="text-white text-xs mt-4 text-gray-500">UX/UI Designer, Fron-end Developer</p>
  </div>
);

const Profile = () => {
  const [user, setUser] = useState({});
  const [currentTab, setCurrentTab] = useState('tab1');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }

  if(!user) {
    return(<p>Loading...</p>);
  }
  
  return (
    <>
      <header>
        <Header user={user} />
      </header>
      <div className="bg-black">
      <div className="px-4 py-2">
        <nav className="flex mb-2">
          <a href="#" onClick={() => setCurrentTab('tab1')} className="text-sm text-gray-600 w-1/3">Statistics<div className={currentTab == 'tab1' ? 'h-1 w-6 rounded-md bg-blue-400 mt-2' : 'hidden'}></div></a>
          <a href="#" onClick={() => setCurrentTab('tab2')} className="text-sm text-gray-600 w-1/3">Activity<div className={currentTab == 'tab2' ? 'h-1 w-6 rounded-md bg-blue-400 mt-2' : 'hidden'}></div></a>
          <a href="#" onClick={() => setCurrentTab('tab3')} className="text-sm text-gray-600 w-1/3">Comments<div className={currentTab == 'tab3' ? 'h-1 w-6 rounded-md bg-blue-400 mt-2' : 'hidden'}></div></a>
        </nav>
      </div>

        <div className={currentTab == 'tab1' ? 'grid grid-cols-2 gap-3 pb-24 px-4 bg-black' : 'hidden'}>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-gray-900 py-3 px-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">Badges</span>
                <span className="text-2xl text-white">5</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <button className="bg-gray-800 p-1 rounded-lg">
                  <img src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png" alt="Líder da Comunidade" />
                </button>
                <button className="bg-gray-800 p-1 rounded-lg">
                  <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/221040/57ff517973bf5e75bb2e2d580731a09243570a3e.png" alt="Líder da Comunidade" />
                </button>
                <button className="bg-gray-800 p-1 rounded-lg">
                  <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/01ee9c21ab01c4eb62e577f10cf9efd2a56da771.png" alt="Líder da Comunidade" />
                </button>
              </div>
            </div>
            <div className="bg-gray-900 py-3 px-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">Friends</span>
                <span className="text-2xl text-white">366</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <button className="bg-gray-800 rounded-lg">
                  <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a28915a03f1e88ff4bc7c68475a156ab06f1313_full.jpg" alt="Friend" className="h-10 rounded-lg object-cover" />
                </button>
                <button className="bg-gray-800 rounded-lg">
                  <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/90/902384884e7cd34f27e5a66c1c859771c34daad5_full.jpg" alt="Friend" className="h-10 rounded-lg object-cover" />
                </button>
                <button className="bg-gray-800 rounded-lg">
                  <img src="https://s2.glbimg.com/bfILYK5vi7P19-Ov1YjWQfzOJns=/0x0:680x453/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/r/7/AIxbCnSMuMHwCf9DDzfA/era5gmwucaa929r.jfif" alt="Friend" className="h-10 rounded-lg object-cover" />
                </button>
              </div>
            </div>
            <div className="bg-gray-900 py-3 px-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">Screenshots</span>
                <span className="text-2xl text-white">14</span>
              </div>
            </div>
            <div className="bg-gray-900 py-3 px-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">Artworks</span>
                <span className="text-2xl text-white">1</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="bg-gray-900 py-3 px-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">Games</span>
                <span className="text-2xl text-white">161</span>
              </div>
            </div>
            <div className="bg-gray-900 py-3 px-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">Groups</span>
                <span className="text-2xl text-white">39</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <button className="bg-gray-800 rounded-lg">
                  <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/35/356b61e3c05af86aaff47a437dac5e5f1edd9875_medium.jpg" alt="Group" className="h-10 rounded-lg object-cover" />
                </button>
                <button className="bg-gray-800 rounded-lg">
                  <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9f/9f4b1e838c095ebe84e37757de0dbabeace41593_medium.jpg" alt="Group" className="h-10 rounded-lg object-cover" />
                </button>
                <button className="bg-gray-800 rounded-lg">
                  <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2d/2da9b510ca4da8c7bb075337a575731cff462a1b_medium.jpg" alt="Group" className="h-10 rounded-lg object-cover" />
                </button>
              </div>
            </div>
            <div className="bg-gray-900 py-3 px-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">Inventory</span>
                <span className="text-2xl text-white">161</span>
              </div>
            </div>
            <div className="bg-gray-900 py-3 px-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">Groups</span>
                <span className="text-2xl text-white">39</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <button className="bg-gray-800 p-1 rounded-lg">
                  <img src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png" alt="Líder da Comunidade" />
                </button>
                <button className="bg-gray-800 p-1 rounded-lg">
                  <img src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png" alt="Líder da Comunidade" />
                </button>
                <button className="bg-gray-800 p-1 rounded-lg">
                  <img src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png" alt="Líder da Comunidade" />
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className={currentTab == 'tab2' ? 'p-4 bg-gray-900 rounded-lg' : 'hidden'}>
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="flex items-center"><span className="text-white font-medium mr-1">Today's Deals</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down text-white"><polyline points="6 9 12 15 18 9" /></svg></a>
            <a href="#" className="flex items-center"><span className="text-white font-medium mr-1">Playtime</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down text-white"><polyline points="6 9 12 15 18 9" /></svg></a>
          </div>
          <div className="flex bg-black rounded-lg">
            <div className="w-1/2 bg-blue-400 py-1 px-3 rounded-lg flex flex-col">
              <span className="text-xs text-white">this week</span>
              <div className="flex items-center">
                <span className="text-3xl text-white">19.7</span>
                <span className="text-white text-sm ml-2">hours</span>
              </div>
            </div>
            <div className="w-1/2 py-1 px-3 flex flex-col">
              <span className="text-xs text-white">entire time</span>
              <div className="flex items-center">
                <span className="text-3xl text-white">538</span>
                <span className="text-white text-sm ml-2">hours</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 pt-4">

            <div className="bg-black rounded-lg flex p-2">
              <img className="w-20 h-20 object-cover rounded-lg" src="https://s2.glbimg.com/9hLtG2DbMA9l11iMODEnBHv94iU=/0x0:1200x603/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/i/b/ETfVe9TSWL7BL6NLQZYQ/1535723475188-fb-image.png" />
              <div className="flex flex-col pl-2 flex-1 justify-center">
                <div className="flex justify-between min-w-full">
                  <span className="text-gray-400 text-sm">3,517 hours on record</span>
                  <button>
                    <BsThreeDotsVertical className="text-gray-400" />
                  </button>
                </div>
                <div className="my-2">
                  <div className="bg-gray-800 rounded-xs">
                    <div className="bg-blue-400 h-1 w-2/5 rounded-sm"></div>
                  </div>
                </div>
                <span className="text-white text-sm">Counter-Strike: Global Offensive</span>
              </div>
            </div>
            <div className="bg-black rounded-lg flex p-2">
              <img className="w-20 h-20 object-cover rounded-lg" src="https://pbs.twimg.com/profile_images/1281643775165702144/IY3IVjuu_400x400.jpg" />
              <div className="flex flex-col pl-2 flex-1 justify-center">
                <div className="flex justify-between min-w-full">
                  <span className="text-gray-400 text-sm">0,3 hours on record</span>
                  <button>
                    <BsThreeDotsVertical className="text-gray-400" />
                  </button>
                </div>
                <div className="my-2">
                  <div className="bg-gray-800 rounded-xs">
                    <div className="bg-blue-400 h-1 w-2/5 rounded-sm"></div>
                  </div>
                </div>
                <span className="text-white text-sm">Aim Lab</span>
              </div>
            </div>
            <div className="bg-black rounded-lg flex p-2">
              <img className="w-20 h-20 object-cover rounded-lg" src="https://i.pinimg.com/originals/13/4c/21/134c21cc46757eca9debfd77caec7d09.png" />
              <div className="flex flex-col pl-2 flex-1 justify-center">
                <div className="flex justify-between min-w-full">
                  <span className="text-gray-400 text-sm">33 hours on record</span>
                  <button>
                    <BsThreeDotsVertical className="text-gray-400" />
                  </button>
                </div>
                <div className="my-2">
                  <div className="bg-gray-800 rounded-xs">
                    <div className="bg-blue-400 h-1 w-2/5 rounded-sm"></div>
                  </div>
                </div>
                <span className="text-white text-sm">Left 4 Dead</span>
              </div>
            </div>
            <div className="bg-black rounded-lg flex p-2">
              <img className="w-20 h-20 object-cover rounded-lg" src="https://whosthanny.com/wp-content/uploads/2015/09/ori-and-the-blind-forest-wallpapers.jpg" />
              <div className="flex flex-col pl-2 flex-1 justify-center">
                <div className="flex justify-between min-w-full">
                  <span className="text-gray-400 text-sm">8,6 hours on record</span>
                  <button>
                    <BsThreeDotsVertical className="text-gray-400" />
                  </button>
                </div>
                <div className="my-2">
                  <div className="bg-gray-800 rounded-xs">
                    <div className="bg-blue-400 h-1 w-2/5 rounded-sm"></div>
                  </div>
                </div>
                <span className="text-white text-sm">Ori and the Blind Forest</span>
              </div>
            </div>
            <div className="bg-black rounded-lg flex p-2">
              <img className="w-20 h-20 object-cover rounded-lg" src="https://www.logolynx.com/images/logolynx/a5/a5b4177d11549fe6fdd4a14f042f0e17.jpeg" />
              <div className="flex flex-col pl-2 flex-1 justify-center">
                <div className="flex justify-between min-w-full">
                  <span className="text-gray-400 text-sm">13,4 hours on record</span>
                  <button>
                    <BsThreeDotsVertical className="text-gray-400" />
                  </button>
                </div>
                <div className="my-2">
                  <div className="bg-gray-800 rounded-xs">
                    <div className="bg-blue-400 h-1 w-2/5 rounded-sm"></div>
                  </div>
                </div>
                <span className="text-white text-sm">Portal 2</span>
              </div>
            </div>

          </div>
        </div>
        <p className={currentTab == 'tab3' ? 'block text-white' : 'hidden'}>Tab3</p>
      </div>
    </>
  )
}

Profile.pageTitle = "index";

export default Profile;