import { mockData } from "./data";
import BuildingSelector from "./components/BuildingSelector/BuildingSelector";

const App: React.FC = () => {
  return (
    <>
      <BuildingSelector buildings={mockData} />
    </>
  );
};

export default App;
