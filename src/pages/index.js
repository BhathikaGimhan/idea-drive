import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [postData, setPostData] = useState("");
  const [response, setResponse] = useState("");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/firebase/get-data");
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const input = { data: postData };
      const data = {
        data: input,
        route: "notice",
      };
      const response = await fetch("/api/firebase/post-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add document");
      }

      const responseData = await response.json();
      fetchData();
      setResponse(`Document added successfully with ID: ${responseData.id}`);
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };
  return (
    <main
      className={`flex min-h-fit flex-col -mt-52 items-center justify-between ${inter.className}`}
    >
      <div className="relative flex place-items-center animate-pulse before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-0 after:bg-gradient-conic after:from-green-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700/10 after:dark:from-green-900  after:dark:via-[#1c8b12]/40 before:lg:h-[360px]">
        <Image
          className="relative  animate-pulse"
          src="/images/idea-drive-logo.png"
          alt="Next.js Logo"
          width={100}
          height={37}
          priority
        />
      </div>

      <div className=" absolute mt-52 text-center">
        <h2 className={`mb-3 text-2xl ml-14 relative font-semibold flex`}>
          Idea Drive
          <Image
            className="relative animate-spin"
            src="/images/icon/loading.svg"
            alt="Next.js Logo"
            width={30}
            height={37}
            priority
          />
        </h2>
        <div>
          <h2>Post Data</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Data:
              <input
                type="text"
                className="text-black"
                value={postData}
                onChange={(e) => setPostData(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {response && <p>{response}</p>}
        </div>
        <div>
          <h2>Data from Firestore</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {/* Display your data here */}
                <p>
                  {item.id}: {item.data}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
