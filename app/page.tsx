import { WorkList } from "./components/WorkList";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">
        Monk Haus — a small studio for websites and brand identity.
      </h1>
      <WorkList />
    </main>
  );
}
