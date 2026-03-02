import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { query } from "@/lib/db";
import LogoutButton from "@/components/LogoutButton";

interface Lead {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  created_at: string;
}

export default async function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token) {
    redirect("/login");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET no está definido en variables de entorno");
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    redirect("/login");
  }

  // ✅ Consulta incluyendo telefono
  const result = await query(`
    SELECT id, nombre, email, telefono, mensaje, created_at
    FROM leads
    ORDER BY created_at DESC
  `);

  const leads: Lead[] = result.rows;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard de Leads</h1>
        <LogoutButton />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="p-2 border">Nombre</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Teléfono</th>
              <th className="p-2 border">Mensaje</th>
              <th className="p-2 border">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center">
                  No hay leads registrados.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="text-center">
                  <td className="p-2 border">{lead.nombre}</td>
                  <td className="p-2 border">{lead.email}</td>
                  <td className="p-2 border">
                    {lead.telefono ? lead.telefono : "—"}
                  </td>
                  <td className="p-2 border">{lead.mensaje}</td>
                  <td className="p-2 border">
                    {new Date(lead.created_at).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
