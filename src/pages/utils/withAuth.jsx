// utils/withAuth.js
"use client";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function withAuth(Component) {
  const Auth = async (props) => {
    const router = useRouter();
    const session = await getSession();

    if (!session) {
      // If user is not authenticated, redirect to login page
      router.push("/");
      return null;
    }

    // If user is authenticated, render the component
    return <Component {...props} />;
  };

  return Auth;
}
