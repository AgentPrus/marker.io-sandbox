import { useEffect, useState } from "react";

import markerSDK, { MarkerSdk } from "@marker.io/browser";

export const useMarkerio = () => {
  const [widget, setWidget] = useState<MarkerSdk | null>(null);

  useEffect(() => {
    markerSDK
      .loadWidget({
        project: import.meta.env.VITE_MARKER_IO_PROJECT_ID,
      })
      .then((markerWidget) => setWidget(markerWidget));
  }, []);

  return { widget };
};
