import Header from "~/shared/components/Header";
import Hero from "~/shared/components/Hero";
import Articles from "~/shared/components/Articles";
import Footer from "~/shared/components/Footer";
import Info from "~/shared/components/Info";

export const meta = () => [{ title: "Frontend Mentor | Easybank landing page" }];

export default function Index() {
  return (
    <div className="mx-auto" style={{ fontFamily: "Public Sans, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <main className="relative min-h-screen bg-white sm:flex flex-col sm:items-center sm:justify-center md:flex flex-row">
        <Hero />
        <Info />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
