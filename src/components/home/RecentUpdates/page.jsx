"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, Info, AlertTriangle } from "lucide-react";
import { useLanguage } from '@/components/providers/LanguageContext/page';

export default function RecentUpdates() {
    const { t } = useLanguage();

    const updatesConfig = [
        {
            id: 1,
            titleKey: "home.update1_title",
            contentKey: "home.update1_content",
            type: "info",
            date: t('home.update_time_ago_days', { days: 2 }),
            priority: "high"
        },
        {
            id: 2,
            titleKey: "home.update2_title",
            contentKey: "home.update2_content",
            type: "warning",
            date: t('home.update_time_ago_days', { days: 5 }),
            priority: "high"
        },
        {
            id: 3,
            titleKey: "home.update3_title",
            contentKey: "home.update3_content",
            type: "info",
            date: t('home.update_time_ago_week'),
            priority: "medium"
        },
        {
            id: 4,
            titleKey: "home.update4_title",
            contentKey: "home.update4_content",
            type: "info",
            date: t('home.update_time_ago_weeks', { weeks: 2 }),
            priority: "low"
        }
    ];

    const updates = updatesConfig.map(u => ({ ...u, title: t(u.titleKey), content: t(u.contentKey) }));

    const getUpdateIcon = (type) => {
        switch (type) {
            case 'warning': return <AlertTriangle className="w-4 h-4 text-amber-600" />;
            case 'info': return <Info className="w-4 h-4 text-blue-600" />;
            default: return <Bell className="w-4 h-4 text-gray-600" />;
        }
    };

    const getUpdateColor = (type, priority) => {
        if (priority === 'high') {
            return type === 'warning' ? 'border-l-amber-500 bg-amber-50' : 'border-l-blue-500 bg-blue-50';
        }
        return 'border-l-gray-300 bg-gray-50';
    };

    const getPriorityBadge = (priority) => {
        switch (priority) {
            case 'high': return <Badge className="bg-red-100 text-red-800 text-xs">{t('home.update_priority_high')}</Badge>;
            case 'medium': return <Badge className="bg-yellow-100 text-yellow-800 text-xs">{t('home.update_priority_medium')}</Badge>;
            case 'low': return <Badge className="bg-gray-100 text-gray-800 text-xs">{t('home.update_priority_low')}</Badge>;
            default: return null;
        }
    };

    return (
        <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-blue-600" />
                    {t('home.recent_updates_title')}
                </CardTitle>
                <p className="text-gray-600 text-sm">{t('home.recent_updates_desc')}</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {updates.map((update) => (
                        <div
                            key={update.id}
                            className={`p-3 rounded-lg border-l-4 ${getUpdateColor(update.type, update.priority)} transition-all duration-200 hover:shadow-sm`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-0.5">
                                    {getUpdateIcon(update.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <h4 className="font-semibold text-gray-900 text-sm">{update.title}</h4>
                                        {getPriorityBadge(update.priority)}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{update.content}</p>
                                    <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                                        <Calendar className="w-3 h-3" />
                                        <span>{update.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
