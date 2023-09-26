export default function Loader() {
  return (
    <div
      id="loading"
      role="status"
      aria-live="polite"
      className="absolute top-1/2 right-1/2"
    >
      <div className="font-bold text-lime-600">Loading...</div>
    </div>
  );
}
