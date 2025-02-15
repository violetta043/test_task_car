interface CarModel {
    Model_ID: number;
    Model_Name: string;
  }

export async function getCarModels(makeId: string, year: string): Promise<CarModel[]> {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
  
    if (!res.ok) throw new Error("Failed to fetch car models.");
  
    const data = await res.json();

    const models: CarModel[] = data.Results as CarModel[];
  
    const uniqueModels: CarModel[] = Array.from(
      new Map(models.map((model) => [model.Model_ID, model])).values()
    );
    
    return uniqueModels;
  }
  