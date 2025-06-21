import { useEffect, useState } from 'react';

function GoogleSheetFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/8rxstbl9zlukw')
      .then((res) => res.text())
      .then((csvText) => {
        const rows = csvText.split('\n').map(row => row.split(','));
        setData(rows);
      });
  }, []);

  return (
    <table>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
