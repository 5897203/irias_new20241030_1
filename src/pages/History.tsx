import { Rocket, Globe2, BarChart3, Lightbulb, Building2, Leaf } from 'lucide-react';

const milestones = [
  {
    year: '1976',
    title: 'Foundation',
    description: 'IRIAS was established as an Intergovernmental Economic Organization.',
  },
  {
    year: '2003',
    title: 'EADS Partnership',
    description: 'European Aerospace and Defense Corporation joins as associate member for joint research.',
  },
];

const collaborations = [
  {
    name: 'Hewlett Packard',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png'
  },
  {
    name: 'Siemens',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/200px-Siemens-logo.svg.png'
  },
  {
    name: 'AIRBUS',
    logo: 'https://cdn01.onelogin.com/images/brands/logos/login/12f3297e57dc5ebe5f8ed9a534afb37e17125e0f.png'
  },
  {
    name: 'MTV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/MTV_Logo_2010.svg/200px-MTV_Logo_2010.svg.png'
  },
  {
    name: 'European Union',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/200px-Flag_of_Europe.svg.png'
  },
];

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#1e3a8a] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our History</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Over four decades of advancing science, technology, and international collaboration
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12">
          {/* Milestones */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Milestones</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600" />
                  <div className="mb-1 text-sm font-semibold text-blue-600">{milestone.year}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* International Collaborations */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Notable Collaborations</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {collaborations.map((company, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="font-medium text-gray-900">{company.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Achievements */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In recent years, IRIAS has continued its work on several key projects including the analysis 
              and management of large socio-economic systems, development of management consulting methods, 
              and research on energy industry management. The institute maintains its focus on creating 
              favorable conditions for international cooperation while ensuring energy and environmental security.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our participation in projects like OASIS demonstrates our commitment to developing sophisticated 
              solutions for complex challenges, incorporating advanced technologies such as knowledge management 
              systems, decision support systems, and expert systems for crisis management.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}