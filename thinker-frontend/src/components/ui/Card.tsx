import { Shareicon } from "../icons/Shareicon";
interface props {
  text: string;
}
export const Card = (props: props) => {
  return (
    <div className="border-2 shadow-2xs border-gray-300 rounded-lg max-w-2xs flex items-center justify-between">
      <div className="flex items-center px-5 p-3 text-gray-500">
        <Shareicon />
        <div className="pl-2 text-black">{props.text}</div>
      </div>

      <div className="flex items-center pt-3 p-3 text-gray-500">
        <Shareicon />
        <div className="pl-3">
          <Shareicon />
        </div>
      </div>
    </div>
  );
};
