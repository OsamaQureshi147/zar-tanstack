import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Button variant="destructive">Shadcn button</Button>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Welcome to your portfolio overview. Here's a summary of your recent
          activity and metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Views
          </h3>
          <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            12,345
          </p>
        </div>
        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Projects Completed
          </h3>
          <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            42
          </p>
        </div>
        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Active Clients
          </h3>
          <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            8
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Updated project case study
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Added new screenshots and metrics for the e-commerce
                    redesign project.
                  </p>
                  <span className="text-xs text-gray-400 dark:text-gray-500 mt-2 block">
                    2 days ago
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
