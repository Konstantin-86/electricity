import Floor2Plan from "../FloorPlan/building1/floor2/Floor2Plan";
import Floor1Plan from "./building1/floor1/Floor1Plan";
import Floor3Plan from "./building1/floor3/Floor3Plan";

import styles from "./FloorPlan.module.css";

interface FloorPlanProps {
  floor: string;
}

const floorPlanComponents: Record<string, React.ComponentType> = {
  "floor-1-1": Floor1Plan,
  "floor-1-2": Floor2Plan,
  "floor-1-3": Floor3Plan,
};

const FloorPlan = ({ floor }: FloorPlanProps) => {
  const FloorComponent = floorPlanComponents[floor];

  if (!FloorComponent) {
    return <div className={styles.placeholder}>План этажа недоступен</div>;
  }

  return (
    <>
      <FloorComponent />
    </>
  );
};

export default FloorPlan;
