import { publicProcedure, router } from "../../trpc";
import zod from "zod";
import axios from "axios";
import { parse } from "node-html-parser";
import fs from "fs";

export type MovieEntry = {
  title: string;
  seeds: string;
  leeches: string;
  size: string;
  added: string;
  uploader: string;
};

export const movieRouter = router({
  search: publicProcedure.input(zod.string()).query(async ({ input }) => {
    console.log("WRITE");
    // const search = await axios.get(`https://www.proxyrarbg.org/torrents.php?search=${input}&order=seeders&by=DESC`);
    // fs.writeFileSync("test.html", search.data);
    const mockHTML = fs.readFileSync("test.html").toString();
    try {
      const dom = parse(mockHTML);
      const tables = dom.getElementsByTagName("table").find((table) => table.classNames.includes("lista2t"));
      console.log(tables);
    } catch (error) {
      console.log(error);
    }
    // console.log(
  }),
});
