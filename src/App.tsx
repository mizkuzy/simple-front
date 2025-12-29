import {Card, CardContent} from "@/components/ui/card.tsx";
import {ErrorBoundary} from "@/error-boundary/error-boundary.tsx";
import UserBlock from "@/features/user/user-block.tsx";
import EntriesBlock from "@/features/entries/entries-block.tsx";

function App() {
  return (
    <ErrorBoundary>
      <div className="container mx-auto p-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div></div>
            <UserBlock/>
            <Card className="h-32">
              <CardContent className="flex items-center justify-center h-full">
                <p className="text-lg">DB STATUS</p>
              </CardContent>
            </Card>
            <div></div>
            <EntriesBlock/>
            <div></div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
