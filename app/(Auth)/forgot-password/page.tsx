import { AuthHero } from "@/components/Auth/AuthHero";
import Header from "@/components/Layout/Navbar";

export default function page() {
    return (
        <div>
            <Header />
            <AuthHero title="Forgot Password" heroImage="/auth/auth-hero.jpg" />
        </div>
    )
}
