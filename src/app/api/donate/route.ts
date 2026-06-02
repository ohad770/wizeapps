import { NextRequest } from "next/server";

// Stub for the real payment gateway integration.
// When wired up, replace this with a fetch() to the gateway (Tranzila, Cardcom, etc).
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { tierId, amount, name, email } = (body ?? {}) as {
    tierId?: string;
    amount?: number;
    name?: string;
    email?: string;
  };

  if (!tierId || typeof amount !== "number" || amount <= 0 || !name || !email) {
    return Response.json(
      { ok: false, error: "Missing or invalid fields" },
      { status: 400 }
    );
  }

  // Simulate network latency so the UI feels real.
  await new Promise((r) => setTimeout(r, 600));

  const transactionId = `pre_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;

  return Response.json({
    ok: true,
    transactionId,
    tierId,
    amount,
    name,
    email,
  });
}
