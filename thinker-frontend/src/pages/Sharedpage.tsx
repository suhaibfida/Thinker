import { Card } from "../components/ui/Card";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Sharedpage = () => {
  const location = useLocation();
  const [sharedData, setSharedData] = useState<any[]>([]);
  useEffect(() => {
    if (location.state?.shared) {
      location.state.shared;
    } else {
      const queryParams = new URLSearchParams(location.search);
      const dataParam = queryParams.get("data");
      if (dataParam) {
        try {
          const decodedData = JSON.parse(decodeURIComponent(dataParam));
          setSharedData(decodedData);
        } catch (e) {
          console.log("failed to pass shared data");
        }
      }
    }
  }, [location]);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <div className="flex justify-between">
        <div className="font-bold text-3xl mt-4 ml-8">
          Shared Content By Second Brain...
        </div>
      </div>
      <div className="ml-7 mt-6 flex flex-wrap gap-x-3 gap-y-5">
        {sharedData.length > 0 ? (
          sharedData.map((item: any, idx: number) => (
            <Card
              key={idx}
              variant={item.contentType}
              tag={item.tag}
              title={item.title}
              link={item.link}
            />
          ))
        ) : (
          <div className="text-2xl font-semibold">No shared content found.</div>
        )}
      </div>
    </div>
  );
};
