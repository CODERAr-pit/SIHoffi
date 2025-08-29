import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Phone, FileText, CreditCard, Smartphone } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "अपना आधार नंबर तैयार करें",
    description: "सुनिश्चित करें कि आपके पास वैलिड आधार कार्ड है और नंबर सही है",
    icon: FileText,
    actions: [
      "आधार कार्ड की फोटोकॉपी निकालें",
      "आधार नंबर को वेरिफाई करें",
      "यदि कोई गलती है तो आधार सुधार करवाएं"
    ],
    timeRequired: "तुरंत",
    difficulty: "आसान"
  },
  {
    step: 2,
    title: "बैंक शाखा में जाएं", 
    description: "अपने बैंक की नजदीकी शाखा में जाकर DBT सीडिंग का अनुरोध करें",
    icon: CreditCard,
    actions: [
      "पासबुक और आधार कार्ड लेकर जाएं",
      "DBT सीडिंग फॉर्म भरें",
      "बैंक स्टाफ से DBT एक्टिवेशन की पुष्टि करें"
    ],
    timeRequired: "30-45 मिनट",
    difficulty: "आसान"
  },
  {
    step: 3,
    title: "मोबाइल नंबर लिंक करें",
    description: "सुनिश्चित करें कि आपका मोबाइल नंबर आधार और बैंक अकाउंट दोनों से जुड़ा है",
    icon: Smartphone,
    actions: [
      "आधार में रजिस्टर्ड मोबाइल नंबर चेक करें",
      "बैंक में भी वही नंबर अपडेट करवाएं",
      "OTP के लिए नंबर एक्टिव रखें"
    ],
    timeRequired: "15-20 मिनट",
    difficulty: "आसान"
  },
  {
    step: 4,
    title: "DBT स्टेटस वेरिफाई करें",
    description: "बैंक से या ऑनलाइन चेक करें कि आपका DBT एक्टिव है या नहीं",
    icon: CheckCircle2,
    actions: [
      "बैंक से DBT स्टेटस की पुष्टि लें",
      "SMS या ईमेल कन्फर्मेशन मांगें",
      "यदि जरूरत हो तो दोबारा फॉलो-अप करें"
    ],
    timeRequired: "तुरंत वेरिफिकेशन",
    difficulty: "आसान"
  }
];

export default function StepByStepGuide() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">DBT सीडिंग गाइड</h2>
        <p className="text-gray-600">चरण-दर-चरण प्रक्रिया अपने बैंक अकाउंट को DBT के लिए तैयार करने की</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <Card key={step.step} className="border-l-4 border-l-blue-500 bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-800">चरण {step.step}</Badge>
                      <Badge variant="outline" className="text-xs">{step.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{step.title}</CardTitle>
                    <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="text-gray-500">समय</p>
                  <p className="font-medium text-gray-900">{step.timeRequired}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">करने योग्य कार्य:</h4>
                <ul className="space-y-2">
                  {step.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            बधाई हो!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700 mb-4">
            जब आपका DBT सीडिंग पूरा हो जाए, तो आप छात्रवृत्ति के लिए आवेदन कर सकते हैं। 
            सभी पेमेंट्स सीधे आपके अकाउंट में आ जाएंगी।
          </p>
          <div className="flex gap-3">
            <Button className="bg-green-600 hover:bg-green-700">
              प्रगति ट्रैकर पर जाएं
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
              <Phone className="w-4 h-4 mr-2" />
              हेल्पलाइन कॉल करें
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}