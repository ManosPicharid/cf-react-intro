import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="text-center space-x-4 mt-4">
        <input ref={inputRef} className="border px-4 py-2" type="text" />
        <button
          onClick={handleClick}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Focus Input
        </button>
      </div>
    </>
  );
};
export default FocusInput;
