import { Routes, Route } from "react-router-dom";
import { Header } from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";
import { PageLayout } from "./layout/PageLayout";
import { navigation } from "./nav";

import Introduction from "./content/introduction.mdx";
import Architecture from "./content/architecture.mdx";
import Integrity from "./content/integrity.mdx";
import Accounts from "./content/accounts.mdx";
import Transactions from "./content/transactions.mdx";
import Authentication from "./content/authentication.mdx";
import Endpoints from "./content/endpoints.mdx";

export function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-4 p-4 md:p-6">
      <Header title="Ledger Docs" />
      <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-[260px_1fr]">
        <Sidebar groups={navigation} />

        <PageLayout>
          <Routes>
            <Route path="/docs/introduction" element={<Introduction />} />
            <Route path="/docs/architecture" element={<Architecture />} />
            <Route path="/docs/integrity" element={<Integrity />} />
            <Route path="/docs/accounts" element={<Accounts />} />
            <Route path="/docs/transactions" element={<Transactions />} />
            <Route path="/docs/authentication" element={<Authentication />} />
            <Route path="/docs/endpoints" element={<Endpoints />} />
            <Route path="*" element={<Introduction />} />
          </Routes>
        </PageLayout>
      </div>
    </div>
  );
}
