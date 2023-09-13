export default function Loader() {
  return (
    <div id="loading" role="status">
      <div className="font-bold text-lime-600">Loading...</div>
      <div className="absolute right-1/2 transform translate-x-1/2 translate-y-1/2">
        <div className="p-2 bg-gradient-to-tr animate-spin from-lime-500 to-cyan-600 via-green-500 rounded-full">
          <div className="bg-white rounded-full">
            <div className="w-10 h-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
