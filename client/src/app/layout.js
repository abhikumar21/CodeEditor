import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
