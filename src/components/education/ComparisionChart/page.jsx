import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertTriangle, Clock } from "lucide-react";

const comparisonData = [
  {
    feature: "आधार नंबर बैंक में रजिस्टर्ड",
    aadhaar_linked: true,
    dbt_enabled: true,
    description: "दोनों में आधार नंबर बैंक अकाउंट से जुड़ा होता है"
  },
  {
    feature: "DBT के लिए एक्टिवेशन",
    aadhaar_linked: false,
    dbt_enabled: true,
    description: "यह सबसे महत्वपूर्ण अंतर है - केवल DBT इनेबल्ड अकाउंट में यह सुविधा होती है"
  },
  {
    feature: "छात्रवृत्ति प्राप्ति",
    aadhaar_linked: false,
    dbt_enabled: true,
    description: "सरकारी छात्रवृत्ति केवल DBT इनेबल्ड अकाउंट में ही आती है"
  },
  {
    feature: "पेमेंट की गति",
    aadhaar_linked: "slow",
    dbt_enabled: "fast",
    description: "DBT से तुरंत पेमेंट, आधार लिंकिंग से देरी या कोई पेमेंट नहीं"
  },
  {
    feature: "सरकारी सब्सिडी",
    aadhaar_linked: false,
    dbt_enabled: true,
    description: "सभी सरकारी योजनाओं का फायदा केवल DBT से मिलता है"
  },
  {
    feature: "बैंक विज़िट की जरूरत",
    aadhaar_linked: "partial",
    dbt_enabled: "minimal",
    description: "DBT में कम बैंक जाना पड़ता है"
  }
];

const getStatusIcon = (status) => {
  if (status === true) return <CheckCircle2 className="w-5 h-5 text-green-600" />;
  if (status === false) return <XCircle className="w-5 h-5 text-red-600" />;
  if (status === "partial") return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
  if (status === "slow") return <Clock className="w-5 h-5 text-red-600" />;
  if (status === "fast") return <CheckCircle2 className="w-5 h-5 text-green-600" />;
  if (status === "minimal") return <CheckCircle2 className="w-5 h-5 text-green-600" />;
  return <XCircle className="w-5 h-5 text-gray-400" />;
};

const getStatusText = (status) => {
  if (status === true) return "हाँ";
  if (status === false) return "नहीं";
  if (status === "partial") return "आंशिक";
  if (status === "slow") return "धीमी";
  if (status === "fast") return "तुरंत";
  if (status === "minimal") return "कम";
  return "उपलब्ध नहीं";
};

const getStatusColor = (status) => {
  if (status === true || status === "fast" || status === "minimal") return "bg-green-100 text-green-800";
  if (status === false || status === "slow") return "bg-red-100 text-red-800";
  if (status === "partial") return "bg-yellow-100 text-yellow-800";
  return "bg-gray-100 text-gray-800";
};

export default function ComparisonChart() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">विस्तृत तुलना</h2>
        <p className="text-gray-600">आधार लिंकिंग और DBT इनेबल्ड सीडिंग के बीच मुख्य अंतर</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  विशेषता
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  सिर्फ आधार लिंकिंग
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DBT इनेबल्ड सीडिंग
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.feature}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(item.aadhaar_linked)}
                      <Badge className={getStatusColor(item.aadhaar_linked)}>
                        {getStatusText(item.aadhaar_linked)}
                      </Badge>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(item.dbt_enabled)}
                      <Badge className={getStatusColor(item.dbt_enabled)}>
                        {getStatusText(item.dbt_enabled)}
                      </Badge>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            निष्कर्ष
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 text-sm leading-relaxed">
            <strong>महत्वपूर्ण:</strong> छात्रवृत्ति प्राप्त करने के लिए केवल आधार लिंकिंग पर्याप्त नहीं है। 
            आपको DBT (Direct Benefit Transfer) इनेबल्ड आधार सीडेड बैंक अकाउंट की जरूरत है। 
            यह सुनिश्चित करने के लिए अपने बैंक से संपर्क करें कि आपका अकाउंट DBT के लिए एक्टिव है।
          </p>
        </CardContent>
      </Card>
    </div>
  );
}