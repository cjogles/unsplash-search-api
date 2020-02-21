import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "./api/unsplash";
import "./css/index.css";

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  // This functions job is to request images from unsplash api according to input query
  // after receiving the requested data, it will be added to components state object -> images
  const onSearchSubmit = async () => {
    const response = await unsplash.get("/search/photos", {
      params: { query: { search } }
    });
    setImages(response.data.results);
  };

  return (
    <>
      <div className="app">
        <div className="div1">
          <p>Unsplash Photo Engine</p>
        </div>
        <SearchBar
          // pass current search query and setSearch function. pass onSearchSubmit to invoke upon form submission
          search={search}
          setSearch={setSearch}
          onSearchSubmit={onSearchSubmit}
        />
        <div className="div2">
          <p>API Traversal</p>
        </div>
      </div>
      <ImageList
        // pass images state to create image cards
        images={images}
      />
    </>
  );
}

export default App;

// Notes

// A user will type into the input
// Every key stroke will update search value
// Upon submission, value will be sent to App and used in onSearchSubmit function
// Axios call will request data using query of search data
// imagelist state will be updated with axios response
// App will render this list to the screen.
