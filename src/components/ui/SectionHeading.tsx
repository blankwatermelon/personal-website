import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

/**
 * Section heading. The crimson→deep-red gradient is intentionally restricted
 * to the underline bar — it is the ONLY place that gradient appears in the
 * site. Heading text itself is flat slate-100 for editorial calm.
 */
export function SectionHeading({
  title,
  subtitle,
  className,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-slate-400 text-lg max-w-2xl",
            center && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-4",
          center && "mx-auto"
        )}
      />
    </div>
  );
}
