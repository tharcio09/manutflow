type StatusCardProps = {
    title: string;
    value: string;
    description: string;
};

export function StatusCard({ title, value, description }: StatusCardProps) {
    return (
        <div className="rounded 2xl border-slate-800 bg-slate-900 p-6 shadow-lg">
            <p className="text-sm text-slate-400">{title}</p>
            
            <strong className="mt-2 block text-3xl font-bold text-slate-100">
                {value}
            </strong>

            <p className="mt-2 text-sm text-slate-400">{description}</p>
        </div>
    );
}