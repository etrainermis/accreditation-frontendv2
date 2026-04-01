import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FormSection({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-[var(--muted-foreground)]">
        Keep React Hook Form logic and Zod schemas inside the relevant feature module, then compose shared field primitives here only when reuse is proven.
      </CardContent>
    </Card>
  );
}
