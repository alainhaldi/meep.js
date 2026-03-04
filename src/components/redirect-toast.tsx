"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { consumeCookiedByKey } from "@/actions/cookies";

const RedirectToast = () => {
  useEffect(() => {
    console.log("I got run");

    const showCookieToast = async () => {
      const message = await consumeCookiedByKey("toast");

      if (message) {
        toast.success(message);
        console.log("Message:" + message);
      }
    };

    showCookieToast();
  }, []);

  return null;
};

export { RedirectToast };
