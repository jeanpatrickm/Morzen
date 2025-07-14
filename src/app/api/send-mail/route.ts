import { type NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { rateLimiterMiddleware } from "@/lib/rate-limiter";

function isNonEmptyString(value: unknown): value is string {
  return (
    typeof value === "string" && value.trim().length > 0 && value.length < 2048
  );
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const isRateLimited = await rateLimiterMiddleware(ip);
    if (isRateLimited) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await req.json();
    const { name, email, description, projectTitle } = body;

    if (
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(description) ||
      !isNonEmptyString(projectTitle)
    ) {
      return NextResponse.json(
        { message: "Invalid or missing fields." },
        { status: 400 },
      );
    }

    const response = await sendMail({ name, email, description, projectTitle });

    if (response.error) {
      console.log(response.error);
      return NextResponse.json({ error: "Algo deu errado!" }, { status: 500 });
    }

    return NextResponse.json(
      {
        success: true,
        message: response.message,
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      { error: "Algo deu errado!", success: false },
      { status: 500 },
    );
  }
}
