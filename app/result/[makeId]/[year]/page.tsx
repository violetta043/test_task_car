import ResultContent from "./result-content";
import { Suspense } from "react";

export default async function ResultPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = await params;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-black">
          Car models ({year})
        </h1>
        <Suspense fallback={<p className="text-gray-600">Loading models...</p>}>
          <ResultContent makeId={makeId} year={year} />
        </Suspense>
      </div>
    </div>
  );
}
