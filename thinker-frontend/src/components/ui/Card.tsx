import { Shareicon } from "../icons/Shareicon";
import { Notesicon } from "../icons/Notesicon";
import { Deleteicon } from "../icons/Deleteicon";
interface props {
  variant: "youtube" | "twitter";
  title: string;
  tag: string;
  link: string;
}
export const Card = (props: props) => {
  return (
    <div className="border-2 shadow-2xs border-gray-300 rounded-lg max-w-sm max-h-142  items-center justify-between -mt-5 m-3 bg-gray-100">
      <div className="flex justify-between pr-2">
        <div className="flex items-center px-5 p-3 text-gray-500">
          <Notesicon />
          <div className="pl-2 text-black">{props.title}</div>
        </div>

        <div className="flex justify-end pt-3 pl-15 items-center text-gray-500">
          <Shareicon />
          <div className="pl-3">
            <a href={props.link} target="_blank">
              <Deleteicon />
            </a>
          </div>
        </div>
      </div>
      <div className="p-2 ">
        {props.variant == "youtube" && (
          <iframe
            className="p-2"
            width="270"
            height="200"
            src={props.link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="p-2 h-md">
        {props.variant == "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={props.link}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
