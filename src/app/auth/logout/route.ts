import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();

  const suppabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  await suppabase.auth.signOut();

  return NextResponse.redirect(req.nextUrl.origin, {
    status: 301,
  });
}
