import { Leaf, Fish, TreePine, LineChart } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';

const features = [
  {
    icon: TreePine,
    title: 'Fast-Growing Trees',
    description: 'Implementation of Paulownia and Eucalyptus cultivation for maximum CO2 absorption',
  },
  {
    icon: Fish,
    title: 'Biological Control',
    description: 'Gambusia fish breeding for natural mosquito control',
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description: 'Sustainable approach to both reforestation and disease control',
  },
  {
    icon: LineChart,
    title: 'Growth Management',
    description: 'Advanced techniques for optimal tree development',
  },
];

const sections = [
  {
    title: 'Tree Cultivation',
    description: 'Implementation of technologies for breeding seedlings and growing Paulownia trees',
    images: [
      {
        url: 'https://i.imgur.com/vcKCbkp.jpg',
        caption: 'Seedling Development',
        description: 'Early stages of Paulownia seedling growth',
      },
      {
        url: 'https://i.imgur.com/GAjNcj7.jpg',
        caption: 'Tree Nursery',
        description: 'Advanced nursery facilities for seedling production',
      },
      {
        url: 'https://i.imgur.com/A3xXp67.jpg',
        caption: 'Mature Trees',
        description: 'Established Paulownia grove showing rapid growth',
      },
    ],
  },
  {
    title: 'Gambusia Program',
    description: 'Creation of fish breeding system for malaria control',
    images: [
      {
        url: 'https://i.imgur.com/8sMnNA5.jpg',
        caption: 'Gambusia Fish',
        description: 'Natural predators of mosquito larvae',
      },
      {
        url: 'https://i.imgur.com/2gsUIOz.jpg',
        caption: 'Breeding Facility',
        description: 'Specialized breeding pools for Gambusia',
      },
    ],
  },
  {
    title: 'Paulownia Development',
    description: 'Rapid growth and development of Paulownia trees',
    images: [
      {
        url: 'https://i.imgur.com/ZYBVPjK.jpg',
        caption: 'Young Paulownia',
        description: 'Early growth stage showing characteristic large leaves',
      },
      {
        url: 'https://i.imgur.com/oTjBzFJ.jpg',
        caption: 'Mature Grove',
        description: 'Established Paulownia forest after several years',
      },
      {
        url: 'https://i.imgur.com/8kYucnU.jpg',
        caption: 'Leaf Development',
        description: 'Distinctive heart-shaped leaves reaching full size',
      },
      {
        url: 'https://i.imgur.com/xXKGXdb.jpg',
        caption: 'Growth Progress',
        description: 'Demonstrating rapid vertical growth',
      },
      {
        url: 'https://i.imgur.com/F2aUFcK.jpg',
        caption: 'Canopy Formation',
        description: 'Dense canopy development for maximum CO2 absorption',
      },
      {
        url: 'https://i.imgur.com/N3Hhmuz.jpg',
        caption: 'Forest Impact',
        description: 'Environmental benefits of established Paulownia forest',
      },
    ],
  },
];

export default function PaulowniaProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHelmet 
        title="Paulownia & Gambusia Project - IRIAS"
        description="Implementation of fast-growing tree cultivation and biological pest control"
      />

      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 mix-blend-multiply" />
          <img
            src="https://i.imgur.com/oTjBzFJ.jpg"
            alt="Paulownia Forest"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Paulownia & Gambusia Project</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Innovative approaches to environmental protection through fast-growing trees and biological pest control
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
                  This comprehensive project combines two innovative approaches to environmental 
                  protection: the cultivation of fast-growing Paulownia trees for CO2 absorption 
                  and the breeding of Gambusia fish for natural mosquito control.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Paulownia trees can grow over 30 metres tall within 7 years, making them one of 
                  the world's fastest-growing trees and excellent carbon sinks. Meanwhile, Gambusia 
                  fish serve as effective biological control agents against malaria-carrying mosquitoes.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://i.imgur.com/ZYBVPjK.jpg"
                  alt="Paulownia Growth"
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tree Characteristics</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Growth rate exceeding 30 metres in 7 years</li>
                <li>Heart-shaped leaves 15-30cm long</li>
                <li>Exceptional CO2 absorption capacity</li>
                <li>Adaptable to various soil conditions</li>
                <li>Minimal maintenance requirements</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gambusia Program</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Natural predator of mosquito larvae</li>
                <li>Self-sustaining populations</li>
                <li>Effective malaria control</li>
                <li>Environmentally friendly solution</li>
                <li>Low maintenance requirements</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}