import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ChartPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid h-56 grid-cols-5 items-end gap-3 rounded-[calc(var(--radius)+0.25rem)] bg-[linear-gradient(180deg,rgba(59,130,246,0.08),rgba(59,130,246,0.02))] p-4">
          {[45, 72, 56, 88, 67].map((height, index) => (
            <div key={index} className="rounded-t-2xl bg-[var(--primary)]" style={{ height: `${height}%` }} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
