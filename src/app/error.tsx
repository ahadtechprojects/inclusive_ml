"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Application Error Boundary Caught]", error);
  }, [error]);

  return (
    <div className="py-24 sm:py-32 flex items-center justify-center min-h-[60vh]">
      <Container size="narrow" className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          An unexpected technical exception occurred while processing this page. Please try refreshing or return to the main corporate portal.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button onClick={() => reset()} size="lg" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>
          <Button href="/" variant="outline" size="lg">
            <span>Return Home</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
