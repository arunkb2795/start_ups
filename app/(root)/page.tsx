import SearchForm from "@/components/search-form";

export default async function Home({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ query?: string }>;
}>) {
  const query = (await searchParams).query;
  return (
    <section className="pink_container">
      <h1 className="heading">Pitch your startup, connect with entreprenurs</h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>
      <SearchForm query={query} />
    </section>
  );
}
