"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { IconUser, IconLogout, IconLogin } from "@tabler/icons-react";

export const NavbarAuth = () => {
  const { user, isLoading, signOut } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm">
          <IconUser className="w-4 h-4" />
          <span className="text-gray-700 dark:text-gray-300">
            {user.email}
          </span>
        </div>
        <button
          onClick={signOut}
          className="flex items-center space-x-1 px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
        >
          <IconLogout className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Link
        href="/login"
        className="flex items-center space-x-1 px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
      >
        <IconLogin className="w-4 h-4" />
        <span>Login</span>
      </Link>
      <Link
        href="/signup"
        className="flex items-center space-x-1 px-3 py-1 text-sm border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition-colors"
      >
        <span>Sign Up</span>
      </Link>
    </div>
  );
};
