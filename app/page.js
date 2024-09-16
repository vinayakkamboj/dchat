import "./globals.css";
import Navbar from "./client/components/Navbar"; // Import the Navbar component

export const metadata = {
  title: "DChat",
  description: "A decentralized chat platform",
};

export default function RootLayout({ Component, pageProps }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 antialiased">
        <Navbar /> {/* Use the Navbar component here */}
        {/* Main Content */}
        <main className="container mx-auto min-h-screen py-8 px-4"></main>
        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>© 2024 DChat - Decentralized Chat Application</p>
        </footer>
      </body>
    </html>
  );
}
