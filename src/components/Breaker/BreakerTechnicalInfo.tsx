import type { IBreakerTechnicalInfo } from "../../types";

import styles from "./BreakerTechnicalInfo.module.css";

interface BreakerTechnicalInfoProps {
  technicalInfo?: IBreakerTechnicalInfo;
  isVisible: boolean;
  onClose: () => void;
}

const BreakerTechnicalInfo: React.FC<BreakerTechnicalInfoProps> = ({
  technicalInfo,
  isVisible,
  onClose,
}) => {
  if (!isVisible || !technicalInfo) return null;

  const hasTechnicalInfo = Object.keys(technicalInfo).length > 0;

  if (!hasTechnicalInfo) {
    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h3>Техническая информация</h3>
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
          </div>
          <div className={styles.content}>
            <p className={styles.noData}>Техническая информация отсутствует</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Техническая информация</h3>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.content}>
          {/* Основная информация */}
          {(technicalInfo.manufacturer || technicalInfo.model) && (
            <div className={styles.section}>
              <h4>Основная информация</h4>
              <div className={styles.grid}>
                {technicalInfo.manufacturer && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Производитель:</span>
                    <span className={styles.value}>
                      {technicalInfo.manufacturer}
                    </span>
                  </div>
                )}
                {technicalInfo.model && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Модель:</span>
                    <span className={styles.value}>{technicalInfo.model}</span>
                  </div>
                )}
                {technicalInfo.serialNumber && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Серийный номер:</span>
                    <span className={styles.value}>
                      {technicalInfo.serialNumber}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Технические характеристики */}
          {(technicalInfo.characteristic || technicalInfo.breakingCapacity) && (
            <div className={styles.section}>
              <h4>Технические характеристики</h4>
              <div className={styles.grid}>
                {technicalInfo.characteristic && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Характеристика:</span>
                    <span className={styles.value}>
                      {technicalInfo.characteristic}
                    </span>
                  </div>
                )}
                {technicalInfo.breakingCapacity && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>
                      Отключающая способность:
                    </span>
                    <span className={styles.value}>
                      {technicalInfo.breakingCapacity} кА
                    </span>
                  </div>
                )}
                {technicalInfo.polesCount && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Количество полюсов:</span>
                    <span className={styles.value}>
                      {technicalInfo.polesCount}
                    </span>
                  </div>
                )}
                {technicalInfo.ratedVoltage && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>
                      Номинальное напряжение:
                    </span>
                    <span className={styles.value}>
                      {technicalInfo.ratedVoltage} В
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Даты */}
          {(technicalInfo.installationDate ||
            technicalInfo.lastMaintenanceDate) && (
            <div className={styles.section}>
              <h4>Обслуживание</h4>
              <div className={styles.grid}>
                {technicalInfo.installationDate && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Дата установки:</span>
                    <span className={styles.value}>
                      {new Date(
                        technicalInfo.installationDate
                      ).toLocaleDateString("ru-RU")}
                    </span>
                  </div>
                )}
                {technicalInfo.lastMaintenanceDate && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Последнее ТО:</span>
                    <span className={styles.value}>
                      {new Date(
                        technicalInfo.lastMaintenanceDate
                      ).toLocaleDateString("ru-RU")}
                    </span>
                  </div>
                )}
                {technicalInfo.nextMaintenanceDate && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Следующее ТО:</span>
                    <span className={styles.value}>
                      {new Date(
                        technicalInfo.nextMaintenanceDate
                      ).toLocaleDateString("ru-RU")}
                    </span>
                  </div>
                )}
                {technicalInfo.warrantyUntil && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Гарантия до:</span>
                    <span className={styles.value}>
                      {new Date(technicalInfo.warrantyUntil).toLocaleDateString(
                        "ru-RU"
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Статус и комментарии */}
          {(technicalInfo.status || technicalInfo.comments) && (
            <div className={styles.section}>
              <h4>Дополнительно</h4>
              <div className={styles.grid}>
                {technicalInfo.status && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Статус:</span>
                    <span
                      className={`${styles.value} ${
                        styles[technicalInfo.status]
                      }`}
                    >
                      {getStatusText(technicalInfo.status)}
                    </span>
                  </div>
                )}
                {technicalInfo.comments && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Комментарии:</span>
                    <span className={styles.value}>
                      {technicalInfo.comments}
                    </span>
                  </div>
                )}
                {technicalInfo.maintenanceComments && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Заметки по ТО:</span>
                    <span className={styles.value}>
                      {technicalInfo.maintenanceComments}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Вспомогательная функция для отображения статуса
const getStatusText = (status: string) => {
  const statusMap: { [key: string]: string } = {
    active: "Активен",
    inactive: "Неактивен",
    maintenance: "На обслуживании",
    faulty: "Неисправен",
  };
  return statusMap[status] || status;
};

export default BreakerTechnicalInfo;
