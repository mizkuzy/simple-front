import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card.tsx";

function App() {
  const [name, setName] = useState("null");
  const [entries, setEntries] = useState([]);

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div></div>

          <Card className="h-32">
            <CardContent className="flex items-center justify-center h-full">
              <p className="text-lg">Card.</p>
            </CardContent>
          </Card>

          <Card className="h-32">
            <CardContent className="flex items-center justify-center h-full">
              <p className="text-lg">DB STATUS</p>
            </CardContent>
          </Card>

          <div></div>

          <Card className="min-h-64">
            <CardContent className="p-6">
              <p className="text-center text-gray-600">
                Card which will grow as list of strings grows.
              </p>
              <ul className="space-y-2 mt-4">
                {entries.map((entry, index) => (
                  <li key={index} className="p-3 border rounded-lg">
                    {entry}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div></div>
        </div>
      </div>
    </div>
  )
}

export default App
