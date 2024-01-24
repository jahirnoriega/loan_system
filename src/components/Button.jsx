function Button({ operator, fn }) {
  return (
    <button
      type="button"
      className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-orange-500 rounded-full hover:bg-orange-600 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-orange-500"
      onClick={fn}
    >
      {operator}
    </button>
  );
}

export default Button;
