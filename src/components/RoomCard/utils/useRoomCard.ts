import { useState, useMemo } from "react";
import type {
  FixtureKey,
  LampKey,
  LightFixture,
  LightFixtureInstance,
  OutletInstance,
} from "../../../types";
import { useBreakerStore } from "../../../store/useBreakerStore";
import { fixtureTemplates } from "../../../data/fixture/fixtureTemplates";
import { lampTemplates } from "../../../data/fixture/lampTemplates";

// Вспомогательная функция для преобразования
const arrayToRecord = (
  arr: Array<{ id: string; isPowered: boolean }>
): Record<string, boolean> => {
  return arr.reduce((acc, item) => {
    acc[item.id] = item.isPowered;
    return acc;
  }, {} as Record<string, boolean>);
};

export const useRoomCard = (
  roomId: string,
  points: (OutletInstance | LightFixtureInstance)[]
) => {
  const store = useBreakerStore();
  const [popupState, setPopupState] = useState<{
    fixture: FixtureKey | null;
    isOpen: boolean;
  }>({
    fixture: null,
    isOpen: false,
  });

  // Основные данные
  const electricalState = useMemo(
    () => store.getRoomElectricalState(roomId),
    [store, roomId]
  );

  // ПРЕОБРАЗУЕМ данные в новый формат
  const transformedElectricalState = useMemo(
    () => ({
      lights: arrayToRecord(electricalState.lights),
      outlets: arrayToRecord(electricalState.outlets),
    }),
    [electricalState]
  );

  const { lights, outlets } = useMemo(
    () => ({
      lights: points.filter(
        (p): p is LightFixtureInstance => p.type === "light"
      ),
      outlets: points.filter((p): p is OutletInstance => p.type === "outlet"),
    }),
    [points]
  );

  // Автоматы для этой комнаты
  const breakers = useMemo(() => {
    const map = new Map();

    [...electricalState.lights, ...electricalState.outlets].forEach((item) => {
      if (!item.breakerId || map.has(item.breakerId)) return;

      const panel = store.panels.find((p) => p.id === item.panelId);
      const breaker = panel?.breakers.find((b) => b.id === item.breakerId);

      if (breaker) {
        map.set(item.breakerId, {
          designation: breaker.designation,
          isOn: item.isPowered,
          panelName: panel?.name || "",
        });
      }
    });

    return map;
  }, [electricalState, store.panels]);

  // Освещенность
  const totalLumens = useMemo(
    () =>
      lights.reduce((total, light) => {
        const fixture = fixtureTemplates[light.template];
        return fixture ? total + getFixtureLumens(fixture) : total;
      }, 0),
    [lights]
  );

  // Действия
  const actions = {
    toggleBreaker: (breakerId: string) => store.toggleBreaker(breakerId),
    openLightPopup: (fixtureKey: FixtureKey) =>
      setPopupState({ fixture: fixtureKey, isOpen: true }),
    closePopup: () => setPopupState({ fixture: null, isOpen: false }),
  };

  return {
    // Данные (передаем преобразованные)
    data: {
      electricalState: transformedElectricalState, // ← ВОТ ТУТ ИСПОЛЬЗУЕМ ПРЕОБРАЗОВАННЫЕ ДАННЫЕ
      lights,
      outlets,
      breakers,
      totalLumens,
    },
    // UI состояние
    ui: { selectedFixture: popupState.fixture, isPopupOpen: popupState.isOpen },
    // Действия
    actions,
  };
};

// Вспомогательная функция
const getFixtureLumens = (fixture: LightFixture) =>
  fixture.lampIds.reduce((sum: number, lampId: string) => {
    const lamp = lampTemplates[lampId as LampKey];
    return sum + (lamp?.lumens || 0);
  }, 0);
