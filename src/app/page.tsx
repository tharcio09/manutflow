import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-slate-700 px-4 text-sm text-slate-300">
          Projeto Full Stack - 14 dias
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          ManutFlow
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Sistema de Controle de Manutenção e Ordens de Serviço para gerenciar
          equipamentos, chamados técnicos, prioridades e histórico de
          atendimento.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left shadow-lg">
          <h2 className="text-xl font-semibold">Status do projeto</h2>

          <p className="mt-2 text-slate-400">
            Ambiente configurado com Next.js. Typescript e Tailwind CSS.
          </p>
        </div>
      </section>
    </main>
  );
}
