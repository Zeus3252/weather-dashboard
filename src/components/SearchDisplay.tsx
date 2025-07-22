import React from "react";
import type { Props } from "../types.ts";

function SearchDisplay({ data }: Props) {
  return (
    <div>
      <div key={data?.id}>
        <p>
          {data?.name}
          {data?.admin1 ? `, ${data?.admin1}` : ""}
          {data?.country && data?.country !== data?.name
            ? `, ${data?.country}`
            : ""}
        </p>
        <p>{data?.latitude}</p>
        <p>{data?.longitude}</p>
      </div>
    </div>
  );
}

export default SearchDisplay;
