import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
 
  return [data];
};

export default useRequestData;