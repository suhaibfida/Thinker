import "./App.css";
import { Button } from "./components/ui/Button";
import { Plusicon } from "./components/icons/Plusicon";
import { Shareicon } from "./components/icons/Shareicon";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
