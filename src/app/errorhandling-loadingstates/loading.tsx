// src/app/errorhandling-loadingstates/loading.tsx
"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      <span className="ml-3 text-blue-600 font-medium">Loading users...</span>
    </div>
  );
}
