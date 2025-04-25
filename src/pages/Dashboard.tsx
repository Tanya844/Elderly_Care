
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Calendar, 
  Clock, 
  Bell, 
  Pill, 
  Activity, 
  UserCheck,
  MessageCircle
} from "lucide-react";
import Header from "@/components/Header";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for dashboard
  const upcomingMedications = [
    { id: 1, name: "Blood Pressure Medication", time: "8:00 AM", taken: false },
    { id: 2, name: "Vitamin D Supplement", time: "8:00 AM", taken: true },
    { id: 3, name: "Heart Medication", time: "12:00 PM", taken: false },
    { id: 4, name: "Arthritis Medication", time: "6:00 PM", taken: false },
  ];

  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Smith", specialty: "Cardiology", date: "May 15, 2025", time: "10:00 AM" },
    { id: 2, doctor: "Dr. Johnson", specialty: "General", date: "May 20, 2025", time: "2:30 PM" },
  ];

  const vitalSigns = [
    { id: 1, name: "Blood Pressure", value: "120/80", status: "normal" },
    { id: 2, name: "Heart Rate", value: "72 bpm", status: "normal" },
    { id: 3, name: "Blood Sugar", value: "110 mg/dL", status: "normal" },
    { id: 4, name: "Temperature", value: "99.1°F", status: "elevated" },
  ];

  const caregiverUpdates = [
    { 
      id: 1, 
      name: "Maria Johnson", 
      role: "Primary Caregiver", 
      message: "I'll be arriving at 3 PM today.", 
      time: "1 hour ago" 
    },
    { 
      id: 2, 
      name: "Robert Davis", 
      role: "Family Member", 
      message: "Called to check in. Will visit this weekend.", 
      time: "3 hours ago" 
    }
  ];

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-green-500 bg-green-50";
      case "elevated":
        return "text-yellow-500 bg-yellow-50";
      case "critical":
        return "text-red-500 bg-red-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome, Eleanor</h1>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-white shadow">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="health">Health</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="caregivers">Caregivers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Medications Today</CardTitle>
                  <Pill className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">1 taken, 3 pending</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Next: May 15</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Health Status</CardTitle>
                  <Heart className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Good</div>
                  <p className="text-xs text-muted-foreground">All vitals normal</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Caregiver Check-ins</CardTitle>
                  <UserCheck className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Last: 1 hour ago</p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Medications */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Today's Medications</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <CardDescription>Make sure to take medications on time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMedications.map(medication => (
                    <div key={medication.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-4 ${medication.taken ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div>
                          <p className="font-medium">{medication.name}</p>
                          <p className="text-sm text-gray-500">{medication.time}</p>
                        </div>
                      </div>
                      {!medication.taken && (
                        <Button size="sm">Mark as Taken</Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vital Signs */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Vital Signs</CardTitle>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
                <CardDescription>Last updated: Today, 8:30 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {vitalSigns.map(vital => (
                    <div key={vital.id} className="flex items-center">
                      <div className="mr-4">
                        <Activity className={`h-5 w-5 ${vital.status === "normal" ? "text-green-500" : "text-yellow-500"}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{vital.name}</p>
                        <div className="flex items-center">
                          <p className="font-bold">{vital.value}</p>
                          <Badge className={`ml-2 ${getStatusColor(vital.status)}`}>{vital.status}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="health" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Health Information</CardTitle>
                <CardDescription>Monitor your health statistics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed health information and tracking will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Medication Management</CardTitle>
                <CardDescription>Track and manage your medications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed medication schedules and history will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Schedule and manage your medical appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map(appointment => (
                    <div key={appointment.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{appointment.doctor}</h3>
                          <p className="text-sm text-gray-500">{appointment.specialty}</p>
                          <div className="flex items-center mt-2">
                            <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm">{appointment.date}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm">{appointment.time}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm" variant="outline" className="w-full">Cancel</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="caregivers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Caregiver Updates</CardTitle>
                <CardDescription>Stay connected with your care team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {caregiverUpdates.map(update => (
                    <div key={update.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{update.name}</h3>
                          <p className="text-sm text-gray-500">{update.role}</p>
                        </div>
                        <span className="text-xs text-gray-500">{update.time}</span>
                      </div>
                      <div className="mt-2 p-3 bg-gray-50 rounded-md">
                        <MessageCircle className="h-4 w-4 text-blue-500 inline mr-2" />
                        <span>{update.message}</span>
                      </div>
                      <div className="mt-2 flex justify-end">
                        <Button size="sm" variant="outline">Reply</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
