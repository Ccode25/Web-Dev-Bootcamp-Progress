import axios from "axios";
import Tours from "./components/Tours";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(url);
      setTours(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error message:", err.message);
      setLoading(false);
    }
  }

  function deleteTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  // fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchData}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tourData={tours} removeTour={deleteTour} />
    </main>
  );
};
export default App;
