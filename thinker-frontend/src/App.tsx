import "./App.css";
import { Button } from "./components/ui/Button";
import { Plusicon } from "./components/icons/Plusicon";
import { Shareicon } from "./components/icons/Shareicon";
import { Card } from "./components/ui/Card";
function App() {
  return (
    <div className=" h-screen bg-gray-200">
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
      <Card text="Project Ideas" />
    </div>
  );
}

export default App;
