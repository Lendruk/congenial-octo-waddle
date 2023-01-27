import { mount, StartClient } from "solid-start/entry-client";
import { trpc, client, queryClient } from './trpc';

mount(() =>   (
                  <StartClient />
             )
, document);
