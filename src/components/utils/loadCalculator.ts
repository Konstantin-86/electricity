// utils/loadCalculator.ts
import type {
  IBreaker,
  Room,
  Lamp,
  LightFixture,
  OutletGroup,
} from "../../types/index";

// Функция для получения мощности лампы (обрабатывает как объект, так и ID)
const getLampWattage = (
  lamp: Lamp | string | undefined,
  lampCatalog: Lamp[]
): number => {
  if (!lamp) return 0; // Защита от undefined

  if (typeof lamp === "string") {
    const foundLamp = lampCatalog.find((l) => l.id === lamp);
    return foundLamp ? foundLamp.wattage : 0;
  }

  // Проверяем, что это объект с свойством wattage
  if (typeof lamp === "object" && "wattage" in lamp) {
    return lamp.wattage;
  }

  return 0; // На всякий случай
};

// Функция для расчета мощности светильника
const calculateFixturePower = (
  fixture: LightFixture,
  lampCatalog: Lamp[]
): number => {
  if (!fixture?.lampIds) return 0;

  return fixture.lampIds.reduce((total, lamp) => {
    return total + getLampWattage(lamp, lampCatalog);
  }, 0);
};

// Функция для расчета мощности группы розеток
const calculateOutletGroupPower = (outletGroup: OutletGroup): number => {
  if (outletGroup.estimatedLoad !== undefined) {
    return outletGroup.estimatedLoad;
  }
  return outletGroup.count * 200; // 200Вт на розетку по умолчанию
};

// Основная функция расчета нагрузки на автомат
export const calculateBreakerLoad = (
  breaker: IBreaker,
  rooms: Room[],
  lampCatalog: Lamp[] // Добавляем каталог ламп
) => {
  let totalPower = 0;
  let lightingPower = 0;
  let socketPower = 0;

  // Проверяем наличие controlledLoads (для резервных автоматов)
  if (!breaker.controlledLoads || breaker.controlledLoads.length === 0) {
    return {
      totalPower: 0,
      currentLoad: 0,
      loadPercentage: 0,
      lightingPower: 0,
      socketPower: 0,
      isOverloaded: false,
      isCritical: false,
      rating: breaker.rating,
    };
  }

  for (const load of breaker.controlledLoads) {
    const room = rooms.find((r) => r.id === load.roomId);
    if (!room) continue;

    // Считаем мощность светильников
    if (load.lightFixtureIds) {
      for (const fixtureId of load.lightFixtureIds) {
        const fixture = room.lightFixtures.find((f) => f.id === fixtureId);
        if (fixture) {
          const fixturePower = calculateFixturePower(fixture, lampCatalog);
          lightingPower += fixturePower;
          totalPower += fixturePower;
        }
      }
    }

    // Считаем мощность розеток
    if (load.outletGroupIds) {
      for (const outletGroupId of load.outletGroupIds) {
        const outletGroup = room.outletGroups.find(
          (g) => g.id === outletGroupId
        );
        if (outletGroup) {
          const groupPower = calculateOutletGroupPower(outletGroup);
          socketPower += groupPower;
          totalPower += groupPower;
        }
      }
    }
  }

  const voltage = 220;
  const currentLoad = totalPower / voltage;
  const loadPercentage = (currentLoad / breaker.rating) * 100;
  const isOverloaded = loadPercentage > 80;
  const isCritical = loadPercentage > 100;

  return {
    totalPower,
    currentLoad,
    loadPercentage,
    lightingPower,
    socketPower,
    isOverloaded,
    isCritical,
    rating: breaker.rating,
  };
};

export const getLoadColor = (percentage: number): string => {
  if (percentage <= 60) return "#4CAF50";
  if (percentage <= 80) return "#FF9800";
  if (percentage <= 100) return "#F44336";
  return "#9C27B0";
};
