"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("Login data:", data);

    // TODO: Replace with real authentication check
    if (data.domain && data.password) {
      router.push("/landing"); // Redirect to landing page
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] p-4">
      <Card className="w-full max-w-md bg-white rounded-xl shadow-lg border-none">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] p-4 rounded-full shadow-md">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            SSL Certificate Manager
          </CardTitle>
          <p className="text-gray-500 text-sm">
            Sign in to access the certificate management portal
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="domain">Domain ID</Label>
              <Input
                id="domain"
                placeholder="Enter your domain ID"
                className="mt-1"
                {...register("domain")}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#4f46e5] text-white font-semibold hover:opacity-90"
            >
              Sign In
            </Button>
            <p className="text-center text-xs text-gray-500">
              Demo credentials: Any domain ID and password will work
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
