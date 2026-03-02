import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Validación de rol
    if (decoded.role !== "admin") {
      redirect("/unauthorized");
    }

  } catch (error) {
    redirect("/login");
  }

  return (
    <div>
      <h2 className="text-xl font-bold">
        Panel Exclusivo de Administradores
      </h2>
    </div>
  );
}