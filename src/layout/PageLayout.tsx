import type { ReactNode } from "react";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className="glass rounded-2xl p-6 shadow-glass">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="prose prose-slate max-w-none mt-6">{children}</div>
    </main>
  );
}
