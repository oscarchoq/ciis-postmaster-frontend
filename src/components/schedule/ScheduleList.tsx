import { Event } from "@/interface";
import { ScheduleItem } from "./ScheduleItem";

interface Props {
  shift: string;
  event: Event[];
}
export const ScheduleList = ({ shift, event }: Props) => {
  return (
    <>
      <h2 className={`text-gray-400 backdrop-opacity-5 text-xl text-center font-extrabold`}>{shift}</h2>
      <div className={`flex flex-col gap-4`}>
        {
          event.map((schedule) => (
              <ScheduleItem key={schedule.id} {...schedule} />
          ))
        }
      </div>
    </>
  )
}