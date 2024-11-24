import {
  ReceiptText,
  QrCode,
  Contact,
  ChartPie,
  Sprout,
  type LucideIcon,
} from "lucide-react";

interface FeaturesItems {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export const features = [
  {
    title: "Unified Experience",
    description: "A single platform for seamless swaps across blockchains.",
    icon: ReceiptText,
  },
  {
    title: "Multi-Protocol Support",
    description: "Choose from Chainlink, LayerZero, Wormhole, and Axelar.",
    icon: Sprout
  },
  {
    title: "Liquidity Aggregation",
    description: "Get the best rates with cross-chain liquidity pools.",
    icon: Contact,
  },
  {
    title: "Fee Optimization",
    description: "Save more with protocol comparison tools.",
    icon: QrCode,
  },
  {
    title: "Real-Time Updates",
    description: "Track every step of your transaction instantly",
    icon: ChartPie,
  },
  {
    title: "Real-Time Updates",
    description: "Track every step of your transaction instantly",
    icon: ChartPie,
  },
] satisfies FeaturesItems[];
