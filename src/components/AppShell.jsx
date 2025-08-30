"use client";
import React from "react";
import {useState} from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPageUrl } from "@/utils";
import { 
  Home, 
  BookOpen, 
  CheckSquare, 
  HelpCircle, 
  FileText, 
  Users,
  GraduationCap,
  Phone,
  Globe
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LanguageProvider, useLanguage } from '@/components/providers/LanguageContext/page.jsx';
import { useRouter } from "next/navigation";

const navigationItemsConfig = [
  {
    titleKey: "navigation.home",
    url: createPageUrl("Home"),
    icon: Home,
    descriptionKey: "navigation.home_desc"
  },
  {
    titleKey: "navigation.education",
    url: createPageUrl("Education"),
    icon: BookOpen,
    descriptionKey: "navigation.education_desc"
  },
  {
    titleKey: "navigation.progress",
    url: createPageUrl("Progress"),
    icon: CheckSquare,
    descriptionKey: "navigation.progress_desc"
  },
  {
    titleKey: "navigation.scholarships",
    url: createPageUrl("Scholarships"),
    icon: GraduationCap,
    descriptionKey: "navigation.scholarships_desc"
  },
  {
    titleKey: "navigation.resources",
    url: createPageUrl("Resources"),
    icon: FileText,
    descriptionKey: "navigation.resources_desc"
  },
  {
    titleKey: "navigation.help",
    url: createPageUrl("Help"),
    icon: HelpCircle,
    descriptionKey: "navigation.help_desc"
  }
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, languages } = useLanguage();
  const currentLang = languages.find(l => l.code === language);

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" className="flex items-center gap-2">
    //       <Globe className="w-4 h-4" />
    //       <span>{currentLang?.name}</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     {languages.map(lang => (
    //       <DropdownMenuItem key={lang.code} onSelect={() => setLanguage(lang.code)}>
    //         <span className="mr-2">{lang.flag}</span>
    //         {lang.name}
    //       </DropdownMenuItem>
    //     ))}
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger asChild onClick={() => setOpen(!open)}>
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-xl shadow-sm hover:bg-gray-50"
        >
          <Globe className="w-4 h-4" />
          <span className="font-medium text-gray-800">{currentLang?.name}</span>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown content */}
      <DropdownMenuContent open={open} className="rounded-xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-lg">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => {
              setLanguage(lang.code);
              setOpen(false);
            }}
          >
            <span className="mr-2 text-lg">{lang.flag}</span>
            <span className="text-gray-700 font-medium">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild onClick={() => setOpen(!open)}>
    //     <Button variant="outline" className="flex items-center gap-2">
    //       <Globe className="w-4 h-4" />
    //       <span>{currentLang?.name}</span>
    //     </Button>
    //   </DropdownMenuTrigger>

    //   <DropdownMenuContent open={open}>
    //     {languages.map((lang) => (
    //       <DropdownMenuItem
    //         key={lang.code}
    //         onSelect={() => {
    //           setCurrentLang(lang);
    //           setOpen(false);
    //         }}
    //       >
    //         <span className="mr-2">{lang.flag}</span>
    //         {lang.name}
    //       </DropdownMenuItem>
    //     ))}
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
};

function AppLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter()
  const { t } = useLanguage();

  const navigationItems = navigationItemsConfig.map(item => ({
    ...item,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  const activeItem = navigationItems.find((item) => item.url === pathname);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <Sidebar className="border-r border-blue-200 bg-white/80 backdrop-blur-sm">
          <SidebarHeader className="border-b border-blue-300 p-6">    
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">{t('layout.title')}</h2>
                <p className="text-xs text-blue-600 font-medium">{t('layout.subtitle')}</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                {t('layout.navigation_label')}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`hover:bg-blue-400 text-black hover:text-blue-700 transition-all duration-200 rounded-xl px-3 py-3 ${
                          pathname === item.url
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-blue-400 shadow-lg shadow-blue-200'
                            : ''
                        }`}
                      >
                        <Link href={item.url} className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          <div className="flex-1">
                            <span className="font-medium text-sm">{item.title}</span>
                            <p className={`text-xs mt-0.5 ${
                              pathname === item.url
                                ? 'text-blue-300'
                                : 'text-gray-500'
                            }`}>
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                {t('layout.quick_help_label')}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-3 py-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-orange-800">{t('layout.helpline')}</p>
                      <p className="text-xs text-orange-600 mt-1">1800-XXX-XXXX</p>
                      <p className="text-xs text-orange-600">{t('layout.helpline_timing')}</p>
                    </div>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-blue-100 p-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs font-medium text-gray-700">{t('layout.footer_org')}</p>
              <p className="text-xs text-gray-500">{t('layout.footer_dept')}</p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                {/* <SidebarTrigger className="hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200 md:hidden" />
                <h1 className="text-xl font-bold text-gray-900 hidden md:block">{activeItem?.title || t('layout.mobile_header')}</h1> */}
                 <button type="button" onClick={() => router.push("/admin/signin")} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all">Admin Login</button>
            </div>
            <LanguageSwitcher />
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default function AppShell({ children }) {
  return (
    <LanguageProvider>
      <AppLayout>{children}</AppLayout>
    </LanguageProvider>
  );
}


