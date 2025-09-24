import type { RoomType } from "../../../types";

export const getRoomTypeIcon = (roomType: RoomType): string => {
  const icons: Record<RoomType, string> = {
    office: "💼",
    corridor: "🚶",
    conference: "👥",
    bathroom: "🚻",
    kitchen: "🍳",
    storage: "📦",
    technical: "🔧",
    other: "🏠",
  };
  return icons[roomType];
};

export const getRoomTypeLabel = (roomType: RoomType): string => {
  const labels: Record<RoomType, string> = {
    office: "Офис",
    corridor: "Коридор",
    conference: "Переговорная",
    bathroom: "Санузел",
    kitchen: "Кухня",
    storage: "Кладовая",
    technical: "Техническое",
    other: "Другое",
  };
  return labels[roomType];
};

export const getRoomTypeInfo = (roomType: RoomType) => {
  return {
    icon: getRoomTypeIcon(roomType),
    label: getRoomTypeLabel(roomType),
  };
};
