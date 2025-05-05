interface Props {
  time: string;
  descripcion: string;
}

export const CardCounter = ({time, descripcion}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-t-lg font-bold tracking-wider">
        {time}
      </div>
      <span className="block text-sm text-slate-300 w-full text-center rounded-b-lg pb-1">
        {descripcion}
      </span>
    </div>
  )
}
