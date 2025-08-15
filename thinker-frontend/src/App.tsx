import "./App.css";
import { Button } from "./components/ui/Button";
import { Plusicon } from "./components/icons/Plusicon";
import { Shareicon } from "./components/icons/Shareicon";
import { Card } from "./components/ui/Card";
import { ContentModal } from "./components/ui/ContentModal";
import { Sidebar } from "./components/ui/Sidebar";
import { useState } from "react";
function App() {
  const [open, setModal] = useState(false);
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
            variant="secondary"
            text="Share "
            startIcon={<Shareicon />}
          ></Button>
        </div>
        <div className="font-medium text-3xl m-10">All Notes</div>
        <div className="flex">
          <Card
            variant="youtube"
            title="America"
            link="https://www.youtube.com/watch?v=uOG3MiFax7E"
          />

          <Card
            variant="twitter"
            title="Sam Altman"
            link="https://twitter.com/sama/status/1955438916645130740"
          />
          <Card
            variant="youtube"
            title="Project Ideas"
            link="https://youtu.be/e3CVv6cqoUQ?feature=shared"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
