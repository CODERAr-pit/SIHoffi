import "./globals.css";
import AppShell from "@/components/AppShell";
import connect from "@/dbconfig";
import User from "@/models/admin/index.model";
import bcrypt from "bcryptjs";

export default async function RootLayout({ children }) {

  //seeding admin
  await connect();

  const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;
  if (ADMIN_USERNAME && ADMIN_PASSWORD) {
    const exists = await User.findOne({ username: ADMIN_USERNAME });
    if (!exists) {
      const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
      await User.create({ username: ADMIN_USERNAME, password: hashed })
    }
  }

  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
    );
}
