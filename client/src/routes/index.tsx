import Button from "~/components/Button";
import { trpc } from "~/trpc";

export default function Home() {
  const t = trpc.greeting.useQuery();
  // const [data, { mutate, refetch }] = createResource(fetchData);
  return (
    <main class="flex h-full flex-1 flex-col ">
      {/* <h1 class="text-5xl blur-sm">Great Title</h1>
      <div class="flex gap-2">
        <div class="bg-red-800">Raul</div>
        <div class="bg-black">Gillete</div>
      </div> */}
      <Button onClick={() => console.log("goood")}>button is good</Button>
      <div>{t.data}</div>
      {/* <div class="my-7 animate-bounce rounded-full bg-yellow-600">B</div> */}
    </main>
  );
}
