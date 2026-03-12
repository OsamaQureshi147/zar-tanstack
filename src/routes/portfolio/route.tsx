import { PortfolioHeader } from '@/components/portfolio-header'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />

        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <PortfolioHeader />

          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="mx-auto max-w-6xl">
              <Outlet />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}
