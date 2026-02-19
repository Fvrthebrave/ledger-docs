type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="glass rounded-2xl px-5 py-4 shadow-glass">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-700/90">
        Documentation
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-slate-900">{title}</h1>
    </header>
  );
}
