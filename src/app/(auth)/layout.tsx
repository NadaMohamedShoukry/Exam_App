import AuthVisuals from "@/features/authentication/layout/AuthVisuals";
import { ReactNode } from "react";

interface AuthLayoutTypes {
  children: ReactNode;
}
function AuthLayout({ children }: AuthLayoutTypes) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Fixed welcome section */}
      <AuthVisuals />
      {/* Dynamic auth forms */}
      <section>{children}</section>
    </main>
  );
}

export default AuthLayout;
