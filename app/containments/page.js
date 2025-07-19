import { ShieldCheckIcon, BeakerIcon, WrenchScrewdriverIcon, ClockIcon, TruckIcon, CheckIcon, ExclamationTriangleIcon, CogIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export const metadata = {
  title: 'Secondary Containment Solutions - All Seasons Foam Coatings & Services',
  description: 'Engineered secondary containment systems for oil and gas operations. SPCC and EPA compliant solutions with 20+ years of field experience.',
}

export default function ContainmentPage() {
  const containmentServices = [
    {
      title: "Custom Containment Design",
      description: "Engineered systems tailored to your facility's layout, capacity requirements, and regulatory needs.",
      icon: CogIcon,
      features: ["Site-specific engineering", "Capacity calculations", "Regulatory compliance", "Layout optimization"]
    },
    {
      title: "Spray-Applied Liner Systems", 
      description: "Seamless, chemical-resistant barriers using high-performance polyurea coatings.",
      icon: BeakerIcon,
      features: ["Seamless application", "Chemical resistance", "Rapid installation", "Superior adhesion"]
    },
    {
      title: "Containment Repairs & Upgrades",
      description: "Fast-track restoration of damaged or non-compliant containment to avoid downtime and fines.",
      icon: WrenchScrewdriverIcon,
      features: ["Emergency repairs", "Compliance upgrades", "Minimal downtime", "Cost-effective solutions"]
    },
    {
      title: "Tank Battery Containment",
      description: "Complete secondary containment systems for production and storage tank batteries.",
      icon: ShieldCheckIcon,
      features: ["Tank battery systems", "Multi-tank layouts", "Production containment", "Storage protection"]
    },
    {
      title: "Wellhead Containment",
      description: "Specialized containment solutions for wellhead and production equipment areas.",
      icon: TruckIcon,
      features: ["Wellhead protection", "Equipment containment", "Access maintenance", "Spill prevention"]
    },
    {
      title: "Chemical Storage Areas",
      description: "Robust containment systems designed for chemical storage and handling facilities.",
      icon: ExclamationTriangleIcon,
      features: ["Chemical compatibility", "High-capacity systems", "Safety compliance", "Environmental protection"]
    }
  ];

  const complianceStandards = [
    "SPCC (Spill Prevention, Control, and Countermeasure)",
    "EPA Environmental Protection Requirements", 
    "State and Local Environmental Regulations",
    "API 650 and API 653 Standards",
    "OSHA Safety Requirements",
    "DOT Transportation Regulations"
  ];

  const keyBenefits = [
    {
      title: "Environmental Protection",
      description: "Prevent soil and groundwater contamination with engineered barrier systems.",
      icon: ShieldCheckIcon
    },
    {
      title: "Regulatory Compliance",
      description: "Meet SPCC, EPA, and local requirements to avoid fines and operational shutdowns.",
      icon: CheckIcon
    },
    {
      title: "Asset Protection",
      description: "Safeguard valuable equipment and infrastructure from spill-related damage.",
      icon: WrenchScrewdriverIcon
    },
    {
      title: "Operational Continuity",
      description: "Maintain operations with reliable containment that stands up to daily use.",
      icon: ClockIcon
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Engineered Secondary Containment Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                All Seasons Foam Coatings & Services is a trusted partner in secondary containment construction for the oil and gas industry. With decades of field experience, we build durable, compliant containment systems that protect your site, your team, and the environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-black transition-all duration-300 shadow-lg">
                  Request Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
                  Call 940-458-9078
                </button>
              </div>
            </div>
            <div className="relative min-h-[500px]">
              <div className="bg-gray-300 rounded-2xl h-full flex items-center justify-center text-gray-600 text-lg font-semibold">
                [Image: Aerial view of completed secondary containment system with tanks]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-12 border-t-8 border-b-8 border-blue-800">
        <div className="max-w-10xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-4xl font-semibold text-white leading-relaxed">
            Protect your site. Stay in compliance. Trust All Seasons for secondary containment that lasts.
          </h2>
        </div>
      </section>

      {/* Containment Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-600 mb-6">Our Turnkey Containment Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From design to installation, we deliver complete containment solutions that meet your operational needs and regulatory requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {containmentServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-blue-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-xl">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-600 mb-6">Containment Applications</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Whether it&apos;s for tanks, batteries, wellheads, or chemical storage areas, we deliver containment systems that meet SPCC and EPA standards—and stand up to the elements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gray-300 rounded-xl h-48 mb-6 flex items-center justify-center text-gray-600 text-sm font-semibold group-hover:bg-gray-400 transition-colors">
                [Image: Tank battery containment system]
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tank Batteries</h3>
              <p className="text-gray-600">Production and storage tank containment systems</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-300 rounded-xl h-48 mb-6 flex items-center justify-center text-gray-600 text-sm font-semibold group-hover:bg-gray-400 transition-colors">
                [Image: Wellhead containment area]
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wellheads</h3>
              <p className="text-gray-600">Wellhead and production equipment protection</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-300 rounded-xl h-48 mb-6 flex items-center justify-center text-gray-600 text-sm font-semibold group-hover:bg-gray-400 transition-colors">
                [Image: Chemical storage containment]
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chemical Storage</h3>
              <p className="text-gray-600">Chemical handling and storage area containment</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-300 rounded-xl h-48 mb-6 flex items-center justify-center text-gray-600 text-sm font-semibold group-hover:bg-gray-400 transition-colors">
                [Image: Loading rack containment]
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Loading Areas</h3>
              <p className="text-gray-600">Truck loading and transfer point containment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-600 mb-8 leading-tight">Built to Code. Built to Last.</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our containment systems are engineered to meet or exceed all applicable regulations and industry standards. We stay current with evolving requirements to ensure your facility remains compliant.
              </p>
              <div className="space-y-4">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-600 shadow-sm">
                    <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center text-gray-600 text-lg font-semibold mb-4">
                [Image: Compliance documentation and containment system]
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Compliance Assurance</h3>
                <p className="text-green-100 leading-relaxed">
                  Every containment system we build comes with documentation and certifications to support your regulatory compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Why Secondary Containment Matters</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Proper containment isn&apos;t just about compliance—it&apos;s about protecting your investment, your reputation, and the environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-xl inline-block mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center text-gray-600 text-lg font-semibold mb-4">
                [Image: Containment construction process timeline]
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-300 rounded-xl h-32 flex items-center justify-center text-gray-600 text-sm font-semibold">
                  [Before: Site prep]
                </div>
                <div className="bg-gray-300 rounded-xl h-32 flex items-center justify-center text-gray-600 text-sm font-semibold">
                  [After: Completed system]
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-600 mb-8 leading-tight">Turnkey Installation Process</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                From initial site assessment to final inspection, we handle every aspect of your containment project with the expertise that comes from 20+ years in the field.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Site Assessment & Design</h4>
                    <p className="text-gray-700">Complete evaluation and custom engineering for your specific requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Professional Installation</h4>
                    <p className="text-gray-700">Expert construction using proven materials and techniques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Testing & Documentation</h4>
                    <p className="text-gray-700">Comprehensive testing and compliance documentation delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-8 leading-tight">Emergency Containment Repairs</h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Containment failures can&apos;t wait. Our emergency response teams are ready to mobilize quickly for urgent repairs and temporary containment solutions to keep your operations running and compliant.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <CheckIcon className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-white text-lg">24/7 emergency response capability</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <CheckIcon className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-white text-lg">Rapid mobilization nationwide</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <CheckIcon className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-white text-lg">Temporary and permanent solutions</span>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Emergency Hotline: 940-458-9078
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center text-gray-600 text-lg font-semibold">
                [Image: Emergency containment repair in progress]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="bg-gray-400 h-full w-full flex items-center justify-center text-gray-600 text-xl font-semibold">
            [Background Image: Wide shot of completed containment facility at sunset]
          </div>
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/40 to-blue-900/40 z-10" />
        
        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for Reliable Containment?</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t let containment issues put your operations at risk. Contact All Seasons today for engineered solutions that protect your assets and keep you compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Request Site Assessment
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
              Call 940-458-9078
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}