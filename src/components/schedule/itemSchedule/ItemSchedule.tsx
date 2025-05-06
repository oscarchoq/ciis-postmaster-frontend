import { ItemScheduleProps } from '@/interface';
import styles from './Item.module.css';

export const ItemSchedule = ({ topic, start, speaker }: ItemScheduleProps) => {

  const formattedTime = new Date(start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className={`${styles.cardSchedule}`}>
        <div className={`${styles.containerHour}`}>
          <h4 className={`${styles.hour}`}>{formattedTime}</h4>
        </div>
        <div className={`${styles.containerInformation}`}>
          <h3 className={`${styles.thema}`}>{topic}</h3>
          <span className={`${styles.nameSpeaker}`}>{speaker}</span>
        </div>
      </div>
  )
}
