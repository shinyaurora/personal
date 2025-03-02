import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export function Background() {
  return (
    <div className="fixed top-0 flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-[#EAE1D8] p-20 -z-10">
      <AnimatedGridPattern
        numSquares={80}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
