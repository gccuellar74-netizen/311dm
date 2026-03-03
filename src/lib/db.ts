import { Pool } from "pg";

/**
 * Extensión global para evitar múltiples instancias del pool
 * en desarrollo (hot reload de Next.js).
 */
declare global {
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined;
}

/**
 * Validación temprana de variable crítica.
 * Evita que la app arranque sin DATABASE_URL.
 */
if (!process.env.DATABASE_URL) {
  throw new Error(
    "❌ DATABASE_URL no está definida en las variables de entorno"
  );
}

/**
 * Creación del Pool de conexiones.
 * - Usa SSL porque Neon está en un host externo.
 * - Limita conexiones para evitar saturación en serverless.
 */
const pool =
  global.pgPool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Requerido por Neon/Vercel
    },
    max: 5, // Límite de conexiones simultáneas
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

/**
 * En desarrollo reutilizamos el pool
 * para evitar múltiples conexiones por hot reload.
 */
if (process.env.NODE_ENV !== "production") {
  global.pgPool = pool;
}

/**
 * Función genérica para ejecutar queries parametrizadas.
 * ✅ Previene SQL Injection usando parámetros ($1, $2...)
 * ✅ Centraliza manejo de errores
 */
export async function query<T = any>(
  text: string,
  params?: any[]
): Promise<T> {
  try {
    const result = await pool.query(text, params);
    return result.rows as T;
  } catch (error) {
    console.error("❌ Database error:", error);
    throw new Error("Error ejecutando consulta en la base de datos");
  }
}