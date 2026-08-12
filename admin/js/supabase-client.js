// إعداد الاتصال بـ Supabase — نظام إدارة وزير

const SUPABASE_URL = "https://ykcivexpyxqahulqovko.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_UTf1pzK8JIjPPVH0P8j6_Q_IzpqJi64";

// مكتبة Supabase تُحمَّل من CDN داخل admin/index.html قبل هذا الملف
const { createClient } = supabase;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// دالة بسيطة للتأكد من نجاح الاتصال (تُستخدم فقط للاختبار الآن)
async function testSupabaseConnection() {
  const { data, error } = await supabaseClient
    .from("clients")
    .select("*")
    .limit(1);

  if (error) {
    console.error("فشل الاتصال بـ Supabase:", error.message);
    return false;
  }

  console.log("الاتصال بـ Supabase ناجح ✅");
  return true;
}