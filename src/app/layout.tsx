import Header from "@/components/Header";

import "./../styles/globals.scss";

export const metadata = {
  title: "Fondation FIDEPE",
  description: "Fondation FIDEP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body id="top">
        <Header />
        {children}
      </body>
    </html>
  );
}
