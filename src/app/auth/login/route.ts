import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies(); 
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const formData = await req.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  console.log("formdataJink", formData);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("login data", data);
  console.log("login error", error);

  if (error) {
    const errorCode = error.message.includes("Invalid login credentials")
      ? "invalid"
      : "unexpected";
    return NextResponse.redirect(new URL(`/login?error=${errorCode}`, req.url));
  }


  return NextResponse.redirect(
    new URL("http://localhost:3000", req.url)
  );
}
