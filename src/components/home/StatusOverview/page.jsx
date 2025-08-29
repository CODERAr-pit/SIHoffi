"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock, AlertTriangle } from "lucide-react";
import { useLanguage } from '@/components/providers/LanguageContext/page';

export default function StatusOverview({ studentData }) {
  const { t } = useLanguage();

  const stepsConfig = [
    { id: 1, titleKey: "home.step1_title", key: "aadhaar_verified" },
    { id: 2, titleKey: "home.step2_title", key: "bank_account_ready" },
    { id: 3, titleKey: "home.step3_title", key: "aadhaar_seeded" },
    { id: 4, titleKey: "home.step4_title", key: "dbt_verified" },
    { id: 5, titleKey: "home.step5_title", key: "application_submitted" }
  ];

  const steps = stepsConfig.map(step => ({...step, title: t(step.titleKey)}));

  const completedSteps = studentData?.completed_steps || [];
  const completionPercentage = (completedSteps.length / steps.length) * 100;

  const getStepStatus = (stepKey) => {
    if (completedSteps.includes(stepKey)) return 'completed';
    // Determine if this step is the next one to be completed
    if (completedSteps.length > 0 && steps.findIndex(s => s.key === stepKey) === completedSteps.length) return 'current';
    return 'pending';
  };

  const getStepIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'current': return <Clock className="w-5 h-5 text-blue-600" />;
      default: return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900">{t('home.status_overview_title')}</CardTitle>
          <Badge className="bg-blue-100 text-blue-800">
            {t('home.status_overview_completed', {completed: completedSteps.length, total: steps.length})}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{t('home.status_overview_completion_rate')}</span>
            <span className="font-semibold text-gray-900">{Math.round(completionPercentage)}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const status = getStepStatus(step.key);
            return (
              <div key={step.id} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {getStepIcon(status)}
                </div>
                <div className="flex-1">
                  <h3 className={`font-medium ${
                    status === 'completed' ? 'text-green-700' : 
                    status === 'current' ? 'text-blue-700' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </h3>
                  {status === 'current' && (
                    <p className="text-xs text-blue-600 mt-1">{t('home.step_status_current')}</p>
                  )}
                </div>
                <div>
                  {status === 'completed' && (
                    <Badge className="bg-green-100 text-green-800 text-xs">{t('home.step_status_completed')}</Badge>
                  )}
                  {status === 'current' && (
                    <Badge className="bg-blue-100 text-blue-800 text-xs">{t('home.step_status_current')}</Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {completedSteps.length === 0 && (
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800">{t('home.get_started_title')}</h4>
                <p className="text-sm text-amber-700 mt-1">
                  {t('home.get_started_desc')}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
