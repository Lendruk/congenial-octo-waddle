import { JSXElement } from "solid-js";

type Props = { children: JSXElement };
export default function Container(props: Props) {
  return <div class="flex flex-col p-4">{props.children}</div>;
}
