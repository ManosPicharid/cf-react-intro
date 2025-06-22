import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    alert(`Value = ${inputRef.current?.value}`);
  };

  return (
    <>
      <div className="text-center space-x-4 py-4">
        <input
          ref={inputRef}
          type="text"
          className="border rounded px-4 py-2"
        />
        <button
          onClick={handleClick}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Show Value
        </button>
      </div>
    </>
  );
};
export default UncontrolledInput;
