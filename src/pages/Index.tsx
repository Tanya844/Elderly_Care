
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Heart, Clock, Bell, Calendar, Phone, MessageCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Health Monitoring",
      description: "Track vital signs and medication schedules with timely reminders."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Daily Assistance",
      description: "Reminders for daily activities, meals, and other routines."
    },
    {
      icon: <Bell className="h-6 w-6 text-yellow-500" />,
      title: "Emergency Alerts",
      description: "Quick access to emergency services and caregiver notifications."
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-500" />,
      title: "Appointment Management",
      description: "Schedule and track medical appointments with ease."
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-500" />,
      title: "Caregiver Connect",
      description: "Stay connected with caregivers and family members."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-indigo-500" />,
      title: "Community Support",
      description: "Connect with others for shared experiences and support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container px-4 pt-16 pb-24 mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Elderly Care</span>
          <span className="block text-blue-600">Support System</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Enhancing the quality of life for seniors through technology, 
          compassion, and community support.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Button 
              size="lg"
              className="w-full md:w-auto"
              onClick={() => navigate('/dashboard')}
            >
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full md:w-auto"
              onClick={() => navigate('/services')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Supporting Elderly Care Needs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Comprehensive tools designed to enhance independence and quality of life.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-white">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-blue-600 p-0">
                      Learn more <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by families nationwide
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              See how our system is making a difference in the lives of seniors and their caregivers.
            </p>
          </div>
          <div className="mt-10 max-w-lg mx-auto">
            <Card className="bg-white shadow">
              <CardContent className="p-6">
                <p className="text-gray-500 italic">
                  "This system has been a lifesaver for our family. Mom can maintain her independence, 
                  and we have peace of mind knowing we'll be alerted if she needs help."
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
                      JD
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Jane Doe</p>
                    <p className="text-sm text-gray-500">Caregiver, New York</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
