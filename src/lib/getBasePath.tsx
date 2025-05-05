// !Se encarga de construir rutas internas que respeten la subruta definida en `basePath` 
// !DOCUMENTACION: https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
// Es indispensable cuando la aplicación no está montada en la raíz del dominio (ej: midominio.com/postmaster),
// ya que garantiza que todas las rutas (a imágenes, enlaces, recursos) funcionen correctamente sin romperse.
import { apiConfig } from "@/config";

export function getBasePath(path: string): string {
  const basePath = apiConfig.basePath || "";
  return basePath + path;
}