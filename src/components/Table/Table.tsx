import { Table } from "../../types";

export function Table({
  columns,
  children,
  classTable,
  classContainer,
}: Table) {
  return (
    <div
      className={`shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 ${
        classContainer || ""
      } `}
    >
      <table className={`w-full table-fixed ${classTable || ""}`}>
        <thead>
          <tr className="bg-orange-400">
            {columns.map((column: string) => (
              <th
                key={"thead-" + column}
                className=" py-2 px-4 text-center text-white font-bold uppercase"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">{children}</tbody>
      </table>
    </div>
  );
}
