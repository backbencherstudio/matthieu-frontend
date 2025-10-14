import { AuthHero } from "@/components/Auth/AuthHero";
import { SignUpForm } from "@/components/Auth/sign-up-form";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Navbar";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <AuthHero title="Create your account" heroImage="/auth/auth-hero.jpg" />
      <SignUpForm />
      <Footer />
    </>
  );
};
export default SignUpPage;
