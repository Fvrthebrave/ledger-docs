import type { NavGroup } from "../nav";
import { Link } from "react-router-dom";

type SidebarProps = {
  groups: NavGroup[];
};

export function Sidebar({ groups }: SidebarProps) {
  return (
    <aside className="glass h-fit rounded-2xl p-4 shadow-glass">
      <nav className="space-y-5" aria-label="Docs navigation">
        {groups.map((group) => (
          <section key={group.label} className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-700/80">
              {group.label}
            </h2>
            <ul className="space-y-2">
              {group.items.map((item: any) => (
                <li key={item.href}>
                <Link
                  to={item.href}
                  className="block rounded-lg border border-white/40 bg-white/20 px-3 py-2 text-sm text-slate-800 transition hover:bg-white/30"
                >
                  {item.title}
                </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  );
}
