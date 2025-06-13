import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies(); 
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const formData = await req.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
    const errorCode = error.message.includes("Invalid login credentials")
      ? "invalid"
      : "unexpected";
    return NextResponse.redirect(new URL(`/login?error=${errorCode}`, req.url));
  }

  return NextResponse.redirect(new URL("/", req.url));
}
