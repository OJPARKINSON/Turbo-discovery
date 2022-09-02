// import { Button } from "ui";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Web() {
  const { data, error } = useSWR("api/welcome", fetcher, {
    refreshWhenHidden: false,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Web</h1>
      <p>{error}</p>
      <p>{data?.welcome}</p>
      <button>Boop</button>;
    </div>
  );
}
