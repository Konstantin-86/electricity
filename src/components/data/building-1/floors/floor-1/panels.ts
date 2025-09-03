import type { Panel } from "../../../../../types";

export const floor1Panels: Panel[] = [
  {
    id: "panel-1-1",
    name: "ЩО-1-1",
    type: "lighting",
    location: "холл на входе, возле туалета",
    cableType: "ВВГнг-LS 3x6",
    poweredFrom: "ЩРС № 7",
    breakers: [
      {
        id: "breaker-1-1-1",
        designation: "QF1",
        description: "Холл Коридор (освещиени + розетки)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            lightFixtureIds: ["fix-101-1"],
            outletGroupIds: ["out-101-1"],
          },
        ],
        technicalInfo: {
          manufacturer: "ABB",
          model: "S203",
          characteristic: "C",
          breakingCapacity: 10,
          polesCount: 2,
          ratedVoltage: 230,
          installationDate: "2024-01-15",
          status: "active",
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-2",
        designation: "QF2",
        description: "Освещение лестницы",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-1"],
          },
        ],
        technicalInfo: {
          manufacturer: "Schneider Electric",
          model: "iC60N",
          characteristic: "C",
          breakingCapacity: 6,
          polesCount: 2,
          installationDate: "2024-01-15",
          lastMaintenanceDate: "2024-06-10",
          status: "active",
          serialNumber: "SE-IC60N-002",
        },
      },
      {
        id: "breaker-1-1-3",
        designation: "QF3",
        description: "Резерв",
        rating: 25,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          manufacturer: "IEK",
          model: "ВА47-29",
          characteristic: "C",
          breakingCapacity: 4.5,
          polesCount: 2,
          installationDate: "2024-01-15",
          status: "active",
          warrantyUntil: "2026-01-15",
          comments: "Автомат для кухонного оборудования",
        },
      } /* 
      {
        id: "breaker-1-1-4",
        designation: "QF4",
        description: "Серверная (питание оборудования)",
        rating: 32,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-104",
            outletGroupIds: ["out-104-1", "out-104-2"],
          },
        ],
        technicalInfo: {
          manufacturer: "ABB",
          model: "S204",
          characteristic: "D",
          breakingCapacity: 15,
          polesCount: 2,
          ratedVoltage: 230,
          installationDate: "2024-02-20",
          status: "active",
          serialNumber: "ABB-S204-004",
          maintenanceComments:
            "Требует регулярной проверки из-за критичной нагрузки",
        },
      },
      {
        id: "breaker-1-1-5",
        designation: "QF5",
        description: "Аварийное освещение (все помещения)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            lightFixtureIds: ["fix-101-3"],
          },
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-3"],
          },
          {
            roomId: "room-1-103",
            lightFixtureIds: ["fix-103-4"],
          },
          {
            roomId: "room-1-104",
            lightFixtureIds: ["fix-104-2"],
          },
        ],
        technicalInfo: {
          manufacturer: "Schneider Electric",
          model: "Acti9",
          characteristic: "B",
          breakingCapacity: 6,
          polesCount: 1,
          installationDate: "2024-01-15",
          status: "active",
          comments: "Аварийное освещение - не отключать!",
        },
      },
      {
        id: "breaker-1-1-6",
        designation: "QF6",
        description: "Дополнительные розетки",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            outletGroupIds: ["out-101-3", "out-101-4"],
          },
          {
            roomId: "room-1-102",
            outletGroupIds: ["out-102-3", "out-102-4"],
          },
          {
            roomId: "room-1-103",
            outletGroupIds: ["out-103-3", "out-103-4"],
          },
          {
            roomId: "room-1-104",
            outletGroupIds: ["out-104-3"],
          },
        ],
        technicalInfo: {
          manufacturer: "IEK",
          model: "ВА47-29",
          characteristic: "C",
          breakingCapacity: 4.5,
          polesCount: 1,
          installationDate: "2024-01-15",
          status: "active",
        },
      },
      {
        id: "breaker-1-1-7",
        designation: "QF7",
        description: "Дополнительное освещение",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-2"],
          },
          {
            roomId: "room-1-104",
            lightFixtureIds: ["fix-104-1", "fix-104-3"],
          },
        ],
      }, */,
    ],
  },
];
