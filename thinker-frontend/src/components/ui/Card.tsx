import { Shareicon } from "../icons/Shareicon";
interface props {
  variant: "youtube" | "twitter";
  title: string;
  link: string;
}
export const Card = (props: props) => {
  return (
    <div className="border-2 shadow-2xs border-gray-300 rounded-lg max-w-2xs  items-center justify-between -mt-5 m-3">
      <div className="flex">
        <div className="flex items-center px-5 p-3 text-gray-500">
          <Shareicon />
          <div className="pl-2 text-black">{props.title}</div>
        </div>

        <div className="flex items-center pt-3 p-3 text-gray-500">
          <Shareicon />
          <div className="pl-3">
            <a href={props.link} target="_blank">
              <Shareicon />
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
