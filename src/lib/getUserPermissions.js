import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Obtiene permisos dinámicos desde la base de datos.
 */
export async function getUserPermissions(userId) {
  const query = `
    SELECT p.name
    FROM permissions p
    JOIN role_permissions rp ON rp.permission_id = p.id
    JOIN user_roles ur ON ur.role_id = rp.role_id
    WHERE ur.user_id = $1
  `;

  const { rows } = await pool.query(query, [userId]);

  return rows.map(row => row.name);
}