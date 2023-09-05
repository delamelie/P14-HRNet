export function Button({ type, text, onClick, icon }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex rounded-md bg-lime-600 px-4 py-2 gap-x-1.5 text-sm font-semibold text-white hover:bg-cyan-600 hover:scale-105 sm:px-6`}
    >
      {icon && <span className="icon">{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
