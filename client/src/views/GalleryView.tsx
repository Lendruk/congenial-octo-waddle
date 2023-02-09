import { JSXElement } from "solid-js";

export type Props = {
  children: JSXElement;
};

export default function GalleryView(props: Props) {
  return <div class="flex flex-1 flex-wrap content-start gap-4 p-4">{props.children}</div>;
}
