import { getCarModels } from "@/lib/api";

export default async function ResultContent({ makeId, year }: { makeId: string; year: string }) {
  const models = await getCarModels(makeId, year);

  return models.length > 0 ? (
    <ul className="space-y-2 text-black">
      {models.map((model: { Model_ID: number; Model_Name: string }) => (
        <li key={model.Model_ID} className="p-3 border rounded-lg bg-gray-50">
          {model.Model_Name}
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-600">No car models found.</p>
  );
}
