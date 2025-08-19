interface props {
  placeholder: string;
}

export function Input({ placeholder }: props) {
  return (
    <>
      <div className="px-6 py-5">
        <input
          className="px-9 py-3 rounded border border-gray-300 outline-none border-pink-300"
          type={"text"}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
