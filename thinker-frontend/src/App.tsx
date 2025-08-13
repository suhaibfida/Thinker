import "./App.css";
import { Button } from "./components/ui/Button";
import { Plusicon } from "./components/icons/Plusicon";
import { Shareicon } from "./components/icons/Shareicon";
import { Card } from "./components/ui/Card";
function App() {
  return (
    <div className=" h-screen bg-gray-200">
      <div className="flex justify-end">
        <Button
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
          title="Project Ideas"
          link="https://www.youtube.com/watch?v=uOG3MiFax7E"
        />

        <Card
          variant="twitter"
          title="Project Ideas"
          link="https://twitter.com/sama/status/1955438916645130740"
        />
      </div>
    </div>
  );
}

export default App;
