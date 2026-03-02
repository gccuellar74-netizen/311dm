import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Verifica si el usuario tiene un permiso específico.
 */
export function requirePermission(permission) {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.permissions.includes(permission)) {
      redirect("/unauthorized");
    }

    return decoded;

  } catch (error) {
    redirect("/login");
  }
}