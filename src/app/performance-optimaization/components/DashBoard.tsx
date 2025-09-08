"use client";

import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";

const LazyHeavyChart = dynamic(() => import("./HeavyChart"), {
  suspense: true, 
});

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">⚡ Performance Demo</h1>

      <button
        onClick={() => setShowChart(!showChart)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {showChart ? "Hide Chart" : "Load Chart"}
      </button>

      <div className="mt-4">
        {showChart && (
          <Suspense
            fallback={
              <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg">
                ⏳ Loading chart...
              </div>
            }
          >
            <LazyHeavyChart />
          </Suspense>
        )}
      </div>
    </div>
  );
}
