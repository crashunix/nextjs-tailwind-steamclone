const Confirmations = () => {
  return (
    <div className="px-4 py-5">
      <p className="text-white font-normal mb-4">Confirmations</p>
      <div className="bg-gray-900 px-4 py-6 rounded-lg">
        <div className="w-1/2">
          <span className="text-white">Nothing to confirm</span>
          <p className="text-xs text-gray-400">
            You don't have anything to confirm right now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmations;