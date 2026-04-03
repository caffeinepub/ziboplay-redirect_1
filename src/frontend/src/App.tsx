import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.location.replace("https://ziboplay.com");
  }, []);

  return null;
}
