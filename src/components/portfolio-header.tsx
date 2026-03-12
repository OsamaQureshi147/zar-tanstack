import { ThemeToggle } from './theme-toggle'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function PortfolioHeader() {
  return (
    <header className="h-16 flex-shrink-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 md:px-6 transition-all duration-200">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1" />
        <span className="font-semibold text-lg md:hidden">Portfolio</span>
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="h-8 w-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-medium text-sm">
          UI
        </div>
      </div>
    </header>
  )
}
