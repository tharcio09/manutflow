import { StatusCard } from "@/components/ui/status-card";

export function DashboardOverview() {
  return (
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
  );
}