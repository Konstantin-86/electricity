import { fixtureTemplates } from "../../../data/fixture/fixtureTemplates";
import { lampTemplates } from "../../../data/fixture/lampTemplates";
import type { FixtureKey, LightFixtureInstance, RoomType } from "../../../types";


// Конфигурация типов помещений
const ROOM_TYPE_CONFIG = {
  office: { icon: "💼", label: "Офис", minLux: 300, recommendedLux: 500 },
  corridor: { icon: "🚶", label: "Коридор", minLux: 100, recommendedLux: 150 },
  conference: { icon: "👥", label: "Переговорная", minLux: 300, recommendedLux: 500 },
  bathroom: { icon: "🚻", label: "Санузел", minLux: 200, recommendedLux: 300 },
  kitchen: { icon: "🍳", label: "Кухня", minLux: 300, recommendedLux: 500 },
  storage: { icon: "📦", label: "Кладовая", minLux: 100, recommendedLux: 200 },
  technical: { icon: "🔧", label: "Техническое", minLux: 200, recommendedLux: 300 },
  other: { icon: "🏠", label: "Другое", minLux: 150, recommendedLux: 300 },
} as const;

// Получение информации о типе помещения
export const getRoomTypeInfo = (roomType: RoomType) => {
  return ROOM_TYPE_CONFIG[roomType] || ROOM_TYPE_CONFIG.other;
};

export const getRoomTypeIcon = (roomType: RoomType): string => {
  return getRoomTypeInfo(roomType).icon;
};

export const getRoomTypeLabel = (roomType: RoomType): string => {
  return getRoomTypeInfo(roomType).label;
};

// Утилиты для работы со светильниками
export const getFixtureInfo = (fixtureKey: FixtureKey) => {
  return fixtureTemplates[fixtureKey];
};

export const getFixtureName = (fixtureKey: FixtureKey): string => {
  return fixtureTemplates[fixtureKey]?.name || fixtureKey;
};

// Расчет светового потока для одного светильника
export const calculateFixtureLumens = (fixtureKey: FixtureKey): number => {
  const fixture = fixtureTemplates[fixtureKey];
  if (!fixture) return 0;

  return fixture.lampIds.reduce((totalLumens, lampId) => {
    const lamp = lampTemplates[lampId];
    return totalLumens + (lamp?.lumens || 0);
  }, 0);
};

// Расчет общей освещенности для массива светильников
export const calculateTotalIllumination = (lights: LightFixtureInstance[]): number => {
  return lights.reduce((totalLumens, light) => {
    return totalLumens + calculateFixtureLumens(light.template);
  }, 0);
};

// Расчет освещенности в люксах
export const calculateLux = (totalLumens: number, roomArea: number): number => {
  if (roomArea <= 0) return 0;
  return Math.round(totalLumens / roomArea);
};

// Получение стандартов освещенности по типу помещения
export const getIlluminationStandards = (roomType: RoomType) => {
  return getRoomTypeInfo(roomType);
};

// Проверка соответствия нормам освещенности
export const checkIlluminationSufficiency = (
  totalLumens: number, 
  roomArea: number, 
  roomType: RoomType
) => {
  const actualLux = calculateLux(totalLumens, roomArea);
  const standards = getIlluminationStandards(roomType);
  
  return {
    sufficient: actualLux >= standards.minLux,
    actualLux,
    requiredMinLux: standards.minLux,
    recommendedLux: standards.recommendedLux,
    efficiency: actualLux / standards.recommendedLux, // Коэффициент эффективности (0-1+)
  };
};

// Дополнительные утилиты для анализа освещения
export const analyzeRoomIllumination = (lights: LightFixtureInstance[], roomArea: number, roomType: RoomType) => {
  const totalLumens = calculateTotalIllumination(lights);
  const sufficiencyCheck = checkIlluminationSufficiency(totalLumens, roomArea, roomType);
  
  return {
    totalLumens,
    lightsCount: lights.length,
    roomArea,
    roomType,
    ...sufficiencyCheck,
    // Дополнительная аналитика
    averageLumensPerLight: lights.length > 0 ? Math.round(totalLumens / lights.length) : 0,
    lumensPerSquareMeter: Math.round(totalLumens / roomArea),
  };
};

// Утилита для получения технической информации о светильнике
export const getFixtureTechnicalInfo = (fixtureKey: FixtureKey) => {
  const fixture = fixtureTemplates[fixtureKey];
  if (!fixture) return null;
  
  const totalLumens = calculateFixtureLumens(fixtureKey);
  const lampCount = fixture.lampIds.length;
  
  return {
    ...fixture.technicalInfo,
    totalLumens,
    lampCount,
    averageLampLumens: lampCount > 0 ? Math.round(totalLumens / lampCount) : 0,
    fixtureType: fixture.fixtureType,
  };
};