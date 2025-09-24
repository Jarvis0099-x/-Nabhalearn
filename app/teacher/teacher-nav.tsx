// "use client"
// import { useLanguage } from "@/contexts/language-context"
// import { useAuth } from "@/contexts/auth-context"
// import { useOffline } from "@/contexts/offline-context"
// import { Button } from "@/components/ui/button"
// import { Home, Users, Upload, Monitor, BarChart3, LogOut, Wifi, WifiOff, RefreshCw } from "lucide-react"

// interface TeacherNavProps {
//   activeTab: string
//   onTabChange: (tab: string) => void
// }

// export function TeacherNav({ activeTab, onTabChange }: TeacherNavProps) {
//   const { t } = useLanguage()
//   const { logout } = useAuth()
//   const { isOnline, syncData, isSyncing, lastSyncTime } = useOffline()

//   // Teacher-specific nav items
//   const navItems = [
//     { id: "dashboard", label: t("dashboard"), icon: Home },
//     { id: "classes", label: t("myClasses"), icon: Users },
//     { id: "students", label: t("studentsProgress"), icon: BarChart3 },
//     { id: "assignments", label: t("uploadAssignments"), icon: Upload },
//     { id: "digital", label: t("digitalLiteracy"), icon: Monitor },
//   ]

//   const handleSync = async () => {
//     if (isOnline && !isSyncing) {
//       await syncData()
//     }
//   }

//   return (
//     <div className="bg-card border-r border-border h-full flex flex-col">
//       {/* Header */}
//       <div className="p-4 border-b border-border">
//         <h1 className="text-xl font-bold text-primary">{t("appName")}</h1>
//         <div className="flex items-center gap-2 mt-2">
//           {isOnline ? <Wifi className="w-4 h-4 text-green-600" /> : <WifiOff className="w-4 h-4 text-red-600" />}
//           <span className="text-sm text-muted-foreground">{isOnline ? t("online") : t("offline")}</span>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-2">
//         <div className="space-y-1">
//           {navItems.map((item) => {
//             const Icon = item.icon
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => onTabChange(item.id)}
//                 className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors touch-target ${
//                   activeTab === item.id
//                     ? "bg-primary text-primary-foreground"
//                     : "hover:bg-accent hover:text-accent-foreground"
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="font-medium">{item.label}</span>
//               </button>
//             )
//           })}
//         </div>
//       </nav>

//       {/* Sync and Logout */}
//       <div className="p-4 border-t border-border space-y-2">
//         <Button
//           onClick={handleSync}
//           disabled={!isOnline || isSyncing}
//           variant="outline"
//           size="sm"
//           className="w-full touch-target bg-transparent"
//         >
//           <RefreshCw className={w-4 h-4 mr-2 ${isSyncing ? "animate-spin" : ""}} />
//           {isSyncing ? t("loading") : t("sync")}
//         </Button>

//         {lastSyncTime && (
//           <p className="text-xs text-muted-foreground text-center">
//             Last sync: {new Date(lastSyncTime).toLocaleTimeString()}
//           </p>
//         )}

//         <Button
//           onClick={logout}
//           variant="ghost"
//           size="sm"
//           className="w-full touch-target text-destructive hover:text-destructive"
//         >
//           <LogOut className="w-4 h-4 mr-2" />
//           Logout
//         </Button>
//       </div>
//     </div>
//   )
// }
