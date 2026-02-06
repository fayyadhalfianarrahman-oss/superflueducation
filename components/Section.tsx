
import React, { useState, useEffect } from 'react';
import { ContentSection } from '../types';
import { generateTopicImage } from '../geminiService';

interface SectionProps {
  data: ContentSection;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ data, reverse }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      // Use the image property as the prompt for AI generation
      const generated = await generateTopicImage(data.image);
      if (generated) {
        setImageUrl(generated);
      }
      setIsLoading(false);
    };

    fetchImage();
  }, [data.image]);

  return (
    <section id={data.id} className={`py-24 px-6 ${reverse ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={reverse ? 'md:order-last' : ''}>
          <div className="flex items-center space-x-3 mb-4">
             <span className="text-3xl">{data.icon}</span>
             <h3 className="text-teal-600 font-semibold tracking-wider uppercase text-sm">{data.subtitle}</h3>
          </div>
          <h2 className="text-4xl font-serif text-slate-900 mb-6 leading-tight">{data.title}</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-teal-100/50 rounded-2xl blur-lg transition group-hover:bg-teal-200/50"></div>
          
          <div className="relative rounded-2xl shadow-xl w-full h-[400px] overflow-hidden bg-slate-100 flex items-center justify-center">
            {isLoading ? (
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Generating Visual...</p>
              </div>
            ) : imageUrl ? (
              <img 
                src={imageUrl} 
                alt={data.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="text-slate-300 text-center p-8">
                <p>Gagal memuat visual AI</p>
              </div>
            )}
          </div>
          
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            AI Generated Visual
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
