import { Button } from "@repo/ui/button";
import {add} from "@repo/utils";

export default function Home() {
  return <Button appName="Pokedex">Open alert pokedex{add(5,6)}</Button>;
}
