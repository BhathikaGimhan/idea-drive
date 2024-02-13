"use client";

import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { useSession } from "next-auth/react";

export default function withAuth(Component) {
  return function withAuth(props) {
    const { data: session } = useSession();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    useLayoutEffect(() => {
      if (!session) {
        router.push("/");
      }
    }, []);
    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}
