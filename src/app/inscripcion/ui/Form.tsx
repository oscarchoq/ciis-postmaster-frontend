"use client";
import { Button } from "@/components/ui/button"
import { FileUpload } from "@/components/ui/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Upload, User } from "lucide-react"
import { cn } from '../../../lib/utils';
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type RegistrationState =
  | "idle"
  | "processing"
  | "success-button"
  | "success"
  | "error";

export const Form = () => {

  const [buttonState, setButtonState] = useState<RegistrationState>("success");


  return (
    <div className="lg:w-3/5 p-2 lg:p-6">

      {/* Formulario */}


      <div className="max-w-lg mx-auto bg-[#000126]">
        <form action=""
          className="space-y-6"
        >

          {/* Informacion personal */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <User size={20} className="text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-100">Informacion Personal</h3>
            </div>

            {/* Documento de identidad*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tipo de documento */}
              <div className="space-y-2">
                <Label
                className="font-medium text-gray-300"
                >
                  Tipo de Documento
                </Label>
                <Select
                value="dni"
                >
                  <SelectTrigger className="w-full border border-gray-400">
                    <SelectValue defaultValue={"dni"} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#000126] border border-gray-400 text-gray-300">
                    <SelectItem value="dni">DNI</SelectItem>
                    <SelectItem value="carnet-extranjeria">Carnet de Extranjería</SelectItem>
                    <SelectItem value="pasaporte">Pasaporte</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Numero de documento */}
              <div className="space-y-2">
                <Label
                  className="font-medium text-gray-300"
                >
                  Número de Documento
                </Label>
                <Input
                  className="border border-gray-400"
                />
              </div>
            </div>
            {/* Nombres*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-medium text-gray-300">
                  Nombres
                </Label>
                <Input
                  className="border border-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label className="font-medium text-gray-300">
                  Apellidos
                </Label>
                <Input
                  className="border border-gray-400"

                />
              </div>
            </div>

            {/* Correo */}
            <div className="space-y-2">
              <Label className="font-medium text-gray-300">
                Correo Electrónico
              </Label>
              <Input
                className="border border-gray-400"

              />
            </div>

            {/* Celular */}
            <div className="space-y-2">
              <Label className="font-medium text-gray-300">
                Número de Celular
              </Label>
              <Input
                className="border border-gray-400"

              />
            </div>

          </div>

          {/* Voucher */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Upload size={20} className="text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-100">Comprobante de Pago</h3>
            </div>

            <FileUpload />
          </div>

          {/* Submit */}
          <div className="pt-6">
            <Button
              type="submit"
              className={cn(
                "w-full h-10 text-sm sm:text-base font-medium transition-all duration-300 transform",
                "shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
                buttonStateColor(buttonState),
                // "cursor-not-allowed",
              )}
            >
              {buttonStateText(buttonState)}
            </Button>

          </div>
        </form>
      </div>

    </div>
  )
}

const buttonStateText = (state: RegistrationState) => {
  switch (state) {
    case "processing":
      return (
        <div
          key="processing"
          className="flex items-center space-x-3"
        >
          <div
            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
          />
          <span>Procesando registro...</span>
        </div>
      );
    case "success-button":
      return (
        <div
          className="flex items-center space-x-2"
        >
          <CheckCircle size={24} />
          <span>¡Registro exitoso!</span>
        </div>
      );
    default:
      return (
        <span
        >
          Completar registro
        </span>
      );
  }
}

const buttonStateColor = (state: RegistrationState) => {
  switch (state) {
    case "processing":
      return "bg-blue-500 hover:bg-blue-500";
    case "success-button":
      return "bg-green-500 hover:bg-green-500";
    default:
      return "bg-sky-800 hover:bg-sky-700";
  }
}