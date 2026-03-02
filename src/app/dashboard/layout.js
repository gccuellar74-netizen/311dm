import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies(); // ✅ importante en Next 15+
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  let userEmail = null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    userEmail = decoded.email;
  } catch {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold">
          Panel de Administración
        </h1>

        <div className="flex items-center gap-4">
          {userEmail && (
            <span className="text-sm text-gray-600">
              {userEmail}
            </span>
          )}

          {/* ✅ Client component dentro de Server component */}
          <LogoutButton />
        </div>
      </header>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
