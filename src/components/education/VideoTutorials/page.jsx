import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, Star, ExternalLink } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "DBT सीडिंग की पूरी प्रक्रिया",
    description: "बैंक जाकर कैसे DBT सीडिंग करवाएं - step by step वीडियो",
    duration: "8:45",
    views: "50K+",
    rating: 4.8,
    language: "हिंदी",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
    category: "मुख्य गाइड"
  },
  {
    id: 2,
    title: "आधार लिंकिंग vs DBT सीडिंग में अंतर",
    description: "समझें कि दोनों में क्या फर्क है और क्यों DBT जरूरी है",
    duration: "5:30",
    views: "35K+", 
    rating: 4.7,
    language: "हिंदी",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    category: "शिक्षा"
  },
  {
    id: 3,
    title: "मोबाइल बैंकिंग से DBT स्टेटस चेक करें",
    description: "घर बैठे अपने फोन से DBT status कैसे चेक करें",
    duration: "4:15",
    views: "25K+",
    rating: 4.6,
    language: "हिंदी",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
    category: "टेक्नोलॉजी"
  },
  {
    id: 4,
    title: "छात्रवृत्ति आवेदन की पूरी जानकारी",
    description: "Pre-matric और Post-matric छात्रवृत्ति के लिए कैसे अप्लाई करें",
    duration: "12:20",
    views: "75K+",
    rating: 4.9,
    language: "हिंदी",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    category: "छात्रवृत्ति"
  },
  {
    id: 5,
    title: "आम समस्याएं और उनका समाधान",
    description: "DBT सीडिंग में आने वाली problems और उनका solution",
    duration: "6:40", 
    views: "20K+",
    rating: 4.5,
    language: "हिंदी",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
    category: "समस्या समाधान"
  },
  {
    id: 6,
    title: "बैंक कर्मचारी से कैसे बात करें",
    description: "बैंक में जाकर सही तरीके से DBT सीडिंग का अनुरोध कैसे करें",
    duration: "3:55",
    views: "18K+",
    rating: 4.4,
    language: "हिंदी", 
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
    category: "कम्युनिकेशन"
  }
];

const getCategoryColor = (category) => {
  switch (category) {
    case 'मुख्य गाइड': return 'bg-blue-100 text-blue-800';
    case 'शिक्षा': return 'bg-green-100 text-green-800';
    case 'टेक्नोलॉजी': return 'bg-purple-100 text-purple-800';
    case 'छात्रवृत्ति': return 'bg-orange-100 text-orange-800';
    case 'समस्या समाधान': return 'bg-red-100 text-red-800';
    case 'कम्युनिकेशन': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function VideoTutorials() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">वीडियो ट्यूटोरियल्स</h2>
        <p className="text-gray-600">विस्तृत वीडियो गाइड जो आपको step-by-step प्रक्रिया समझाएंगे</p>
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <Play className="w-5 h-5" />
            नोट: ये वीडियो डेमो के लिए हैं
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-purple-700 text-sm">
            वास्तविक वीडियो ट्यूटोरियल्स जल्द ही अपलोड किए जाएंगे। फिलहाल आप स्टेप-बाई-स्टेप गाइड का इस्तेमाल करें।
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button className="bg-white text-gray-900 hover:bg-gray-100">
                  <Play className="w-4 h-4 mr-2" />
                  Play
                </Button>
              </div>
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                <Clock className="w-3 h-3 inline mr-1" />
                {video.duration}
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg text-gray-900 leading-tight">{video.title}</CardTitle>
                <Badge className={getCategoryColor(video.category)}>
                  {video.category}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{video.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{video.rating}</span>
                  </div>
                </div>
                <span className="font-medium">{video.language}</span>
              </div>
              
              <div className="mt-3 pt-3 border-t">
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  वीडियो देखें
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">सुझाव</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• वीडियो देखने से पहले स्टेप-बाई-स्टेप गाइड पढ़ें</li>
            <li>• आवश्यक documents वीडियो देखने के बाद तैयार करें</li>
            <li>• यदि कोई doubt है तो हेल्पलाइन पर कॉल करें</li>
            <li>• दोस्तों के साथ भी ये वीडियो share करें</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}