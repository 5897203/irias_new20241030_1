import { Sun, Wind, Battery, LineChart } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';

const features = [
  {
    icon: Sun,
    title: 'Solar Concentrators',
    description: 'Advanced solar energy concentration technology for efficient power generation',
  },
  {
    icon: Wind,
    title: 'Wind Generation',
    description: 'Modern wind turbines for sustainable energy production',
  },
  {
    icon: Battery,
    title: 'Energy Storage',
    description: 'Mobile energy accumulation systems with up to 5 MW capacity',
  },
  {
    icon: LineChart,
    title: 'Performance Monitoring',
    description: 'Real-time monitoring and optimization of energy systems',
  },
];

const sections = [
  {
    title: 'Solar Energy Concentrators',
    description: 'Implementation of innovative solar concentration technology',
    images: [
      {
        url: 'https://i.imgur.com/JJJxpCz.jpg',
        caption: 'Solar Array Installation',
        description: 'Large-scale solar concentrator deployment',
      },
      {
        url: 'https://i.imgur.com/1k9cKm6.jpg',
        caption: 'Concentrator Technology',
        description: 'Advanced solar energy concentration systems',
      },
      {
        url: 'https://i.imgur.com/YIs3P3Y.jpg',
        caption: 'Solar Field',
        description: 'Extensive solar energy collection facility',
      },
    ],
  },
  {
    title: 'Wind Energy Systems',
    description: 'Modern wind turbine installations for renewable energy generation',
    images: [
      {
        url: 'https://i.imgur.com/JZgkJbE.jpg',
        caption: 'Wind Farm',
        description: 'Large-scale wind turbine installation',
      },
      {
        url: 'https://i.imgur.com/9wa3zZw.jpg',
        caption: 'Turbine Technology',
        description: 'Advanced wind energy generation systems',
      },
    ],
  },
  {
    title: 'Energy Storage Solutions',
    description: 'Mobile energy accumulation and storage systems',
    images: [
      {
        url: 'https://i.imgur.com/Eq0VvHp.jpg',
        caption: 'Storage Facility',
        description: '5 MW capacity energy storage system',
      },
    ],
  },
];

export default function GreenEnergyProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHelmet 
        title="Alternative Green Energy - IRIAS"
        description="Implementation of innovative solar and wind energy technologies with advanced storage solutions"
      />

      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 mix-blend-multiply" />
          <img
            src="https://i.imgur.com/JJJxpCz.jpg"
            alt="Solar Energy Installation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Alternative Green Energy</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Innovative technologies in solar concentration, wind generation, and energy storage
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12">
          {/* Overview */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Alternative Green Energy project combines cutting-edge solar and wind energy 
                  technologies with advanced storage solutions. The initiative focuses on developing 
                  sustainable energy systems that maximize efficiency and reliability.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The project features innovative solar concentrators, modern wind generators, and 
                  mobile energy storage systems capable of handling up to 5 MW of power, creating 
                  a comprehensive renewable energy solution.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://i.imgur.com/1k9cKm6.jpg"
                  alt="Solar Technology"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>

          {/* Project Sections */}
          {sections.map((section, index) => (
            <section key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 mb-8">{section.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden aspect-video">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{image.caption}</h3>
                      <p className="text-sm text-gray-600">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Technical Details */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Solar Technology</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Advanced solar concentration systems</li>
                <li>High-efficiency energy conversion</li>
                <li>Automated tracking and positioning</li>
                <li>Scalable installation design</li>
                <li>Minimal environmental impact</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Energy Storage</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>5 MW storage capacity</li>
                <li>Mobile deployment capability</li>
                <li>Advanced battery technology</li>
                <li>Rapid charge/discharge cycles</li>
                <li>Integrated monitoring systems</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}