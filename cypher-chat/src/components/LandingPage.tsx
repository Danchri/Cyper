import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Eye, EyeOff, Lock, Zap, Users, CheckCircle, Star, Menu, X } from 'lucide-react'
import PhoneSimulator from './PhoneSimulator'
import BackToTop from './BackToTop'

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Dual-Layer Security",
      description: "Your real messages are encrypted while decoy messages provide plausible deniability."
    },
    {
      icon: <Eye className="w-8 h-8 text-primary-600" />,
      title: "Decoy Messages",
      description: "Show fake conversations to anyone inspecting your device or chat history."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary-600" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption ensures only intended recipients can read your real messages."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "Instant Messaging",
      description: "Real-time communication with seamless user experience and lightning-fast delivery."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Group Chats",
      description: "Secure group conversations with individual decoy layers for each participant."
    },
    {
      icon: <EyeOff className="w-8 h-8 text-primary-600" />,
      title: "Stealth Mode",
      description: "Emergency wipe and fake unlock modes for maximum protection under duress."
    }
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "Up to 100 messages/month",
        "Basic decoy messages",
        "Standard encryption",
        "2 chat rooms"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      features: [
        "Unlimited messages",
        "Advanced decoy generator",
        "Military-grade encryption",
        "Unlimited chat rooms",
        "Group chats",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "/month",
      features: [
        "Everything in Pro",
        "Custom decoy themes",
        "Advanced admin controls",
        "Compliance reporting",
        "24/7 dedicated support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Journalist",
      content: "CypherChat has revolutionized how I communicate with sources. The decoy layer gives me peace of mind.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Privacy Advocate",
      content: "Finally, a messaging app that understands the importance of plausible deniability. Brilliant concept!",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Researcher",
      content: "The dual-layer security is exactly what our team needed for sensitive research communications.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CypherChat</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <Link to="/demo" className="btn-primary">Try Demo</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#features" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <Link to="/demo" className="btn-primary block text-center mx-3 mt-4">Try Demo</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Only Chat App with
                <span className="gradient-text block">Plausible Deniability</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Send encrypted messages while showing completely different decoy conversations.
                Perfect for journalists, activists, and anyone who values true privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/demo" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  Try Free Demo
                </Link>
                <button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  Watch Demo Video
                </button>
              </div>

              {/* Features Preview */}
              <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div className="flex items-center justify-center lg:justify-start">
                  <Shield className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <EyeOff className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Decoy Messages</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Lock className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Biometric Security</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Zap className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Emergency Wipe</span>
                </div>
              </div>
            </div>

            {/* Right Column - Phone Simulator */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 lg:pl-12 xl:pl-20 2xl:pl-32">
              <div className="w-full max-w-sm lg:max-w-none lg:ml-32 xl:ml-48 2xl:ml-64">
                <PhoneSimulator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience CypherChat on Mobile
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our Android app provides the same revolutionary dual-layer security in a familiar,
              intuitive mobile interface. Switch between decoy and real messages with a single tap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Phone Demo */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-sm">
                <PhoneSimulator />
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Seamless Mode Switching
                  </h3>
                  <p className="text-gray-600">
                    Toggle between decoy and real message views instantly. Your chat history
                    shows different conversations depending on your authentication status.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Biometric Authentication
                  </h3>
                  <p className="text-gray-600">
                    Use fingerprint, face unlock, or PIN to access your real messages.
                    Without authentication, only decoy conversations are visible.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Intelligent Decoy Generation
                  </h3>
                  <p className="text-gray-600">
                    Our AI automatically generates realistic decoy messages that match your
                    conversation style, or you can create custom decoys manually.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <EyeOff className="w-6 h-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Emergency Protection
                  </h3>
                  <p className="text-gray-600">
                    Panic gestures and emergency wipe features ensure your sensitive
                    communications remain protected even under duress.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/demo" className="btn-primary inline-flex items-center">
                  Try Interactive Demo
                  <Shield className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Security Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              CypherChat combines cutting-edge encryption with innovative decoy technology
              to provide unprecedented privacy protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm card-hover">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to ultimate privacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Type Your Message</h3>
              <p className="text-gray-600">Write your real message and optionally add a decoy message for your chat history.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Encrypt & Send</h3>
              <p className="text-gray-600">Your real message is encrypted and sent, while the decoy is stored locally.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Communication</h3>
              <p className="text-gray-600">Recipients decrypt your real message while your device shows only the decoy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Privacy Professionals
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your privacy needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-primary-600 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.cta === 'Contact Sales' ? (
                  <Link
                    to="/contact-sales"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block ${
                      plan.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
                    {plan.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Communications?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of users who trust CypherChat for their most sensitive conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Free Trial
            </Link>
            <Link
              to="/contact-sales"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">CypherChat</span>
              </div>
              <p className="text-gray-400 mb-6">
                The most secure messaging platform with revolutionary decoy technology.
              </p>

              {/* App Store Buttons */}
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors w-fit"
                >
                  <div className="mr-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors w-fit"
                >
                  <div className="mr-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>

                <p className="text-xs text-gray-500 mt-2">
                  Coming soon to mobile devices
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CypherChat. Created by DanielSDG. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}

export default LandingPage
