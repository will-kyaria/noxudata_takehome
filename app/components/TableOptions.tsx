import { Button } from "./ui/Button";

export const TableOptions = () => (
    <div className="w-full flex flex gap-3">
        <Button variant="ghost" size="sm">
            Show Full List
        </Button>
        <Button variant="ghost" size="sm">
            Show Query
        </Button>
        <Button variant="ghost" size="sm">
            Show Chart
        </Button>
        <Button variant="ghost" size="sm">
            Pin to Dashboard
        </Button>
    </div>
)