import { useState, useEffect, useRef } from "react";
import _ from "lodash";

const useThrottleTerm = (value, duration) => {
  const [throttledSearchTerm, setThrottledSearchTerm] = useState("");
  const throttled = useRef(
    _.debounce(term => {
      setThrottledSearchTerm(term);
    }, duration || 500)
  );

  useEffect(() => throttled.current(value), [value]);

  return throttledSearchTerm;
};

export default useThrottleTerm;
