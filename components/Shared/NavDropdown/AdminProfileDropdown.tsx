import LogoutIcon from "@/components/Icons/AdminIcon/LogoutIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Import icons from react-icons

const AdminProfileDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
   const router = useRouter();

    const handleLogout = () => {
    localStorage.removeItem('token');
    // localStorage.removeItem('userType');
    
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict;';
    document.cookie = 'userType=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict;';
    
    setIsOpen(false);
    
    // Preferred: client-side navigation
    router.replace('/signin');          // or '/' or '/signin'
    // router.refresh();               // optional: force refresh server components
  };
  
  return (
    <div className="w-[220px] bg-white rounded-[6px] shadow-xl p-4 animate-fade-in flex flex-col gap-4 xl:border border-[#f6f6f6]">
      {/* Logout */}
      <div className="flex flex-col">
        <Link
          href="/admin/settings"
          className="flex items-center gap-3 p-3 rounded-[10px]  hover:bg-red-50 transition-colors duration-150  cursor-pointer"
        >
          <ProfileIcon className="size-5" />
          <span>Profile</span>
        </Link>
        <Link
          href="/signin"
          className="flex items-center gap-3 p-3 rounded-[10px] text-error-text  hover:bg-red-50 transition-colors duration-150  cursor-pointer"
        >
          <LogoutIcon className="w-5 h-5" />
          <button  onClick={handleLogout}><span>Logout</span></button>
          
        </Link>
      </div>
    </div>
  );
};

export default AdminProfileDropdown;
