import { useEffect, useMemo, useState } from "react";

const YT_API_BASE = "https://www.googleapis.com/youtube/v3/videos";

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1) || null;
    }
    if (u.searchParams.has("v")) {
      return u.searchParams.get("v");
    }
    const parts = u.pathname.split("/");
    const embedIndex = parts.indexOf("embed");
    if (embedIndex !== -1 && parts[embedIndex + 1]) {
      return parts[embedIndex + 1];
    }
    return null;
  } catch {
    return null;
  }
}

export function useYoutubeViews(
  videoUrls: string[],
  apiKey: string | undefined
) {
  const [viewsMap, setViewsMap] = useState<Record<string, number | null>>({});
  const ids = useMemo(
    () =>
      videoUrls.map(extractYouTubeId).filter((id): id is string => Boolean(id)),
    [videoUrls]
  );

  useEffect(() => {
    if (!apiKey || ids.length === 0) return;
    let aborted = false;

    async function fetchViews() {
      try {
        const url = `${YT_API_BASE}?part=statistics&id=${ids.join(
          ","
        )}&key=${apiKey}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch YouTube stats");
        const data = await res.json();
        const next: Record<string, number> = {};
        for (const item of data.items ?? []) {
          const id = item.id as string;
          const count = Number(item.statistics?.viewCount ?? 0);
          next[id] = Number.isFinite(count) ? count : 0;
        }
        if (!aborted) {
          setViewsMap(next);
        }
      } catch {
        if (!aborted) {
          const fallback: Record<string, number | null> = {};
          ids.forEach((id) => (fallback[id] = null));
          setViewsMap(fallback);
        }
      }
    }

    fetchViews();
    const interval = setInterval(fetchViews, 1000 * 60 * 10); // refresh every 10m
    return () => {
      aborted = true;
      clearInterval(interval);
    };
  }, [apiKey, ids]);

  function getViewsForUrl(url: string): number | null | undefined {
    const id = extractYouTubeId(url);
    if (!id) return undefined;
    return viewsMap[id];
  }

  return { getViewsForUrl };
}

export { extractYouTubeId };
