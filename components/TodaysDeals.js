import FullCard from "./FullCard";
import DealCard from "./DealCard";

import { BiMenuAltRight } from "react-icons/bi";

const TodaysDeals = (props) => {
  return (
    <div className="py-4">
      <FullCard
        left={<span className="text-white font-medium">Today's Deals</span>}
        right={
          <button>
            <BiMenuAltRight className="text-white text-xl" />
          </button>
        }
      >
        <div className="grid grid-cols-2 gap-3">
          {props.deals.length > 0 ? (
            props.deals.map((item) => {
              return <DealCard key={item.id} deal={item} />;
            })
          ) : (
            <>
            <DealCard skeleton />
            <DealCard skeleton />
            </>
          )}
        </div>
      </FullCard>
    </div>
  );
};

export default TodaysDeals;
