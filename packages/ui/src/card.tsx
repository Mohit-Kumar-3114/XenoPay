import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border p-6 bg-slate-100 rounded-xl shadow-2xl 
                 w-full max-w-[450px] h-auto sm:w-[400px] sm:h-[350px] md:w-[450px] md:h-[350px]"
    >
      <h1 className="text-2xl border-b pb-2">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
