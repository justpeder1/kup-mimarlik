import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Upload, Check, X, Info } from 'lucide-react';

// Form field types
type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'file' | 'range';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
};

// Step type
type FormStep = {
  title: string;
  description: string;
  fields: FormField[];
};

const ProjectRequestForm: React.FC = () => {
  // Form steps
  const formSteps: FormStep[] = [
    {
      title: 'Kişisel Bilgiler',
      description: 'Sizinle iletişime geçebilmemiz için temel bilgilerinizi paylaşın.',
      fields: [
        { name: 'name', label: 'Ad Soyad', type: 'text', required: true, placeholder: 'Adınız ve soyadınız' },
        { name: 'email', label: 'E-posta', type: 'email', required: true, placeholder: 'E-posta adresiniz' },
        { name: 'phone', label: 'Telefon', type: 'tel', required: true, placeholder: 'Telefon numaranız' },
        { name: 'company', label: 'Şirket (Opsiyonel)', type: 'text', placeholder: 'Şirket adınız' }
      ]
    },
    {
      title: 'Proje Detayları',
      description: 'Projeniz hakkında temel bilgileri paylaşın.',
      fields: [
        { 
          name: 'projectType', 
          label: 'Proje Türü', 
          type: 'select', 
          required: true,
          options: [
            { value: '', label: 'Proje türü seçin' },
            { value: 'residential', label: 'Konut' },
            { value: 'commercial', label: 'Ticari' },
            { value: 'cultural', label: 'Kültürel' },
            { value: 'renovation', label: 'Renovasyon' },
            { value: 'interior', label: 'İç Mekan Tasarımı' },
            { value: 'urban', label: 'Kentsel Tasarım' },
            { value: 'other', label: 'Diğer' }
          ]
        },
        { 
          name: 'projectSize', 
          label: 'Proje Büyüklüğü (m²)', 
          type: 'text', 
          required: true, 
          placeholder: 'Tahmini metrekare' 
        },
        { 
          name: 'projectLocation', 
          label: 'Proje Konumu', 
          type: 'text', 
          required: true, 
          placeholder: 'Şehir, ilçe veya adres' 
        },
        { 
          name: 'projectDescription', 
          label: 'Proje Açıklaması', 
          type: 'textarea', 
          required: true, 
          placeholder: 'Projeniz hakkında kısa bir açıklama yazın' 
        }
      ]
    },
    {
      title: 'Bütçe ve Zamanlama',
      description: 'Projenizin bütçe ve zaman planlaması hakkında bilgi verin.',
      fields: [
        { 
          name: 'budgetRange', 
          label: 'Bütçe Aralığı', 
          type: 'select', 
          required: true,
          options: [
            { value: '', label: 'Bütçe aralığı seçin' },
            { value: 'under-100k', label: '100.000 TL altı' },
            { value: '100k-250k', label: '100.000 TL - 250.000 TL' },
            { value: '250k-500k', label: '250.000 TL - 500.000 TL' },
            { value: '500k-1m', label: '500.000 TL - 1.000.000 TL' },
            { value: 'over-1m', label: '1.000.000 TL üzeri' },
            { value: 'not-sure', label: 'Henüz belirlemedim' }
          ]
        },
        { 
          name: 'timeframe', 
          label: 'Zaman Çizelgesi', 
          type: 'select', 
          required: true,
          options: [
            { value: '', label: 'Zaman çizelgesi seçin' },
            { value: 'urgent', label: 'Acil (1-3 ay)' },
            { value: 'short', label: 'Kısa vadeli (3-6 ay)' },
            { value: 'medium', label: 'Orta vadeli (6-12 ay)' },
            { value: 'long', label: 'Uzun vadeli (12+ ay)' },
            { value: 'not-sure', label: 'Henüz belirlemedim' }
          ]
        },
        { 
          name: 'flexibility', 
          label: 'Zaman Esnekliği', 
          type: 'radio', 
          required: true,
          options: [
            { value: 'flexible', label: 'Esnek, acil değil' },
            { value: 'somewhat', label: 'Biraz esnek' },
            { value: 'strict', label: 'Kesin tarihler önemli' }
          ]
        }
      ]
    },
    {
      title: 'Referans ve Dosyalar',
      description: 'Projenizle ilgili referans görselleri veya dökümanları yükleyin.',
      fields: [
        { 
          name: 'inspirationDescription', 
          label: 'İlham Kaynakları', 
          type: 'textarea', 
          placeholder: 'Beğendiğiniz mimari stiller, projeler veya örnekler hakkında bilgi verin' 
        },
        { 
          name: 'referenceFiles', 
          label: 'Referans Dosyaları', 
          type: 'file',
          placeholder: 'Görseller, planlar veya diğer referans dosyalarını yükleyin' 
        },
        { 
          name: 'additionalInfo', 
          label: 'Ek Bilgiler', 
          type: 'textarea', 
          placeholder: 'Eklemek istediğiniz başka bilgiler varsa buraya yazabilirsiniz' 
        }
      ]
    }
  ];

  // State
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is filled
    if (errors[name] && value.trim() !== '') {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
  };

  // Remove a selected file
  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Validate current step
  const validateStep = () => {
    const currentFields = formSteps[currentStep].fields;
    const newErrors: Record<string, string> = {};
    
    currentFields.forEach(field => {
      if (field.required && (!formData[field.name] || formData[field.name].trim() === '')) {
        newErrors[field.name] = `${field.label} alanı zorunludur`;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Go to next step
  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        submitForm();
      }
    }
  };

  // Go to previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Submit form
  const submitForm = async () => {
    setIsSubmitting(true);
    
    try {
      // Here you would normally send the data to your backend
      // For demo purposes, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', { ...formData, files: selectedFiles });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({});
    setSelectedFiles([]);
    setCurrentStep(0);
    setIsSubmitted(false);
    setErrors({});
  };

  // Render form fields
  const renderField = (field: FormField) => {
    const { name, label, type, placeholder, options, required, min, max } = field;
    const error = errors[name];
    
    switch (type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <div className="mb-6" key={name}>
            <label className="block text-architect-black mb-2" htmlFor={name}>
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name] || ''}
              onChange={handleChange}
              placeholder={placeholder}
              className={`w-full p-3 border ${error ? 'border-red-500' : 'border-architect-gray'} focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all`}
              required={required}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        );
      
      case 'textarea':
        return (
          <div className="mb-6" key={name}>
            <label className="block text-architect-black mb-2" htmlFor={name}>
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              id={name}
              name={name}
              value={formData[name] || ''}
              onChange={handleChange}
              placeholder={placeholder}
              rows={4}
              className={`w-full p-3 border ${error ? 'border-red-500' : 'border-architect-gray'} focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all`}
              required={required}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        );
      
      case 'select':
        return (
          <div className="mb-6" key={name}>
            <label className="block text-architect-black mb-2" htmlFor={name}>
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select
              id={name}
              name={name}
              value={formData[name] || ''}
              onChange={handleChange}
              className={`w-full p-3 border ${error ? 'border-red-500' : 'border-architect-gray'} focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all appearance-none bg-white`}
              required={required}
            >
              {options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        );
      
      case 'radio':
        return (
          <div className="mb-6" key={name}>
            <label className="block text-architect-black mb-2">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="space-y-2">
              {options?.map(option => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    id={`${name}-${option.value}`}
                    name={name}
                    value={option.value}
                    checked={formData[name] === option.value}
                    onChange={handleChange}
                    className="mr-2 text-copper focus:ring-copper"
                    required={required}
                  />
                  <label htmlFor={`${name}-${option.value}`} className="text-architect-black">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        );
      
      case 'file':
        return (
          <div className="mb-6" key={name}>
            <label className="block text-architect-black mb-2" htmlFor={name}>
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            
            <div 
              className={`border-2 border-dashed ${error ? 'border-red-500' : 'border-architect-gray'} p-6 rounded-md text-center cursor-pointer hover:border-copper transition-all`}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mx-auto mb-2 text-architect-darkgray" />
              <p className="text-architect-darkgray">
                Dosyaları sürükleyip bırakın veya seçmek için tıklayın
              </p>
              <p className="text-sm text-architect-darkgray mt-1">
                Desteklenen formatlar: JPG, PNG, PDF, DWG (Maks. 10MB)
              </p>
              <input
                ref={fileInputRef}
                type="file"
                id={name}
                name={name}
                onChange={handleFileChange}
                className="hidden"
                multiple
                accept=".jpg,.jpeg,.png,.pdf,.dwg"
              />
            </div>
            
            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Seçilen Dosyalar:</p>
                <ul className="space-y-2">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="flex items-center justify-between bg-architect-offwhite p-2 rounded">
                      <span className="text-sm truncate max-w-xs">{file.name}</span>
                      <button 
                        type="button" 
                        onClick={() => removeFile(index)}
                        className="text-architect-darkgray hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        );
      
      default:
        return null;
    }
  };

  // Progress bar
  const progress = ((currentStep + 1) / formSteps.length) * 100;

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  // Success message
  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-medium text-architect-black mb-2">Başvurunuz Alındı</h3>
          <p className="text-architect-darkgray mb-6">
            Proje başvurunuz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
          <p className="text-sm text-architect-darkgray mb-6">
            Referans Numarası: {Math.random().toString(36).substring(2, 10).toUpperCase()}
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-3 bg-architect-black text-white hover:bg-architect-darkgray transition-colors"
          >
            Yeni Başvuru Oluştur
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-architect-darkgray">
            Adım {currentStep + 1} / {formSteps.length}
          </span>
          <span className="text-sm text-architect-darkgray">
            {Math.round(progress)}% Tamamlandı
          </span>
        </div>
        <div className="w-full h-2 bg-architect-gray rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-copper" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      
      {/* Step indicators */}
      <div className="flex justify-between mb-8">
        {formSteps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center"
            style={{ width: `${100 / formSteps.length}%` }}
          >
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${index === currentStep ? 'bg-copper text-white' : index < currentStep ? 'bg-green-500 text-white' : 'bg-architect-gray text-white'}`}
            >
              {index < currentStep ? <Check size={16} /> : index + 1}
            </div>
            <span className="text-xs text-center mt-1 hidden md:block">{step.title}</span>
          </div>
        ))}
      </div>
      
      {/* Form content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-medium text-architect-black">{formSteps[currentStep].title}</h3>
            <p className="text-architect-darkgray">{formSteps[currentStep].description}</p>
          </div>
          
          <form>
            {formSteps[currentStep].fields.map(field => renderField(field))}
          </form>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`px-6 py-3 flex items-center gap-2 ${currentStep === 0 ? 'opacity-50 cursor-not-allowed bg-architect-gray text-white' : 'bg-white border border-architect-black text-architect-black hover:bg-architect-offwhite'} transition-colors`}
        >
          <ArrowLeft size={16} /> Geri
        </button>
        
        <button
          type="button"
          onClick={nextStep}
          disabled={isSubmitting}
          className={`px-6 py-3 bg-architect-black text-white flex items-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-architect-darkgray'} transition-colors`}
        >
          {currentStep === formSteps.length - 1 ? (
            isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'
          ) : (
            <>
              İleri <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProjectRequestForm;
