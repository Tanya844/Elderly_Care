import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { User, Phone, Mail, Home, Heart, UserPlus, Shield } from "lucide-react";
import Header from "@/components/Header";
import { toast } from "@/components/ui/use-toast";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "Tanya",
    email: "tanyapal095@gmail.com",
    phone: "+91 8755502702",
    address: "123 Maple Street, Anytown, ST 12345",
    emergencyContact: "Robert Johnson (Son)",
    emergencyPhone: "(555) 987-6543",
    medicalConditions: "Hypertension, Mild arthritis",
    allergies: "Penicillin",
    medications: "Lisinopril 10mg, Vitamin D 1000IU",
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleEmergencyUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Emergency Contacts Updated",
      description: "Your emergency contacts have been updated successfully.",
    });
  };

  const handleHealthUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Health Information Updated",
      description: "Your health information has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="h-10 w-10 text-blue-600" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
              <p className="text-gray-500">Senior Member since January 2025</p>
            </div>
          </div>
          
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
              <TabsTrigger value="health">Health Information</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal">
              <Card>
                <form onSubmit={handleProfileUpdate}>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="flex">
                          <User className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                          <Input id="name" value={profileData.name} onChange={e => setProfileData({...profileData, name: e.target.value})} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="flex">
                          <Mail className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                          <Input id="email" type="email" value={profileData.email} onChange={e => setProfileData({...profileData, email: e.target.value})} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="flex">
                          <Phone className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                          <Input id="phone" value={profileData.phone} onChange={e => setProfileData({...profileData, phone: e.target.value})} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="flex">
                          <Home className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                          <Input id="address" value={profileData.address} onChange={e => setProfileData({...profileData, address: e.target.value})} />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferences">Preferences</Label>
                      <Textarea id="preferences" placeholder="Special preferences or requirements..." />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button type="submit">Save Changes</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="emergency">
              <Card>
                <form onSubmit={handleEmergencyUpdate}>
                  <CardHeader>
                    <CardTitle>Emergency Contacts</CardTitle>
                    <CardDescription>People to contact in case of emergency.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergency-contact">Primary Contact</Label>
                        <div className="flex">
                          <UserPlus className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                          <Input 
                            id="emergency-contact" 
                            value={profileData.emergencyContact} 
                            onChange={e => setProfileData({...profileData, emergencyContact: e.target.value})} 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergency-phone">Contact Phone</Label>
                        <div className="flex">
                          <Phone className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                          <Input 
                            id="emergency-phone" 
                            value={profileData.emergencyPhone} 
                            onChange={e => setProfileData({...profileData, emergencyPhone: e.target.value})} 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-md bg-blue-50">
                      <div className="flex items-start">
                        <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Emergency Instructions</h4>
                          <p className="text-sm text-gray-600">
                            Provide any specific instructions for emergency responders or caregivers.
                          </p>
                        </div>
                      </div>
                      <Textarea className="mt-4" placeholder="Special instructions in case of emergency..." />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button type="submit">Save Emergency Contacts</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="health">
              <Card>
                <form onSubmit={handleHealthUpdate}>
                  <CardHeader>
                    <CardTitle>Health Information</CardTitle>
                    <CardDescription>Your medical information for emergency situations.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="conditions">Medical Conditions</Label>
                      <div className="flex">
                        <Heart className="h-4 w-4 text-red-500 mr-2 mt-3" />
                        <Textarea 
                          id="conditions" 
                          value={profileData.medicalConditions} 
                          onChange={e => setProfileData({...profileData, medicalConditions: e.target.value})} 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="allergies">Allergies</Label>
                      <Textarea 
                        id="allergies" 
                        value={profileData.allergies} 
                        onChange={e => setProfileData({...profileData, allergies: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="medications">Current Medications</Label>
                      <Textarea 
                        id="medications" 
                        value={profileData.medications} 
                        onChange={e => setProfileData({...profileData, medications: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="history">Additional Medical History</Label>
                      <Textarea id="history" placeholder="Any other relevant medical history..." />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button type="submit">Save Health Information</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
