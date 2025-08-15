import { SidebarItem } from "./SidebarItem";
import { Brain } from "../icons/Brain";
import { X } from "../icons/X";
import { Youtube } from "../icons/Youtube";
import { Linkedin } from "../icons/Linkedin";
import { Facebook } from "../icons/Facebook";
export function Sidebar() {
  return (
    <div className="h-screen  w-0 md:w-84 color white ">
      <div className="flex mt-6 ml-7 items-center">
        <div className="mr-2">
          <Brain />
        </div>
        <div className="text-lg text-bold font-bold text-gray-700 ">
          Thinker
        </div>
      </div>
      <div className="mt-10 ">
        <SidebarItem icon={<X />} text={" x.com"} />
        <SidebarItem icon={<Youtube />} text={"Youtube"} />
        <SidebarItem icon={<Facebook />} text={"facebook"} />
        <SidebarItem icon={<Linkedin />} text={"Linkedin"} />
      </div>
    </div>
  );
}
