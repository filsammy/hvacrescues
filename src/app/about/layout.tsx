import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About HVAC Rescue LLC | Your Trusted Local HVAC Pros",
  description: "Learn about HVAC Rescue LLC — your trusted local HVAC contractor serving Walker and Cullman Counties, Alabama. Expert repair, installation, and maintenance services.",
  alternates: {
    canonical: "https://hvacrescuellc.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
