import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { clinic } from "../config/clinic";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: "Nivara Fertility & Women’s Care | South Delhi",
    template: "%s | Nivara Fertility",
  },
  description: "A fictional fertility clinic website concept for Copywrk.",
  openGraph: {
    title: "Nivara Fertility & Women’s Care",
    description: "A fictional fertility clinic website concept for Copywrk.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description: "Fictional fertility and women's care clinic created for a website sales demo.",
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110067",
      addressCountry: "IN",
    },
    openingHoursSpecification: clinic.hours
      .filter((item) => item.hours !== "Closed")
      .map((item) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.day,
        opens: "09:00",
        closes: "20:30",
      })),
  };

  return (
    <html lang="en">
      <body className={dmSans.variable + " " + dmSerif.variable}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
