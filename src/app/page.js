import Content from "@/app/_components/content";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden md:block">
        <Header />
      </div>

      <div className="flex-grow">
        <Content />
      </div>

      <div className="block md:hidden">
        <Footer />
      </div>
    </div>
  );
}
