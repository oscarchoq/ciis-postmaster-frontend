export interface ScheduleResponse {
  day:   string;
  date:  Date;
  early: Event[];
  late:  Event[];
}

export interface Event {
  id:        number;
  topic:     string;
  start:     Date;
  end:       Date;
  type:      string;
  isMorning: boolean;
  speaker:   string;
  idSpeaker: number;
  country:   string;
}

export type ItemScheduleProps = Pick<Event, 'topic' | 'speaker' | 'start'>