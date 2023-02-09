import { A } from "solid-start";

export default function Sidebar() {
  return (
    <div class="flex w-1/6 flex-col gap-3 bg-slate-900">
      <A href="/">Dashboard</A>
      <A href="/nas">Nas Control</A>
      <A href="/gallery">Gallery Example</A>
    </div>
  );
}
