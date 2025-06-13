import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);

  const formData = await req.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const cookieStore = await cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  console.log("email", email);
  console.log("password", password);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${url.origin}/auth/callback`,
    },
  });
  console.log("signup data", data);

  if (error) {
    console.error("Signup error:", error.message);
    return NextResponse.redirect(new URL("/signup?error=1", req.url), 302);
  }

  return NextResponse.redirect(
    new URL("http://localhost:3000login", req.url), 302
  );
}
