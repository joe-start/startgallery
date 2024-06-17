import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/767d093e-ffe6-47e5-bd4a-ef4caeb8ef96-8sjnuo.jpg",
  "https://utfs.io/f/b3963d9e-2a5d-4c0a-a47b-3ea20cfb88c2-jog9ru.jpg",
  "https://utfs.io/f/88bdca62-e0cf-48df-bf74-887252b37762-f37lvc.jpg",
  "https://utfs.io/f/8a00886c-7229-4e1c-b470-4368085908fb-w0pyu9.jpg"  
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
        <div key={image.id} className="w-48 p-4">
          <img src={image.url} alt="image" />
        </div>
      ))} 
      </div>
    </main>
  );
}
