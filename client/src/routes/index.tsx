import Button from "~/components/Button";
import Loading from "~/components/Loading";
import { trpc } from "~/trpc";

export default function Home() {
  const t = trpc.greeting.useQuery();
  // const [data, { mutate, refetch }] = createResource(fetchData);
  return (
    <main class="flex h-full flex-1 flex-col ">
      <Button onClick={() => console.log("goood")}>button is good</Button>
      <div>{t.data || <Loading />}</div>
    </main>
  );
}
