import { AppHeader } from "@/components/layout/app-header";

export default function OrdensPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <AppHeader />

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold">Ordens de Serviço</h1>

        <p className="mt-2 text-slate-400">
          Aqui vamos criar, listar e acompanhar as ordens de manutenção.
        </p>
      </section>
    </main>
  );
}