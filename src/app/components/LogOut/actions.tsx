"use server";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";

export const logout = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (!error) {
    ("redirecting to auth...");
    redirect("/auth");
  } else {
    throw new Error("something went wrong while logging out: ", error);
  }
};
