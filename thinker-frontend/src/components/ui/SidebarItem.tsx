import { ReactElement } from "react";
interface props {
  icon: ReactElement;
  text: string;
}
export function SidebarItem({ icon, text }: props) {
  return (
    <div className="flex mt-6 ml-7 items-center ml-3 ">
      <div className="mr-2 text-gray-600 mr-11">{icon}</div>
      <div className="text-md text-bold font-bold text-gray-500 ">{text}</div>
    </div>
  );
}
