import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, XCircle, CheckCircle2, Lightbulb } from "lucide-react";

const mistakes = [
  {
    id: 1,
    mistake: "सिर्फ आधार लिंकिंग करना",
    why_wrong: "आधार लिंकिंग और DBT सीडिंग अलग-अलग प्रक्रियाएं हैं",
    correct_approach: "बैंक से स्पष्ट रूप से DBT सीडिंग का अनुरोध करें",
    severity: "high",
    frequency: "बहुत आम"
  },
  {
    id: 2,
    mistake: "पुराने मोबाइल नंबर का उपयोग",
    why_wrong: "OTP वेरिफिकेशन के लिए एक्टिव नंबर जरूरी है",
    correct_approach: "आधार और बैंक दोनों में एक ही एक्टिव नंबर रजिस्टर करें",
    severity: "medium",
    frequency: "आम"
  },
  {
    id: 3,
    mistake: "DBT स्टेटस चेक नहीं करना",
    why_wrong: "सीडिंग के बाद भी DBT एक्टिव नहीं हो सकता",
    correct_approach: "बैंक से DBT एक्टिवेशन की लिखित पुष्टि लें",
    severity: "high", 
    frequency: "कभी-कभार"
  },
  {
    id: 4,
    mistake: "गलत दस्तावेज़ लेकर जाना",
    why_wrong: "अधूरे दस्तावेज़ों से प्रक्रिया में देरी होती है",
    correct_approach: "आधार कार्ड, पासबुक, और फोटो ID साथ रखें",
    severity: "low",
    frequency: "कम"
  },
  {
    id: 5,
    mistake: "फॉलो-अप नहीं करना",
    why_wrong: "कई बार प्रक्रिया अधूरी रह जाती है",
    correct_approach: "2-3 दिन बाद बैंक से स्टेटस चेक करें",
    severity: "medium",
    frequency: "आम"
  }
];

const getSeverityColor = (severity) => {
  switch (severity) {
    case 'high': return 'bg-red-100 text-red-800 border-red-200';
    case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getSeverityText = (severity) => {
  switch (severity) {
    case 'high': return 'गंभीर';
    case 'medium': return 'मध्यम';
    case 'low': return 'छोटी';
    default: return 'सामान्य';
  }
};

export default function CommonMistakes() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">सामान्य गलतियां</h2>
        <p className="text-gray-600">इन गलतियों से बचें और सफलतापूर्वक DBT सीडिंग करवाएं</p>
      </div>

      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <CardTitle className="text-red-800">चेतावनी</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 text-sm">
            यहां लिस्ट की गई गलतियां बहुत से छात्रों द्वारा की जाती हैं, जिससे उनकी छात्रवृत्ति में देरी होती है। 
            इन्हें ध्यान से पढ़ें और अपने केस में लागू करें।
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {mistakes.map((mistake, index) => (
          <Card key={mistake.id} className="border-l-4 border-l-red-400 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getSeverityColor(mistake.severity)}>
                      {getSeverityText(mistake.severity)} गलती
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {mistake.frequency}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    {mistake.mistake}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-800 mb-1 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  यह गलत क्यों है:
                </h4>
                <p className="text-red-700 text-sm">{mistake.why_wrong}</p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  सही तरीका:
                </h4>
                <p className="text-green-700 text-sm">{mistake.correct_approach}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            प्रो टिप
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 text-sm leading-relaxed">
            <strong>याद रखें:</strong> बैंक कर्मचारियों से स्पष्ट रूप से कहें कि आपको "DBT सीडिंग" चाहिए, न कि सिर्फ "आधार लिंकिंग"। 
            यह अंतर समझना और समझाना बहुत महत्वपूर्ण है। यदि बैंक कर्मचारी confused लगे तो उन्हें यह गाइड दिखाएं।
          </p>
        </CardContent>
      </Card>
    </div>
  );
}