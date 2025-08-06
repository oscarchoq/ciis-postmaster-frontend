"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useState } from 'react'
import { Search, Loader2, Upload, ImageIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface FormData {
  tipoDocumento: string
  numeroDocumento: string
  nombres: string
  apellidos: string
  email: string
  celular: string
  universidad: string
  carrera: string
  password: string
  confirmPassword: string
  voucher: FileList
}

const Formulario = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [isDataFromAPI, setIsDataFromAPI] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      tipoDocumento: '',
      numeroDocumento: '',
      nombres: '',
      apellidos: '',
      email: '',
      celular: '',
      universidad: '',
      carrera: '',
      password: '',
      confirmPassword: ''
    }
  })

  // Observar valores específicos
  const tipoDocumento = watch('tipoDocumento')
  const numeroDocumento = watch('numeroDocumento')

  // Resetear estado cuando cambie el tipo de documento o se borre el número
  React.useEffect(() => {
    if (tipoDocumento !== 'dni' || !numeroDocumento) {
      setIsDataFromAPI(false)
    }
  }, [tipoDocumento, numeroDocumento])

  // Función que simula la búsqueda en API externa
  const buscarPersonaPorDNI = async (dni: string) => {
    setIsSearching(true)
    
    try {
      // Simulamos una llamada a API con delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulamos respuestas para algunos DNIs específicos
      const mockResponses: { [key: string]: { nombres: string, apellidos: string } } = {
        '12345678': { nombres: 'Juan Carlos', apellidos: 'García López' },
        '87654321': { nombres: 'María Elena', apellidos: 'Rodríguez Silva' },
        '11223344': { nombres: 'Luis Alberto', apellidos: 'Mendoza Torres' },
        '99887766': { nombres: 'Ana Patricia', apellidos: 'Vásquez Morales' }
      }
      
      if (mockResponses[dni]) {
        const persona = mockResponses[dni]
        setValue('nombres', persona.nombres)
        setValue('apellidos', persona.apellidos)
        setIsDataFromAPI(true) // Marcamos que los datos vienen de la API
        return { success: true, data: persona }
      } else {
        // Si no encuentra el DNI
        throw new Error('DNI no encontrado')
      }
    } catch (error) {
      console.error('Error al buscar DNI:', error)
      // Limpiar los campos si no se encuentra el DNI
      setValue('nombres', '')
      setValue('apellidos', '')
      setIsDataFromAPI(false)
      alert('No se encontraron datos para este DNI. Por favor, ingrese los datos manualmente.')
      return { success: false, error: error }
    } finally {
      setIsSearching(false)
    }
  }

  const handleBuscarDNI = () => {
    if (!numeroDocumento || numeroDocumento.length !== 8) {
      alert('Por favor, ingrese un DNI válido de 8 dígitos')
      return
    }
    buscarPersonaPorDNI(numeroDocumento)
  }

  const onSubmit = (data: FormData) => {
    console.log('Datos del formulario:', data)
    // Aquí puedes agregar la lógica para enviar los datos
    alert('Formulario enviado exitosamente!')
  }

  // Funciones para manejar el archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setValue('voucher', e.target.files as FileList)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith('image/')) {
        setSelectedFile(file)
        const dt = new DataTransfer()
        dt.items.add(file)
        setValue('voucher', dt.files)
      } else {
        alert('Por favor, selecciona solo archivos de imagen')
      }
    }
  }
  
  return (
    <div className='max-w-sm w-full mx-auto xl:mr-0 xl:ml-12'>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        
        {/* Datos Personales */}
        <div>
          <h3 className="text-[#000126] text-lg font-semibold mb-4">Datos Personales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tipo de documento */}
            <div className="space-y-2">
              <Label htmlFor="tipoDocumento" className="text-zinc-700 font-medium">
                Tipo de documento
              </Label>
              <Select value={tipoDocumento} onValueChange={(value) => setValue('tipoDocumento', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar documento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dni">DNI</SelectItem>
                  <SelectItem value="pasaporte">Pasaporte</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Número de documento */}
            <div className="space-y-2">
              <Label htmlFor="numeroDocumento" className="text-zinc-700 font-medium">
                Número de documento
              </Label>
              <div className="flex gap-2">
                <Input 
                  id="numeroDocumento"
                  type="text"
                  placeholder="Ingresa tu número de documento"
                  className="border-zinc-300 flex-1"
                  {...register('numeroDocumento')}
                />
                {tipoDocumento === 'dni' && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={handleBuscarDNI}
                    disabled={isSearching || !numeroDocumento}
                    className="border-zinc-300 hover:bg-zinc-50"
                  >
                    {isSearching ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </div>
            </div>

            {/* Nombres */}
            <div className="space-y-2">
              <Label htmlFor="nombres" className="text-zinc-700 font-medium">
                Nombres
              </Label>
              <Input 
                id="nombres"
                type="text"
                placeholder="Ingresa tus nombres"
                className={`border-zinc-300 ${isDataFromAPI ? 'bg-zinc-50' : ''}`}
                disabled={isDataFromAPI}
                {...register('nombres')}
              />
            </div>

            {/* Apellidos */}
            <div className="space-y-2">
              <Label htmlFor="apellidos" className="text-zinc-700 font-medium">
                Apellidos
              </Label>
              <Input 
                id="apellidos"
                type="text"
                placeholder="Ingresa tus apellidos"
                className={`border-zinc-300 ${isDataFromAPI ? 'bg-zinc-50' : ''}`}
                disabled={isDataFromAPI}
                {...register('apellidos')}
              />
            </div>

            {/* Correo electrónico */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-700 font-medium">
                Correo electrónico
              </Label>
              <Input 
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                className="border-zinc-300"
                {...register('email')}
              />
            </div>

            {/* Celular */}
            <div className="space-y-2">
              <Label htmlFor="celular" className="text-zinc-700 font-medium">
                Celular
              </Label>
              <Input 
                id="celular"
                type="tel"
                placeholder="987 654 321"
                className="border-zinc-300"
                {...register('celular')}
              />
            </div>
          </div>
        </div>

        {/* Información Académica */}
        <div>
          <h3 className="text-[#000126] text-lg font-semibold mb-4">Información Académica</h3>
          <div className="space-y-4">
            {/* Universidad */}
            <div className="space-y-2">
              <Label htmlFor="universidad" className="text-zinc-700 font-medium">
                Universidad
              </Label>
              <Input 
                id="universidad"
                type="text"
                placeholder="Nombre de tu universidad"
                className="border-zinc-300"
                {...register('universidad')}
              />
            </div>

            {/* Carrera */}
            <div className="space-y-2">
              <Label htmlFor="carrera" className="text-zinc-700 font-medium">
                Carrera
              </Label>
              <Input 
                id="carrera"
                type="text"
                placeholder="Nombre de tu carrera"
                className="border-zinc-300"
                {...register('carrera')}
              />
            </div>
          </div>
        </div>

        {/* Crear Cuenta */}
        <div>
          <h3 className="text-[#000126] text-lg font-semibold mb-4">Crear Cuenta</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Contraseña */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-700 font-medium">
                Contraseña
              </Label>
              <Input 
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="border-zinc-300"
                {...register('password')}
              />
            </div>

            {/* Confirmar contraseña */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-zinc-700 font-medium">
                Confirmar contraseña
              </Label>
              <Input 
                id="confirmPassword"
                type="password"
                placeholder="Confirma tu contraseña"
                className="border-zinc-300"
                {...register('confirmPassword')}
              />
            </div>
          </div>
        </div>

        {/* Subir Voucher */}
        <div>
          <h3 className="text-[#000126] text-lg font-semibold mb-4">Voucher de Pago</h3>
          <div className="space-y-3">
            <Label className="text-zinc-700 font-medium">
              Subir imagen del voucher
            </Label>
            
            {/* Área de drag and drop personalizada */}
            <div
              className={`relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 cursor-pointer hover:border-zinc-400 ${
                dragActive ? 'border-blue-400 bg-blue-50' : 'border-zinc-300 bg-zinc-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Input
                id="voucher-input"
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                {...register('voucher', { onChange: handleFileChange })}
              />
              
              {selectedFile ? (
                // Vista cuando hay archivo seleccionado
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900">{selectedFile.name}</p>
                    <p className="text-xs text-zinc-500">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              ) : (
                // Vista inicial sin archivo
                <div className="text-center">
                  <div className="w-12 h-12 bg-zinc-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Upload className="w-6 h-6 text-zinc-500" />
                  </div>
                  <p className="text-sm font-medium text-zinc-700 mb-1">
                    Arrastra tu voucher aquí o haz clic para seleccionar
                  </p>
                  <p className="text-xs text-zinc-500">
                    JPG, PNG hasta 5MB
                  </p>
                </div>
              )}
            </div>
            
            <p className="text-xs text-zinc-500">
              Sube una imagen clara de tu voucher de pago para verificar tu inscripción
            </p>
          </div>
        </div>

        {/* Botón de inscripción */}
        <div className="pt-4">
          <Button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-base transition-colors duration-200"
          >
            Inscribirme al evento
          </Button>
        </div>

      </form>
    </div>
  )
}

export default Formulario