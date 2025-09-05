export interface Outlet {
  id: string;
  name?: string; // Например: "рабочие розетки", "розетки у окна"
  count: number; // Количество розеток в группе
  estimatedLoad?: number; // Предполагаемая нагрузка (Вт)
}
