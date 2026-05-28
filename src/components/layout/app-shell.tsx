import type { ReactNode } from "react";
import { AppHeader } from "./app-header";

type AppShellProps = {
    children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <AppHeader />
            {children}
        </main>
    );
}