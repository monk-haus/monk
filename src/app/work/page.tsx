import { Metadata } from "next";
import WorkIndex from "@/components/WorkIndex";

export const metadata: Metadata = {
    title: "Index",
    description: "Master Index. Selected artifacts: Vault, Naath Models, Gaplens, Sort.lat, Ife Inspires, Ctrl Build. Directory of visual strategy and adaptive identity.",
    openGraph: {
        title: "Index | MONK HAUS",
        description: "Master Index of digital artifacts.",
        url: "https://monk.haus/work",
    },
    twitter: {
        card: "summary_large_image",
        title: "Index | MONK HAUS",
        description: "Master Index of digital artifacts.",
    },
    alternates: {
        canonical: "https://monk.haus/work",
    },
};

export default function WorkPage() {
    return <WorkIndex />;
}