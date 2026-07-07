export type Locale = 'fr' | 'en'

export interface Metric {
  value: string
  label: string
}

export interface ServiceItem {
  title: string
  description: string
  features: string[]
}

export interface StepItem {
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ValueItem {
  title: string
  description: string
}

export interface Dictionary {
  common: {
    navbar: {
      home: string
      services: string
      about: string
      blog: string
      faq: string
      contact: string
    }
    footer: {
      tagline: string
      product: string
      company: string
      legal: string
      services: string
      about: string
      blog: string
      contact: string
      faq: string
      privacy: string
      terms: string
      rights: string
      builtWith: string
    }
    buttons: {
      start: string
      discover: string
      book: string
      send: string
      sending: string
      subscribe: string
      readMore: string
      backToBlog: string
      login: string
      logout: string
      loginGoogle: string
    }
    language: string
    theme: string
  }
  home: {
    hero: {
      eyebrow: string
      title: string
      subtitle: string
      metrics: [Metric, Metric, Metric]
    }
    services: {
      eyebrow: string
      title: string
      subtitle: string
      items: ServiceItem[]
    }
    how: {
      eyebrow: string
      title: string
      subtitle: string
      steps: StepItem[]
    }
    testimonials: {
      eyebrow: string
      title: string
      items: Testimonial[]
    }
    faq: {
      eyebrow: string
      title: string
      items: FaqItem[]
    }
    newsletter: {
      title: string
      subtitle: string
      placeholder: string
      success: string
      error: string
    }
    cta: {
      title: string
      subtitle: string
    }
  }
  services: {
    hero: {
      eyebrow: string
      title: string
      subtitle: string
    }
    list: {
      items: ServiceItem[]
    }
  }
  about: {
    hero: {
      eyebrow: string
      title: string
      subtitle: string
    }
    mission: {
      title: string
      body: string[]
      stats: Metric[]
    }
    values: {
      title: string
      subtitle: string
      items: ValueItem[]
    }
  }
  contact: {
    hero: {
      eyebrow: string
      title: string
      subtitle: string
    }
    form: {
      name: string
      email: string
      company: string
      message: string
      namePlaceholder: string
      emailPlaceholder: string
      companyPlaceholder: string
      messagePlaceholder: string
      success: string
      error: string
    }
    info: {
      emailLabel: string
      emailValue: string
      responseLabel: string
      responseValue: string
      locationLabel: string
      locationValue: string
    }
  }
  faqPage: {
    hero: {
      eyebrow: string
      title: string
      subtitle: string
    }
    items: FaqItem[]
  }
  blog: {
    list: {
      eyebrow: string
      title: string
      subtitle: string
      empty: string
      readTime: string
    }
    article: {
      backToBlog: string
      publishedOn: string
      notFound: string
      notFoundBody: string
      related: string
    }
  }
  auth: {
    login: {
      title: string
      subtitle: string
      email: string
      password: string
      emailPlaceholder: string
      passwordPlaceholder: string
      submit: string
      orContinue: string
      invalid: string
      success: string
    }
    admin: {
      title: string
      subtitle: string
      newPost: string
      editPost: string
      postTitle: string
      slug: string
      excerpt: string
      content: string
      coverImage: string
      tag: string
      published: string
      draft: string
      save: string
      saving: string
      cancel: string
      delete: string
      confirmDelete: string
      empty: string
      created: string
      updated: string
      deleted: string
      status: string
      actions: string
      langTab: string
    }
  }
}
