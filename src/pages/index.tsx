import { Inter } from "next/font/google";
import Link from "next/link";
import Background from "../components/background";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Layout from "@/layout.tsx/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Layout />
      <Link href={"/subscription"}>
        <>Open Dark Patternst</>
      </Link>

      <Background />
    </main>
  );
}
