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
import { Textarea } from "@/components/ui/textarea";
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
        message: { value: string };
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
          from_name: "Mentorship Form",
          subject: "New Mentorship Application",
          name: target.name.value,
          email: target.email.value,
          pnumber: target.pnumber.value,
          message: target.message.value,
        }),
      });

      const result: { success: boolean; message: string } = response.data;
      if (result.success) {
        target.name.value = "";
        target.email.value = "";
        target.pnumber.value = "";
        target.message.value = "";

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
          Join as a Mentor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Application for Mentorship</DialogTitle>
          <DialogDescription>
          Share your expertise or learn from industry experts through
          our mentorship initiative.
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
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Which program would you like to Mentor for? <br />
              Also mention your faculty and semester !
            </label>
            <Textarea
              required
              id="message"
              placeholder="Message"
              className="min-h-[150px] w-full"
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
