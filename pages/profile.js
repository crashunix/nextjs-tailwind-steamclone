const Header = props => (
  <div className="bg-black px-4 py-5">
    <div className="flex justify-end items-center">
      <button className="text-gray-400 text-xs mb-2">EDIT</button>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <img className="rounded-md h-20 w-20 object-cover" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9e/9e1c7583dc792a199ae3ac2e15e6b91e64badae1_full.jpg"></img>
        <div className="flex flex-col ml-3">
          <div className="flex items-center">
            <img src="https://cdn.webshopapp.com/shops/94414/files/54037182/japan-flag-icon-free-download.jpg" className="h-3 w-3 rounded-full object-cover" alt="Japan" />
            <span className="text-xs text-white ml-1">日本</span>
          </div>
          <div className="flex">
            <span className="text-white text-xl">crash</span><span className="text-white font-bold text-xl">unix</span>
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

const Profile = () => (
  <>
    <header>
      <Header />
    </header>
    <div className="bg-black px-4 py-6">
      <nav className="flex mb-5">
        <a href="#" className="text-sm text-white w-1/3 font-medium">Statistics<div className="h-1 w-6 rounded-md bg-blue-400 mt-2"></div></a>
        <a href="#" className="text-sm text-gray-600 w-1/3">Activity</a>
        <a href="#" className="text-sm text-gray-600 w-1/3">Comments</a>
      </nav>

      <div className="grid grid-cols-2 gap-3 pb-24">

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
    </div>
  </>
);

Profile.pageTitle = "index";

export default Profile;