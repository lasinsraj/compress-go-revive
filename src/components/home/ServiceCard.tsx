
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  buttonText?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  buttonText = "Compress Now" 
}: ServiceCardProps) => {
  return (
    <Link to={link} className="block transform transition-transform hover:translate-y-[-5px]">
      <Card className="service-card hover:shadow-xl bg-gradient-to-br from-white to-brand-light/50">
        <CardHeader className="pb-2">
          <div className="flex items-center">
            <div className="rounded-full bg-brand-red/10 p-3 mr-3">
              <Icon className="service-icon w-10 h-10" />
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            {description}
          </p>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" className="text-brand-red">
              {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
