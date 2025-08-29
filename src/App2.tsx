import styles from "./App.module.css";
import { mockProjectData } from "./types/mockData";
import { useState, useRef, useEffect } from "react";

function App() {
  const [lineColors, setLineColors] = useState({});
  const [lineCoords, setLineCoords] = useState({});
  const panelRef = useRef(null);
  const roomRefs = useRef({});

  const panel = mockProjectData.buildings[0].floors[0].panels[0];
  const rooms = mockProjectData.buildings[0].floors[0].rooms;

  // Обновляем координаты при изменении размеров
  useEffect(() => {
    const updateCoords = () => {
      if (!panelRef.current) return;

      const coords = {};
      const panelRect = panelRef.current.getBoundingClientRect();
      const panelX = panelRect.right;
      const panelY = panelRect.top + panelRect.height / 2;

      rooms.forEach((room) => {
        const roomEl = roomRefs.current[room.id];
        if (roomEl) {
          const roomRect = roomEl.getBoundingClientRect();
          const roomX = roomRect.left;
          const roomY = roomRect.top + roomRect.height / 2;

          coords[room.id] = {
            x1: panelX,
            y1: panelY,
            x2: roomX,
            y2: roomY,
          };
        }
      });

      setLineCoords(coords);
    };

    updateCoords();
    window.addEventListener("resize", updateCoords);

    return () => window.removeEventListener("resize", updateCoords);
  }, [rooms]);

  const changeLineColor = (roomId, color) => {
    setLineColors((prev) => ({ ...prev, [roomId]: color }));
  };

  return (
    <div className={styles.app}>
      <h1>Система подключения панели к комнатам</h1>

      <div className={styles.container}>
        {/* Панель */}
        <div ref={panelRef} className={styles.panel}>
          {panel.name}
        </div>

        {/* Комнаты */}
        <div className={styles.roomsContainer}>
          {rooms.map((room) => (
            <div
              key={room.id}
              ref={(el) => (roomRefs.current[room.id] = el)}
              className={styles.room}
            >
              <div className={styles.roomName}>{room.name}</div>
              <div className={styles.colorControls}>
                <button onClick={() => changeLineColor(room.id, "#ff6b6b")}>
                  🔴
                </button>
                <button onClick={() => changeLineColor(room.id, "#4ecdc4")}>
                  🔵
                </button>
                <button onClick={() => changeLineColor(room.id, "#45b7d1")}>
                  🟢
                </button>
                <button onClick={() => changeLineColor(room.id, "#f9ca24")}>
                  🟡
                </button>
                <button onClick={() => changeLineColor(room.id, "#6c5ce7")}>
                  🟣
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SVG с линиями */}
        <svg className={styles.linesContainer}>
          {rooms.map((room) => {
            const coords = lineCoords[room.id];
            if (!coords) return null;

            return (
              <line
                key={room.id}
                x1={coords.x1}
                y1={coords.y1}
                x2={coords.x2}
                y2={coords.y2}
                stroke={lineColors[room.id] || "#2c3e50"}
                strokeWidth="3"
                className={styles.line}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default App;
