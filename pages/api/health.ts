import type { NextApiRequest, NextApiResponse } from "next";

// Aqui você pode adicionar qualquer lógica de verificação, tipo DB, Redis etc.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Exemplo de verificação (mock) — substitua com algo real se quiser
    const everythingOk = true; // ou algum check real tipo ping no banco

    if (everythingOk) {
      res.status(200).json({ status: "ok", message: "Health check passed" });
    } else {
      res.status(404).json({ status: "error", message: "Service degraded" });
    }
  } catch (error) {
    console.error("Erro no health check:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}