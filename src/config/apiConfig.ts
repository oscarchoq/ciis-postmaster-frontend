// Este archivo contiene la configuración principal para las rutas de la API y la base de la aplicación.
// Aquí se definen las URLs de la API, la ruta base y otros parámetros.

// Definimos un objeto de configuración que contiene:
// - El dominio principal donde la aplicación está alojada
// - La ruta base que se utiliza cuando la app está alojada en una subruta
//   !DOCUMENTACION: https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
// - Los endpoints que nuestra aplicación consumirá para interactuar con la API
export const apiConfig = {
  domain: 'https://ciistacna.com/',
  basePath: '/postmaster',
  endPoints: {
    // Aqui se definen los endpoints
    speakers: 'https://ciistacna.com/reports/18/speakers.json',
    schedule: 'https://ciistacna.com/reports/18/cronograma.json',
  }
}