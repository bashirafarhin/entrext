import React from 'react'
import Faq from '../../../components/FaqSection'

const faq = [
  {
    question: "What is the AI Product Partnership Model?",
    answer:
      "This is an equity-based program where we partner with:\n\n" +
      "🔹 Non-tech founders with AI product ideas but no technical skills.\n" +
      "🔹 Content creators who want to be the face of an AI product.\n" +
      "🔹 Community users who are interested in using or testing our AI products.\n\n" +
      "Instead of charging upfront fees, we take 30-40% equity for full product development or 20% equity if you're a content creator helping grow the product.",
  },
  {
    question: "What kind of AI products do you develop?",
    answer:
      "We focus on AI-driven tools that have market potential, including:\n\n" +
      "✅ AI-powered content creation tools\n" +
      "✅ AI-driven automation platforms\n" +
      "✅ AI SaaS (Software as a Service) products\n" +
      "✅ AI marketing and analytics tools\n" +
      "✅ AI chatbots and virtual assistants",
  },
  {
    question: "Who can apply for this partnership?",
    answer:
      "✅ Non-tech founders who have a great AI product idea but no technical expertise.\n" +
      "✅ Content creators who want to promote and scale an AI product.\n" +
      "✅ Community members who want early access to cutting-edge AI products.",
  },
  {
    question: "What’s the difference between the Non-Tech Founder Plan and the Content Creator Plan?",
    answer:
      "Non-Tech Founder Plan (30-40% Equity) → We build your entire AI product from scratch, handling development, design, and strategy.\n\n" +
      "Content Creator Plan (5% Equity) → You become the face of an AI product, creating content to grow its user base.",
  },
  {
    question: "How can community users get involved?",
    answer:
      "If you're not a founder or content creator but still interested in AI products, you can:\n\n" +
      "🔹 Test beta versions of our AI products before public launch.\n" +
      "🔹 Provide feedback on product features and improvements.\n" +
      "🔹 Join our community to stay updated on upcoming AI launches.",
  },
  {
    question: "Do I need to invest any money?",
    answer:
      "For Non-Tech Founders: No upfront cost, but if the product requires fixed expenses (APIs, cloud hosting, licenses), you need to cover those.\n\n" +
      "For Content Creators & Community Users: No financial investment required.",
  },
  {
    question: "How long does it take to build an AI product?",
    answer:
      "We typically launch an MVP (Minimum Viable Product) within 2-4 months, depending on the complexity.",
  },
  {
    question: "Can I bring my own team?",
    answer:
      "Yes! If you have developers, designers, or marketers, we can collaborate while still leading AI development.",
  },
  {
    question: "What happens if I raise funding?",
    answer:
      "If you're raising investment, you must inform us so we can align our strategy with your funding goals.",
  },
  {
    question: "What happens if my AI product doesn’t succeed?",
    answer:
      "We’re committed to long-term success. If the product doesn’t perform well, we’ll work on iterations, pivot strategies, or explore new opportunities for monetization.",
  },
];


const page = () => {
  return (
    <div className='w-[70vw] mx-auto'>
        <Faq faq={faq} />
    </div>
  )
}

export default page

