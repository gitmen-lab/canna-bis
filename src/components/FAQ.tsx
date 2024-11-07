import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How accurate is the Cannabis Yield Calculator?",
      answer: "The calculator provides estimates based on average yields for different experience levels. Actual yields may vary based on growing conditions, genetics, and cultivation methods."
    },
    {
      question: "What factors affect cannabis yield?",
      answer: "Multiple factors influence yield including lighting, nutrients, growing medium, temperature, humidity, plant genetics, and grower experience level."
    },
    {
      question: "Why does experience level matter?",
      answer: "Experience level affects yield as skilled growers typically achieve better results through optimal plant care, problem prevention, and efficient growing techniques."
    },
    {
      question: "How can I improve my yields?",
      answer: "Improve yields by learning proper techniques, maintaining optimal growing conditions, using quality genetics, and gaining hands-on experience through practice."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}