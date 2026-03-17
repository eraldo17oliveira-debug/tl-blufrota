import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface Props {
  label: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  colorClass?: string;
  glowClass?: string;
}

export default function OptionGroup({ label, options, value, onChange, colorClass = "bg-primary text-primary-foreground", glowClass }: Props) {
  return (
    <div className="space-y-2">
      <p className="font-orbitron text-[0.65rem] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">{label}</p>
      <div className="flex gap-2">
        {options.map(o => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-xs font-bold transition-all duration-300",
              value === o.value
                ? cn(colorClass, "border-transparent shadow-lg", glowClass)
                : "border-border/50 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:border-border hover:text-foreground"
            )}
          >
            {o.icon}
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
