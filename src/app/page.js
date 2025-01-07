import Content from "@/app/_components/content";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function Home() {
  return (
    <>
    <div className="hidden md:block">
      <Header />
    </div>
    <Content />
    <div className="block md:hidden">
      <Footer />
    </div>

  </>
  );
}
