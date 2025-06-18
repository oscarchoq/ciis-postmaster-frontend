import Image from 'next/image'

interface PlinProps {
  titular: string;
  celular: string;
  qr: string;
}

export const Plin = ({ titular, celular, qr }: PlinProps) => {
  return (
      <>
        <div className="rounded-xl shadow-lg p-6 flex-1">
          <div className="flex flex-col items-center space-y-3">
            {/* QR Code */}
            <div className="flex flex-col items-center justify-center w-full">
              <Image
                src={qr}
                alt="Código QR para pago"
                width={140}
                height={140}
                className="rounded"
              />
  
              <p className="text-lg text-sky-500 font-extrabold tracking-wide">Escanea para pagar</p>
            </div>
  
            {/* Titular */}
            <div className="w-full space-y-1">
              <p className="text-sm text-gray-400 text-center">Titular</p>
              <div className="rounded-lg px-3 py-2 border border-gray-600/25 hover:border-gray-500/50 transition-colors duration-200">
                <p className="text-center font-semibold text-gray-100">{titular}</p>
              </div>
            </div>
  
            {/* Celular */}
            <div className="w-full space-y-1">
              <p className="text-sm text-gray-400 text-center">Celular</p>
              <div className="rounded-lg px-3 py-2 border border-gray-600/25 hover:border-gray-500/50 transition-colors duration-200">
                <p className="font-mono text-center font-semibold text-gray-100">{celular}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
