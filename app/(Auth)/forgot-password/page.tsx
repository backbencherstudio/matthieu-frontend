import { AuthHero } from "@/components/Auth/AuthHero";
import { ForgotPassword } from "@/components/Auth/forgot-password";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Navbar";

export default function page() {
    return (
        <div>
            <Header />
            <AuthHero title="Forgot Password" heroImage="/auth/auth-hero.jpg" />
            <ForgotPassword />
            <Footer />
        </div>
    )
}
