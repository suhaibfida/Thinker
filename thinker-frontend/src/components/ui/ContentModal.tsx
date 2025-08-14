import { CrossIcon } from "../icons/CrossIcon";

import { Button } from "./Button";

export function ContentModal({ open, onClose }) {
  return (
    <>
      {open && (
        <div className="w-screen fixed h-screen top-0 left-0 bg-red-200/65">
          <div className="flex justify-center items-center h-screen ">
            <span className="bg-white pt-8 pb-8 pl-2 pr-3 ">
              <div
                className="flex justify-end cursor-pointer"
                onClick={onClose}
              >
                <CrossIcon />
              </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button variant={"primary"} text={"Submit"} />
              </div>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

function Input({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <div className="px-5 py-5">
      <input
        className="px-9 py-3 rounded border border-gray-300 outline-none"
        type={"text"}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
