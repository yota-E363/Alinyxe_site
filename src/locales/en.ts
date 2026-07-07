import type { Dictionary } from '@/lib/i18n/types'

export const en: Dictionary = {
  common: {
    navbar: {
      home: 'Home',
      services: 'AI Services',
      about: 'About',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Custom AI & automation agency',
      product: 'Solutions',
      company: 'Company',
      legal: 'Legal',
      services: 'AI Services',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      faq: 'FAQ',
      privacy: 'Privacy',
      terms: 'Terms of use',
      rights: 'All rights reserved.',
      builtWith: 'Built with a passion for AI.',
    },
    buttons: {
      start: 'Start a project',
      discover: 'Discover our services',
      book: 'Book a call',
      send: 'Send message',
      sending: 'Sending...',
      subscribe: 'Subscribe',
      readMore: 'Read more',
      backToBlog: 'Back to blog',
      login: 'Log in',
      logout: 'Log out',
      loginGoogle: 'Continue with Google',
    },
    language: 'Language',
    theme: 'Theme',
  },
  home: {
    hero: {
      eyebrow: 'AI & automation agency',
      title: 'AI that works for your business',
      subtitle:
        'Alinyxe designs, integrates and automates AI solutions that save your teams time and accelerate growth.',
      metrics: [
        { value: '+40%', label: 'average productivity gain' },
        { value: '24/7', label: 'automated customer support' },
        { value: '<3 months', label: 'return on investment' },
      ],
    },
    services: {
      eyebrow: 'Our services',
      title: 'AI solutions tailored to your business',
      subtitle:
        'From strategy to deployment, we build intelligent systems that fit into your existing tools.',
      items: [
        {
          title: 'AI consulting & strategy',
          description:
            'We identify high-impact use cases and build an AI roadmap aligned with your goals.',
          features: ['Process audit', 'Priority use cases', 'AI roadmap'],
        },
        {
          title: 'Process automation',
          description:
            'We automate repetitive tasks to free up your teams and reduce errors.',
          features: ['Automated workflows', 'Tool integration', 'Dashboards'],
        },
        {
          title: 'Chatbots & AI agents',
          description:
            'Conversational assistants and autonomous agents that handle support and operations 24/7.',
          features: ['24/7 customer support', 'Autonomous agents', 'Multilingual'],
        },
        {
          title: 'Custom integrations',
          description:
            'We connect AI to your CRM, ERP and internal APIs for a seamless experience.',
          features: ['API & CRM', 'Custom models', 'Security & compliance'],
        },
      ],
    },
    how: {
      eyebrow: 'Our method',
      title: 'A 4-step approach',
      subtitle: 'Structured support, from the first workshop to continuous optimization.',
      steps: [
        {
          title: 'Discovery',
          description:
            'We analyze your processes and identify the most profitable automation opportunities.',
        },
        {
          title: 'Prototyping',
          description:
            'We build a working prototype to validate value before any deployment.',
        },
        {
          title: 'Deployment',
          description:
            'We integrate the solution into your tools and train your teams to use it.',
        },
        {
          title: 'Continuous improvement',
          description:
            'We measure results and refine the models to maximize return on investment.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Results that speak for themselves',
      items: [
        {
          quote:
            'Alinyxe automated our tier-1 support. Our response times dropped by 70% in two months.',
          name: 'Camille Laurent',
          role: 'Head of Operations',
          company: 'NovaRetail',
        },
        {
          quote:
            'Their AI agent now handles lead qualification. Our sales team can finally focus on selling.',
          name: 'Thomas Mercier',
          role: 'CEO',
          company: 'Finly',
        },
        {
          quote:
            'A pragmatic, skilled team. The prototype was ready in three weeks, deployed the following month.',
          name: 'Sofia Benali',
          role: 'Head of Product',
          company: 'Healthbridge',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Your questions, answered',
      items: [
        {
          question: 'How long does a typical project take?',
          answer:
            'Most of our projects go from prototype to production in 6 to 12 weeks, depending on complexity and required integrations.',
        },
        {
          question: 'Do I need a lot of data to get started?',
          answer:
            'No. We adapt to your existing data and can start with pre-trained models, then fine-tune over time.',
        },
        {
          question: 'Are your solutions secure and compliant?',
          answer:
            'Yes. We apply security best practices, encrypt sensitive data and comply with GDPR.',
        },
        {
          question: 'Can you integrate with our existing tools?',
          answer:
            'Absolutely. We connect AI to your CRM, ERP, databases and internal APIs through custom integrations.',
        },
        {
          question: 'What happens after deployment?',
          answer:
            'We provide monitoring, maintenance and continuous model improvement to ensure lasting performance.',
        },
      ],
    },
    newsletter: {
      title: 'Get our best AI practices',
      subtitle: 'Practical tips on automation and AI, once a month. No spam.',
      placeholder: 'your@email.com',
      success: 'Thanks! You are now subscribed.',
      error: 'Something went wrong. Please try again.',
    },
    cta: {
      title: "Let's transform your business with AI",
      subtitle:
        'Book a free discovery call. We will identify your best automation opportunities.',
    },
  },
  services: {
    hero: {
      eyebrow: 'AI Services',
      title: 'AI solutions tailored to your business',
      subtitle:
        'We cover the full cycle: strategy, design, integration and continuous optimization.',
    },
    list: {
      items: [
        {
          title: 'AI consulting & strategy',
          description:
            'We assess your AI maturity, prioritize use cases and build a concrete, costed roadmap.',
          features: [
            'Full process audit',
            'High-ROI use case identification',
            'Roadmap and budget estimate',
            'Change management support',
          ],
        },
        {
          title: 'Process automation',
          description:
            'We automate manual, repetitive tasks to cut costs and reduce errors.',
          features: [
            'End-to-end automated workflows',
            'Intelligent document processing',
            'Connection to your business tools',
            'Monitoring dashboards',
          ],
        },
        {
          title: 'Chatbots & AI agents',
          description:
            'We design conversational assistants and autonomous agents that can act on your systems.',
          features: [
            '24/7 multilingual customer support',
            'Task-oriented autonomous agents',
            'Custom knowledge base',
            'Smart escalation to your teams',
          ],
        },
        {
          title: 'Custom integrations',
          description:
            'We build robust integrations between AI and your software ecosystem.',
          features: [
            'Custom APIs & connectors',
            'CRM / ERP integration',
            'Models fine-tuned on your data',
            'Security, GDPR and compliance',
          ],
        },
      ],
    },
  },
  about: {
    hero: {
      eyebrow: 'About',
      title: 'We make AI useful, concrete and profitable',
      subtitle:
        'Alinyxe is an artificial intelligence agency helping companies automate, decide faster and better serve their customers.',
    },
    mission: {
      title: 'Our mission',
      body: [
        'We believe AI should not be reserved for tech giants. Our mission is to make it accessible and actionable for businesses of all sizes.',
        'Instead of selling hype, we deliver measurable systems, integrated into your tools and designed to generate a fast return on investment.',
      ],
      stats: [
        { value: '50+', label: 'projects delivered' },
        { value: '12', label: 'industries served' },
        { value: '98%', label: 'satisfied clients' },
      ],
    },
    values: {
      title: 'Our values',
      subtitle: 'What guides every decision we make.',
      items: [
        {
          title: 'Pragmatism',
          description:
            'We favor real impact over hype. Every project must create measurable value.',
        },
        {
          title: 'Transparency',
          description:
            'No black box. We explain our technical choices and share our results openly.',
        },
        {
          title: 'Excellence',
          description:
            'We care about code quality, system robustness and data security.',
        },
        {
          title: 'Partnership',
          description:
            'We work alongside your teams, not instead of them. Your autonomy is our goal.',
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: "Let's talk about your AI project",
      subtitle: 'Tell us what you need. We get back to you within 24 business hours.',
    },
    form: {
      name: 'Full name',
      email: 'Email',
      company: 'Company',
      message: 'Your message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@company.com',
      companyPlaceholder: 'Your company name',
      messagePlaceholder: 'Describe your project or your need...',
      success: 'Message sent! We will reply shortly.',
      error: 'Something went wrong. Please try again.',
    },
    info: {
      emailLabel: 'Email',
      emailValue: 'contact@alinyxe.online',
      responseLabel: 'Response time',
      responseValue: 'Within 24 business hours',
      locationLabel: 'Availability',
      locationValue: 'Remote, across Europe',
    },
  },
  faqPage: {
    hero: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know before starting a project with Alinyxe.',
    },
    items: [
      {
        question: 'How much does an AI project cost?',
        answer:
          'Cost depends on complexity and scope. We offer a free initial audit to give you a clear, costed estimate.',
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Most of our projects go from prototype to production in 6 to 12 weeks.',
      },
      {
        question: 'Do I need a lot of data to get started?',
        answer:
          'No. We often start with pre-trained models and fine-tune later with your data.',
      },
      {
        question: 'Are your solutions GDPR compliant?',
        answer:
          'Yes. Data protection is at the heart of our approach: encryption, minimization and compliant hosting.',
      },
      {
        question: 'Do you offer maintenance after deployment?',
        answer:
          'Yes, we offer support contracts including monitoring, updates and continuous model improvement.',
      },
      {
        question: 'Do you work with SMEs?',
        answer:
          'Absolutely. We support startups, SMEs and large accounts alike.',
      },
    ],
  },
  blog: {
    list: {
      eyebrow: 'Blog',
      title: 'AI ideas, guides and field reports',
      subtitle:
        'Our best practices on automation, AI agents and business transformation.',
      empty: 'No articles published yet. Check back soon!',
      readTime: 'min read',
    },
    article: {
      backToBlog: 'Back to blog',
      publishedOn: 'Published on',
      notFound: 'Article not found',
      notFoundBody: 'This article does not exist or has been moved.',
      related: 'Read also',
    },
  },
  auth: {
    login: {
      title: 'Admin area',
      subtitle: 'Log in to manage the site content.',
      email: 'Email',
      password: 'Password',
      emailPlaceholder: 'admin@alinyxe.online',
      passwordPlaceholder: '••••••••',
      submit: 'Log in',
      orContinue: 'or continue with',
      invalid: 'Invalid credentials.',
      success: 'Logged in successfully.',
    },
    admin: {
      title: 'Dashboard',
      subtitle: 'Manage blog articles (FR & EN).',
      newPost: 'New article',
      editPost: 'Edit article',
      postTitle: 'Title',
      slug: 'Slug (URL)',
      excerpt: 'Excerpt',
      content: 'Content',
      coverImage: 'Cover image (URL)',
      tag: 'Category',
      published: 'Published',
      draft: 'Draft',
      save: 'Save',
      saving: 'Saving...',
      cancel: 'Cancel',
      delete: 'Delete',
      confirmDelete: 'Delete this article?',
      empty: 'No articles. Create the first one!',
      created: 'Article created.',
      updated: 'Article updated.',
      deleted: 'Article deleted.',
      status: 'Status',
      actions: 'Actions',
      langTab: 'Content language',
    },
  },
}
