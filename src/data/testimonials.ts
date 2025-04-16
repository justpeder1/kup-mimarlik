import { Testimonial } from '../components/TestimonialsSlider';

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: '01',
    name: 'Ahmet Yılmaz',
    position: 'CEO',
    company: 'Yılmaz Holding',
    projectReference: 'Crystal Pavilion',
    rating: 5,
    comment: 'Küp Mimarlık ekibi, vizyonumuzu mükemmel bir şekilde hayata geçirdi. Crystal Pavilion projemiz, şirketimizin değerlerini ve yenilikçi yaklaşımımızı tam olarak yansıtıyor.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256'
  },
  {
    id: '02',
    name: 'Zeynep Kaya',
    position: 'Kurucu',
    company: 'Kaya Sanat Galerisi',
    projectReference: 'Cubic Gallery',
    rating: 5,
    comment: 'Sanat eserlerinin en iyi şekilde sergilenebileceği bir mekan hayal ediyorduk. Küp Mimarlık bu hayali aştı. Modüler alanlar sayesinde her sergi için farklı deneyimler yaratabiliyoruz.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256'
  },
  {
    id: '03',
    name: 'Mehmet Öztürk',
    position: 'Genel Müdür',
    company: 'Öztürk İnşaat',
    projectReference: 'Urban Office Tower',
    rating: 4,
    comment: 'Sürdürülebilir ve enerji verimli bir ofis binası için Küp Mimarlık ile çalışmak büyük bir ayrıcalıktı. Proje sürecinde gösterdikleri profesyonellik ve yaratıcılık etkileyiciydi.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256'
  },
  {
    id: '04',
    name: 'Ayşe Demir',
    position: 'Ev Sahibi',
    company: '',
    projectReference: 'Heritage Renovation',
    rating: 5,
    comment: 'Tarihi evimizin renovasyonu için doğru mimarlık firmasını seçtiğimize çok memnunum. Evin karakterini korurken modern yaşam standartlarını entegre etme konusundaki başarıları olağanüstüydü.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256'
  },
  {
    id: '05',
    name: 'Can Yıldırım',
    position: 'Yönetim Kurulu Başkanı',
    company: 'Yıldırım Gayrimenkul',
    projectReference: 'Luxury Apartment Complex',
    rating: 5,
    comment: 'Küp Mimarlık ile çalışmak, vizyonumuzu gerçeğe dönüştürmek için mükemmel bir deneyimdi. Lüks konut projemiz, beklentilerimizi aşan bir başarıya ulaştı ve müşterilerimizden çok olumlu geri dönüşler aldık.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256'
  }
];

export default testimonials;
