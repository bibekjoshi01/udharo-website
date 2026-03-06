import { NextResponse } from "next/server";

export const revalidate = 300; // cache 5 minutes

export async function GET() {
  return NextResponse.json({
    latestVersion: "1.5.1",
    minSupportedVersion: "1.5.0",
    force: false,
    androidStoreUrl: "market://details?id=com.udharo.app",
    iosStoreUrl: "https://apps.apple.com/app/id123456789",
  });
}
