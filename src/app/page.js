"use client"
import React, { useState, useEffect } from "react";
import { Student } from "@/entities/Student";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  ArrowRight,
  Users,
  Award,
  Banknote,
  Clock
} from "lucide-react";
import QuickActions from "@/components/home/QuickActions/page";
import RecentUpdates from "@/components/home/RecentUpdates/page";
import StatusOverview from "@/components/home/StatusOverview/page";
import WelcomeCard from "@/components/home/WelcomeCard/page";
import { useLanguage } from '@/components/providers/LanguageContext/page';

export default function Home() {
  const [studentData, setStudentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    try {
      const students = await Student.list();
      // For demo purposes, use the first student or create a default profile
      if (students.length > 0) {
        setStudentData(students[0]);
      }
    } catch (error) {
      console.error("Error loading student data:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700">{t('home.status_available')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('home.main_title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('home.main_description')}
          </p>
        </div>

        {/* Welcome Card */}
        <WelcomeCard studentData={studentData} isLoading={isLoading} />

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-blue-100 text-blue-700">{t('home.stats_active')}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-bold text-gray-900">10,000+</CardTitle>
              <p className="text-sm text-gray-600">{t('home.stats_students_helped')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-700">{t('home.stats_available')}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-bold text-gray-900">2</CardTitle>
              <p className="text-sm text-gray-600">{t('home.stats_scholarship_schemes')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className="bg-purple-100 text-purple-700">{t('home.stats_dbt')}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-bold text-gray-900">100%</CardTitle>
              <p className="text-sm text-gray-600">{t('home.stats_direct_transfer')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <Badge className="bg-orange-100 text-orange-700">24/7</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-bold text-gray-900">{t('home.stats_instant')}</CardTitle>
              <p className="text-sm text-gray-600">{t('home.stats_online_support')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Status Overview and Recent Updates */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <StatusOverview studentData={studentData} />
          </div>
          <div>
            <RecentUpdates />
          </div>
        </div>

        {/* Important Notice */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <CardTitle className="text-amber-800">{t('home.important_notice_title')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-amber-700 mb-4">
              {t('home.important_notice_content')}
            </p>
            <div className="flex gap-3">
              <Link href={createPageUrl("Education")}>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  {t('home.important_notice_btn')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
