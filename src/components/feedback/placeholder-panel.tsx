import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PlaceholderPanelProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: { label: string; href?: string }[];
  bullets?: string[];
}

export function PlaceholderPanel({ eyebrow, title, description, actions = [], bullets = [] }: PlaceholderPanelProps) {
  return (
    <Card>
      <CardHeader>
        <Badge>{eyebrow}</Badge>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {bullets.length > 0 ? (
          <ul className="grid gap-3 text-sm text-[var(--muted-foreground)] md:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-3">
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
        {actions.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <Button key={action.label} variant={action.href ? "default" : "outline"}>
                {action.label}
              </Button>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
