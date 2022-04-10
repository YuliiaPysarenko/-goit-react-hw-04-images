import "./App.css";
import { useState } from "react";
import axios from "axios";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

axios.defaults.baseURL = "https://pixabay.com/api";

export default function App() {
  const [request, setRequest] = useState("");

  const formSubmitHandler = (data) => {
    setRequest(data);
  };

    return (
      <div>
        <Searchbar onSubmit={formSubmitHandler} />
        <ImageGallery request={request} />
      </div>
    );
}