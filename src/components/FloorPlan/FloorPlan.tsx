import styles from "./FloorPlan.module.css";
import Floor2Plan from "../FloorPlan/building1/floor2/Floor2Plan";
import { useState } from "react";
// Импортируйте другие компоненты планов этажей по мере их создания

interface FloorPlanProps {
  floor: string;
}

// Словарь компонентов планов этажей
const floorPlanComponents: Record<string, React.ComponentType> = {
  "floor-1-2": Floor2Plan,
  // Добавьте другие этажи по мере необходимости
  // "floor-1-1": Floor1Plan,
  // "floor-1-3": Floor3Plan,
};

const FloorPlan = ({ floor }: FloorPlanProps) => {
  const [showPlan, setShowPlan] = useState(false);
  const FloorComponent = floorPlanComponents[floor];

  if (!FloorComponent) {
    return <div className={styles.placeholder}>План этажа недоступен</div>;
  }

  return (
    <>
      <button
        className={showPlan ? `${styles.btnOn}` : `${styles.btnOff}`}
        onClick={() => setShowPlan(!showPlan)}
      >
        План этажа
      </button>
      {showPlan ? <FloorComponent /> : null}
    </>
  );
};

export default FloorPlan;
