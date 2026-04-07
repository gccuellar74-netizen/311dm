import { NextResponse } from "next/server";

/**
 * POST /api/roi
 * Body esperado:
 * {
 *   investment: number,
 *   revenue: number
 * }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const investment = Number(body.investment);
    const revenue = Number(body.revenue);

    // ✅ Validación robusta
    if (
      isNaN(investment) ||
      isNaN(revenue) ||
      investment <= 0
    ) {
      return NextResponse.json(
        { error: "Datos inválidos. Verifica inversión y ganancias." },
        { status: 400 }
      );
    }

    // ✅ Fórmula ROI profesional
    const roi = ((revenue - investment) / investment) * 100;

    return NextResponse.json({
      success: true,
      investment,
      revenue,
      roi: Number(roi.toFixed(2)),
      roiFormatted: `${roi.toFixed(2)}%`
    });

  } catch (error) {
    console.error("ROI API Error:", error);

    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}