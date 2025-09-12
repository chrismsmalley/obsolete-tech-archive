import SlugClientPage from '@/app/src/screens/SlugClientPage';

export default async function Page({ params }) {
  const { slug } = await params;
  return <SlugClientPage slug={slug} />;
}