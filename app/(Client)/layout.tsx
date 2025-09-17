import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Navbar";


export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <div className='pt-[100px]'>
                {children}
            </div>
            <Footer />
        </div>
    );
}
