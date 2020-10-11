import { BsThreeDotsVertical } from "react-icons/bs";

const ActivityGameCard = (props) => {
  if (props.skeleton) {
    return (
      <div className="bg-black rounded-lg flex p-2 animate-pulse">
        <div className="w-20 h-20 rounded-lg bg-gray-900 animate-pulse"></div>
        <div className="flex flex-col pl-2 flex-1 justify-center">
          <div className="flex justify-between min-w-full">
            <span className="bg-gray-900 h-3 w-3/5 animate-pulse"></span>
          </div>
          <div className="my-2">
            <div className="bg-gray-900 rounded-lg h-1 animate-pulse"></div>
          </div>
          <span className="bg-gray-900 h-3 w-2/5 animate-pulse"></span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black rounded-lg flex p-2">
        <img className="w-20 h-20 object-cover rounded-lg" src={props.game.image} />
        <div className="flex flex-col pl-2 flex-1 justify-center">
          <div className="flex justify-between min-w-full">
            <span className="text-gray-400 text-xs">
              {props.game.hours} hours on record
            </span>
            <button>
              <BsThreeDotsVertical className="text-gray-400" />
            </button>
          </div>
          <div className="my-2">
            <div className="bg-gray-900 rounded-lg">
              <div
                className={`bg-blue-400 h-1 rounded-sm w-${props.game.achievement}/5`}
              ></div>
            </div>
          </div>
          <span className="text-white text-sm">{props.game.game}</span>
        </div>
      </div>
    );
  }
};

export default ActivityGameCard;
