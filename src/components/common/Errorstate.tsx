import { Button } from "@/components/ui/button"

export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again after some time.",
  onRetry,
}: {
  title?: string
  message?: string
  onRetry?: () => void
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-semibold text-red-600 mb-2">
        {title}
      </h2>

      <p className="text-muted-foreground max-w-md mb-6">
        {message}
      </p>

      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Retry
        </Button>
      )}
    </div>
  )
}
