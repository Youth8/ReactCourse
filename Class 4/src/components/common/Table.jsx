import React from "react";

const Row = props => {
  const { row, head } = props;
  const Td = head ? "th" : "td";
  return (
    <tr>
      {row.map((cell, i) => {
        return <Td key={i}>{cell}</Td>;
      })}
    </tr>
  );
};

const Table = props => {
  const { head, body, title } = props;

  return (
    <div class="fds-data-table-wrapper">
      <div aria-hidden="true" class="fds-data-table-header">
        {title}
      </div>
      <div class="fds-data-table-scroll-wrapper">
        <table class="fds-data-table">
          <thead>
            <Row row={head} head />
          </thead>
          <tbody>
            {body.map((row, i) => (
              <Row key={row.key || i} row={row.cells || row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
