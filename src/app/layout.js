import "./globals.css";

export const metadata = {
  title: "Platinum Touch Detailing",
  description:
    "Premium mobile auto detailing in Waukee, West Des Moines, and Des Moines, Iowa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}