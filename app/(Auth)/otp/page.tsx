import { AuthHero } from "@/components/Auth/AuthHero";
import { ForgotPassword } from "@/components/Auth/forgot-password";
import { OTP } from "@/components/Auth/otp";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Navbar";

export default function page() {
    return (
        <div>
            <Header />
            <AuthHero title="OTP Verification" heroImage="/auth/auth-hero.jpg" />
            <OTP />
            <Footer />
        </div>
    )
}
