import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our HVAC Services | Repair, Replacement & Maintenance",
  description: "HVAC Rescue LLC offers expert HVAC repair, replacement, maintenance, indoor air quality, duct deodorization, and ductwork services in Walker and Cullman Counties, Alabama.",
  alternates: {
    canonical: "https://hvacrescuellc.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
