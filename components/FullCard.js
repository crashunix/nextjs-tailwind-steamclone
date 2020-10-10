const FullCard = props => (
      <div className="p-4 bg-gray-900 rounded-lg">
        <div className="flex justify-between items-center mb-4">
            {props.left}
            {props.right}
        </div>
        {props.children}
    </div>
);

export default FullCard;