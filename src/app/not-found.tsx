import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center min-h-[60vh]">
      <Container size="narrow" className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-6 shadow-sm">
          <FileQuestion className="w-8 h-8 text-primary" />
        </div>

        <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest block mb-2">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
          The corporate resource or page you are seeking is either unavailable or has been relocated within our directory.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/what-we-do" variant="outline" size="lg">
            <span>Explore Capabilities</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
