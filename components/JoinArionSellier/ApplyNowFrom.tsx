"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// ✅ Define schema with proper validation messages
const formSchema = z.object({
  username: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastname: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phonenumber: z.string().min(8, { message: "Phone number must be valid." }),
  town: z.string().min(2, { message: "Town must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  experience: z.string().min(2, { message: "Experience field cannot be empty." }),
  message: z.string().min(2, { message: "Message must be at least 2 characters." }),
})

export function ApplyNowForm() {
  // ✅ Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      lastname: "",
      email: "",
      phonenumber: "",
      town: "",
      state: "",
      experience: "",
      message: "",
    },
  })

  // ✅ Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
   
    <div>
        <div className="pt-[60px] pb-[48px]">
          <h1 className="text-[#1F274B] text-center  text-[48px] font-extrabold leading-[100%] tracking-[0.96px] capitalize">
 Apply Now!
</h1>

        </div>
        <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="maxContainer"
      >
        {/* ✅ Row 1: First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-[16px]">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="bg-[#F8FAFB]">
                <FormControl  className="text-[#696E86]  text-[14px] font-normal leading-[100%] uppercase">
                  <Input placeholder="FIRST NAME" {...field}  className="text-[#696E86]  text-[14px] font-normal leading-[100%] uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="bg-[#F8FAFB]">
                <FormControl >
                  <Input placeholder="LAST NAME" {...field} className="text-[#696E86]  text-[14px] font-normal leading-[100%] uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ✅ Row 2: Email + Phone */}
        <div className="grid-row  grid-cols-1 md:grid-cols-2 gap-6 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="pb-[16px]">
                <FormControl className="bg-[#F8FAFB]">
                  <Input placeholder="EMAIL" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem className="pb-[16px]">
                <FormControl className="bg-[#F8FAFB]">
                  <Input placeholder="PHONE NUMBER" {...field} className="text-[#696E86]  text-[14px] font-normal leading-[100%] uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ✅ Row 3: Town + State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-[16px]">
          <FormField
            control={form.control}
            name="town"
            render={({ field }) => (
              <FormItem>
                <FormControl className="bg-[#F8FAFB]">
                  <Input placeholder="TOWN" {...field} className="text-[#696E86]  text-[14px] font-normal leading-[100%] uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormControl className="bg-[#F8FAFB]">
                  <Input placeholder="STATE" {...field} className="text-[#696E86]  text-[14px] font-normal leading-[100%] uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ✅ Experience */}
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem className="pb-[16px]">
              <FormControl className="bg-[#F8FAFB]">
                <Input placeholder="EXPRIENCE" {...field} className="text-[#696E86]  text-[14px] font-normal leading-[100%] uppercase"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="pb-[16px]">
              <FormControl className="bg-[#F8FAFB]">
                <Textarea placeholder="MASSAGE" {...field} className="min-h-[120px]"  className="text-[#696E86]  text-[14px] font-normal leading-[100%] uppercase" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center pb-[16px]">
          <Button type="submit" className="w-full md:w-auto px-10">
            Submit
          </Button>
        </div>
      </form>
    </Form>
    </div>
  )
}
