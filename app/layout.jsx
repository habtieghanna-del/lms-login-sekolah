import "./globals.css";

export const metadata = {
  title: "LMS Sekolah — Citra Eduflow",
  description: "Login & dashboard multi-role untuk LMS sekolah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
