import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Generated by create next app",
  keywords: ["About Page", "Fernando", "Información", "..."],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
