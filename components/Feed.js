import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { m, LazyMotion, domAnimation } from "framer-motion";
import InfiniteScroll from "react-infinite-scroller";

export default function Feed() {
  // init thoughts - initialState is an empty array
  const [screams, setScreams] = useState([]);

  // fisher-yates array shuffle
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function parseISODate(s) {
    var b = s.split(/\D+/);
    const d = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    return d.toLocaleDateString("en-GB");
  }

  // one time API get request to get screams + sets a random scream for feed
  const fetchScream = async () => {
    const response = await fetch(
      "https://asia-southeast1-sonder-e7919.cloudfunctions.net/api/screams"
    );
    const screams = await response.json();
    setScreams(shuffle(screams));
  };

  // call this for promise toast - loading --> success OR error
  const loadPromise = () => {
    // call and toast depending on promise
    toast.promise(
      fetchScream(),
      {
        loading: "loading...",
        error: "something went wrong!",
        success: "done.",
      },
      {
        style: {
          minWidth: "10px",
          maxHeight: "50px",
        },
        success: {
          duration: 500,
        },
      }
    );
  };

  // run loadPromise on first render
  // useEffect(() => {
  //   loadPromise();
  // }, []);

  function screamItem({ scream }) {
    return <div>{scream.body}</div>;
  }

  return (
    <div className="flex flex-row max-w-lg px-3 pb-6 space-x-2 sm:px-14 sm:space-x-4 sm:min-w-full sm:max-w-fit">
      <div className="basis-[95%] sm:basis-[90%] p-4 border-2 rounded-lg border-stone-200 text-stone-800">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={fetchScream}
              hasMore={true || false}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              {screams.body}
            </InfiniteScroll>
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
}
