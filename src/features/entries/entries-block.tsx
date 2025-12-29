import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import type {Entry} from "@/types/entry.type.ts";
import {Button} from "@/components/ui/button.tsx";
import {useThrowAsyncError} from "@/hooks/useThrowAsyncError.tsx";
import {useEffect, useState} from "react";
import {addEntry, deleteEntry, getEntries} from "@/features/entries/entries.service.ts";
import generateEntry from "@/features/entries/entries-generator.ts";
import {Trash2} from "lucide-react";

const EntriesBlock = () => {
  const throwAsyncError = useThrowAsyncError();

  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entries = await getEntries();
        setEntries(entries);
      } catch (err) {
        throwAsyncError(err as Error);
      }
    };

    fetchEntries();
  }, [throwAsyncError]);


  const handleAddEntry = async () => {
    try {
      const value = generateEntry()
      const entry = await addEntry(value)
      setEntries([...entries, entry])
    } catch (err) {
      throwAsyncError(err as Error);
    }
  }

  const handleRemoveEntry = async (id: number) => {
    await deleteEntry(id)
    setEntries(entries.filter(entry => entry.id !== id))
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <CardHeader className="flex-shrink-0">
        <Button
          type="submit"
          variant="outline"
          onClick={handleAddEntry}>
          Add entry
        </Button>
      </CardHeader>
      <CardContent className="p-6 overflow-y-auto flex-1">
        <ul className="space-y-2 mt-4">
          {entries.map(({id, value}) => (
            <li key={id} className="p-3 border rounded-lg flex justify-between items-center">
              <span>{value}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveEntry(id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4"/>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default EntriesBlock;