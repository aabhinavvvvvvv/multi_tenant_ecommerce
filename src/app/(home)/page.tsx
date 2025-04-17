import { Button,} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <div className="p-4 gap-y-1">
      <Button variant={"elevated"}> 
        Hello How are you
      </Button>
      <Input placeholder="I am an input box"></Input>
    </div>
  );
}
