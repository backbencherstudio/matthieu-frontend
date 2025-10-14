import { AuthHero } from "@/components/Auth/AuthHero";
import Header from "@/components/Layout/Navbar";

const SignInpage = () => {
  return (
    <>
      <Header />
      <AuthHero title="Welcome Back" heroImage="/auth/auth-hero.jpg" />
      <h1>Signin</h1>
    </>
  );
};
export default SignInpage;
