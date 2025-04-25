
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Heart, Clock, Shield, Home, Users, UserPlus } from "lucide-react";
import Header from "@/components/Header";

const Services = () => {
  // Define the services offered
  const healthServices = [
    {
      title: "Health Monitoring",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      description: "Remote monitoring of vital signs, medication adherence, and general health status with real-time alerts for caregivers.",
      features: ["Vital signs monitoring", "Medication tracking", "Health trend analysis", "Emergency alerts"]
    },
    {
      title: "Medication Management",
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      description: "Smart medication dispensers with reminders and tracking to ensure proper medication consumption and adherence.",
      features: ["Automated reminders", "Dose tracking", "Refill notifications", "Caregiver alerts"]
    },
    {
      title: "Emergency Response",
      icon: <Shield className="h-6 w-6 text-yellow-500" />,
      description: "24/7 emergency response system with fall detection and one-touch help buttons for immediate assistance.",
      features: ["Fall detection", "One-touch help", "GPS location", "Emergency contacts"]
    }
  ];

  const homeServices = [
    {
      title: "Home Care Assistance",
      icon: <Home className="h-6 w-6 text-green-500" />,
      description: "Trained caregivers providing personalized in-home care and assistance with daily activities.",
      features: ["Personal hygiene", "Meal preparation", "Light housekeeping", "Medication reminders"]
    },
    {
      title: "Companionship",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      description: "Friendly companions to engage in conversations, activities, and provide emotional support to combat loneliness.",
      features: ["Regular visits", "Social activities", "Emotional support", "Community engagement"]
    },
    {
      title: "Caregiver Support",
      icon: <UserPlus className="h-6 w-6 text-indigo-500" />,
      description: "Resources and support for family caregivers, including respite care, training, and support groups.",
      features: ["Respite care", "Caregiver training", "Support groups", "Resource connection"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive care solutions designed to support elderly individuals and their caregivers.
          </p>
        </div>
        
        <Tabs defaultValue="health" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="health">Health Services</TabsTrigger>
            <TabsTrigger value="home">Home Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="health" className="space-y-6">
            {healthServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-blue-50 flex flex-row items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-2">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="bg-gray-50 flex justify-between">
                  <span className="text-sm text-gray-500">Starting from $29/month</span>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="home" className="space-y-6">
            {homeServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-green-50 flex flex-row items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-2">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="bg-gray-50 flex justify-between">
                  <span className="text-sm text-gray-500">Starting from $25/hour</span>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Customized Care Plan?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact our care specialists for a personalized assessment and care plan tailored to specific needs.
          </p>
          <Button size="lg" className="mx-auto">
            Request Consultation
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Services;
