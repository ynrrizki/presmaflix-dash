import { useEffect, useState } from "react";

const Content = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("http://localhost:3000/Video.txt");
      let final = await resp.text();
      // final = final.split('|');
      final = final.split("\n").map((item) => item.split("|"));
      setContent(final);
    };
    fetchData();
  }, []); // empty dependency array will ensure that this effect runs only once on component mount

  // eslint-disable-next-line react/prop-types
  const Record = ({ data = [] }) => {
    return (
      <>
        {data.length != 0 ? (
          data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{item[0]}</td>
              <td className="px-4 py-2">{item[1]}</td>
              <td className="px-4 py-2">{item[2]}</td>
              <td className="px-4 py-2">{item[3]}</td>
              <td className="px-4 py-2">{item[4]}</td>
              <td className="px-4 py-2">{item[5]}</td>
              <td className="px-4 py-2">{item[6]}</td>
              <td className="px-4 py-2">{item[7]}</td>
              <td className="px-4 py-2">{item[8]}</td>
              <td className="px-4 py-2">{item[9]}</td>
              <td className="px-4 py-2">{item[10]}</td>
            </tr>
          ))
        ) : (
          <tr key={1} className="no-hover">
            <td
              className="px-4 py-2 font-bold text-2xl"
              colSpan={11}
              align="center"
              height={500}
            >
              Tidak Ada Data
            </td>
          </tr>
        )}
      </>
    );
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-10">Daftar Konten</h1>
      <div className="bg-primary text-secondary mx-w-full rounded shadow-md overflow-x-auto">
        <table className="table-auto mx-w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                NO
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Judul
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Tipe
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Genre
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Deskripsi
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Casts
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Directors
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Thumbnail
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Poster
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Featured
              </th>
              <th className="px-4 py-2 font-semibold tracking-wide text-start">
                Tanggal Upload
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500 whitespace-nowrap">
            {/* <tr>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">17-01-2023</td>
                            <td className="px-4 py-2">13:13:00</td>
                            <td className="px-4 py-2">Bandung</td>
                            <td className="px-4 py-2">35 °</td>
                        </tr> */}
            <Record data={content} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Content;
