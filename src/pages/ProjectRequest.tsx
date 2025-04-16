import React from 'react';
import { motion } from 'framer-motion';
import ProjectRequestForm from '../components/ProjectRequestForm';
import ScrollAnimation from '../components/ScrollAnimation';

const ProjectRequest: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-architect-black text-white">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-center"
          >
            Proje <span className="font-medium">Başvurusu</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/80 text-center max-w-2xl mx-auto"
          >
            Hayalinizdeki projeyi gerçeğe dönüştürmek için ilk adımı atın. 
            Aşağıdaki formu doldurarak bize projenizdeki vizyonunuzu anlatın.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-architect-offwhite">
        <div className="container-custom">
          <ScrollAnimation variant="fadeUp">
            <div className="max-w-4xl mx-auto">
              <ProjectRequestForm />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <ScrollAnimation variant="fadeUp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-architect-gray">
                <h3 className="text-xl font-medium mb-4">Proje Süreci</h3>
                <p className="text-architect-darkgray">
                  Başvurunuzu aldıktan sonra, ekibimiz 48 saat içinde sizinle iletişime geçecek ve 
                  projenizin detaylarını görüşmek için bir toplantı ayarlayacaktır.
                </p>
              </div>
              
              <div className="p-6 border border-architect-gray">
                <h3 className="text-xl font-medium mb-4">Gizlilik Politikası</h3>
                <p className="text-architect-darkgray">
                  Paylaştığınız tüm bilgiler ve dosyalar gizlilik politikamız kapsamında korunmaktadır. 
                  Bilgileriniz yalnızca proje değerlendirmesi için kullanılacaktır.
                </p>
              </div>
              
              <div className="p-6 border border-architect-gray">
                <h3 className="text-xl font-medium mb-4">Sıkça Sorulan Sorular</h3>
                <p className="text-architect-darkgray">
                  Proje başvurusu ve süreçler hakkında sık sorulan soruların cevaplarını 
                  <a href="#" className="text-copper hover:underline ml-1">SSS sayfamızda</a> bulabilirsiniz.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ProjectRequest;
