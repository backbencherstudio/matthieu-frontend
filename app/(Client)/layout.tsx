import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Navbar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="uppercase">
            <Header />
            <div className=''>
                {children}
            </div>
            <Footer />
        </div>
    );
}
