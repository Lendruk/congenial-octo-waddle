import { createSignal } from "solid-js";
import Container from "~/components/Container";
import { trpc } from "~/trpc";

export default function MovieDownload() {
  const [searchText, setSearchText] = createSignal("");
  function searchMovies() {
    if (searchText() !== "") {
      console.log(searchText());
      trpc.downloader.movies.search.useQuery(searchText);
    }
  }

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchMovies();
        }}
      >
        <input
          type="text"
          value={searchText()}
          placeholder="search..."
          onChange={(e) => setSearchText(e.currentTarget.value)}
          // onKeyPress={(e) => e.key === "Enter" && setSearchText(e.currentTarget.value)}
        />
      </form>
    </Container>
  );
}
