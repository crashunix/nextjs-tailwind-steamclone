import { BsThreeDotsVertical } from "react-icons/bs";

const ActivityGameCard = (props) => (
  <div className="bg-black rounded-lg flex p-2">
    <img
      className="w-20 h-20 object-cover rounded-lg"
      src={props.image}
    />
    <div className="flex flex-col pl-2 flex-1 justify-center">
      <div className="flex justify-between min-w-full">
        <span className="text-gray-400 text-sm">
          {props.hours} hours on record
        </span>
        <button>
          <BsThreeDotsVertical className="text-gray-400" />
        </button>
      </div>
      <div className="my-2">
        <div className="bg-gray-900 rounded-lg">
          <div className={`bg-blue-400 h-1 rounded-sm w-${props.achievement}/5`}></div>
        </div>
      </div>
      <span className="text-white text-sm">{props.game}</span>
    </div>
  </div>
);

export default ActivityGameCard;
