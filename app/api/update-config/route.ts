import { NextResponse } from "next/server";
import { appUpdateConfig } from "./data";

export const revalidate = 300; // cache 5 minutes

export async function GET() {
  return NextResponse.json(appUpdateConfig);
}
