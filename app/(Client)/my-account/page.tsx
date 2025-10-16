import { redirect } from "next/navigation";

const MyAccountHome = () => {

  redirect("/my-account/dashboard")

  return <h1>My accoutnt</h1>;
};

export default MyAccountHome;
