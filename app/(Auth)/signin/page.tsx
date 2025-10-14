import { AuthHero } from "@/components/Auth/AuthHero";
import { SignInForm } from "@/components/Auth/sign-in-form";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Navbar";

const SignInpage = () => {
  return (
    <>
      <Header />
      <AuthHero title="Welcome Back" heroImage="/auth/auth-hero.jpg" />
      <SignInForm />
      <Footer />
    </>
  );
};
export default SignInpage;
