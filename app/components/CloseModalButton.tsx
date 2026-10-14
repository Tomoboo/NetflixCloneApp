"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export function CloseModalButton() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  return (
    <Button
      onClick={handleClose}
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-[60] rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
      aria-label="Close modal"
    >
      <X className="h-6 w-6" />
    </Button>
  );
}
