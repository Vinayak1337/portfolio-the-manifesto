import Manifesto from "@/components/Manifesto";
import { jsonLd } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Manifesto />
    </>
  );
}
