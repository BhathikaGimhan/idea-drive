import React, { useEffect, useState } from "react";

export default function SuperAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/firebase/admin-get");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleSubmit = async (event, id) => {
    // setResponse(2);
    event.preventDefault();

    try {
      const docId = { id: id };
      const data = {
        data: docId,
        route: "waiting",
      };
      const response = await fetch("/api/firebase/update-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add document");
      } else {
        // setResponse(3);
        fetchData();
      }
    } catch (error) {
      // setResponse(9);
    }
  };
  return (
    <div>
      <div className="table-body">
        <div className="relative overflow-x-auto max-md:max-w-[80vw] md:max-w-[50vw] max-h-[60vh] shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 w-fit uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User name
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  Code
                </th>
              </tr>
            </thead>
            <tbody className="max-h-10 overflow-auto">
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-break-spaces dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">
                    {item.code === "" ? (
                      <button
                        className="px-3 py-2 bg-green-600 text-white font-bold rounded-3xl"
                        onClick={() => handleSubmit(event, item.id)}
                      >
                        Verify
                      </button>
                    ) : (
                      item.code
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
