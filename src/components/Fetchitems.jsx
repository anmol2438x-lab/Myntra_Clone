import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/itemsSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());

        dispatch(itemsActions.addInitialItems(items?.[0] || []));
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [dispatch, fetchStatus.fetchDone]);

  return <></>;
};

export default FetchItems;
