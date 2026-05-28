import { AppShell } from "@/components/layout/app-shell";

export default function OrdensPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold">Ordens de Serviço</h1>

        <p className="mt-2 text-slate-400">
          Aqui vamos criar, listar e acompanhar as ordens de manutenção.
        </p>
      </section>
    </AppShell>
  );
}