"use client";

import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { useSession } from "next-auth/react";

export default function withAuth(Component) {
  return function withAuth(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: session } = useSession();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      if (typeof window !== "undefined" && !session) {
        // Check if window is defined before executing client-side logic
        router.push("/Profile");
      }
    }, [session, router]);
    if (!session) {
      return null;
    }
    return session ? <Component {...props} /> : null;
  };
}
