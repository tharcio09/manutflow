import { StatusCard } from "@/components/ui/status-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-12">
        <div className="text-center">
          <p className="mb-4 inline-flex rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Projeto Full Stack • 14 dias
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            ManutFlow
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Sistema de Controle de Manutenção e Ordens de Serviço para
            gerenciar equipamentos, prioridades, responsáveis e histórico de
            atendimento.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <StatusCard
            title="Equipamentos"
            value="0"
            description="Máquinas e ativos cadastrados"
          />

          <StatusCard
            title="Ordens abertas"
            value="0"
            description="Manutenções aguardando atendimento"
          />

          <StatusCard
            title="Ordens concluídas"
            value="0"
            description="Serviços finalizados"
          />
        </div>
      </section>
    </main>
  );
}