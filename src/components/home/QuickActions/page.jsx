"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { 
  BookOpen, 
  CheckSquare, 
  FileText, 
  HelpCircle,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { useLanguage } from '@/components/providers/LanguageContext/page';

export default function QuickActions() {
  const { t } = useLanguage();

  const quickActionsConfig = [
    {
      titleKey: "home.action1_title",
      descriptionKey: "home.action1_desc",
      icon: BookOpen,
      href: "Education",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    {
      titleKey: "home.action2_title",
      descriptionKey: "home.action2_desc",
      icon: CheckSquare,
      href: "Progress", 
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      titleKey: "home.action3_title",
      descriptionKey: "home.action3_desc",
      icon: GraduationCap,
      href: "Scholarships",
      color: "from-purple-500 to-violet-500", 
      bgColor: "bg-purple-50"
    },
    {
      titleKey: "home.action4_title",
      descriptionKey: "home.action4_desc",
      icon: FileText,
      href: "Resources",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50"
    }
  ];
  
  const quickActions = quickActionsConfig.map(action => ({
      ...action,
      title: t(action.titleKey),
      description: t(action.descriptionKey),
  }));

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg"></div>
          {t('home.quick_actions_title')}
        </CardTitle>
        <p className="text-gray-600">{t('home.quick_actions_desc')}</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link key={index} href={createPageUrl(action.href)}>
              <div className={`${action.bgColor} rounded-xl p-4 border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:shadow-lg cursor-pointer group`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{action.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{action.description}</p>
                    <div className="flex items-center gap-1 mt-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-medium">{t('home.view_action')}</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
