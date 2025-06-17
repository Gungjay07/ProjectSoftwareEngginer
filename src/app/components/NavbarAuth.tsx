"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { IconUser, IconLogout, IconChevronDown, IconMail } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const NavbarAuth = () => {
  const { user, isLoading, signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGoogleSignIn = async () => {
    const supabase = createClientComponentClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </div>
    );
  }

  if (user) {
    // Extract user name from email (part before @)
    const userName = user.email?.split('@')[0] || 'User';
    
    return (
      <div className="relative z-[70] pointer-events-auto" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative z-[80] flex items-center space-x-2 px-4 py-2 text-sm bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md dark:bg-black dark:hover:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="w-6 h-6 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center">
            <IconUser className="w-3 h-3 text-white dark:text-gray-800" />
          </div>
          <span className="font-medium">{userName}</span>
          <IconChevronDown 
            className={`w-3 h-3 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-black rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              style={{ pointerEvents: 'auto' }}
            >
              {/* User Info Section */}
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center">
                    <IconUser className="w-5 h-5 text-white dark:text-gray-800" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {userName}
                    </p>
                    <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                      <IconMail className="w-3 h-3" />
                      <p className="truncate">{user.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Section */}
              <div className="py-2">
                <button
                  onClick={async () => {
                    setIsDropdownOpen(false);
                    await signOut();
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/10 transition-colors duration-200"
                >
                  <IconLogout className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative z-[70] flex items-center space-x-3 pointer-events-auto">
      <button
        onClick={handleGoogleSignIn}
        className="relative z-[80] flex items-center space-x-2 px-6 py-2 text-sm bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md dark:bg-black dark:hover:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
        style={{ pointerEvents: 'auto' }}
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
};
