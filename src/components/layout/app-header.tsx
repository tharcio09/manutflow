export function AppHeader() {
    return (
        <header className="border-b border-slate-800 bg-slate-950/80">
            <div className="mx-auto flex max-w-5xl items-center justify-between p-6 py-4">
                <div>
                    <strong className="text-lg font-semibold text-slate-100">
                        ManutFlow
                    </strong>

                    <p>
                        Controle de Manutenção e Ordens de Serviço
                    </p>
                </div>

                <span className="rounded-full border border-slate-700 px-3 py-1 text-sm tet-slate-300">
                    Ambiente local
                </span>
            </div>
        </header>
    )
}