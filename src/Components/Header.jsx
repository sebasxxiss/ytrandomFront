import { useContext } from "react";
import { searchContext } from "../Contexts/searchProvider.jsx";

export default function Header({ children }) {
  const { dispatch } = useContext(searchContext);
  const handleKey = (el) => {
    if (el.key == "Enter") {
      localStorage.removeItem("fetch");
      dispatch({ type: "setSearch", newSearch: el.target.value });
    }
  };
  const handleReload = () => {
    dispatch({ type: "reload" });
  };
  return (
    <>
      <header id="ytrHeader">
        <svg>
          <path
            d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
            fill="#FF0000"
          ></path>
          <path
            d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
            fill="white"
          ></path>
        </svg>
        <div className="primaryFunctions">
          <input
            type="text"
            placeholder='Write the username of a creator "@username"'
            id="search"
            maxLength="50"
            minLength="3"
            onKeyDown={handleKey}
          />
          <button id="reload" onClick={handleReload}>
            <svg width="50px" height="50px" viewBox="0 0 50 50" fill="white">
              <path d="M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z" />
              <path d="M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z" />
              <path d="M18 24h-2v-6h-6v-2h8z" />
              <path d="M40 34h-8v-8h2v6h6z" />
            </svg>
          </button>
        </div>
        <div id="circle">S</div>
      </header>
      {children}
    </>
  );
}
