"use client";

import { useEffect, useState } from "react";

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLeads(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto" }}>
      <h1>Dashboard de Leads</h1>

      {loading ? (
        <p>Cargando...</p>
      ) : leads.length === 0 ? (
        <p>No hay leads registrados.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Mensaje</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.nombre}</td>
                <td>{lead.email}</td>
                <td>{lead.mensaje}</td>
                <td>{new Date(lead.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}