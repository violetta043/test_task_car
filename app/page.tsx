"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [makes, setMakes] = useState<{ MakeId: number; MakeName: string }[]>([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [years, setYears] = useState<number[]>([]);


  useEffect(() => {
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
      .then((response) => response.json())
      .then((data) => setMakes(data.Results));

    // Генерируем список годов ТОЛЬКО на клиенте
    const currentYear = new Date().getFullYear();
    setYears(Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Vehicle filter</h1>

        <div className="flex space-x-4 mb-6">
          <select
            className="p-2 border border-gray-300 rounded-lg text-black"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select the make of the vehicle</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>{make.MakeName}</option>
            ))}
          </select>

          <select
            className="p-2 border border-gray-300 rounded-lg text-black"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        
        <div className="flex justify-end">
          <Link href={selectedMake && selectedYear ? `/result/${selectedMake}/${selectedYear}` : "#"}>
            <button
              className={`px-4 py-2 rounded-lg ${selectedMake && selectedYear ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
              disabled={!selectedMake || !selectedYear}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
