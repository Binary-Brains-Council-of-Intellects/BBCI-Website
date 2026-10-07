import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-bbci-indigo selection:text-white">
      <ScrollToTop />
      {/* Official Sticky Navbar */}
      <Navbar />

      {/* Main Content Viewport */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Official Institutional Footer */}
      <Footer />
    </div>
  );
}
