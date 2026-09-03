import React from "react";
import {
  TrendingUp,
  Truck,
  Warehouse,
  Laptop,
  Megaphone,
  Users,
  Factory,
  Boxes,
  Network,
  Cpu,
  Handshake,
  ShieldCheck,
  Building2,
  Briefcase,
  Layers,
  ArrowRight,
  Globe,
  LucideProps,
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const icons: Record<string, React.ComponentType<LucideProps>> = {
    TrendingUp,
    Truck,
    Warehouse,
    Laptop,
    Megaphone,
    Users,
    Factory,
    Boxes,
    Network,
    Cpu,
    Handshake,
    ShieldCheck,
    Building2,
    Briefcase,
    Layers,
    ArrowRight,
    Globe,
  };

  const IconComponent = icons[name] || Building2;
  return <IconComponent {...props} />;
}
