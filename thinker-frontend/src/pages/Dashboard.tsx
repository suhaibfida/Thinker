import { Button } from "../components/ui/Button";
import { Plusicon } from "../components/icons/Plusicon";
import { Shareicon } from "../components/icons/Shareicon";
import { Card } from "../components/ui/Card";
import { ContentModal } from "../components/ui/ContentModal";
import { Sidebar } from "../components/ui/Sidebar";
import { useState, useEffect } from "react";
export const Dashboard = () => {
  const [open, setModal] = useState(false);
  const [reloadData, setReloadData] = useState(true);

  useEffect(() => {
    fetchingData();
  }, [reloadData]);

  function fetchingData() {
    try {
      if (!localStorage.getItem("token")) {
        alert("Please login first");
        // navigate
        return;
      }
    } catch {
      alert("error while getting data");
    }
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className=" h-screen w-screen bg-gray-200">
        <ContentModal
          open={open}
          onClose={() => {
            setModal(false);
          }}
        />
        <div className="flex justify-end">
          <Button
            onClick={() => {
              setModal(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<Plusicon />}
          ></Button>
          <Button
            onClick={shareLink()}
            variant="secondary"
            text="Share "
            startIcon={<Shareicon />}
          ></Button>
        </div>
        <div className="font-medium text-3xl m-10">All Notes</div>
        <div className="flex">
          <Card
            variant="youtube"
            title="Web dev"
            link="https://www.youtube.com/watch?v=TBIjgBVFjVI"
          />

          <Card
            variant="twitter"
            title="Sam Altman"
            link="https://twitter.com/sama/status/1955438916645130740"
          />
          <Card
            variant="twitter"
            title="Zach"
            link="https://twitter.com/zachxbt/status/1955613912201896113"
          />
          <Card
            variant="youtube"
            title="LLM's"
            link="https://www.youtube.com/watch?v=7xTGNNLPyMI"
          />
        </div>
      </div>
    </div>
  );
};
