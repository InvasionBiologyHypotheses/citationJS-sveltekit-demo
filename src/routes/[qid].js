import { Cite } from "@citation-js/core";
import "@citation-js/plugin-wikidata";

export async function get({ params: { qid } }) {
  const result = await new Cite.async(qid);
  return {
    body: {
      data: result.data,
    },
  };
}
