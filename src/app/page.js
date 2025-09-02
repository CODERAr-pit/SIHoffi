"use client"
import React, { useState, useEffect } from "react";
import { Student } from "@/entities/Student";
 
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
  Clock,
  User,
  CheckSquare,
  FileText,
  Circle,
  Bell,
  Calendar,
  Info,
} from "lucide-react";
import { useLanguage } from '@/components/providers/LanguageContext/page';



export default function Home() {
  const [studentData, setStudentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  // useEffect( async () => {
  //   await connect();

  //   // Seed default admin if not exists
  //   const { ADMIN_PASSWORD, ADMIN_USERNAME } = process.env;
  //   if (ADMIN_USERNAME && ADMIN_PASSWORD) {
  //       const exists = await User.findOne({ username: ADMIN_USERNAME });
  //       if (!exists) {
  //           const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
  //           await User.create({
  //             username: ADMIN_USERNAME,
  //             password: hashed,
  //           })
  //       }
  //   }
  // }, [])

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

        {/* What is DBT? */}
        <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl shadow-sm">
          <div className="p-6 border-b border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900">What is DBT?</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Direct Benefit Transfer (DBT) is a system to transfer subsidies and benefits directly to the beneficiaries' bank accounts. It aims to remove leakages, ensure transparency, and deliver funds quickly and securely using Aadhaar and bank account verification.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Under DBT, eligible students can receive scholarship amounts directly in their bank accounts once their application is verified. This ensures timely disbursal and reduces the need for intermediaries.
            </p>
          </div>
        </div>

        {/* Video + Image section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Video */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-4">
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-blue-100">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2nKxJ3Z4qBA"
                  title="Introduction to DBT"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h4 className="mt-3 text-lg font-semibold text-gray-900">DBT Overview Video</h4>
              <p className="text-sm text-gray-600">A quick introduction to how Direct Benefit Transfer works for scholarships.</p>
            </div>
          </div>
          {/* Right: Image/SVG */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-4 flex items-center justify-center h-full">
              <img src="/globe.svg" alt="DBT Illustration" className="max-h-80 object-contain" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActionsInline t={t} />

        {/* Flowchart Image */}
        <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Application Flowchart</h4>
          <div className="w-full flex items-center justify-center">
            <img src="/window.svg" alt="Application Process Flowchart" className="max-h-96 w-auto object-contain" />
          </div>
        </div>

        {/* Recent Updates - Horizontal */}
        <RecentUpdatesInline t={t} />

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
          <div className="p-6 border-b border-amber-200">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h4 className="text-amber-800 font-semibold">{t('home.important_notice_title')}</h4>
            </div>
          </div>
          <div className="p-6">
            <p className="text-amber-700 mb-4">{t('home.important_notice_content')}</p>
            <div className="flex gap-3">
              <Link href={createPageUrl("Education")}>
                <button className="px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-medium inline-flex items-center">
                  {t('home.important_notice_btn')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Inline components for readability ---

function WelcomeCardInline({ studentData, isLoading, t }) {
  if (isLoading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl">
        <div className="p-6 border-b border-blue-100">
          <div className="h-6 w-48 bg-blue-100 rounded animate-pulse" />
          <div className="h-4 w-64 bg-blue-50 rounded mt-2 animate-pulse" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-32 bg-blue-50 rounded animate-pulse" />
              <div className="h-3 w-24 bg-blue-50 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const statusText = (status) => {
    switch (status) {
      case 'approved': return t('home.status_approved');
      case 'submitted': return t('home.status_submitted');
      case 'documents_pending': return t('home.status_pending');
      default: return t('home.status_not_started');
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'documents_pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const statusIcon = (status) => {
    switch (status) {
      case 'approved':
      case 'submitted':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-gradient-to-r from-white to-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-xl shadow-lg">
      <div className="p-6 border-b border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {studentData ? t('home.welcome_greeting', {name: studentData.full_name}) : t('home.welcome_title')}
            </h3>
            <p className="text-gray-600 mt-2">
              {studentData ? t('home.welcome_greeting_desc') : t('home.welcome_desc')}
            </p>
          </div>
          {studentData?.application_status && (
            <span className={`${statusColor(studentData.application_status)} flex items-center gap-1 px-2 py-1 rounded text-xs font-medium`}>
              {statusIcon(studentData.application_status)}
              {statusText(studentData.application_status)}
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
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
              <Link href={createPageUrl('Progress')}>
                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium inline-flex items-center">
                  {t('home.welcome_view_progress_btn')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            ) : (
              <Link href={createPageUrl('Education')}>
                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium inline-flex items-center">
                  {t('home.welcome_get_started_btn')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickActionsInline({ t }) {
  const items = [
    { title: t('home.action1_title'), description: t('home.action1_desc'), icon: BookOpen, href: 'Education', color: 'from-blue-500 to-indigo-500', bgColor: 'bg-blue-50' },
    { title: t('home.action2_title'), description: t('home.action2_desc'), icon: CheckSquare, href: 'Progress', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50' },
    { title: t('home.action3_title'), description: t('home.action3_desc'), icon: GraduationCap, href: 'Scholarships', color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-50' },
    { title: t('home.action4_title'), description: t('home.action4_desc'), icon: FileText, href: 'Resources', color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-50' },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl">
      <div className="p-6 border-b border-blue-100">
        <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg"></div>
          {t('home.quick_actions_title')}
        </div>
        <p className="text-gray-600">{t('home.quick_actions_desc')}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((action, index) => (
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
      </div>
    </div>
  );
}

function StatusOverviewInline({ studentData, t }) {
  const steps = [
    { id: 1, title: t('home.step1_title'), key: 'aadhaar_verified' },
    { id: 2, title: t('home.step2_title'), key: 'bank_account_ready' },
    { id: 3, title: t('home.step3_title'), key: 'aadhaar_seeded' },
    { id: 4, title: t('home.step4_title'), key: 'dbt_verified' },
    { id: 5, title: t('home.step5_title'), key: 'application_submitted' },
  ];

  const completed = studentData?.completed_steps || [];
  const percent = (completed.length / steps.length) * 100;

  const stepStatus = (key) => {
    if (completed.includes(key)) return 'completed';
    if (completed.length > 0 && steps.findIndex(s => s.key === key) === completed.length) return 'current';
    return 'pending';
  };

  const stepIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'current': return <Clock className="w-5 h-5 text-blue-600" />;
      default: return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl">
      <div className="p-6 border-b border-blue-100">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">{t('home.status_overview_title')}</div>
          <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">{t('home.status_overview_completed', {completed: completed.length, total: steps.length})}</span>
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{t('home.status_overview_completion_rate')}</span>
            <span className="font-semibold text-gray-900">{Math.round(percent)}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded">
            <div className="h-2 bg-blue-500 rounded" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {steps.map(step => {
            const s = stepStatus(step.key);
            return (
              <div key={step.id} className="flex items-center gap-4">
                <div className="flex-shrink-0">{stepIcon(s)}</div>
                <div className="flex-1">
                  <h3 className={`font-medium ${s === 'completed' ? 'text-green-700' : s === 'current' ? 'text-blue-700' : 'text-gray-600'}`}>{step.title}</h3>
                  {s === 'current' && (<p className="text-xs text-blue-600 mt-1">{t('home.step_status_current')}</p>)}
                </div>
                <div>
                  {s === 'completed' && (<span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">{t('home.step_status_completed')}</span>)}
                  {s === 'current' && (<span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">{t('home.step_status_current')}</span>)}
                </div>
              </div>
            );
          })}
        </div>

        {completed.length === 0 && (
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800">{t('home.get_started_title')}</h4>
                <p className="text-sm text-amber-700 mt-1">{t('home.get_started_desc')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function RecentUpdatesInline({ t }) {
  const updates = [
    { id: 1, title: t('home.update1_title'), content: t('home.update1_content'), type: 'info', date: t('home.update_time_ago_days', { days: 2 }), priority: 'high' },
    { id: 2, title: t('home.update2_title'), content: t('home.update2_content'), type: 'warning', date: t('home.update_time_ago_days', { days: 5 }), priority: 'high' },
    { id: 3, title: t('home.update3_title'), content: t('home.update3_content'), type: 'info', date: t('home.update_time_ago_week'), priority: 'medium' },
    { id: 4, title: t('home.update4_title'), content: t('home.update4_content'), type: 'info', date: t('home.update_time_ago_weeks', { weeks: 2 }), priority: 'low' },
  ];

  const icon = (type) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      case 'info': return <Info className="w-4 h-4 text-blue-600" />;
      default: return <Bell className="w-4 h-4 text-gray-600" />;
    }
  };

  const color = (type, priority) => {
    if (priority === 'high') return type === 'warning' ? 'border-l-amber-500 bg-amber-50' : 'border-l-blue-500 bg-blue-50';
    return 'border-l-gray-300 bg-gray-50';
  };

  const priorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-0.5 rounded text-xs bg-red-100 text-red-800">{t('home.update_priority_high')}</span>;
      case 'medium':
        return <span className="px-2 py-0.5 rounded text-xs bg-yellow-100 text-yellow-800">{t('home.update_priority_medium')}</span>;
      case 'low':
        return <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-800">{t('home.update_priority_low')}</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl">
      <div className="p-6 border-b border-blue-100">
        <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Bell className="w-5 h-5 text-blue-600" />
          {t('home.recent_updates_title')}
        </div>
        <p className="text-gray-600 text-sm">{t('home.recent_updates_desc')}</p>
      </div>
      <div className="p-4">
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {updates.map(update => (
            <div key={update.id} className={`min-w-[260px] p-3 rounded-lg border-l-4 ${color(update.type, update.priority)} transition-all duration-200 hover:shadow-sm bg-white` }>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">{icon(update.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-gray-900 text-sm truncate">{update.title}</h4>
                    {priorityBadge(update.priority)}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed line-clamp-3">{update.content}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{update.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
