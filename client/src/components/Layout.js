import "animate.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className='bg-wallpaper bg-cover'>
      <Navbar />
      <div className='flex flex-col h-[80vh] animate__animated animate__fadeIn '>
        <main className='mb-auto'>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
