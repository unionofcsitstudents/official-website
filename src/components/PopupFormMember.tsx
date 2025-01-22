import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

export default function PopupForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const target = e.target as typeof e.target & {
        name: { value: string };
        email: { value: string };
        pnumber: { value: string };
        dob: { value: string };
        
      };

      const URL = `https://emailvalidation.abstractapi.com/v1/?api_key=a66f4a6883a24f63a2bf3793336e16ce&email=${encodeURIComponent(
        target.email.value
      )}`;
      const emailVerification = await axios(URL);
      console.log(emailVerification);
      const validEmail = emailVerification.data;
      console.log(validEmail);
      if (validEmail.deliverability === "UNDELIVERABLE") {
        toast({
          variant: "destructive",
          description: "❌ Email does not exist or is not deliverable.",
        });
        setIsLoading(false);
        return;
      }
      const response = await axios("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        data: JSON.stringify({
          access_key: "29239624-90d6-42a7-9f6c-a064e815f15e",
          from_name: "Membership Form",
          subject: "New Membership Application",
          name: target.name.value,
          email: target.email.value,
          pnumber: target.pnumber.value,
          dob: target.dob.value,
        }),
      });

      const result: { success: boolean; message: string } = response.data;
      if (result.success) {
        target.name.value = "";
        target.email.value = "";
        target.pnumber.value = "";
        target.dob.value = "";

        if (validEmail.deliverability === "DELIVERABLE") {
          toast({
            description: result.message,
          });
        } else {
          toast({
            variant: "destructive",
            description: "❌ Email does not exist or is not deliverable.",
          });
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-colors-customBlue  hover:bg-colors-customBlue/90  text-white">
          Apply for Membership
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Application for Membership</DialogTitle>
          <DialogDescription>
            Join our community and lets work together to make a difference.{" "}
            <br />
            <span className="text-red-700 font-bold">
              NOTE: You will need to pay a Membership Fee of RS.200
            </span>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Full Name
            </label>
            <Input
              required
              id="name"
              placeholder="Full Name"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email Address
            </label>
            <Input
              required
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="pnumber"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Phone Number
            </label>
            <Input
              required
              id="pnumber"
              type="text"
              placeholder="Phone Number"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="pnumber"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Date of Birth
            </label>
            <Input
              required
              id="dob"
              type="date"
              placeholder="Date of Birth"
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-colors-customBlue hover:bg-colors-customBlue/90 text-white"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Apply Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
