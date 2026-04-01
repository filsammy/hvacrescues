import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FAQ – Common HVAC Questions Answered',
  description:
    'Got questions about HVAC repair, maintenance, or costs? Find answers to the most common HVAC questions for Walker and Cullman County, AL residents. HVAC Rescue LLC — call 205-471-9474.',
  openGraph: {
    title: 'FAQ | HVAC Rescue LLC',
    description:
      'Answers to your top HVAC questions — emergency response, free estimates, service areas, and more. Serving Walker & Cullman Counties, Alabama.',
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}