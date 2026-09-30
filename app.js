/* ==========================================================
   data.js — البيانات المشتركة بين الموقع ولوحة التحكم
   كل حاجة بتتحفظ في المتصفح (localStorage) بمفتاح يبدأ بـ etoile_
   ========================================================== */
const DB = {
  get(k, def) { try { const v = localStorage.getItem('etoile_' + k); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
  set(k, v)   { try { localStorage.setItem('etoile_' + k, JSON.stringify(v)); } catch (e) {} }
};

/* البيانات الافتراضية: لو الأدمن ماغيّرش حاجة، دي اللي بتظهر */
const DEFAULTS = {
  settings: { phone: '16312', delivery: '٤٥ : ٦٠', pass: 'admin123' },
  branches: [
    { id: 1, name: 'مكرم عبيد', address: 'شارع مكرم عبيد، مدينة نصر', phone: '16312', whatsapp: '201000000000', lat: 30.0561, lng: 31.3456 },
    { id: 2, name: 'التجمع الخامس', address: 'التسعين الشمالي، القاهرة الجديدة', phone: '16312', whatsapp: '201000000000', lat: 30.0074, lng: 31.4913 },
    { id: 3, name: 'الزمالك', address: 'شارع 26 يوليو، الزمالك', phone: '16312', whatsapp: '201000000000', lat: 30.0626, lng: 31.2197 }
  ],
  products: [
    { id: 1, name: 'فيتا سلاد', nameEn: 'Feta Salad', cat: 'مطعم', sub: 'سلطات', price: 95, disc: 0, stock: true },
    { id: 2, name: 'سلمون سلاد', nameEn: 'Salmon Salad', cat: 'مطعم', sub: 'سلطات', price: 280, disc: 0, stock: true },
    { id: 3, name: 'تونة سلاد', nameEn: 'Tuna Salad', cat: 'مطعم', sub: 'سلطات', price: 275, disc: 0, stock: true },
    { id: 4, name: 'باربكيو سلاد', nameEn: 'BBQ Salad', cat: 'مطعم', sub: 'سلطات', price: 145, disc: 0, stock: true },
    { id: 5, name: 'بيتزا مارجريتا', nameEn: 'Margherita Pizza', cat: 'مطعم', sub: 'بيتزا', price: 165, disc: 0, stock: true },
    { id: 6, name: 'كنافة بالقشطة', nameEn: 'Kunafa with Cream', cat: 'حلويات مصرية', sub: 'شرقي', price: 180, disc: 10, stock: true },
    { id: 7, name: 'بسبوسة', nameEn: 'Basbousa', cat: 'حلويات مصرية', sub: 'شرقي', price: 150, disc: 0, stock: true },
    { id: 8, name: 'جاتوه الشيكولاتة', nameEn: 'Chocolate Gateau', cat: 'حلويات غربية', sub: 'جاتوه', price: 320, disc: 15, stock: true },
    { id: 9, name: 'تورتة فراولة', nameEn: 'Strawberry Tart', cat: 'حلويات غربية', sub: 'تورت', price: 290, disc: 10, stock: true },
    { id: 10, name: 'ميكس سويت', nameEn: 'Mixed Sweets', cat: 'ميكس سويت', sub: 'ميكس سويت', price: 210, disc: 10, stock: true },
    { id: 11, name: 'خبز الحبة الكاملة', nameEn: 'Whole Grain Bread', cat: 'مخبوزات', sub: 'خبز', price: 45, disc: 0, stock: true },
    { id: 12, name: 'كرواسون', nameEn: 'Croissant', cat: 'مخبوزات', sub: 'معجنات', price: 35, disc: 10, stock: true },
    { id: 13, name: 'شيكولاتة داكنة', nameEn: 'Dark Chocolate', cat: 'شيكولاته', sub: 'علب', price: 130, disc: 0, stock: true },
    { id: 14, name: 'كحك بالعجوة', nameEn: 'Date Kahk', cat: 'كحك 2026', sub: 'كحك', price: 210, disc: 0, stock: true },
    { id: 15, name: 'حلاوة المولد', nameEn: 'Mawlid Sweets', cat: 'المولد 2026', sub: 'مولد', price: 120, disc: 0, stock: true },
    { id: 16, name: 'آيس كريم مانجو', nameEn: 'Mango Ice Cream', cat: 'آيس كريم', sub: 'آيس كريم', price: 95, disc: 0, stock: true }
  ],
  orders: [], users: []
};
const load = k => DB.get(k, DEFAULTS[k]);
