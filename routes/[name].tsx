import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>
    <br/>
    <h1>
    {props.params.name}
    </h1>
    <br/>
  </div>;
}
