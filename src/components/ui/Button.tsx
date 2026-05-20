type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return (
    <button className="rounded-2xl bg-blue-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-blue-700">
      {text}
    </button>
  );
}

export default Button;
