import React from "react";

export default function Car({id,brand}) {
  return (
    <tr className="border-b border-skin-muted hover:bg-skin-button-accent-hover ">
      <td className="table-td">{id}</td>
      <td className="table-td">{brand}</td>
      <td className="table-td flex gap-1">
        <button>delete</button>
        <button>update</button>
      </td>
    </tr>
  );
}
