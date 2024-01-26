import { Inter } from "next/font/google";
import Link from "next/link";
import Background from "../components/background";
import Layout from "@/layout.tsx/layout";
import Card from "@/components/contents.tsx/card";
import DarkPatternsDescription from "@/components/arkPatternsDescription";
import DarkPatternsSubscription from "../../public/DarkPatternsSubscription.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Background />
      <Layout>
        <div className={`flex  flex-col items-center justify-between p-24`}>
          <DarkPatternsDescription />

          <Card
            href="/subscription"
            imageSrc={DarkPatternsSubscription}
            alt="DarkPatternsSubscriptionIcon"
            title="オープンダークサブスクリプション"
            description="＊架空のサイトです"
          />
        </div>
      </Layout>
    </main>
  );
}
