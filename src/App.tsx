import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useState} from "react";
import {Card, CardAction, CardContent} from "@/components/ui/card.tsx";

function App() {
  const [name, setName] = useState("null");
  const [entries, setEntries] = useState([]);

  return (
    <div className="container mx-auto p-8">
      {name ? (
        <Card className="w-full p-6 flex justify-center">
          <CardContent>
            {`Hello, ${name}`}
          </CardContent>
        </Card>) : <div className="flex w-full max-w-sm items-center gap-2">
        <Input type="text" placeholder="enter name"/>
        <Button type="submit" variant="outline">
          Ok
        </Button>
      </div>}

      <div className="w-full p-6 flex justify-center">
        <Card className="w-full max-w-sm">
          <CardAction className="w-full">
            <Button type="submit" variant="outline" className="w-full">
              Add entry
            </Button>
          </CardAction>
          <CardContent>
            {entries.length === 0 ? (
              <p className="text-center text-gray-500">No entries found</p>
            ) : (
              <ul className="space-y-2">
                {entries.map(entry => (
                    <li key={entry} className="p-3 border rounded-lg hover:bg-gray-50">
                      {entry}
                    </li>
                  )
                )}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
