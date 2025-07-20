import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const MonthlyOrderReport = ({ orders }) => {

    console.log("Orders", orders)
  // Extract unique years from orders
  const years = [
    ...new Set(orders.map((order) => new Date(order.orderDate).getFullYear())),
  ].sort((a, b) => b - a);

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(
    years.includes(currentYear) ? currentYear : years[0]
  );

  // Filter orders for selected year
  const filteredOrders = orders.filter(
    (order) => new Date(order.orderDate).getFullYear() === selectedYear &&
    order?.product?.status !== 'deleted'
  );

  // Group orders by month
  const monthlyOrders = {};
  console.log(filteredOrders)
  filteredOrders.forEach((order) => {
    const date = new Date(order.orderDate);
    const month = date.toLocaleString("default", { month: "short" });

    if (!monthlyOrders[month]) {
      monthlyOrders[month] = { totalOrders: 0, totalRevenue: 0 };
    }

    monthlyOrders[month].totalOrders += 1; // Count orders
    monthlyOrders[month].totalRevenue += (parseInt(order.product.price) * parseInt(order.product.quantity)); // Add total price ONCE per order
    console.log(monthlyOrders[month].totalRevenue)
  });
  

  const allMonths = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const filteredMonths = allMonths.filter(
    (month) =>
      (monthlyOrders[month]?.totalOrders || 0) > 0 ||
      (monthlyOrders[month]?.totalRevenue || 0) > 0
  );

  const orderCounts = filteredMonths.map(
    (month) => monthlyOrders[month]?.totalOrders || 0
  );
  const orderRevenue = filteredMonths.map(
    (month) => monthlyOrders[month]?.totalRevenue || 0
  );

  const hasData = filteredOrders.length > 0 && filteredMonths.length > 0;

  const data = {
    labels: filteredMonths,
    datasets: [
      {
        label: "Total Orders",
        data: orderCounts,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Total Revenue",
        data: orderRevenue,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `Monthly Orders & Revenue (${selectedYear})`,
      },
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        formatter: (value) => (value === 0 ? "" : value),
        font: { weight: "bold" },
      },
    },
  };

  const handleDownloadPdf = () => {
    if (!hasData) {
      alert(`No data available for ${selectedYear}.`);
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Products Report - ${selectedYear}`, 14, 22);

    const rows = [];

    filteredOrders.forEach((order) => {
      const product = order.product; // ✅ Single product
      if (product && (!product.status || product.status !== "deleted")) {
        rows.push([
          order.orderDate,
          product.productName,
          product.quantity,
          product.price,
        ]);
      }
    });

    if (rows.length === 0) {
      doc.setFontSize(14);
      doc.text("No valid products found for this year.", 14, 40);
    } else {
      const columns = ["Order Date", "Product Name", "Quantity", "Price"];
      autoTable(doc, {
        startY: 30,
        head: [columns],
        body: rows,
        styles: { fontSize: 12 },
        headStyles: { fillColor: [22, 160, 133] },
      });

      doc.save(`products-report-${selectedYear}.pdf`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-gray-100 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Monthly Order Report</h1>

        <div className="flex items-center space-x-2">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="border border-gray-300 rounded p-2"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <button
            onClick={handleDownloadPdf}
            disabled={!hasData}
            title="Download Delivered Products Report PDF"
            className={`flex items-center px-3 py-2 rounded transition ${
              hasData
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
              />
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      {hasData ? (
        <Bar data={data} options={options} />
      ) : (
        <div className="text-center text-gray-500 py-10">
          No data available for {selectedYear}.
        </div>
      )}
    </div>
  );
};

export default MonthlyOrderReport;
