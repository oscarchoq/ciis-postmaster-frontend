"use client";
import { Button } from "@/components/ui/button"
import { FileUpload } from "@/components/ui/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Search, Upload, User } from "lucide-react"
import { cn } from '../../../lib/utils';
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { InscriptionForm } from "@/interface";

type RegistrationState =
  | "idle"
  | "processing"
  | "success-button"
  | "success"
  | "error";

export const Form = () => {

  const [buttonState, setButtonState] = useState<RegistrationState>("success");
  const [documentType, setDocumentType] = useState<string>("dni");


  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<InscriptionForm>({
    defaultValues: {
      documentType: "dni",
    }
  });

  useEffect(() => {
    register("voucher", { required: "Debe subir el comprobante de pago" });
  }, [register]);

  const documentNumber = watch("documentNumber");

  const onSubmit = async (data: InscriptionForm) => {
    setButtonState("processing");
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      setButtonState("success-button");
      

      await new Promise ((resolve) => setTimeout(resolve, 1500));
      setButtonState("success");

    } catch (error) {
      console.error("Error during registration:", error);
      setButtonState("idle");
      return;
    }
  };

  const searchReniec = async () => {
    if (!documentNumber || documentNumber.length !== 8) return;

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setValue("firstName", "Juan", {shouldValidate: true});
    setValue("lastName", "Perez", {shouldValidate: true});
  }

  return (
    <div className="lg:w-3/5 p-2 lg:p-6">

      {/* Formulario */}


      <div className="max-w-lg mx-auto bg-[#000126]">
        <form
          onSubmit={handleSubmit(onSubmit)}
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
                  value={documentType}
                  onValueChange={(value) => {
                    setDocumentType(value)
                    setValue("documentType", value);
                  }}
                >
                  <SelectTrigger className="w-full border border-gray-400">
                    <SelectValue />
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
                <div className="flex w-full items-center gap-2">
                  <Input
                    className="border border-gray-400"
                    type="number"
                    {...register("documentNumber", { required: "Este campo es obligatorio" })}
                  />
                  {
                    documentType === "dni" &&
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={searchReniec}
                    >
                      <Search size={16} className="text-gray-900" />
                    </Button>
                  }
                </div>
                {errors.documentNumber && (
                  <p className="text-red-500 text-sm">{errors.documentNumber.message}</p>
                )}
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
                  type="text"
                  {...register("firstName", { required: "Este campo es obligatorio" })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="font-medium text-gray-300">
                  Apellidos
                </Label>
                <Input
                  className="border border-gray-400"
                  type="text"
                  {...register("lastName", { required: "Este campo es obligatorio" })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Correo */}
            <div className="space-y-2">
              <Label className="font-medium text-gray-300">
                Correo Electrónico
              </Label>
              <Input
                className="border border-gray-400"
                type="email"
                {...register("email", { required: "Este campo es obligatorio", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Correo electrónico inválido" } })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Celular */}
            <div className="space-y-2">
              <Label className="font-medium text-gray-300">
                Número de Celular
              </Label>
              <Input
                className="border border-gray-400"
                type="number"
                {...register("phone", { required: "Este campo es obligatorio", pattern: { value: /^\d{9}$/, message: "Número de celular inválido" } })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

          </div>

          {/* Voucher */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Upload size={20} className="text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-100">Comprobante de Pago</h3>
            </div>

            <FileUpload
              onFileSelect={(file) => setValue("voucher", file, {shouldValidate: true})}
            />
            <p className="text-sm text-gray-400">Solo se permiten imágenes con un tamaño máximo de 5MB.</p>
            {errors.voucher && (
              <p className="text-red-500 text-sm">{errors.voucher.message}</p>
            )}
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