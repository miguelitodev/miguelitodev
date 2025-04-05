import { ClientWrapper } from "@/components/ui";
import "@/styles/globals.css";

export { metadata } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="bg-gray-900 bg-cover bg-no-repeat font-[Merriweather]"
        style={{
          backgroundImage: "url(/img/bg-home-2.png)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
