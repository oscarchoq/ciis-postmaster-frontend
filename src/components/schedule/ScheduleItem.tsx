import { ItemScheduleProps } from '@/interface';


export const ScheduleItem = ({ topic, start, speaker }: ItemScheduleProps) => {

  const formattedTime = new Date(start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div
      className={`rounded-lg p-3 transition-all duration-300 border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5 group`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">

        {/* Time */}
        <div
          className={`font-jetbrains-mono text-2xl text-center font-semibold group-hover:font-extrabold md:col-span-2 text-white/90 flex justify-center items-center transition-colors duration-300`}
        >
          {formattedTime}
        </div>

        {/* Title and Speaker */}
        <div
          className='md:col-span-10 space-y-2.5 md:space-y-1.5 text-center md:text-left'
        >

          <h3
            className={`md:col-span-6 text-center md:text-left transition-colors duration-300 text-white/90 font-title font-semibold leading-snug group-hover:font-bold group-hover:text-white`}
          >
            {topic}
          </h3>

          <p
            className='text-sm md:text-base text-white/80 truncate group-hover:font-semibold transition-colors duration-300'
          >
            {speaker}
          </p>
        </div>
      </div>
    </div>
  )
}
