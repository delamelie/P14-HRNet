export default function Loader() {
  return (
    <div id="loading" role="status">
      <div className="font-bold text-lime-600">Loading...</div>
      <div class="absolute right-1/2 transform translate-x-1/2 translate-y-1/2">
        <div class="p-2 bg-gradient-to-tr animate-spin from-lime-500 to-cyan-600 via-green-500 rounded-full">
          <div class="bg-white rounded-full">
            <div class="w-10 h-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
