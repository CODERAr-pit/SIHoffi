"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { User, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from '@/components/providers/LanguageContext/page';

export default function WelcomeCard({ studentData, isLoading }) {
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'approved': return t('home.status_approved');
      case 'submitted': return t('home.status_submitted');
      case 'documents_pending': return t('home.status_pending');
      default: return t('home.status_not_started');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'documents_pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle2 className="w-4 h-4" />;
      case 'submitted': return <CheckCircle2 className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <Card className="bg-gradient-to-r from-white to-blue-50/80 backdrop-blur-sm border-blue-200 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {studentData ? t('home.welcome_greeting', {name: studentData.full_name}) : t('home.welcome_title')}
            </CardTitle>
            <p className="text-gray-600 mt-2">
              {studentData 
                ? t('home.welcome_greeting_desc')
                : t('home.welcome_desc')
              }
            </p>
          </div>
          {studentData?.application_status && (
            <Badge className={`${getStatusColor(studentData.application_status)} flex items-center gap-1`}>
              {getStatusIcon(studentData.application_status)}
              {getStatusText(studentData.application_status)}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              {studentData ? (
                <>
                  <p className="font-semibold text-lg text-gray-900">{studentData.school_name || t('home.welcome_school_name')}</p>
                  <p className="text-sm text-gray-600">{t('home.welcome_class_category', {class: studentData.class_standard, category: studentData.category})}</p>
                  <p className="text-sm text-blue-600 font-medium">
                    {studentData.scholarship_type === 'pre_matric' ? t('home.welcome_scholarship_type_pre') : t('home.welcome_scholarship_type_post')}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-lg text-gray-900">{t('home.welcome_new_user')}</p>
                  <p className="text-sm text-gray-600">{t('home.welcome_create_profile')}</p>
                </>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            {studentData ? (
              <Link href={createPageUrl("Progress")}>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  {t('home.welcome_view_progress_btn')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <Link href={createPageUrl("Education")}>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  {t('home.welcome_get_started_btn')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
