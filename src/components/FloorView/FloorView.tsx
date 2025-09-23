// components/FloorView/FloorView.tsx
import React from "react";
import { useBuildingStore } from "../../store/useBuildingStore";
import FloorPlan from "../FloorPlan/FloorPlan";
import ElectricalPanel from "../ElectricalPanel/ElectricalPanel";
import ElectricalScheme from "../ElectricalScheme/ElectricalScheme";
import RoomsList from "../RoomsList/RoomsList";
import Modal from "../Modal/Modal";
import styles from "./FloorView.module.css";

const FloorView: React.FC = () => {
  const { selectedFloor, activeVisualization, hideVisualization } =
    useBuildingStore();

  const getModalTitle = () => {
    switch (activeVisualization) {
      case "floorPlan":
        return `План этажа ${selectedFloor?.name || ""}`;
      case "electricalPanel":
        return "Электрический щит";
      case "electricalScheme":
        return "Электрическая схема";
      default:
        return "";
    }
  };

  const getModalSize = () => {
    switch (activeVisualization) {
      case "floorPlan":
      case "electricalScheme":
        return "fullscreen";
      case "electricalPanel":
        return "large";
      default:
        return "medium";
    }
  };

  const renderVisualizationContent = () => {
    if (!selectedFloor) return null;

    switch (activeVisualization) {
      case "floorPlan":
        return <FloorPlan floor={selectedFloor.id} />;
      case "electricalPanel":
        return <ElectricalPanel />;
      case "electricalScheme":
        return <ElectricalScheme />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <RoomsList
          rooms={selectedFloor?.rooms || []}
          points={selectedFloor?.points || []}
        />
      </div>

      <Modal
        isOpen={activeVisualization !== null}
        onClose={hideVisualization}
        title={getModalTitle()}
        size={getModalSize()}
      >
        {renderVisualizationContent()}
      </Modal>
    </div>
  );
};

export default FloorView;
