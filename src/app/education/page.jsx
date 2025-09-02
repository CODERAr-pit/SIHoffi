"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Banknote,
  Link2,
  Shield,
  Clock
} from "lucide-react";
import ComparisonChart from "@/components/education/ComparisionChart/page";
import StepByStepGuide from "@/components/education/StepByStepGuide/page";
import CommonMistakes from "@/components/education/CommonMistakes/page";
import VideoTutorials from "@/components/education/VideoTutorials/page";

export default function Education() {
  const [activeTab, setActiveTab] = useState("comparison");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">शिक्षा केंद्र</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            आधार vs DBT सीडिंग
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            समझें कि आधार लिंकिंग और DBT इनेबल्ड आधार सीडेड बैंक अकाउंट में क्या अंतर है और छात्रवृत्ति के लिए क्यों DBT जरूरी है
          </p>
        </div>

        {/* Key Differences Alert */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <CardTitle className="text-amber-800">मुख्य अंतर</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">सिर्फ आधार लिंकिंग</h3>
                </div>
                <p className="text-red-700 text-sm">
                  केवल आधार नंबर बैंक में रजिस्टर्ड है लेकिन DBT के लिए एक्टिव नहीं है। 
                  <strong> इससे छात्रवृत्ति नहीं मिलेगी।</strong>
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-green-800">DBT इनेबल्ड सीडिंग</h3>
                </div>
                <p className="text-green-700 text-sm">
                  आधार नंबर न केवल लिंक्ड है बल्कि DBT के लिए भी एक्टिव है। 
                  <strong> यह छात्रवृत्ति के लिए जरूरी है।</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Tabs */}
        <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">विस्तृत जानकारी</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 bg-white/80 border border-blue-200 rounded-lg">
                <TabsTrigger value="comparison" className="text-sm text-gray-900 data-[state=active]:bg-blue-600 data-[state=active]:text-white">तुलना</TabsTrigger>
                <TabsTrigger value="guide" className="text-sm text-gray-900 data-[state=active]:bg-blue-600 data-[state=active]:text-white">गाइड</TabsTrigger>
                <TabsTrigger value="mistakes" className="text-sm text-gray-900 data-[state=active]:bg-blue-600 data-[state=active]:text-white">गलतियां</TabsTrigger>
                <TabsTrigger value="videos" className="text-sm text-gray-900 data-[state=active]:bg-blue-600 data-[state=active]:text-white">वीडियो</TabsTrigger>
              </TabsList>
              
              <TabsContent value="comparison" className="mt-6">
                <ComparisonChart />
              </TabsContent>
              
              <TabsContent value="guide" className="mt-6">
                <StepByStepGuide />
              </TabsContent>
              
              <TabsContent value="mistakes" className="mt-6">
                <CommonMistakes />
              </TabsContent>
              
              <TabsContent value="videos" className="mt-6">
                <VideoTutorials />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Benefits Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Banknote className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-blue-800">तुरंत पेमेंट</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                DBT इनेबल्ड अकाउंट से छात्रवृत्ति सीधे आपके खाते में तुरंत आ जाती है।
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-green-800">सुरक्षित प्रक्रिया</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700">
                आधार प्रमाणीकरण के साथ पूरी तरह सुरक्षित और पारदर्शी लेन-देन।
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-purple-800">समय की बचत</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700">
                कोई लंबी प्रतीक्षा नहीं, कोई दलाल नहीं - सिर्फ तुरंत पेमेंट।
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}