import { WorkList } from "./components/WorkList";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">
        Monk Haus — a boutique creative studio building custom websites and brand
        identities for fashion, art, and creative clients.
      </h1>
      <WorkList />
    </main>
  );
}
