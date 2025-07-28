import { ShieldCheckIcon, BeakerIcon, WrenchScrewdriverIcon, ClockIcon, TruckIcon, CheckIcon, ExclamationTriangleIcon, SunIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Equipment Rentals - All Seasons Foam Coatings & Services',
  description: 'Reliable rental equipment for oil and gas operations. Drive-over containment, vacuum trailers, safety restraints, and more. Ready when you are.',
}

export default function RentalsPage() {
  const rentalEquipment = [
    {
      title: "Drive-Over Spill Containment Systems",
      description: "Heavy-duty containment solutions for trucks and equipment staging.",
      icon: ShieldCheckIcon,
      features: ["Heavy-duty construction", "Drive-over capability", "Equipment staging", "Spill prevention"]
    },
    {
      title: "Safety Restraints", 
      description: "Engineered red iron restraints to secure tanks and piping on location.",
      icon: WrenchScrewdriverIcon,
      features: ["Red iron construction", "Tank security", "Piping restraints", "Engineered design"]
    },
    {
      title: "Vacuum Trailers",
      description: "High-capacity trailers for fluid recovery, transfer, and cleanup.",
      icon: BeakerIcon,
      features: ["High-capacity systems", "Fluid recovery", "Transfer operations", "Cleanup support"]
    },
    {
      title: "Cooling Trailers",
      description: "Climate-controlled break areas to keep crews safe during high heat.",
      icon: SunIcon,
      features: ["Climate control", "Crew safety", "Heat protection", "Mobile comfort"]
    },
    {
      title: "Light Tower Trailers",
      description: "Portable lighting solutions for night work or low-light sites.",
      icon: LightBulbIcon,
      features: ["Portable lighting", "Night operations", "Site illumination", "Safety enhancement"]
    },
    {
      title: "Forklifts",
      description: "Versatile lift solutions for material handling on remote or rugged terrain.",
      icon: TruckIcon,
      features: ["Material handling", "Rugged terrain", "Remote locations", "Versatile operation"]
    },
    {
      title: "Port-a-John Trailers",
      description: "Mobile restroom trailers to support extended field operations.",
      icon: ClockIcon,
      features: ["Mobile facilities", "Field operations", "Extended support", "Crew comfort"]
    }
  ];

  const rentalBenefits = [
    {
      title: "Ready to Work",
      description: "All equipment is maintained to the highest standards and delivered job-ready.",
      icon: CheckIcon
    },
    {
      title: "Fast Delivery",
      description: "Quick mobilization to get equipment on-site when you need it most.",
      icon: TruckIcon
    },
    {
      title: "Reliable Support",
      description: "Ongoing maintenance and support throughout your rental period.",
      icon: WrenchScrewdriverIcon
    },
    {
      title: "Cost Effective",
      description: "Flexible rental terms that work with your project timeline and budget.",
      icon: ShieldCheckIcon
    }
  ];

  const industries = [
    "Oil & Gas Production",
    "Pipeline Construction", 
    "Refinery Operations",
    "Chemical Processing",
    "Emergency Response",
    "Environmental Cleanup"
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
                Reliable Rental Equipment – Ready When You Are
              </h1>

              <p className="text-xl mb-8 leading-relaxed">
                All Seasons Foam Coatings & Services offers a full line of rental equipment to support your operations across the oil and gas industry. Whether you&apos;re managing containment, fluid transfer, or jobsite logistics, we have the gear to keep your project moving—safely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-black transition-all duration-300 shadow-lg">
                    Check Availability
                  </button>
                </Link>
                <a href="tel:+14324385806">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
                    Call 432-438-5806
                  </button>
                </a>
              </div>
              </div>
              <div className="relative min-h-[500px]">
                <Image
                  src="/images/restraint-1.jpg"
                  alt="Fleet of rental equipment on job site - vacuum trailers, containment systems, light towers"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-12 border-t-8 border-b-8 border-blue-800">
        <div className="max-w-10xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-4xl font-semibold text-white leading-relaxed">
            Need it fast? Need it on-site? Count on All Seasons to deliver.
          </h2>
        </div>
      </section>

      {/* Rental Equipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-600 mb-6">Available Rental Equipment</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              All rentals are maintained to the highest standards and delivered ready to work—so you can stay focused on production, not equipment issues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalEquipment.map((equipment, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-blue-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-xl">
                    <equipment.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{equipment.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {equipment.description}
                </p>
                <div className="space-y-2">
                  {equipment.features.map((feature, featureIndex) => (
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

      {/* Equipment Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-600 mb-6">Equipment in Action</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See our rental equipment performing in real oilfield conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative rounded-xl h-48 mb-6 overflow-hidden">
                <Image
                  src="/images/drive-over.jpg"
                  alt="Drive-over containment with trucks"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drive-Over Containment</h3>
              <p className="text-gray-600">Heavy equipment staging and spill prevention</p>
            </div>
            
            <div className="text-center group">
              <div className="relative rounded-xl h-48 mb-6 overflow-hidden">
                <Image
                  src="/images/vacuum-trailer.jpg"
                  alt="Vacuum trailer in operation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vacuum Operations</h3>
              <p className="text-gray-600">Fluid recovery and transfer services</p>
            </div>
            
            <div className="text-center group">
              <div className="relative rounded-xl h-48 mb-6 overflow-hidden">
                <Image
                  src="/images/Cooldown-2.jpg"
                  alt="Climate-controlled cooling unit for crew comfort"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cooling Units</h3>
              <p className="text-gray-600">Climate-controlled crew comfort and safety</p>
            </div>
            
            <div className="text-center group">
              <div className="relative rounded-xl h-48 mb-6 overflow-hidden">
                <Image
                  src="/images/restraint-5.jpg"
                  alt="Safety restraints securing equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Restraints</h3>
              <p className="text-gray-600">Secure tank and piping installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Rentals Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Why Choose All Seasons Rentals?</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              20+ years of experience means we understand what equipment works best in oilfield conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalBenefits.map((benefit, index) => (
              <div key={index} className="text-center group h-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-xl inline-block mb-6 mx-auto">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed flex-grow">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-600 mb-8 leading-tight">Simple Rental Process</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Getting the equipment you need is straightforward. Our team handles the logistics so you can focus on your operation.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Call or Request Quote</h4>
                    <p className="text-gray-700">Tell us what you need and when you need it</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">We Deliver & Set Up</h4>
                    <p className="text-gray-700">Equipment arrives ready to work, professionally set up</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Ongoing Support</h4>
                    <p className="text-gray-700">Maintenance and support throughout your rental period</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 mb-4 rounded-2xl overflow-hidden">
                <Image
                  src="/images/restraint-2.jpg"
                  alt="Equipment delivery truck arriving on job site"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/restraint-4.jpg"
            alt="Equipment yard with various rental equipment ready for deployment"
            fill
            className="object-cover"
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/40 to-blue-900/40 z-10" />
        
        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Need Equipment? We&apos;ve Got You Covered.</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            From containment to cleanup, lighting to logistics—get the rental equipment you need to keep your operation running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Check Equipement Availability
                </button>
              </Link>
            </div>
            <a href="tel:+14324385806">
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
                Call 432-438-5806
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}