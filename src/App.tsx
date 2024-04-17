import { useEffect, useState } from 'react';
import { PairService } from './api/pair.service';
import Home from './components/Layout/Home/Home';

function App() {
  const [ pairValue, setPairValue ] = useState(null)

  useEffect(() => {
    const initialFetch = () => {
      PairService.getAllPair().then((res) => {
        setPairValue(res);
      }).catch((error) => {
        console.error("Ошибка при начальной загрузке данных:", error);
      });
    };

    const pollingPair = () => {
      PairService.pollingAllPair().then((res) => {
        setPairValue(res);
      }).catch((error) => {
        console.error("Ошибка при поллинге данных:", error);
      });
    };

    initialFetch();

    const intervalId = setInterval(pollingPair, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Home pairValue={pairValue} />
    </>
  );
}

export default App;
