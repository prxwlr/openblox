import { NextResponse } from "next/server";
import { db } from "@openblox/db";

export async function GET() {
  const userCount = await db.user.count();
  return NextResponse.json({ ok: true, userCount });
}