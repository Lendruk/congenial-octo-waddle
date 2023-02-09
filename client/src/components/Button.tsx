import { JSXElement } from "solid-js";

type ButtonProps = {
  onClick: () => void | Promise<void>;
  children?: JSXElement;
};
export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => props.onClick()}
      class="inline-flex items-center rounded-md border border-transparent bg-red-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 backdrop:focus:ring-offset-2"
    >
      {props.children}
    </button>
  );
}
