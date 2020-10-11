const DealCard = (props) => {
  if (props.skeleton) {
    return (
      <div className="bg-gray-500 rounded-lg flex-1 p-3 h-40">
        <div className="flex flex-col w-2/3">
          <span className="h-3 w-1/2 bg-gray-600 animate-pulse rounded-sm"></span>
          <span className="h-3 w-full bg-gray-600 mt-3 animate-pulse rounded-sm"></span>
          <span className="h-3 w-2/3 bg-gray-600 mt-1 animate-pulse rounded-sm"></span>
          <div className="flex">
            <span className="h-8 w-1/2 bg-gray-600 mt-4 animate-pulse rounded-sm"></span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`bg-${props.deal.color} rounded-lg flex-1 p-3 h-40`}
      style={{
        backgroundImage: `url("${props.deal.image}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "3rem",
        backgroundPositionY: "1.6rem",
      }}
    >
      <div className="flex flex-col w-4/5">
        <span className="text-gray-300 text-xs">{props.deal.time}</span>
        <span className="text-white font-medium text-md">
          {props.deal.game}
        </span>
        <div className="flex">
          <span className="text-3xl font-bold text-white">
            {props.deal.value}
          </span>
          <span className="text-lg text-gray-200 mt-1">%</span>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
