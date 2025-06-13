"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { IconUser, IconLogout, IconLogin, IconChevronDown, IconMail } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

export const NavbarAuth = () => {
  const { user, isLoading, signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    setIsDropdownOpen(false);
    await signOut();
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
          className="relative z-[80] flex items-center space-x-2 px-4 py-2 text-sm bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-neutral-600 dark:text-gray-200"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <IconUser className="w-3 h-3 text-white" />
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
              className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-gray-200 dark:border-neutral-600 overflow-hidden"
              style={{ pointerEvents: 'auto' }}
            >
              {/* User Info Section */}
              <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-700 border-b border-gray-200 dark:border-neutral-600">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <IconUser className="w-5 h-5 text-white" />
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
                  onClick={handleSignOut}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors duration-200"
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
      <Link
        href="/login"
        className="relative z-[80] flex items-center space-x-2 px-4 py-2 text-sm bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-neutral-600 dark:text-gray-200"
        style={{ pointerEvents: 'auto' }}
      >
        <IconLogin className="w-4 h-4" />
        <span className="font-medium">Login</span>
      </Link>
      <Link
        href="/signup"
        className="relative z-[80] flex items-center space-x-2 px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
        style={{ pointerEvents: 'auto' }}
      >
        <span className="font-medium">Sign Up</span>
      </Link>
    </div>
  );
};
