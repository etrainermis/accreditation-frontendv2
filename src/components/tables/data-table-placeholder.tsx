import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DataTablePlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-2xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--muted-foreground)]">
              <span className="font-medium text-[var(--foreground)]">Placeholder row {index + 1}</span>
              <span>Column</span>
              <span>Status</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
