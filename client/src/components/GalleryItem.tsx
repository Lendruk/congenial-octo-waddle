type Props = {
  resourcePath: string;
  resourceType: string;
};
export default function GalleryItem(props: Props) {
  return (
    <div class="flex h-52 w-80 items-center bg-red-800">
      {props.resourceType === "img" ? (
        <img class="flex h-full w-fit" src={props.resourcePath} />
      ) : (
        <video preload="auto" class="flex h-full w-fit" muted loop>
          <source src={props.resourcePath} />
        </video>
      )}
    </div>
  );
}
