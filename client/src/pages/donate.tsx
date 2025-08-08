import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaQrcode, FaUniversity, FaMobileAlt, FaCopy } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Donate() {
  const [showQR, setShowQR] = useState(false);
  const { toast } = useToast();
  const upiId = "300046175008601@cnrb";

  const copyUPIId = async () => {
    await navigator.clipboard.writeText(upiId);
    toast({
      description: "Copied to clipboard!",
    });
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Donate</h1>
          <p className="text-lg text-gray-600">
            तुमच्या योगदानामुळे आम्हाला आमच्या मुलांसाठी चांगली काळजी आणि संधी
            उपलब्ध होण्यास मदत होते.
          </p>
        </div>

        <div className="space-y-8">
          {/* UPI Section */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FaMobileAlt className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">UPI Payment</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Scan the QR code or use our UPI ID for instant transfer
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <p className="font-medium text-gray-900">UPI ID: {upiId}</p>
                  <Button variant="ghost" size="icon" onClick={copyUPIId}>
                    <FaCopy className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="default"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                  onClick={() => setShowQR(true)}
                >
                  <FaQrcode className="mr-2 h-5 w-5" />
                  Show QR Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* QR Code Dialog */}
          <Dialog open={showQR} onOpenChange={setShowQR}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Scan QR Code</DialogTitle>
              </DialogHeader>
              <div className="flex items-center justify-center p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-md">
                <img
                  src="https://github.com/snehankur-family/website-photos/blob/main/photos/QR/Screenshot%202025-03-17%20at%2012.49.41.png?raw=true"
                  alt="UPI QR Code"
                  className="max-w-full h-auto rounded-lg shadow-md border-2 border-orange-200"
                />
              </div>
            </DialogContent>
          </Dialog>

          {/* Bank Transfer Section */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FaUniversity className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Bank Transfer</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Account Name</p>
                  <p className="text-gray-600">
                    SAMARPAN BAHU UDDESHIYA SEVABHAVI SANSTH
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900">Account Number</p>
                  <p className="text-gray-600">6002101008601</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900">IFSC Code</p>
                  <p className="text-gray-600">CNRB0006002</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900">Bank Name</p>
                  <p className="text-gray-600">Canara Bank</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900">Branch</p>
                  <p className="text-gray-600">Partur</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-gray-600 text-sm">
            <p>For any queries related to donations, please contact us at:</p>
            <p className="font-medium">Samarpan7171@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
