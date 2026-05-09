"use client";

import { useState } from "react";

interface AnalyticsData {
  activeUsers: number;
  totalActivations: number;
  weeklyGrowth: number;
  complianceScore: number;
  featureUsage: { name: string; percentage: number; count: number }[];
  topPages: { url: string; activations: number; users: number }[];
  hourlyTrend: { hour: string; users: number }[];
}

export function AnalyticsDashboard({ data }: { data: AnalyticsData }) {
  const [dateRange, setDateRange] = useState<"week" | "month" | "year">("month");
  const [view, setView] = useState<"overview" | "features" | "pages">("overview");

  const handleExportCSV = () => {
    const csv = [
      ["Analytics Export", new Date().toISOString()],
      [],
      ["Metric", "Value"],
      ["Active Users", data.activeUsers],
      ["Total Activations", data.totalActivations],
      ["Weekly Growth", `${data.weeklyGrowth}%`],
      ["WCAG Compliance Score", `${data.complianceScore}%`],
      [],
      ["Feature", "Count", "Percentage"],
      ...data.featureUsage.map((f) => [f.name, f.count, `${f.percentage}%`]),
    ]
      .map((row) => (Array.isArray(row) ? row.join(",") : row))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl border border-[var(--color-border)]">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Analytics</h2>
          <p className="text-[var(--color-text-muted)]">Real-time accessibility metrics</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value as any)}
            className="px-4 py-2 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-text)] text-sm font-medium"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="year">Last year</option>
          </select>
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
          >
            📊 Export CSV
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Active Users"
          value={data.activeUsers}
          change={`+${data.weeklyGrowth}%`}
          icon="👥"
        />
        <MetricCard
          label="Total Activations"
          value={data.totalActivations}
          change="this month"
          icon="✨"
        />
        <MetricCard
          label="Avg. Features Used"
          value={3.2}
          change="per session"
          icon="🎯"
        />
        <MetricCard
          label="WCAG Compliance"
          value={`${data.complianceScore}%`}
          change="AA Level"
          icon="🏆"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white p-2 rounded-xl border border-[var(--color-border)]">
        {["overview", "features", "pages"].map((tab) => (
          <button
            key={tab}
            onClick={() => setView(tab as any)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
              view === tab
                ? "bg-indigo-600 text-white"
                : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]"
            }`}
          >
            {tab === "overview" && "📈 Overview"}
            {tab === "features" && "🎨 Features"}
            {tab === "pages" && "📄 Pages"}
          </button>
        ))}
      </div>

      {/* Content Based on View */}
      {view === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hourly Trend */}
          <div className="bg-white p-6 rounded-xl border border-[var(--color-border)]">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Hourly Activity</h3>
            <div className="space-y-3">
              {data.hourlyTrend.map((point, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="w-12 text-sm text-[var(--color-text-muted)]">{point.hour}</span>
                  <div className="flex-1 h-8 bg-[var(--color-surface)] rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all"
                      style={{
                        width: `${(point.users / Math.max(...data.hourlyTrend.map((p) => p.users))) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-12 text-right text-sm font-semibold text-[var(--color-text)]">
                    {point.users}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-white p-6 rounded-xl border border-[var(--color-border)]">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Top Pages</h3>
            <div className="space-y-4">
              {data.topPages.map((page, idx) => (
                <div key={idx} className="pb-4 border-b border-[var(--color-border)] last:border-0">
                  <p className="text-sm font-semibold text-[var(--color-text)] truncate">
                    {page.url}
                  </p>
                  <div className="flex justify-between mt-2 text-xs text-[var(--color-text-muted)]">
                    <span>{page.activations} activations</span>
                    <span>{page.users} unique users</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {view === "features" && (
        <div className="bg-white p-6 rounded-xl border border-[var(--color-border)]">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-6">Feature Usage Breakdown</h3>
          <div className="space-y-6">
            {data.featureUsage.map((feature, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-[var(--color-text)]">{feature.name}</span>
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {feature.count.toLocaleString()} uses • {feature.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-[var(--color-surface)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600"
                    style={{ width: `${feature.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === "pages" && (
        <div className="bg-white p-6 rounded-xl border border-[var(--color-border)]">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-6">Page-by-Page Analytics</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-3 px-4 font-semibold text-[var(--color-text)]">
                    Page URL
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-[var(--color-text)]">
                    Activations
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-[var(--color-text)]">
                    Users
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-[var(--color-text)]">
                    Conversion
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.topPages.map((page, idx) => (
                  <tr key={idx} className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface)]">
                    <td className="py-3 px-4 text-[var(--color-text)] truncate">{page.url}</td>
                    <td className="text-right py-3 px-4 text-[var(--color-text)]">
                      {page.activations.toLocaleString()}
                    </td>
                    <td className="text-right py-3 px-4 text-[var(--color-text)]">
                      {page.users.toLocaleString()}
                    </td>
                    <td className="text-right py-3 px-4 text-[var(--color-text-muted)]">
                      {((page.activations / page.users) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string | number;
  change: string;
  icon: string;
}

function MetricCard({ label, value, change, icon }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[var(--color-text-muted)] text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-[var(--color-text)] mt-2">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
      <p className="text-[var(--color-text-muted)] text-xs">{change}</p>
    </div>
  );
}
