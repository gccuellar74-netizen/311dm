import { requirePermission } from "@/lib/authorize";

export const dynamic = "force-dynamic";

export default function UsersPage() {
  requirePermission("user:read");

  return (
    <div>
      <h2 className="text-xl font-bold">
        Gestión de Usuarios
      </h2>
    </div>
  );
}