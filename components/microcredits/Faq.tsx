import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../ui/accordion";

export default function Faq() {
  return (
    <div className="bg-white rounded-xl p-5 space-y-10">
      <div className="font-aeroport text-2xl lg:text-3xl">
        Что важно знать о микрокредитах
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-aeroportRegular text-sm lg:text-xl ">
            Something about the product
          </AccordionTrigger>
          <AccordionContent>gdaffd</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-aeroportRegular text-sm lg:text-xl ">
            Something about the product
          </AccordionTrigger>
          <AccordionContent>gdaffd</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-aeroportRegular text-sm lg:text-xl ">
            Something about the product
          </AccordionTrigger>
          <AccordionContent>gdaffd</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-aeroportRegular text-sm lg:text-xl ">
            Something about the product
          </AccordionTrigger>
          <AccordionContent>gdaffd</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-aeroportRegular text-sm lg:text-xl ">
            Something about the product
          </AccordionTrigger>
          <AccordionContent>gdaffd</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
