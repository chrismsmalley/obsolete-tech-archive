

import SlugClientPage from "@/app/src/screens/SlugClientPage";
import { techEntries } from "@/app/src/data/techEntries";

export default function Page({ params }) {
  const { slug } = params;
  return <SlugClientPage slug={slug} />;
}