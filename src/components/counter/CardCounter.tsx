interface Props {
  time: string;
  descripcion: string;
}

export const CardCounter = ({time, descripcion}: Props) => {
  return (
    <div className={`flex flex-col`}>
      <div className="font-jetbrains-mono rounded-t-lg font-extrabold tracking-wider text-xl sm:text-2xl">
        {time}
      </div>
      <span className="font-jetbrains-mono font-normal block text-slate-300 w-full text-center rounded-b-lg text-xs sm:text-sm">
        {descripcion}
      </span>
    </div>
  )
}
