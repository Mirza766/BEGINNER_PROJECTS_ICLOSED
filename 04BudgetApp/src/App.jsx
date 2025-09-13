import transactions from "./transactions.json";
import BudgetDashboard from "./BudgetDashboard";

export default function App() {
  return <BudgetDashboard transactions={transactions} />;
}
