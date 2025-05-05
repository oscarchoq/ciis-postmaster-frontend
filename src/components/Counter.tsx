"use client";
import useCountdown from "@/hook/useCountDown";
import styles from "@/styles/Counter.module.css";

export const Counter = () => {
  const { timeDays, timeHours, timeMinutes, timeSeconds } = useCountdown(
    "May 13, 2025 00:00:00"
  );

  return (
    <>
    <div id='contador' className={styles.contadorContainer}>
      <div className={styles.contadorSegment}>
        <span className={styles.contadorNumber} id='days'>{timeDays}</span>
        <span className={styles.contadorLabel}>Días</span>
      </div>
      <div className={styles.contadorSegment}>
        <span className={styles.contadorNumber} id='hours'>{timeHours}</span>
        <span className={styles.contadorLabel}>Horas</span>
      </div>
      <div className={styles.contadorSegment}>
        <span className={styles.contadorNumber} id='minutes'>{timeMinutes}</span>
        <span className={styles.contadorLabel}>Minutos</span>
      </div>
      <div className={styles.contadorSegment}>
        <span className={styles.contadorNumber} id='seconds'>{timeSeconds}</span>
        <span className={styles.contadorLabel}>Segundos</span>
      </div>
    </div>

    </>
  );
};
