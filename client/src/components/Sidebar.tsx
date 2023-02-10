import { JSXElement } from "solid-js";
import { A } from "solid-start";

type SidebarItemProps = {
  children?: JSXElement;
  href?: string;
  text: string;
};
function SidebarItem(props: SidebarItemProps) {
  return (
    <div>
      {props.href ? <A href={props.href}>{props.text}</A> : <span>{props.text}</span>}
      {props.children ? <div class="flex flex-col px-4">{props.children}</div> : ""}
    </div>
  );
}

export default function Sidebar() {
  return (
    <div class="flex w-1/6 flex-col gap-3 bg-slate-900">
      <SidebarItem href="/" text="Dashboard" />
      <SidebarItem text="Nas Control">
        <SidebarItem href="/downloadMovies" text="Movie Download" />
        <SidebarItem href="/downloadMusic" text="Music Download" />
      </SidebarItem>
      <SidebarItem href="/gallery" text="Gallery Example" />
    </div>
  );
}
