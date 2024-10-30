import { Droplets, Construction, Database, LineChart } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';

const features = [
  {
    icon: Droplets,
    title: 'Hydrological Studies',
    description: 'Comprehensive analysis of water resources and soil conditions',
  },
  {
    icon: Construction,
    title: 'Infrastructure Development',
    description: 'Construction of water intake structures and irrigation systems',
  },
  {
    icon: Database,
    title: 'Data Collection',
    description: 'Gathering and analysis of environmental and geological data',
  },
  {
    icon: LineChart,
    title: 'Project Management',
    description: 'Implementation of feasibility studies and design work',
  },
];

const projectImages = [
  {
    url: 'https://i.imgur.com/3wD7R4i.jpg',
    caption: 'Water Management System',
    description: 'Advanced irrigation control and monitoring facilities',
  },
  {
    url: 'https://i.imgur.com/oiWE84g.jpg',
    caption: 'Rice Field Development',
    description: 'Preparation and maintenance of rice cultivation areas',
  },
  {
    url: 'https://i.imgur.com/kvj65PR.jpg',
    caption: 'Irrigation Infrastructure',
    description: 'Construction of main and distribution canals',
  },
  {
    url: 'https://i.imgur.com/HWiUjeC.jpg',
    caption: 'Drainage Network',
    description: 'Implementation of water drainage and desalination systems',
  },
  {
    url: 'https://i.imgur.com/j8ZArkH.jpg',
    caption: 'Rice Cultivation',
    description: 'Successful rice production in rehabilitated areas',
  },
  {
    url: 'https://i.imgur.com/zt3vglg.jpg',
    caption: 'Pumping Station',
    description: 'Modern pumping facility serving 1,500 hectares',
  },
];

export default function HydrologyProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHelmet 
        title="Hydrological and Agricultural Development - IRIAS"
        description="Implementation of advanced irrigation and agricultural systems for rice production"
      />

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply" />
          <img
            src="https://i.imgur.com/3wD7R4i.jpg"
            alt="Irrigation System"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hydrological Development & Agricultural Production</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Advanced irrigation systems and agricultural infrastructure for sustainable rice production
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
                  This comprehensive project encompasses hydrological studies, design, and construction 
                  of protective hydro structures for drainage and desalination. The initiative focuses 
                  on agricultural production, particularly rice cultivation, through advanced irrigation 
                  systems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The project includes the construction of water intake structures, main canals, 
                  and distribution networks, serving 1,500 hectares of rice irrigation systems.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://i.imgur.com/oiWE84g.jpg"
                  alt="Rice Field Development"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
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

          {/* Project Gallery */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Implementation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectImages.map((image, index) => (
                <div key={index} className="space-y-4">
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

          {/* Technical Details */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Components</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hydrological and geodesic studies</li>
                <li>Design of protective hydro structures</li>
                <li>Construction of water intake facilities</li>
                <li>Implementation of drainage systems</li>
                <li>Development of irrigation networks</li>
                <li>Agricultural production setup</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>1,500 hectares of managed irrigation systems</li>
                <li>Successful implementation of drainage network</li>
                <li>Effective soil desalination system</li>
                <li>Sustainable rice production establishment</li>
                <li>Advanced water management infrastructure</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}