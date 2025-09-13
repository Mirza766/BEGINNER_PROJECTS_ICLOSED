import { useState, useMemo } from "react";
import { Chart } from "react-google-charts";

export default function BudgetDashboard({ transactions }) {
  // Sort transactions by date descending (newest first)
  const sortedTransactions = useMemo(() => {
    return [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [transactions]);

  // Extract all available months from data
  const months = useMemo(() => {
    const uniqueMonths = new Set();
    sortedTransactions.forEach((t) => {
      const d = new Date(t.date);
      const monthKey = `${d.getFullYear()}-${d.getMonth()}`; // e.g. "2023-8"
      uniqueMonths.add(monthKey);
    });
    return Array.from(uniqueMonths).sort().reverse(); // newest first
  }, [sortedTransactions]);

  const [selectedMonth, setSelectedMonth] = useState(months[0] || "");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter transactions for selected month
  const monthlyTransactions = useMemo(() => {
    return sortedTransactions.filter((t) => {
      const d = new Date(t.date);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      return key === selectedMonth;
    });
  }, [sortedTransactions, selectedMonth]);

  // Pagination logic
  const totalPages = Math.ceil(monthlyTransactions.length / itemsPerPage);
  const paginatedTransactions = monthlyTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total spent
  const totalSpent = useMemo(() => {
    return monthlyTransactions.reduce((acc, t) => acc + t.amount, 0);
  }, [monthlyTransactions]);

  // Prepare chart data for categories
  const categoryData = useMemo(() => {
    const categoryTotals = {};
    monthlyTransactions.forEach((t) => {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    });

    return [["Category", "Amount"], ...Object.entries(categoryTotals)];
  }, [monthlyTransactions]);

  // Convert selectedMonth to a human-readable label
  const monthLabel = useMemo(() => {
    if (!selectedMonth) return "";
    const [year, month] = selectedMonth.split("-");
    return new Date(year, month).toLocaleString("default", { month: "long", year: "numeric" });
  }, [selectedMonth]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Month Selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Budget Dashboard</h2>
        <select
          value={selectedMonth}
          onChange={(e) => {
            setSelectedMonth(e.target.value);
            setCurrentPage(1); // reset to first page when changing month
          }}
          className="p-2 border rounded"
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {new Date(m.split("-")[0], m.split("-")[1]).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </option>
          ))}
        </select>
      </div>

      {/* Total Spent */}
      <div className="p-4 bg-gray-100 rounded-lg shadow text-xl font-semibold">
        Total Spent: ${totalSpent.toFixed(2)}
      </div>

      {/* Pie Chart */}
      <div className="p-4 border rounded-lg shadow">
        <Chart
          chartType="PieChart"
          data={categoryData}
          options={{
            title: `Spending by Category - ${monthLabel}`,
            is3D: true,
          }}
          width={"100%"}
          height={"300px"}
        />
      </div>

      {/* Transactions */}
      <div className="p-4 border rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Transactions</h3>
        {paginatedTransactions.length === 0 ? (
          <p>No transactions found for this month.</p>
        ) : (
          <ul className="space-y-2">
            {paginatedTransactions.map((t, index) => (
              <li key={index} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-semibold">{t.payee}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(t.date).toLocaleDateString()} • {t.category}
                  </p>
                </div>
                <p className="font-bold text-red-600">-${t.amount.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
