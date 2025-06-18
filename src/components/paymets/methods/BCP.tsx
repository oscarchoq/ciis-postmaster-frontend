import Image from 'next/image'

interface BCPProps {
  titular: string;
  cuenta: string;
  cci: string;
}

export const BCP = ({ titular, cuenta, cci }: BCPProps) => {
  return (
      <>
        <div className="rounded-xl shadow-lg p-6 flex-1">
          <div className="flex flex-col items-center space-y-3">
  
            {/* para que no este tan vacio xd  */}
            <div className="flex flex-col items-center justify-center w-full">
              <Image
                src="/payments/bcp.jpg"
                alt="Código QR para pago"
                width={140}
                height={47}
                className="rounded"
              />
  
              <p className="text-lg text-blue-500/90 font-extrabold tracking-wide mt-3">Pago por transferencia</p>
            </div>
  
            {/* Titular */}
            <div className="w-full space-y-1">
              <p className="text-sm text-gray-400 text-center">Titular</p>
              <div className="rounded-lg px-3 py-2 border border-gray-600/25 hover:border-gray-500/50 transition-colors duration-200">
                <p className="text-center font-semibold text-gray-100">{titular}</p>
              </div>
            </div>
  
            {/* Número de Cuenta */}
            <div className="w-full space-y-1">
              <p className="text-sm text-gray-400 text-center">Número de cuenta</p>
              <div className="rounded-lg px-3 py-2 border border-gray-600/25 hover:border-gray-500/50 transition-colors duration-200">
                <p className="font-mono text-center font-semibold text-gray-100">{cuenta}</p>
              </div>
            </div>
  
            {/* CCI */}
            <div className="w-full space-y-1">
              <p className="text-sm text-gray-400 text-center">CCI</p>
              <div className="rounded-lg px-3 py-2 border border-gray-600/25 hover:border-gray-500/50 transition-colors duration-200">
                <p className="font-mono text-center font-semibold text-gray-100">{cci}</p>
              </div>
            </div>
  
          </div>
        </div>
      </>
    )
}
