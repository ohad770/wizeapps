import { NextRequest } from "next/server";

// Stub for the upsell add-on flow.
// When wired up, this should attach the add-on charge to the original transaction,
// or run a second charge against the saved token.
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

  const { transactionId, addonId, amount } = (body ?? {}) as {
    transactionId?: string;
    addonId?: string;
    amount?: number;
  };

  if (!transactionId || !addonId || typeof amount !== "number" || amount <= 0) {
    return Response.json(
      { ok: false, error: "Missing or invalid fields" },
      { status: 400 }
    );
  }

  await new Promise((r) => setTimeout(r, 500));

  return Response.json({
    ok: true,
    transactionId,
    addonId,
    amount,
  });
}
