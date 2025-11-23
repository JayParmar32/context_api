import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Applayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Header />

      <main className="container mx-auto px-4 py-6 flex-grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}
