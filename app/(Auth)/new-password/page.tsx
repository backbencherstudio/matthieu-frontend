import { AuthHero } from "@/components/Auth/AuthHero";
import { SetNewPassword } from "@/components/Auth/set-new-password";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Navbar";

export default function page() {
    return (
        <div>
            <Header />
            <AuthHero title="Set New Password" heroImage="/auth/auth-hero.jpg" />
            <SetNewPassword />
            <Footer />
        </div>
    )
}
