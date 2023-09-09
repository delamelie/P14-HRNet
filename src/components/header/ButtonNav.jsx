export default function ButtonNav({ icon, text }) {
  return (
    <button
      type="button"
      className={`w-52 flex items-center justify-center rounded-md bg-lime-600 px-2 py-2 gap-x-1 text-sm font-semibold text-white hover:bg-cyan-600 hover:scale-105 md:px-6 md:gap-x-1.5 md:h-16 lg:w-60 lg:h-12`}
    >
      {icon && <span className="icon">{icon}</span>}
      <span>{text}</span>
    </button>
  );
}
