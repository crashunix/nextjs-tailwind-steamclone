const HeaderBadge = props => (
  <div className="px-4 py-5">
    <div className="flex justify-end items-center">
      <button className="text-gray-400 text-xs mb-2">EDIT</button>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <img
          className="rounded-md h-20 w-20 object-cover"
          src={props.user.avatar}
        />
        <div className="flex flex-col ml-3">
          <div className="flex items-center">
            <img
              src={props.user.flag}
              className="h-3 w-3 rounded-full object-cover"
              alt={props.user.country}
            />
            <span className="text-xs text-gray-400 ml-1">
              {props.user.country}
            </span>
          </div>
          <div className="flex">
            <span className="text-white text-xl">{props.user.nickname}</span>
          </div>
          <div className="bg-red-500 text-white rounded-sm text-xs flex items-center justify-center w-16 mt-1">
            Level {props.user.level}
          </div>
        </div>
      </div>
      <button className="bg-gray-800 p-1 rounded-lg">
        <img
          src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png"
          alt="Líder da Comunidade"
        />
      </button>
    </div>
    <p className="text-xs mt-4 text-gray-500">{props.user.description}</p>
  </div>
);

export default HeaderBadge;