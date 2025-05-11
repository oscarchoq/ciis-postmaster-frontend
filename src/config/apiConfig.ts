
export const apiConfig = {
  // Dominio principal donde se alojan los recursos públicos (imágenes, PDFs, etc.)
  resourceDomain: 'https://ciistacna.com/',
  // Aqui se definen los endpoints
  endPoints: {
    speakers: 'https://ciistacna.com/reports/18/speakers.json',
    schedule: 'https://ciistacna.com/reports/18/cronograma.json',
  },
  // !NO SE USA PERO SE DEJA POR SI ACASO
  // !DOCUMENTACION: https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
  basePath: '',
}