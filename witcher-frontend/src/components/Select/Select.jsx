import { Select, SelectItem } from "@nextui-org/react";

export default function App() {
  const animals = [
    { key: 1, label: "Dog" },
    { key: 2, label: "Cat" },
    { key: 3, label: "Rabbit" },
    { key: 4, label: "Elephant" },
  ];

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label="Select an animal" className="max-w-xs">
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="Favorite Animal"
        placeholder="Select an animal"
        className="max-w-xs"
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
