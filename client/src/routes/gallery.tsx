import GalleryItem from "~/components/GalleryItem";
import GalleryView from "~/views/GalleryView";

export default function Gallery() {
  return (
    <GalleryView>
      <GalleryItem resourcePath="https://i.4cdn.org/v/1675855257026814.jpg" resourceType="img" />
      <GalleryItem resourcePath="https://i.4cdn.org/v/1675855257026814.jpg" resourceType="img" />
      <GalleryItem resourcePath="https://i.4cdn.org/v/1675855257026814.jpg" resourceType="img" />
      <GalleryItem resourcePath="https://media.tenor.com/aQpNuWdmaUAAAAAC/confused-face.gif" resourceType="img" />
      <GalleryItem resourcePath="https://i.4cdn.org/wsg/1675373150675343.webm" resourceType="vid" />
    </GalleryView>
  );
}
