export default function Button({ label, ...props }) {
  return (
    <button
      className="px-4 py-2 text-sm rounded-md md:text-base bg-stone-700 text-stone-500 hover:bg-stone-500 hover:text-stone-100"
      {...props}
    >
      {label}
    </button>
  );
}
