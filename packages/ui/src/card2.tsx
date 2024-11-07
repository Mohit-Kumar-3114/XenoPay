import React from "react";

export function Card2({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="w-11/12 h-auto p-4 border bg-slate-100 rounded-lg shadow-md sm:w-10/12 sm:p-6 sm:rounded-xl sm:shadow-2xl">
      <h1 className="text-lg border-b pb-2 sm:text-xl sm:pb-3">
        {title}
      </h1>
      <p className="text-xs sm:text-sm">
        {children}
      </p>
    </div>
  );
}
