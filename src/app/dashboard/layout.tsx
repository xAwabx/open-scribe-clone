import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <NavBar email={data?.user.email} />
          <div className="flex flex-row">
            <SideBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
