import Image from "next/image";
import { Inter } from "next/font/google";
import SubScriptionHeader from "@/components/contents.tsx/Subscription.tsx/SubscriptionHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Subscription() {
  return (
    <main  className={`flex min-h-screen flex-col items-center justify-between p-32 `}>
      <SubScriptionHeader/>
      <>subscription</>
    </main>
  );
}
