import { motion } from 'framer-motion';
import { MapPin, Shield, Users, Factory, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Location colors for each country
const locationColors = {
  china: { primary: '#102a43', secondary: '#a88e72', pulse: 'rgba(16, 42, 67, 0.2)' },
  vietnam: { primary: '#0d9488', secondary: '#5eead4', pulse: 'rgba(13, 148, 136, 0.2)' },
  bangladesh: { primary: '#ea580c', secondary: '#fdba74', pulse: 'rgba(234, 88, 12, 0.2)' },
  cambodia: { primary: '#7c3aed', secondary: '#c4b5fd', pulse: 'rgba(124, 58, 237, 0.2)' },
};

// Custom icon for active/inactive locations - Colored pin with pulse animation
const createCustomIcon = (isActive, locationId) => {
  const size = isActive ? 44 : 36;
  const scale = isActive ? 1 : 0.8;
  const colors = locationColors[locationId] || locationColors.china;

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        position: relative;
        width: ${size}px;
        height: ${size}px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(${scale});
        transition: transform 0.3s ease;
      ">
        ${isActive ? `
        <div style="
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: ${colors.pulse};
          animation: pulse 2s ease-out infinite;
        "></div>
        <div style="
          position: absolute;
          width: 60%;
          height: 60%;
          border-radius: 50%;
          background: ${colors.secondary};
          opacity: 0.4;
          animation: pulse 2s ease-out infinite 0.5s;
        "></div>
        ` : ''}
        <svg width="${size}" height="${size}" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2C14.268 2 8 8.268 8 16c0 8.5 13 20 13.5 20.5a1 1 0 001 0C23 36 36 24.5 36 16c0-7.732-6.268-14-14-14z" fill="${colors.primary}"/>
          <circle cx="22" cy="16" r="6" fill="${colors.secondary}"/>
          <circle cx="22" cy="16" r="3" fill="#ffffff" opacity="0.3"/>
        </svg>
      </div>
      <style>
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      </style>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  });
};

// Factory locations with coordinates and images
const factoryLocations = [
  {
    id: 'china',
    name: 'China',
    subtitle: 'Headquarters & Primary Hub',
    position: [31.2304, 120.5431], // Shanghai/Jiangsu area
    image: '/images/factory/factory_image_1.jpg',
    stats: [
      { value: '2006', label: 'Established' },
      { value: '12', label: 'Facilities' },
      { value: '5M+', label: 'Pieces/Year' },
      { value: '800+', label: 'Workers' },
    ],
    description: 'Our foundation since 2006. China remains our headquarters with 2 owned factories and 10 partner facilities, offering unmatched expertise in premium knitwear and complex constructions.',
    highlights: ['Premium Cashmere', 'Intarsia & Jacquard', 'Fully Fashioned', 'Hand-finishing'],
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    subtitle: 'Southeast Asia Hub',
    position: [10.8231, 106.6297], // Hanoi area
    image: '/images/factory/factory_image_3.jpg',
    stats: [
      { value: '2014', label: 'Since' },
      { value: '2', label: 'Facilities' },
      { value: '1.5M+', label: 'Pieces/Year' },
      { value: '2', label: 'PVH Certified' },
    ],
    description: 'Our first Southeast Asia expansion, featuring modern facilities specializing in full-package knitwear production with preferential EU and US market access.',
    highlights: ['Full Package Production', 'Skilled Workforce', 'Tariff Benefits', 'Modern Equipment'],
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    subtitle: 'Woven Specialist',
    position: [23.8103, 90.4125], // Dhaka
    image: '/images/factory/factory_image_5.jpg',
    stats: [
      { value: '2016', label: 'Since' },
      { value: '1', label: 'Facility' },
      { value: '1M+', label: 'Pieces/Year' },
      { value: '1', label: 'PVH Certified' },
    ],
    description: 'Large-scale woven garment production with competitive pricing and growing capacity for volume orders.',
    highlights: ['Woven Garments', 'Large Scale', 'Competitive Pricing', 'Growing Capacity'],
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    subtitle: 'Sweater Production',
    position: [11.5564, 104.9282], // Phnom Penh
    image: '/images/factory/factory_image_7.png',
    stats: [
      { value: '2018', label: 'Since' },
      { value: '1', label: 'Facility' },
      { value: '500K+', label: 'Pieces/Year' },
      { value: '1', label: 'PVH Certified' },
    ],
    description: 'Specializing in sweater production with excellent trade access to key markets and room for expansion.',
    highlights: ['Sweater Production', 'Trade Access', 'Growing Capacity', 'Cost Efficient'],
  },
];

const LocationCard = ({ location, isActive }) => {
  const colors = locationColors[location.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white border overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isActive ? 'border-2' : 'border border-gray-200'
      }`}
      style={isActive ? { borderColor: colors.primary } : {}}
    >
      {/* Factory Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={location.image}
          alt={`${location.name} Facility`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl font-semibold text-white mb-1">{location.name}</h3>
          <p className="text-sm text-gray-200">{location.subtitle}</p>
        </div>
        {/* Color accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: colors.primary }} />
      </div>

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {location.stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="text-center p-2 bg-gray-50 rounded">
              <p className="font-display text-lg" style={{ color: colors.primary }}>{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{location.description}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {location.highlights.map((highlight, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: colors.fill, color: colors.primary }}>
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function GlobalPresence() {
  const [activeLocation, setActiveLocation] = useState('china');

  return (
    <div className="pt-36 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="heading-secondary mb-6">Global Presence</h1>
          <p className="text-body text-gray-600">
            Strategic manufacturing locations across China and Southeast Asia deliver
            quality production, risk diversification, and competitive advantages.
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Strategic Advantages - MOVED TO FRONT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Why It Matters</p>
            <h2 className="heading-secondary">Strategic Advantages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our multi-country presence delivers tangible benefits to our partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Risk Diversification',
                description: 'Production spread across multiple countries reduces supply chain disruption risks from trade issues, natural disasters, or regional challenges.',
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Tariff Optimization',
                description: 'Leverage preferential trade agreements and tariff structures across China, Vietnam, and Cambodia for optimal landed costs.',
              },
              {
                icon: <Factory className="w-6 h-6" />,
                title: 'Flexible Sourcing',
                description: 'Allocate production across locations based on capacity availability, specialization, and your specific market requirements.',
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: 'Quality Consistency',
                description: 'Standardized processes and management systems ensure consistent quality across all facilities, regardless of location.',
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="flex gap-4 p-6 border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-black rounded-full flex items-center justify-center text-white">
                    {advantage.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg text-accent-black mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { value: '4', label: 'Countries', icon: <MapPin className="w-5 h-5" /> },
            { value: '16+', label: 'Facilities', icon: <Factory className="w-5 h-5" /> },
            { value: '8M+', label: 'Annual Capacity', icon: <Users className="w-5 h-5" /> },
            { value: '4', label: 'PVH Certified', icon: <Shield className="w-5 h-5" /> },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 bg-accent-warm">
              <div className="w-12 h-12 bg-accent-black rounded-full flex items-center justify-center text-white mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="font-display text-3xl text-accent-black mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <MapContainer
                center={[25, 105]}
                zoom={3}
                style={{ height: '100%', width: '100%', background: '#e3f2fd' }}
                zoomControl={false}
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  subdomains="abcd"
                  maxZoom={19}
                />

                {/* Location markers with custom colored icons */}
                {factoryLocations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.position}
                    icon={createCustomIcon(activeLocation === location.id, location.id)}
                    eventHandlers={{
                      click: () => {
                        setActiveLocation(location.id);
                                              },
                    }}
                  >
                    <Popup>
                      <div className="text-center p-3 min-w-[140px]">
                        <h3 className="font-display font-bold text-accent-black mb-1">{location.name}</h3>
                        <p className="text-xs text-gray-500 mb-2">{location.subtitle}</p>
                        <div className="flex items-center justify-center gap-1 text-xs font-medium" style={{ color: locationColors[location.id]?.primary }}>
                          <MapPin className="w-3 h-3" />
                          {location.stats[2].value} pcs/year
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Location selector below map */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {factoryLocations.map((location) => {
                const colors = locationColors[location.id];
                return (
                  <button
                    key={location.id}
                    onClick={() => {
                      setActiveLocation(location.id);
                                          }}
                    className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeLocation === location.id
                        ? 'text-white shadow-md'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                    }`}
                    style={activeLocation === location.id ? { backgroundColor: colors.primary } : {}}
                  >
                    {location.name}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Location Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Locations</p>
            <h2 className="heading-secondary">Our Facilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {factoryLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                onClick={() => setActiveLocation(location.id)}
                className="cursor-pointer"
              >
                <LocationCard
                  location={location}
                  isActive={activeLocation === location.id}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center p-12 bg-accent-black text-white"
        >
          <h2 className="heading-tertiary mb-4 text-white">Visit Our Facilities</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Experience our manufacturing capabilities firsthand. We'd be happy to arrange
            a facility tour at any of our locations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Visit
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
