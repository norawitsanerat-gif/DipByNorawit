/* ==========================================================================
   DIP — Digital Image Processing + OpenCV
   เขียนใหม่ทั้งหมดจากสรุป PDF "สรุป image ajnop (บางส่วน)" — 6 บทเรียน
   สอนแบบละเอียดตั้งแต่พื้นฐาน (Thai-first with EN terms)
   ========================================================================== */
window.DATA = {

  /* ========================================================================
     CHAPTER 1 — Digital Image Fundamentals (พื้นฐานภาพดิจิทัล)
     ======================================================================== */
  slides: [
    { title: "Cover — พื้นฐานภาพดิจิทัล (Digital Image Fundamentals)", short: "เปิดบทเรียน" },
    { title: "เราจะเรียนอะไรบ้าง", short: "ภาพรวมบทเรียน" },
    { title: "ภาพดิจิทัลคืออะไร (f(x, y))", short: "ภาพดิจิทัลคืออะไร" },
    { title: "พิกเซล (Pixel) — จุดเล็กที่สุดของภาพ", short: "พิกเซลคืออะไร" },
    { title: "Resolution — จำนวนพิกเซล", short: "Resolution คืออะไร" },
    { title: "Resolution มาตรฐาน — QQVGA → 4K", short: "Resolution มาตรฐาน" },
    { title: "Color Depth — บิตต่อพิกเซล", short: "Color Depth คืออะไร" },
    { title: "ตาราง Color Depth — 1 ถึง 32 บิต", short: "ตาราง Color Depth" },
    { title: "16-bit High Color (RGB565)", short: "High Color RGB565" },
    { title: "24-bit True Color (RGB)", short: "True Color RGB" },
    { title: "32-bit RGBA (Alpha Channel)", short: "RGBA + Alpha" },
    { title: "คำนวณขนาดไฟล์ภาพ", short: "ขนาดไฟล์ภาพ" },
    { title: "Image Types 1 — Binary Image", short: "Binary Image" },
    { title: "Image Types 2 — Grayscale Image", short: "Grayscale Image" },
    { title: "Image Types 3 — Color Image", short: "Color Image" },
    { title: "Image Types 4 — Multispectral Image", short: "Multispectral" },
    { title: "Color Model คืออะไร", short: "Color Model" },
    { title: "RGB Model — และ BGR ใน OpenCV", short: "RGB / BGR" },
    { title: "CMYK — ระบบสีของเครื่องพิมพ์", short: "CMYK" },
    { title: "HSL / HSV — Hue · Saturation · Lightness/Value", short: "HSL / HSV" },
    { title: "ตัวอย่าง hsl() / hsv() — สีเขียว", short: "ตัวอย่าง hsl/hsv" },
    { title: "LAB / YCrCb — Color Space อื่น ๆ", short: "LAB / YCrCb" },
    { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
    { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
    { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
    { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
    { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
    { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
    { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
  ],

  /* Sidebar structure: slide indices 1-based */
  sections: [
    { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
    { label: "1. ภาพดิจิทัล & พิกเซล", topics: [3, 4] },
    { label: "2. Resolution (ความละเอียด)", topics: [5, 6] },
    { label: "3. Color Depth (ความลึกของสี)", topics: [7, 8, 9, 10, 11, 12] },
    { label: "4. ประเภทของภาพ (Image Types)", topics: [13, 14, 15, 16] },
    { label: "5. Color Models (ระบบสี)", topics: [17, 18, 19, 20, 21, 22] },
    { label: "ทบทวนและฝึกฝน", topics: [23, 24, 25, 26, 27, 28, 29] }
  ],

  /* Slide 2 — roadmap cards */
  roadmap: [
    { icon: "grid", title: "ภาพดิจิทัล & พิกเซล", desc: "ภาพ = f(x, y) — ตำแหน่ง + ความเข้ม ประกอบด้วยจุดเล็ก ๆ ที่เรียกว่า พิกเซล (Pixel)" },
    { icon: "ruler", title: "Resolution", desc: "จำนวนพิกเซลทั้งหมด = กว้าง × สูง — 160×120 (QQVGA) → 3840×2160 (4K UHD)" },
    { icon: "palette", title: "Color Depth", desc: "บิตต่อพิกเซล 1/2/4/8/16/24/32 — จำนวนสี = 2^บิต เช่น 24-bit = 16.7 ล้านสี" },
    { icon: "image", title: "Image Types", desc: "Binary (0/1) · Grayscale (0–255) · Color (RGB) · Multispectral (หลาย band)" },
    { icon: "swatch-book", title: "Color Models", desc: "RGB (จอ) · CMYK (พิมพ์) · HSL/HSV · LAB · YCrCb — และ BGR ใน OpenCV" },
    { icon: "file-cog", title: "ขนาดไฟล์ภาพ", desc: "W × H × บิตต่อพิกเซล ÷ 8 = ไบต์ — คำนวณได้ด้วยเครื่องคิดเลขธรรมดา" },
    { icon: "monitor", title: "มาตรฐานจอ", desc: "VGA · HD · Full HD · QHD · 4K UHD · DCI 4K — จำตัวเลขคู่กับชื่อ" },
    { icon: "eye", title: "ทำไมต้องรู้", desc: "ทุกเรื่องใน DIP เริ่มจากพิกเซล + จำนวนบิต — เป็นฐานของบทต่อ ๆ ไปทั้งหมด" }
  ],

  /* Slide 23 — summary cards */
  summary: [
    { icon: "grid", title: "พิกเซล (Pixel)", desc: "จุดเล็กที่สุดของภาพดิจิทัล — มีตำแหน่ง (x,y) และค่า (ความเข้ม/สี)" },
    { icon: "ruler", title: "Resolution", desc: "กว้าง × สูง เช่น 1920×1080 = 2,073,600 พิกเซล" },
    { icon: "palette", title: "Color Depth", desc: "บิต/พิกเซล → จำนวนสี = 2^บิต (1/8/16/24/32 bit)" },
    { icon: "image", title: "4 ประเภทภาพ", desc: "Binary · Grayscale · Color · Multispectral" },
    { icon: "swatch-book", title: "Color Models", desc: "RGB/CMYK/HSL/HSV/LAB/YCrCb · OpenCV ใช้ BGR" },
    { icon: "file-cog", title: "ขนาดไฟล์", desc: "W × H × บิต ÷ 8 = ไบต์" },
    { icon: "monitor", title: "มาตรฐานจอ", desc: "QVGA→VGA→HD→FHD→QHD→4K UHD→DCI 4K" },
    { icon: "lightbulb", title: "เทคนิคจำ", desc: "1 Hex digit = 4 บิต · 2^10 ≈ 1,024 · 2^20 ≈ 1 ล้าน" }
  ],

  whys: [], components: [], modes: [], topologies: [], scopes: [], media: [], stack: [], protocols: [], history: [],

  /* Slides 25–26 — quiz (10 questions) บท 1 */
  quiz: [
    {
      q: "ภาพ 1920×1080 มีพิกเซลทั้งหมดกี่พิกเซล?",
      options: ["2,073,600", "207,360", "20,736,000", "2,073,600,000"],
      correct: 0,
      explain: "จำนวนพิกเซล = กว้าง × สูง = 1920 × 1080 = 2,073,600 พิกเซล (ประมาณ 2.07 ล้าน)"
    },
    {
      q: "ข้อใดคือ Full HD (1080p)?",
      options: ["1280×720", "1920×1080", "3840×2160", "640×480"],
      correct: 1,
      explain: "Full HD / 1080p = 1920×1080 — จำคู่: 720p = 1280×720, 4K UHD = 3840×2160"
    },
    {
      q: "ภาพ 8-bit grayscale มีระดับสีเทากี่ระดับ?",
      options: ["8", "64", "256", "1024"],
      correct: 2,
      explain: "จำนวนระดับ = 2^บิต = 2^8 = 256 ระดับ (ค่า 0–255)"
    },
    {
      q: "ภาพ 24-bit True Color มีสีทั้งหมดกี่สี?",
      options: ["256", "65,536", "16,777,216", "16 ล้านล้าน"],
      correct: 2,
      explain: "2^24 = 16,777,216 สี ≈ 16.7 ล้านสี — R/G/B อย่างละ 8 บิต"
    },
    {
      q: "ภาพ Binary (1-bit) แต่ละพิกเซลมีค่าได้กี่ค่า?",
      options: ["1", "2", "8", "256"],
      correct: 1,
      explain: "2^1 = 2 ค่า คือ 0 (ดำ) หรือ 1 (ขาว) เท่านั้น"
    },
    {
      q: "RGB565 (High Color) ช่องสีเขียวใช้กี่บิต?",
      options: ["5", "6", "8", "16"],
      correct: 1,
      explain: "RGB565 = แดง 5 + เขียว 6 + น้ำเงิน 5 = 16 บิต — เขียวได้ 6 บิตเพราะตาคนไวต่อสีเขียว"
    },
    {
      q: "32-bit RGBA ตัว A ย่อมาจากอะไร?",
      options: ["Alpha — ช่องความโปร่งใส", "Amber", "Average", "Address"],
      correct: 0,
      explain: "A = Alpha (ความโปร่งใส) — ใช้กำหนดว่าพิกเซลโปร่งใสแค่ไหน เช่น ในการซ้อนภาพ"
    },
    {
      q: "ภาพประเภทใดที่แต่ละพิกเซลเป็น 0 หรือ 1 เท่านั้น?",
      options: ["Binary Image", "Grayscale Image", "Color Image", "Multispectral Image"],
      correct: 0,
      explain: "Binary Image (ภาพขาวดำล้วน) — พิกเซลเป็น 0 หรือ 1 ใช้แยก object กับ background"
    },
    {
      q: "OpenCV อ่านภาพสีมาโดยเรียงช่องสีแบบใด?",
      options: ["RGB", "BGR", "CMYK", "HSV"],
      correct: 1,
      explain: "OpenCV ใช้ลำดับ BGR (Blue, Green, Red) — ต่างจากที่เราเคยชิน RGB ต้องคอยแปลง"
    },
    {
      q: "Color Model ใดเหมาะกับงานพิมพ์ (printer)?",
      options: ["RGB", "CMYK", "HSV", "LAB"],
      correct: 1,
      explain: "CMYK (Cyan-Magenta-Yellow-Black) ใช้กับงานพิมพ์ เพราะหมึกพิมพ์ลบแสง (subtractive)"
    }
  ],

  /* Flashcards — บท 1 */
  flashcards: [
    { q: "Pixel คืออะไร?", a: "จุดเล็กที่สุดของภาพดิจิทัล — มีตำแหน่ง (x,y) และค่า (ความเข้ม/สี)" },
    { q: "Resolution คืออะไร?", a: "จำนวนพิกเซลทั้งหมด = กว้าง × สูง เช่น 1920×1080 = 2,073,600" },
    { q: "1920×1080 เรียกว่าอะไร?", a: "Full HD / 1080p" },
    { q: "Color Depth (Bit Depth) คืออะไร?", a: "จำนวนบิตที่ใช้เก็บ 1 พิกเซล → จำนวนสี = 2^บิต" },
    { q: "8-bit grayscale มีกี่ระดับเทา?", a: "2^8 = 256 ระดับ (0=ดำ, 255=ขาว)" },
    { q: "24-bit True Color มีกี่สี?", a: "2^24 = 16,777,216 สี ≈ 16.7 ล้านสี (R/G/B อย่างละ 8 บิต)" },
    { q: "RGB565 คืออะไร?", a: "High Color 16 บิต: แดง 5 + เขียว 6 + น้ำเงิน 5 — เขียวเยอะเพราะตาคนไวต่อเขียว" },
    { q: "32-bit RGBA ต่างจาก 24-bit ยังไง?", a: "เพิ่มช่อง Alpha (ความโปร่งใส) 8 บิต — ใช้ซ้อนภาพ/ทำ transparent" },
    { q: "Binary Image คืออะไร?", a: "ภาพขาวดำล้วน — แต่ละพิกเซลเป็น 0 หรือ 1 เท่านั้น" },
    { q: "Grayscale Image คืออะไร?", a: "ภาพระดับเทา — เก็บแค่ความเข้ม (intensity) เช่น 8-bit = 0–255" },
    { q: "Multispectral Image คืออะไร?", a: "ภาพที่เก็บหลายช่วงคลื่น (band) เกิน 3 แถบ — ใช้ในงานรีโมตเซนซิ่ง" },
    { q: "RGB Model ใช้กับอะไร?", a: "จอภาพ (additive — รวมแสง) — แดง+เขียว+น้ำเงิน" },
    { q: "CMYK ใช้กับอะไร?", a: "เครื่องพิมพ์ (subtractive — ลบแสง) — Cyan, Magenta, Yellow, Black" },
    { q: "HSV ย่อมาจากอะไร?", a: "Hue (สี, 0–360°) · Saturation (ความสด, %) · Value (ความสว่าง, %)" },
    { q: "OpenCV เก็บภาพสีแบบใด?", a: "BGR (Blue-Green-Red) — ต้อง cvtColor เป็น RGB ก่อนแสดงด้วย Matplotlib" },
    { q: "ขนาดไฟล์ภาพคำนวณยังไง?", a: "กว้าง × สูง × บิตต่อพิกเซล ÷ 8 = ไบต์" }
  ],

  /* Glossary — บท 1 */
  glossary: [
    { term: "Pixel", def: "พิกเซล — จุดเล็กที่สุดของภาพดิจิทัล มีตำแหน่ง (x,y) และค่าความเข้ม/สี" },
    { term: "Resolution", def: "ความละเอียด — จำนวนพิกเซลทั้งหมด = กว้าง × สูง" },
    { term: "Color Depth / Bit Depth", def: "ความลึกของสี — จำนวนบิตต่อพิกเซล → จำนวนสี = 2^บิต" },
    { term: "Binary Image", def: "ภาพขาวดำล้วน — พิกเซลเป็น 0 หรือ 1 เท่านั้น" },
    { term: "Grayscale Image", def: "ภาพระดับเทา — เก็บความเข้ม เช่น 8-bit = 0–255" },
    { term: "Color Image", def: "ภาพสี — 3 ช่อง (เช่น RGB/BGR) ต่อพิกเซล" },
    { term: "Multispectral Image", def: "ภาพหลายช่วงคลื่น (band) เกิน 3 แถบ — ใช้รีโมตเซนซิ่ง/ดาวเทียม" },
    { term: "Color Model", def: "ระบบ/วิธีอธิบายสี เช่น RGB, CMYK, HSL, HSV, LAB, YCrCb" },
    { term: "RGB", def: "แดง-เขียว-น้ำเงิน — additive (รวมแสง) ใช้กับจอภาพ" },
    { term: "BGR", def: "ลำดับสีที่ OpenCV ใช้ — Blue-Green-Red (สลับจาก RGB)" },
    { term: "CMYK", def: "Cyan-Magenta-Yellow-Black — subtractive (ลบแสง) ใช้กับการพิมพ์" },
    { term: "HSL", def: "Hue-Saturation-Lightness — Lightness 0–100% (ขาวที่ 100%)" },
    { term: "HSV", def: "Hue-Saturation-Value — Hue 0–360°, Saturation/Value 0–100%" },
    { term: "LAB", def: "Color space ที่แยกความสว่าง (L) ออกจากสี (a,b) — ใช้ในงานวิเคราะห์สี" },
    { term: "YCrCb", def: "Color space ที่แยก luminance (Y) กับ chrominance (Cr, Cb) — ใช้ในวิดีโอ" },
    { term: "Alpha Channel", def: "ช่องความโปร่งใส (32-bit RGBA) — 0 โปร่งใส · 255 ทึบ" },
    { term: "High Color", def: "16-bit (RGB565) = 65,536 สี" },
    { term: "True Color", def: "24-bit (RGB) = 16.7 ล้านสี — สีที่ตาคนแยกแทบไม่ออก" },
    { term: "Full HD / 1080p", def: "1920×1080 พิกเซล — มาตรฐานจอที่นิยมที่สุด" },
    { term: "4K UHD / 2160p", def: "3840×2160 พิกเซล — จอทีวี/มอนิเตอร์รุ่นใหม่" }
  ],

  /* Cheat sheet — บท 1 */
  cheat: [
    { term: "จำนวนพิกเซล", def: "กว้าง × สูง เช่น 1920×1080 = 2,073,600 ≈ 2.07 ล้าน" },
    { term: "จำนวนสี", def: "2^บิต — 1 bit = 2 · 2 bit = 4 · 4 bit = 16 · 8 bit = 256" },
    { term: "16-bit", def: "65,536 สี (High Color, RGB565: R5 G6 B5)" },
    { term: "24-bit", def: "16,777,216 สี (True Color, RGB 8+8+8)" },
    { term: "32-bit", def: "RGBA — RGB 24 + Alpha 8" },
    { term: "มาตรฐานจอ", def: "QQVGA 160×120 · QVGA 320×240 · VGA 640×480 · SVGA 800×600" },
    { term: "HD / FHD", def: "HD 1280×720 · Full HD 1920×1080 · QHD 2560×1440" },
    { term: "4K", def: "UHD 3840×2160 · DCI 4K 4096×2160 (Cinema)" },
    { term: "Binary", def: "0/1 เท่านั้น — ขาว-ดำล้วน" },
    { term: "Grayscale", def: "0–255 ระดับเทา (8-bit)" },
    { term: "RGB → BGR", def: "OpenCV ใช้ BGR — จอใช้ RGB" },
    { term: "CMYK", def: "งานพิมพ์ (Cyan-Magenta-Yellow-Black)" },
    { term: "HSL/HSV", def: "Hue 0–360° · Saturation % · Lightness/Value %" },
    { term: "ขนาดไฟล์", def: "W × H × บิต ÷ 8 = ไบต์" }
  ],

  /* ข้อสอบหลังเรียน 20 ข้อ — บท 1 (quick = exam ของบท 1) */
  quick: [
    {
      q: "ภาพ 1920×1080 มีพิกเซลทั้งหมดกี่พิกเซล?",
      options: ["2,073,600", "207,360", "20,736,000", "2,073,600,000"],
      correct: 0,
      explain: "จำนวนพิกเซล = กว้าง × สูง = 1920 × 1080 = 2,073,600 พิกเซล (≈ 2.07 ล้าน)",
      en: {
        q: "How many pixels does a 1920×1080 image have?",
        options: ["2,073,600", "207,360", "20,736,000", "2,073,600,000"],
        explain: "Total pixels = width × height = 1920 × 1080 = 2,073,600 (≈ 2.07 million)"
      },
      steps: [
        "จำสูตร: จำนวนพิกเซลทั้งหมด = Width × Height (กว้าง × สูง)",
        "แทนค่า: 1920 × 1080",
        "แยกคูณ: 1920 × 1000 = 1,920,000 และ 1920 × 80 = 153,600",
        "รวม: 1,920,000 + 153,600 = 2,073,600",
        "ตอบ: 2,073,600 พิกเซล"
      ]
    },
    {
      q: "Resolution มาตรฐานใดคือ Full HD (1080p)?",
      options: ["1280×720", "1920×1080", "3840×2160", "640×480"],
      correct: 1,
      explain: "Full HD / 1080p = 1920×1080 — 720p = 1280×720, 4K UHD = 3840×2160",
      en: {
        q: "Which standard resolution is Full HD (1080p)?",
        options: ["1280×720", "1920×1080", "3840×2160", "640×480"],
        explain: "Full HD / 1080p = 1920×1080 — 720p = 1280×720, 4K UHD = 3840×2160"
      },
      steps: [
        "จำตารางมาตรฐาน: QQVGA 160×120 · QVGA 320×240 · VGA 640×480 · SVGA 800×600",
        "ต่อ: HD/720p 1280×720 · Full HD/1080p 1920×1080 · QHD 2560×1440",
        "ท้ายสุด: 4K UHD 3840×2160 · DCI 4K 4096×2160",
        "ตัวเลข 1080p หมายถึงความสูง 1080 แถว → กว้าง 1920 → 1920×1080",
        "ตอบ: 1920×1080"
      ]
    },
    {
      q: "ภาพ 8-bit grayscale มีระดับสีเทาทั้งหมดกี่ระดับ?",
      options: ["8", "64", "256", "1024"],
      correct: 2,
      explain: "ระดับเทา = 2^บิต = 2^8 = 256 ระดับ (ค่า 0–255)",
      en: {
        q: "How many gray levels does an 8-bit grayscale image have?",
        options: ["8", "64", "256", "1024"],
        explain: "Gray levels = 2^bits = 2^8 = 256 levels (0–255)"
      },
      steps: [
        "จำสูตร: จำนวนค่าที่เป็นไปได้ = 2^บิต",
        "โจทย์ให้ 8 บิต → 2^8",
        "2^8 = 2×2×2×2×2×2×2×2 = 256",
        "ค่า pixel วิ่งจาก 0 (ดำ) ถึง 255 (ขาว) รวม 256 ค่า",
        "ตอบ: 256 ระดับ"
      ]
    },
    {
      q: "ภาพ 24-bit True Color มีสีทั้งหมดกี่สี?",
      options: ["256", "65,536", "16,777,216", "16 ล้านล้าน"],
      correct: 2,
      explain: "2^24 = 16,777,216 สี ≈ 16.7 ล้านสี — R/G/B ช่องละ 8 บิต",
      en: {
        q: "How many colors does a 24-bit True Color image have?",
        options: ["256", "65,536", "16,777,216", "16 trillion"],
        explain: "2^24 = 16,777,216 colors ≈ 16.7M — 8 bits per R/G/B channel"
      },
      steps: [
        "24 บิต = 3 ช่อง × 8 บิต (แดง เขียว น้ำเงิน)",
        "แต่ละช่องมี 2^8 = 256 ค่า",
        "รวม = 2^24 = 2^8 × 2^8 × 2^8",
        "2^24 = 16,777,216",
        "ตอบ: 16,777,216 สี (≈ 16.7 ล้าน)"
      ]
    },
    {
      q: "ภาพ Binary (1-bit) แต่ละพิกเซลมีค่าได้กี่ค่า?",
      options: ["1", "2", "8", "256"],
      correct: 1,
      explain: "2^1 = 2 ค่า คือ 0 (ดำ) หรือ 1 (ขาว) เท่านั้น",
      en: {
        q: "How many values can each pixel of a 1-bit binary image take?",
        options: ["1", "2", "8", "256"],
        explain: "2^1 = 2 values — 0 (black) or 1 (white) only"
      },
      steps: [
        "1 บิต เก็บเลขฐานสองได้ 1 หลัก คือ 0 หรือ 1",
        "จำนวนค่า = 2^1 = 2",
        "ภาพขาวดำล้วน (Binary) ใช้ 1 บิตต่อพิกเซล",
        "ตอบ: 2 ค่า"
      ]
    },
    {
      q: "RGB565 (High Color) ช่องสีเขียวใช้กี่บิต?",
      options: ["5", "6", "8", "16"],
      correct: 1,
      explain: "RGB565 = R 5 บิต + G 6 บิต + B 5 บิต = 16 บิต — เขียวได้มากเพราะตาคนไวต่อสีเขียว",
      en: {
        q: "How many bits does the green channel use in RGB565?",
        options: ["5", "6", "8", "16"],
        explain: "RGB565 = 5R + 6G + 5B = 16 bits — green gets more because the eye is most sensitive to green"
      },
      steps: [
        "เลข 565 = แดง 5 · เขียว 6 · น้ำเงิน 5",
        "รวม 5+6+5 = 16 บิต → เรียกว่า 16-bit High Color",
        "เหตุผลที่เขียว 6: เซลล์รับแสงในตาไวต่อสีเขียวมากสุด",
        "ตอบ: 6 บิต"
      ]
    },
    {
      q: "32-bit RGBA ตัว A ย่อมาจากอะไร และใช้ทำอะไร?",
      options: ["Alpha — เก็บความโปร่งใสของพิกเซล", "Amber — สีเหลืองอำพัน", "Average — ค่าเฉลี่ยสี", "Address — ตำแหน่งหน่วยความจำ"],
      correct: 0,
      explain: "A = Alpha (ความโปร่งใส) 8 บิต — 0 โปร่งใส · 255 ทึบ ใช้ซ้อนภาพ/ทำพื้นหลังโปร่งใส",
      en: {
        q: "In 32-bit RGBA, what does A stand for and what does it do?",
        options: ["Alpha — stores pixel transparency", "Amber — the amber color", "Average — mean color", "Address — memory address"],
        explain: "A = Alpha (transparency) 8 bits — 0 transparent · 255 opaque; used for overlaying/transparent backgrounds"
      },
      steps: [
        "RGBA = Red + Green + Blue + Alpha",
        "Alpha คือช่องความโปร่งใส (transparency) 8 บิต",
        "ค่า 0 = มองทะลุ (โปร่งใส) · 255 = ทึบแสง",
        "ใช้ในงานซ้อนภาพ (overlay), พื้นหลังโปร่งใส (PNG)",
        "ตอบ: Alpha — เก็บความโปร่งใส"
      ]
    },
    {
      q: "ภาพประเภทใดที่แต่ละพิกเซลเป็น 0 หรือ 1 เท่านั้น?",
      options: ["Binary Image", "Grayscale Image", "Color Image", "Multispectral Image"],
      correct: 0,
      explain: "Binary Image (ภาพขาวดำล้วน) — 1 บิตต่อพิกเซล ใช้แยก object ออกจาก background",
      en: {
        q: "Which image type has pixels that are only 0 or 1?",
        options: ["Binary Image", "Grayscale Image", "Color Image", "Multispectral Image"],
        explain: "Binary Image — 1 bit per pixel, used to separate objects from the background"
      },
      steps: [
        "ไล่ทีละประเภท: Binary = 1 บิต (0/1) · Grayscale = 8 บิต (0–255)",
        "Color = 3 ช่อง (RGB/BGR) · Multispectral = หลาย band",
        "เฉพาะ Binary เท่านั้นที่พิกเซลเป็น 0 หรือ 1 ล้วน",
        "ตอบ: Binary Image"
      ]
    },
    {
      q: "OpenCV อ่านภาพสีมาโดยเรียงช่องสีแบบใด?",
      options: ["RGB", "BGR", "CMYK", "HSV"],
      correct: 1,
      explain: "OpenCV ใช้ BGR (Blue-Green-Red) — ต่างจาก RGB ที่เราเคยชิน ถ้าไม่แปลงจะเห็นสีสลับกัน",
      en: {
        q: "In what order does OpenCV store color channels?",
        options: ["RGB", "BGR", "CMYK", "HSV"],
        explain: "OpenCV uses BGR (Blue-Green-Red) — opposite of the familiar RGB; without converting, colors look swapped"
      },
      steps: [
        "OpenCV กำเนิดจาก C/C++ โดยเรียงช่องเป็น BGR",
        "พิกเซล [B, G, R] เช่น [50, 120, 200] = น้ำเงิน 50 · เขียว 120 · แดง 200",
        "ถ้าโชว์ด้วย Matplotlib (ซึ่งใช้ RGB) ต้อง cvtColor ก่อน",
        "ตอบ: BGR"
      ]
    },
    {
      q: "ภาพ 640×480 มีพิกเซลทั้งหมดกี่พิกเซล?",
      options: ["307,200", "3,072,000", "30,720", "3,072"],
      correct: 0,
      explain: "640 × 480 = 307,200 พิกเซล — VGA resolution",
      en: {
        q: "How many pixels does a 640×480 image have?",
        options: ["307,200", "3,072,000", "30,720", "3,072"],
        explain: "640 × 480 = 307,200 pixels — VGA resolution"
      },
      steps: [
        "สูตร: กว้าง × สูง",
        "640 × 480 = 640 × 4.8 × 100",
        "640 × 480 = 307,200",
        "ตอบ: 307,200 พิกเซล"
      ]
    },
    {
      q: "พิกเซลของภาพ Grayscale 8-bit มีค่าอยู่ในช่วงใด?",
      options: ["0–255", "0–1", "0–16", "1–1024"],
      correct: 0,
      explain: "8-bit เก็บค่า 0–255 — 0 = ดำ, 255 = ขาว, ค่ากลาง = เทา",
      en: {
        q: "What range of values does an 8-bit grayscale pixel have?",
        options: ["0–255", "0–1", "0–16", "1–1024"],
        explain: "8 bits store 0–255 — 0 = black, 255 = white, middle values are gray"
      },
      steps: [
        "8 บิตเก็บเลขฐานสองได้ 8 หลัก = 0b00000000 ถึง 0b11111111",
        "ค่าเลขฐานสิบเท่ากับ 0 ถึง 255",
        "0 = ดำ · 255 = ขาว · 128 ≈ เทา 50%",
        "ตอบ: 0–255"
      ]
    },
    {
      q: "ภาพ 2-bit มีทั้งหมดกี่สี?",
      options: ["2", "4", "8", "16"],
      correct: 1,
      explain: "2^2 = 4 สี (เช่น ดำ เทาเข้ม เทาอ่อน ขาว)",
      en: {
        q: "How many colors does a 2-bit image have?",
        options: ["2", "4", "8", "16"],
        explain: "2^2 = 4 colors (e.g., black, dark gray, light gray, white)"
      },
      steps: [
        "จำนวนสี = 2^บิต",
        "2 บิต → 2^2",
        "2^2 = 2 × 2 = 4",
        "ตอบ: 4 สี"
      ]
    },
    {
      q: "4K UHD (2160p) มี resolution เท่าไร?",
      options: ["1920×1080", "2560×1440", "3840×2160", "4096×2160"],
      correct: 2,
      explain: "4K UHD / 2160p = 3840×2160 (จอทีวี/มอนิเตอร์) — ส่วน 4096×2160 คือ DCI 4K ของโรงหนัง",
      en: {
        q: "What is the resolution of 4K UHD (2160p)?",
        options: ["1920×1080", "2560×1440", "3840×2160", "4096×2160"],
        explain: "4K UHD / 2160p = 3840×2160 (TV/monitor); 4096×2160 is DCI 4K for cinema"
      },
      steps: [
        "4K UHD มีความสูง 2160 แถว (2160p)",
        "อัตราส่วน 16:9 → กว้าง = 2160 × 16/9 = 3840",
        "ดังนั้น 3840×2160",
        "ระวัง DCI 4K = 4096×2160 (โรงหนัง) ตัวเลขต่างกัน",
        "ตอบ: 3840×2160"
      ]
    },
    {
      q: "ภาพ 16-bit High Color มีกี่สี?",
      options: ["65,536", "16,777,216", "256", "32,768"],
      correct: 0,
      explain: "2^16 = 65,536 สี — ใช้ในจอรุ่นเก่า/มือถือยุคแรก (RGB565)",
      en: {
        q: "How many colors does a 16-bit High Color image have?",
        options: ["65,536", "16,777,216", "256", "32,768"],
        explain: "2^16 = 65,536 colors — used by old screens/early phones (RGB565)"
      },
      steps: [
        "16 บิต → 2^16",
        "2^16 = 2^10 × 2^6 = 1024 × 64",
        "1024 × 64 = 65,536",
        "ตอบ: 65,536 สี"
      ]
    },
    {
      q: "ภาพ Multispectral ต่างจากภาพสี RGB อย่างไร?",
      options: [
        "เก็บหลายช่วงคลื่น (band) เกิน 3 แถบ เช่น ภาพถ่ายดาวเทียม",
        "เก็บได้แค่สีเทาเท่านั้น",
        "ใช้บิตน้อยกว่าภาพ RGB",
        "ไม่มีพิกเซล"
      ],
      correct: 0,
      explain: "Multispectral เก็บหลาย band (เช่น 4–12 ช่วงคลื่น) เกิน RGB 3 แถบ — ใช้กับดาวเทียม/รีโมตเซนซิ่ง",
      en: {
        q: "How is a Multispectral image different from an RGB color image?",
        options: [
          "It stores many wavelength bands (more than 3), e.g. satellite imagery",
          "It only stores grayscale",
          "It uses fewer bits than RGB",
          "It has no pixels"
        ],
        explain: "Multispectral stores many bands (e.g. 4–12 wavelengths) beyond RGB's 3 — used in satellites/remote sensing"
      },
      steps: [
        "ภาพ RGB มี 3 ช่อง (แดง เขียว น้ำเงิน)",
        "Multispectral = หลายช่วงคลื่น (band) เช่น 4, 8, 12 แถบ",
        "แต่ละ band เก็บความเข้มของช่วงคลื่นเฉพาะ (รวมถึง infrared)",
        "ใช้ในดาวเทียม การเกษตร ตรวจสิ่งแวดล้อม",
        "ตอบ: เก็บหลาย band เกิน 3 แถบ"
      ]
    },
    {
      q: "Hue ในระบบ HSV วัดค่าเป็นหน่วยใด?",
      options: ["องศา 0–360", "เปอร์เซ็นต์ 0–100", "บิต 0–8", "พิกเซล 0–255"],
      correct: 0,
      explain: "Hue = เฉดสี วัดเป็นองศา 0–360° (0° แดง · 120° เขียว · 240° น้ำเงิน)",
      en: {
        q: "What unit is Hue measured in within HSV?",
        options: ["Degrees 0–360", "Percent 0–100", "Bits 0–8", "Pixels 0–255"],
        explain: "Hue = color shade, measured in degrees 0–360° (0° red · 120° green · 240° blue)"
      },
      steps: [
        "HSV มี 3 ค่า: Hue · Saturation · Value",
        "Hue บอกว่าเป็น 'สีอะไร' — วัดเป็นองศาบนวงล้อสี 0–360°",
        "0° = แดง · 120° = เขียว · 240° = น้ำเงิน",
        "ตอบ: องศา 0–360"
      ]
    },
    {
      q: "ภาพสี 8 บิตต่อช่อง (RGB) 1 พิกเซลใช้พื้นที่กี่บิต?",
      options: ["8", "16", "24", "32"],
      correct: 2,
      explain: "3 ช่อง × 8 บิต = 24 บิตต่อพิกเซล — ภาพนี้เรียกว่า 24-bit True Color",
      en: {
        q: "How many bits does one pixel need in an 8-bit-per-channel RGB image?",
        options: ["8", "16", "24", "32"],
        explain: "3 channels × 8 bits = 24 bits per pixel — a 24-bit True Color image"
      },
      steps: [
        "1 พิกเซลสี = 3 ช่อง (R, G, B)",
        "แต่ละช่อง 8 บิต → 3 × 8 = 24",
        "24 บิต/พิกเซล = 16.7 ล้านสี",
        "ตอบ: 24 บิต"
      ]
    },
    {
      q: "Resolution ข้อใดคือ QVGA?",
      options: ["160×120", "320×240", "640×480", "1280×720"],
      correct: 1,
      explain: "QVGA = 320×240 (¼ ของ VGA 640×480) — ใช้ในกล้องมุมกว้าง/จอเล็ก",
      en: {
        q: "Which resolution is QVGA?",
        options: ["160×120", "320×240", "640×480", "1280×720"],
        explain: "QVGA = 320×240 (a quarter of VGA 640×480) — used in wide-angle cams/small screens"
      },
      steps: [
        "จำลำดับ: QQVGA 160×120 → QVGA 320×240 → VGA 640×480",
        "QVGA = Quarter VGA = ครึ่งหนึ่งทั้ง 2 ด้านของ VGA",
        "VGA 640×480 ÷ 2 = 320×240",
        "ตอบ: 320×240"
      ]
    },
    {
      q: "ถ้าภาพใช้ 5 บิตต่อพิกเซล จะมีระดับสีเทากี่ระดับ?",
      options: ["16", "32", "64", "256"],
      correct: 1,
      explain: "2^5 = 32 ระดับ",
      en: {
        q: "If an image uses 5 bits per pixel, how many gray levels are there?",
        options: ["16", "32", "64", "256"],
        explain: "2^5 = 32 levels"
      },
      steps: [
        "จำนวนระดับ = 2^บิต",
        "5 บิต → 2^5",
        "2^5 = 2 × 2 × 2 × 2 × 2 = 32",
        "ตอบ: 32 ระดับ"
      ]
    },
    {
      q: "ภาพ 8-bit grayscale ขนาด 100×100 ใช้หน่วยความจำกี่ไบต์?",
      options: ["800", "8,000", "10,000", "80,000"],
      correct: 2,
      explain: "100 × 100 พิกเซล × 1 ไบต์ (8 บิต) = 10,000 ไบต์",
      en: {
        q: "How many bytes does an 8-bit grayscale 100×100 image need?",
        options: ["800", "8,000", "10,000", "80,000"],
        explain: "100 × 100 pixels × 1 byte (8 bits) = 10,000 bytes"
      },
      steps: [
        "จำนวนพิกเซล = 100 × 100 = 10,000 พิกเซล",
        "8 บิต = 1 ไบต์ ต่อพิกเซล",
        "10,000 × 1 ไบต์ = 10,000 ไบต์",
        "ตอบ: 10,000 ไบต์"
      ]
    }
  ],

  /* ========================================================================
     CHAPTER 2 — OpenCV Basics (เริ่มต้น OpenCV)
     ======================================================================== */
  ch2: {
    title: "OpenCV Basics (เริ่มต้น OpenCV)",
    thai: "เริ่มต้น OpenCV",
    en: "OpenCV Basics",

    slides: [
      { title: "Cover — เริ่มต้น OpenCV", short: "เปิดบทเรียน" },
      { title: "เราจะเรียนอะไรบ้าง", short: "ภาพรวมบทเรียน" },
      { title: "OpenCV คืออะไร — รู้จัก OpenCV ก่อนเริ่ม", short: "OpenCV คืออะไร" },
      { title: "ภาพใน OpenCV คือ NumPy Array", short: "ภาพ = Array" },
      { title: "อ่านภาพ — cv2.imread()", short: "cv2.imread" },
      { title: "img.shape — (Height, Width, Channels)", short: "img.shape" },
      { title: "img.dtype — uint8 (0–255)", short: "img.dtype" },
      { title: "แสดงภาพแบบที่ 1 — cv2.imshow() + waitKey()", short: "imshow + waitKey" },
      { title: "แสดงภาพแบบที่ 2 — Matplotlib plt.imshow()", short: "plt.imshow" },
      { title: "จัดหน้าต่างพล็อต — subplot · title · colorbar", short: "subplot · colorbar" },
      { title: "พล็อตเสริม — hist · plot · text · axis", short: "hist · plot · text" },
      { title: "BGR vs RGB — กับดักสีสลับ", short: "BGR vs RGB" },
      { title: "แปลงสี — cv2.cvtColor()", short: "cvtColor" },
      { title: "เข้าถึงพิกเซล — img[y, x]", short: "img[y, x]" },
      { title: "แยก Channel — b, g, r = img[y, x]", short: "แยก Channel" },
      { title: "เปลี่ยนค่าพิกเซล — img[y, x] = [B, G, R]", short: "เปลี่ยนพิกเซล" },
      { title: "เปลี่ยนทั้งโซน — img[y1:y2, x1:x2]", short: "เปลี่ยนทั้งโซน" },
      { title: "ROI คืออะไร (Region Of Interest)", short: "ROI คืออะไร" },
      { title: "ตัด ROI — roi = img[y1:y2, x1:x2]", short: "ตัด ROI" },
      { title: "แสดง + บันทึก ROI", short: "แสดง/บันทึก ROI" },
      { title: "รวมโค้ดตัวอย่างเต็ม (อ่าน → ROI → แสดง → บันทึก)", short: "โค้ดเต็ม" },
      { title: "ROI ในงานจริง — OCR · ทะเบียนรถ · ใบหน้า", short: "ROI งานจริง" },
      { title: "ROI ลดงานประมวลผล — 1920×1080 → 300×300", short: "ROI ลดงาน" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. รู้จัก OpenCV", topics: [3, 4, 5, 6, 7] },
      { label: "2. แสดงภาพ", topics: [8, 9, 10, 11] },
      { label: "3. BGR vs RGB", topics: [12, 13] },
      { label: "4. จัดการ Pixel", topics: [14, 15, 16, 17] },
      { label: "5. ROI (Region Of Interest)", topics: [18, 19, 20, 21, 22, 23] },
      { label: "ทบทวนและฝึกฝน", topics: [24, 25, 26, 27, 28, 29, 30] }
    ],

    quiz: [
      {
        q: "คำสั่งใดใช้อ่านภาพใน OpenCV?",
        options: ["cv2.imshow()", "cv2.imwrite()", "cv2.imreadall()", "cv2.imread()"],
        correct: 3,
        explain: "cv2.imread(\"image.jpg\") อ่านไฟล์ภาพเข้ามาเป็น NumPy array"
      },
      {
        q: "img.shape ของภาพ 640×480 สี (RGB) คืนค่าอะไร?",
        options: ["(3, 640, 480)", "(480, 640)", "(640, 480, 3)", "(480, 640, 3)"],
        correct: 2,
        explain: "shape = (Height, Width, Channels) = (480, 640, 3) — แถว (y) มาก่อนเสมอ"
      },
      {
        q: "img.dtype ของภาพปกติคืออะไร?",
        options: ["uint16", "uint8", "float32", "int64"],
        correct: 1,
        explain: "uint8 — เก็บค่าพิกเซล 0–255 (8 บิต ไม่มีเครื่องหมาย)"
      },
      {
        q: "คำสั่งคู่ใดที่ต้องใช้ด้วยกันในการแสดงภาพแบบ OpenCV?",
        options: ["cv2.imshow() + cv2.waitKey()", "cv2.imread() + cv2.resize()", "cv2.cvtColor() + cv2.threshold()", "plt.imshow() + plt.waitKey()"],
        correct: 0,
        explain: "imshow แสดงภาพ แต่ต้องตามด้วย waitKey(0) เพื่อรอให้หน้าต่างค้างไว้"
      },
      {
        q: "OpenCV เก็บภาพสีเรียงช่องแบบใด?",
        options: ["BGR", "GRB", "RBG", "RGB"],
        correct: 3,
        explain: "OpenCV ใช้ BGR (Blue-Green-Red) — ตรงข้ามกับ RGB ที่คุ้นเคย"
      },
      {
        q: "แปลง BGR → RGB ใช้คำสั่งใด?",
        options: ["cv2.bgr2rgb(img)", "img = img[..., ::-1] เท่านั้น", "cv2.cvtColor(img, cv2.COLOR_BGR2RGB)", "cv2.convert(img, BGR2RGB)"],
        correct: 2,
        explain: "cvtColor + flag COLOR_BGR2RGB เป็นวิธีมาตรฐาน (สลับช่องด้วย slice ก็ได้เหมือนกัน)"
      },
      {
        q: "เข้าถึงพิกเซลแถว 100 คอลัมน์ 200 เขียนยังไง?",
        options: ["img[100][200][0] เฉพาะ", "img[100, 200]", "img[200, 100]", "img(100, 200)"],
        correct: 1,
        explain: "ลำดับเป็น [y, x] = [แถว, คอลัมน์] = img[100, 200] (y มาก่อน!)"
      },
      {
        q: "ROI ย่อมาจากอะไร?",
        options: ["Region Of Interest", "Range Of Image", "Region Of Intensity", "Rect Of Interest"],
        correct: 0,
        explain: "Region Of Interest — บริเวณที่เราสนใจในภาพ ใช้ตัดเฉพาะส่วนที่ต้องการประมวลผล"
      },
      {
        q: "ตัด ROI แถว 100–300, คอลัมน์ 200–500 เขียนยังไง?",
        options: ["roi = img[200:500, 100:300]", "roi = img[100:200, 300:500]", "roi = img[100, 300, 200, 500]", "roi = img[100:300, 200:500]"],
        correct: 3,
        explain: "img[y1:y2, x1:x2] — y ก่อน x เสมอ: img[100:300, 200:500]"
      },
      {
        q: "คำสั่งใดบันทึกภาพลงไฟล์?",
        options: ["cv2.save()", "cv2.write()", "cv2.imwrite()", "cv2.imsave()"],
        correct: 2,
        explain: "cv2.imwrite(\"roi.jpg\", roi) — บันทึกภาพเป็นไฟล์ (นามสกุลกำหนดรูปแบบ)"
      }
    ],

    exam: [
      {
        q: "img.shape ของภาพ 720×1280 สี จะคืนค่าอะไร?",
        options: ["(1280, 720, 3)", "(3, 720, 1280)", "(720, 1280)", "(720, 1280, 3)"],
        correct: 3,
        explain: "shape = (Height, Width, Channels) = (720, 1280, 3) — ความสูง (720 แถว) มาก่อน",
        en: {
          q: "What does img.shape return for a 720×1280 color image?",
          options: ["(1280, 720, 3)", "(3, 720, 1280)", "(720, 1280)", "(720, 1280, 3)"],
          explain: "shape = (Height, Width, Channels) = (720, 1280, 3) — height (720 rows) comes first"
        },
        steps: [
          "จำสูตร: img.shape = (Height, Width, Channels)",
          "ความสูง (Height) = จำนวนแถว = 720 → ตัวแรก",
          "ความกว้าง (Width) = จำนวนคอลัมน์ = 1280 → ตัวที่สอง",
          "ช่องสี (Channels) = 3 (BGR)",
          "ตอบ: (720, 1280, 3)"
        ]
      },
      {
        q: "ค่าตัวแรกของ img.shape คืออะไร?",
        options: ["Channels — จำนวนช่องสี", "Depth — ความลึกบิต", "Height — จำนวนแถว (y)", "Width — จำนวนคอลัมน์ (x)"],
        correct: 2,
        explain: "ตัวแรก = Height (แถว/พิกัด y) — ตามด้วย Width แล้ว Channels",
        en: {
          q: "What is the first value of img.shape?",
          options: ["Channels — number of color channels", "Depth — bit depth", "Height — number of rows (y)", "Width — number of columns (x)"],
          explain: "First = Height (rows / y) — then Width, then Channels"
        },
        steps: [
          "shape มี 3 ค่า: (Height, Width, Channels)",
          "Height = จำนวนแถว = พิกัด y",
          "Width = จำนวนคอลัมน์ = พิกัด x",
          "ตอบ: Height — จำนวนแถว (y)"
        ]
      },
      {
        q: "img.dtype = uint8 เก็บค่าพิกเซลได้ช่วงใด?",
        options: ["0–65,535", "0–255", "0–1", "−128 ถึง 127"],
        correct: 1,
        explain: "uint8 = unsigned 8-bit → 0–255 — เป็นค่าความเข้มมาตรฐานของภาพ",
        en: {
          q: "With img.dtype = uint8, what range can a pixel have?",
          options: ["0–65,535", "0–255", "0–1", "−128 to 127"],
          explain: "uint8 = unsigned 8-bit → 0–255 — the standard intensity range of images"
        },
        steps: [
          "uint8 = unsigned integer 8 bit",
          "unsigned = ไม่มีค่าลบ → เริ่มที่ 0",
          "8 บิต = 0 ถึง 2^8−1 = 255",
          "ตอบ: 0–255"
        ]
      },
      {
        q: "คำสั่งใดใช้อ่านภาพเข้าโปรแกรม?",
        options: ["cv2.imread(\"image.jpg\")", "cv2.imshow(\"image.jpg\")", "cv2.read(\"image.jpg\")", "cv2.load(\"image.jpg\")"],
        correct: 0,
        explain: "cv2.imread() อ่านไฟล์ภาพเป็น array — imshow คือการแสดงผล ไม่ใช่อ่าน",
        en: {
          q: "Which command reads an image into the program?",
          options: ["cv2.imread(\"image.jpg\")", "cv2.imshow(\"image.jpg\")", "cv2.read(\"image.jpg\")", "cv2.load(\"image.jpg\")"],
          explain: "cv2.imread() loads an image file into an array — imshow displays, it does not read"
        },
        steps: [
          "คำสั่งอ่านภาพ = imread (image + read)",
          "ใส่ path ของไฟล์ เช่น cv2.imread(\"image.jpg\")",
          "ผลลัพธ์เป็น NumPy array เก็บในตัวแปร img",
          "ตอบ: cv2.imread(\"image.jpg\")"
        ]
      },
      {
        q: "cv2.imshow() ต้องตามด้วยคำสั่งใดเสมอ เพื่อให้หน้าต่างไม่ปิดทันที?",
        options: ["cv2.sleep()", "cv2.pause()", "cv2.hold()", "cv2.waitKey()"],
        correct: 3,
        explain: "imshow + waitKey(0) — waitKey รอรับคีย์บอร์ดก่อนปิดหน้าต่าง",
        en: {
          q: "Which command must follow cv2.imshow() so the window does not close instantly?",
          options: ["cv2.sleep()", "cv2.pause()", "cv2.hold()", "cv2.waitKey()"],
          explain: "imshow + waitKey(0) — waitKey waits for a keyboard press before the window closes"
        },
        steps: [
          "imshow แสดงภาพบนหน้าต่าง แต่โปรแกรมจะจบแล้วปิดทันทีถ้าไม่มีอะไรค้าง",
          "cv2.waitKey(0) บอกให้โปรแกรมรอรับการกดแป้น",
          "กดปุ่มใดก็ได้ → ผ่านไปต่อ",
          "ตอบ: cv2.waitKey()"
        ]
      },
      {
        q: "cv2.waitKey(0) หมายความว่าอย่างไร?",
        options: ["รอให้ภาพโหลดเสร็จ", "ปิดหน้าต่างทันที", "รอจนกว่าจะกดปุ่มใดก็ได้", "รอ 0 มิลลิวินาทีแล้วปิด"],
        correct: 2,
        explain: "waitKey(0) = รอคีย์บอร์ดอย่างไม่มีกำหนด — ใส่ตัวเลข > 0 เช่น 5000 = รอ 5 วินาที",
        en: {
          q: "What does cv2.waitKey(0) mean?",
          options: ["Wait for the image to load", "Close the window immediately", "Wait until any key is pressed", "Wait 0 ms then close"],
          explain: "waitKey(0) waits for a keyboard press indefinitely — a value > 0 like 5000 waits 5 seconds"
        },
        steps: [
          "waitKey(ms) — ตัวเลขคือมิลลิวินาทีที่รอ",
          "waitKey(0) = รอไม่จำกัดเวลา จนกว่าจะกดปุ่ม",
          "ใช้คู่กับ imshow เสมอเพื่อดูภาพค้างไว้",
          "ตอบ: รอจนกว่าจะกดปุ่มใดก็ได้"
        ]
      },
      {
        q: "OpenCV อ่านภาพสีมาเรียงช่องแบบใด?",
        options: ["HSV", "BGR", "RGB", "CMYK"],
        correct: 1,
        explain: "OpenCV ใช้ BGR (Blue-Green-Red) — สลับลำดับกับ RGB ที่คุ้นเคย",
        en: {
          q: "In what channel order does OpenCV read color images?",
          options: ["HSV", "BGR", "RGB", "CMYK"],
          explain: "OpenCV uses BGR (Blue-Green-Red) — reversed from the familiar RGB"
        },
        steps: [
          "OpenCV สร้างมาจาก C/C++ ดั้งเดิมที่ใช้ BGR",
          "ทุกพิกเซลเรียงเป็น [B, G, R]",
          "ถ้าไม่รู้จะงงว่าทำไมสีสลับกันเวลาโชว์ด้วย Matplotlib",
          "ตอบ: BGR"
        ]
      },
      {
        q: "แปลงภาพจาก BGR เป็น RGB ใช้คำสั่งใด?",
        options: ["cv2.cvtColor(img, cv2.COLOR_BGR2RGB)", "cv2.convert(img, cv2.BGR_RGB)", "cv2.bgr2rgb(img)", "cv2.RGB(img, BGR=True)"],
        correct: 0,
        explain: "cv2.cvtColor(ภาพ, flag) — flag ที่ถูกคือ cv2.COLOR_BGR2RGB",
        en: {
          q: "Which command converts an image from BGR to RGB?",
          options: ["cv2.cvtColor(img, cv2.COLOR_BGR2RGB)", "cv2.convert(img, cv2.BGR_RGB)", "cv2.bgr2rgb(img)", "cv2.RGB(img, BGR=True)"],
          explain: "cv2.cvtColor(image, flag) — the correct flag is cv2.COLOR_BGR2RGB"
        },
        steps: [
          "จำไว้ว่า OpenCV = BGR, Matplotlib = RGB",
          "คำสั่งแปลงสีทั่วไป = cv2.cvtColor(ภาพ, flag)",
          "flag สำหรับ BGR→RGB คือ cv2.COLOR_BGR2RGB",
          "ตอบ: cv2.cvtColor(img, cv2.COLOR_BGR2RGB)"
        ]
      },
      {
        q: "เข้าถึงพิกเซลแถว 100 คอลัมน์ 200 เขียนอย่างไร?",
        options: ["img[200, 100]", "img(100, 200)", "img[100][200, 0] เฉพาะ", "img[100, 200]"],
        correct: 3,
        explain: "ลำดับ [y, x] = [แถว, คอลัมน์] → img[100, 200] (y มาก่อน x เสมอ)",
        en: {
          q: "How do you access the pixel at row 100, column 200?",
          options: ["img[200, 100]", "img(100, 200)", "img[100][200, 0] only", "img[100, 200]"],
          explain: "Order is [y, x] = [row, column] → img[100, 200] (y always comes before x)"
        },
        steps: [
          "ใน OpenCV พิกัดเป็น [y, x] ไม่ใช่ [x, y] เหมือนคณิต",
          "y = แถว (row) = 100 → เขียนตัวแรก",
          "x = คอลัมน์ (column) = 200 → เขียนตัวที่สอง",
          "ตอบ: img[100, 200]"
        ]
      },
      {
        q: "b, g, r = img[100, 200] — ตัวแปร b คือค่าของสีอะไร?",
        options: ["แดง (Red)", "เทา (Gray)", "น้ำเงิน (Blue)", "เขียว (Green)"],
        correct: 2,
        explain: "OpenCV เรียง BGR → b = Blue, g = Green, r = Red",
        en: {
          q: "In b, g, r = img[100, 200], what color is b?",
          options: ["Red", "Gray", "Blue", "Green"],
          explain: "OpenCV stores BGR → b = Blue, g = Green, r = Red"
        },
        steps: [
          "OpenCV เก็บช่องสีเรียงเป็น B-G-R",
          "destructure b, g, r = img[y, x] แยก 3 ช่องออกมา",
          "b ตัวแรก = Blue (น้ำเงิน)",
          "ตอบ: น้ำเงิน (Blue)"
        ]
      },
      {
        q: "อยากได้เฉพาะช่องสีน้ำเงินของพิกเซล (100, 200) ใช้คำสั่งใด?",
        options: ["img[0, 100, 200]", "img[100, 200, 0]", "img[100, 200, 1]", "img[100, 200, 2]"],
        correct: 1,
        explain: "ดัชนีช่อง: 0 = B, 1 = G, 2 = R → น้ำเงิน = img[100, 200, 0]",
        en: {
          q: "To get only the blue channel of pixel (100, 200), which command?",
          options: ["img[0, 100, 200]", "img[100, 200, 0]", "img[100, 200, 1]", "img[100, 200, 2]"],
          explain: "Channel index: 0 = B, 1 = G, 2 = R → blue = img[100, 200, 0]"
        },
        steps: [
          "จำดัชนีช่อง: 0 = Blue · 1 = Green · 2 = Red",
          "พิกเซล (100, 200) → เขียน img[100, 200, ?]",
          "น้ำเงิน = ช่อง 0 → img[100, 200, 0]",
          "ตอบ: img[100, 200, 0]"
        ]
      },
      {
        q: "อยากเปลี่ยนพิกเซล (100, 200) ให้เป็นสีแดงบริสุทธิ์ เขียนยังไง?",
        options: ["img[100, 200] = [0, 0, 255]", "img[100, 200] = [255, 0, 0]", "img[100, 200] = [0, 255, 0]", "img[200, 100] = [0, 0, 255]"],
        correct: 0,
        explain: "BGR: แดง = [B=0, G=0, R=255] → img[100, 200] = [0, 0, 255]",
        en: {
          q: "How do you set pixel (100, 200) to pure red?",
          options: ["img[100, 200] = [0, 0, 255]", "img[100, 200] = [255, 0, 0]", "img[100, 200] = [0, 255, 0]", "img[200, 100] = [0, 0, 255]"],
          explain: "In BGR, red = [B=0, G=0, R=255] → img[100, 200] = [0, 0, 255]"
        },
        steps: [
          "จำลำดับ BGR: [Blue, Green, Red]",
          "สีแดง = ช่อง R เต็ม 255, B กับ G เป็น 0",
          "เรียงเป็น BGR → [0, 0, 255]",
          "ตำแหน่ง (y=100, x=200) → img[100, 200]",
          "ตอบ: img[100, 200] = [0, 0, 255]"
        ]
      },
      {
        q: "ภาพที่อ่านด้วย cv2.imread() เก็บอยู่ในรูปแบบใด?",
        options: ["Python List", "Dictionary", "String", "NumPy Array"],
        correct: 3,
        explain: "cv2.imread() คืน NumPy array — ทำให้ใช้ numpy ต่อยอดได้ทุกอย่าง",
        en: {
          q: "What data structure does cv2.imread() return?",
          options: ["Python List", "Dictionary", "String", "NumPy Array"],
          explain: "cv2.imread() returns a NumPy array — everything else builds on that"
        },
        steps: [
          "OpenCV ทำงานบน NumPy array",
          "imread อ่านไฟล์ → กลายเป็น array 3 มิติ (H, W, C)",
          "ใช้ numpy จัดการพิกเซลได้โดยตรง",
          "ตอบ: NumPy Array"
        ]
      },
      {
        q: "plt.imshow(img) คือการแสดงภาพด้วยไลบรารีใด?",
        options: ["Seaborn", "Plotly", "Matplotlib", "Pillow"],
        correct: 2,
        explain: "Matplotlib (plt) — นิยมใช้ใน Jupyter/Colab แสดงภาพพร้อมกราฟได้ในที่เดียว",
        en: {
          q: "plt.imshow(img) displays images using which library?",
          options: ["Seaborn", "Plotly", "Matplotlib", "Pillow"],
          explain: "Matplotlib (plt) — popular in Jupyter/Colab to show images and plots together"
        },
        steps: [
          "plt = matplotlib.pyplot",
          "plt.imshow(img) แสดงภาพในกรอบพล็อต",
          "ต้อง cvtColor BGR→RGB ก่อน ไม่งั้นสีเพี้ยน",
          "ตอบ: Matplotlib"
        ]
      },
      {
        q: "ภาพ 640×480 สี มี img.shape เท่ากับข้อใด?",
        options: ["(480, 640)", "(480, 640, 3)", "(640, 480, 3)", "(3, 640, 480)"],
        correct: 1,
        explain: "(Height, Width, Channels) = (480, 640, 3) — ความสูง 480 มาก่อน",
        en: {
          q: "What is img.shape for a 640×480 color image?",
          options: ["(480, 640)", "(480, 640, 3)", "(640, 480, 3)", "(3, 640, 480)"],
          explain: "(Height, Width, Channels) = (480, 640, 3) — height 480 comes first"
        },
        steps: [
          "จำสูตร (Height, Width, Channels)",
          "Height = 480 (แถว) → ตัวแรก",
          "Width = 640 (คอลัมน์) → ตัวที่สอง",
          "Channels = 3 → ตัวที่สาม",
          "ตอบ: (480, 640, 3)"
        ]
      },
      {
        q: "ROI ย่อมาจากอะไร?",
        options: ["Region Of Interest", "Range Of Image", "Region Of Intensity", "Rectangular Of Image"],
        correct: 0,
        explain: "Region Of Interest — บริเวณที่เราสนใจในภาพ ตัดมาเฉพาะส่วนเพื่อประมวลผล",
        en: {
          q: "What does ROI stand for?",
          options: ["Region Of Interest", "Range Of Image", "Region Of Intensity", "Rectangular Of Image"],
          explain: "Region Of Interest — the area we care about; crop it out for processing"
        },
        steps: [
          "ROI = Region Of Interest",
          "คือการเลือกเฉพาะบริเวณที่เราสนใจ",
          "ตัดด้วย slicing: roi = img[y1:y2, x1:x2]",
          "ตอบ: Region Of Interest"
        ]
      },
      {
        q: "roi = img[100:300, 200:500] ครอบคลุมพื้นที่ใด?",
        options: ["x = 100–300, y = 200–500", "y = 100–200, x = 300–500", "x = 100–200, y = 300–500", "y = 100–300, x = 200–500"],
        correct: 3,
        explain: "img[y1:y2, x1:x2] → y = 100–300, x = 200–500 (y มาก่อนเสมอ)",
        en: {
          q: "Which area does roi = img[100:300, 200:500] cover?",
          options: ["x = 100–300, y = 200–500", "y = 100–200, x = 300–500", "x = 100–200, y = 300–500", "y = 100–300, x = 200–500"],
          explain: "img[y1:y2, x1:x2] → y = 100–300, x = 200–500 (y always first)"
        },
        steps: [
          "รูปแบบ slicing: img[y1:y2, x1:x2]",
          "ตำแหน่งแรก (100:300) คือ y (แถว)",
          "ตำแหน่งที่สอง (200:500) คือ x (คอลัมน์)",
          "ตอบ: y = 100–300, x = 200–500"
        ]
      },
      {
        q: "cv2.destroyAllWindows() ใช้ทำอะไร?",
        options: ["ปิดโปรแกรม Python", "เคลียร์ console", "ปิดหน้าต่างทั้งหมดที่ imshow สร้างไว้", "ลบภาพออกจากหน่วยความจำ"],
        correct: 2,
        explain: "destroyAllWindows() ปิดหน้าต่างแสดงภาพทุกอัน — ใช้คู่กับ imshow/waitKey",
        en: {
          q: "What does cv2.destroyAllWindows() do?",
          options: ["Quits Python", "Clears the console", "Closes all windows created by imshow", "Deletes the image from memory"],
          explain: "destroyAllWindows() closes every display window — used with imshow/waitKey"
        },
        steps: [
          "imshow เปิดหน้าต่างแสดงภาพ",
          "เมื่อเลิกใช้ ให้ปิดหน้าต่างทั้งหมดด้วย destroyAllWindows()",
          "ถ้าไม่ปิด หน้าต่างอาจค้างอยู่",
          "ตอบ: ปิดหน้าต่างทั้งหมด"
        ]
      },
      {
        q: "plt.hist(img.ravel(), bins=256) ใช้ทำอะไร?",
        options: ["ปรับขนาดภาพเป็น 256×256", "วาด Histogram ของค่าพิกเซล", "แปลงภาพเป็นขาวดำ", "หมุนภาพ 256 องศา"],
        correct: 1,
        explain: "ravel() ปรับ array เป็นเส้นตรง แล้ว hist วาดการกระจายของค่าพิกเซล 256 ช่อง",
        en: {
          q: "What does plt.hist(img.ravel(), bins=256) do?",
          options: ["Resizes the image to 256×256", "Draws a histogram of pixel values", "Converts the image to grayscale", "Rotates the image 256 degrees"],
          explain: "ravel() flattens the array, then hist plots the distribution of pixel values into 256 bins"
        },
        steps: [
          "img.ravel() แผ่ array 2 มิติเป็นเส้นตรง 1 มิติ",
          "plt.hist นับว่าค่า 0–255 มีพิกเซลเท่าไร",
          "bins=256 = แบ่งเป็น 256 ช่อง (เท่ากับจำนวนค่าที่เป็นไปได้)",
          "ตอบ: วาด Histogram ของค่าพิกเซล"
        ]
      },
      {
        q: "ทำไมต้องแปลง BGR → RGB ก่อนแสดงด้วย Matplotlib?",
        options: [
          "OpenCV เก็บ BGR แต่ Matplotlib แสดงผลแบบ RGB",
          "เพราะ Matplotlib อ่านไฟล์ไม่ได้",
          "เพราะภาพใหญ่เกินไป",
          "ไม่ต้องแปลงก็ได้ — สีเหมือนกันเสมอ"
        ],
        correct: 0,
        explain: "OpenCV เรียง BGR, Matplotlib เรียง RGB — ไม่แปลงจะเห็นช่องสีสลับกัน (ภาพสีเพี้ยน)",
        en: {
          q: "Why convert BGR → RGB before showing with Matplotlib?",
          options: [
            "OpenCV stores BGR but Matplotlib displays RGB",
            "Because Matplotlib cannot read files",
            "Because the image is too big",
            "No conversion needed — colors are always the same"
          ],
          explain: "OpenCV orders BGR, Matplotlib orders RGB — without converting, channels are swapped (colors look wrong)"
        },
        steps: [
          "OpenCV เก็บช่องสีเป็น BGR",
          "Matplotlib คิดว่าเป็น RGB",
          "แดงกับน้ำเงินสลับกัน → ภาพสีเพี้ยน",
          "แปลงก่อน: img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)",
          "ตอบ: OpenCV เก็บ BGR แต่ Matplotlib แสดง RGB"
        ]
      }
    ],

    flashcards: [
      { q: "อ่านภาพด้วยคำสั่งใด?", a: "cv2.imread(\"image.jpg\") → ได้ NumPy array" },
      { q: "img.shape คืออะไร?", a: "(Height, Width, Channels) — เช่น (480, 640, 3)" },
      { q: "img.dtype ปกติเป็นอะไร?", a: "uint8 — ค่าพิกเซล 0–255" },
      { q: "แสดงภาพแบบ OpenCV?", a: "cv2.imshow(ชื่อ, img) + cv2.waitKey(0) + cv2.destroyAllWindows()" },
      { q: "แสดงภาพแบบ Matplotlib?", a: "plt.imshow(img_rgb) + plt.show() — ต้องแปลง BGR→RGB ก่อน" },
      { q: "OpenCV เก็บสีแบบใด?", a: "BGR (Blue-Green-Red) — สลับจาก RGB" },
      { q: "แปลง BGR→RGB?", a: "cv2.cvtColor(img, cv2.COLOR_BGR2RGB)" },
      { q: "เข้าถึงพิกเซล (y=100, x=200)?", a: "img[100, 200] — y (แถว) มาก่อน x (คอลัมน์) เสมอ" },
      { q: "แยกช่องสี?", a: "b = img[y, x, 0] · g = img[y, x, 1] · r = img[y, x, 2] หรือ b, g, r = img[y, x]" },
      { q: "เปลี่ยนพิกเซลเป็นแดง?", a: "img[100, 200] = [0, 0, 255] (BGR)" },
      { q: "เปลี่ยนทั้งโซนเป็นสี?", a: "img[100:200, 100:300] = [0, 0, 255] — เติมทั้งบล็อก" },
      { q: "ROI คืออะไร?", a: "Region Of Interest — บริเวณที่สนใจ ตัดมาเฉพาะส่วน" },
      { q: "ตัด ROI?", a: "roi = img[y1:y2, x1:x2] เช่น img[100:300, 200:500]" },
      { q: "บันทึกภาพ?", a: "cv2.imwrite(\"roi.jpg\", roi) — นามสกุลกำหนดรูปแบบไฟล์" },
      { q: "waitKey(0) หมายถึง?", a: "รอจนกว่าจะกดปุ่มใดก็ได้ — ใช้คู่กับ imshow เสมอ" },
      { q: "histogram ด้วย Matplotlib?", a: "plt.hist(img.ravel(), bins=256) — ravel แผ่ array เป็นเส้นตรง" }
    ],

    glossary: [
      { term: "OpenCV", def: "Open Source Computer Vision Library — ไลบรารีประมวลผลภาพ/Computer Vision ยอดนิยม" },
      { term: "NumPy Array", def: "โครงสร้างข้อมูลที่ OpenCV ใช้เก็บภาพ — (H, W, C)" },
      { term: "cv2.imread()", def: "อ่านไฟล์ภาพเข้ามาเป็น array" },
      { term: "cv2.imshow()", def: "แสดงภาพบนหน้าต่าง (ต้องใช้คู่ waitKey)" },
      { term: "cv2.imwrite()", def: "บันทึกภาพลงไฟล์ (นามสกุลกำหนดรูปแบบ)" },
      { term: "cv2.waitKey()", def: "รอรับคีย์บอร์ด — waitKey(0) = รอไม่จำกัดเวลา" },
      { term: "cv2.destroyAllWindows()", def: "ปิดหน้าต่างแสดงภาพทั้งหมด" },
      { term: "img.shape", def: "(Height, Width, Channels) — ความสูง มาก่อนความกว้าง" },
      { term: "img.dtype", def: "ชนิดข้อมูลของ array — ปกติ uint8 (0–255)" },
      { term: "uint8", def: "unsigned 8-bit integer — ค่า 0–255 ใช้เก็บพิกเซล" },
      { term: "BGR", def: "ลำดับช่องสีของ OpenCV — Blue, Green, Red" },
      { term: "cv2.cvtColor()", def: "แปลงช่องสี เช่น COLOR_BGR2RGB" },
      { term: "Matplotlib", def: "ไลบรารีพล็อตของ Python — plt.imshow() แสดงภาพ" },
      { term: "Pixel Access", def: "img[y, x] — y = แถว (row) · x = คอลัมน์ (column)" },
      { term: "Channel", def: "ช่องสี — ดัชนี 0=B, 1=G, 2=R" },
      { term: "ROI", def: "Region Of Interest — บริเวณที่สนใจ ตัดด้วย img[y1:y2, x1:x2]" },
      { term: "Slicing", def: "การตัด array ด้วยเครื่องหมาย : เช่น img[100:300, 200:500]" },
      { term: "plt.ravel()", def: "แผ่ array หลายมิติเป็นเส้นตรง ใช้คู่ plt.hist" }
    ],

    cheat: [
      { term: "อ่านภาพ", def: "img = cv2.imread(\"image.jpg\")" },
      { term: "shape", def: "(Height, Width, Channels) — y มาก่อน x" },
      { term: "dtype", def: "uint8 = 0–255" },
      { term: "แสดง (OpenCV)", def: "imshow + waitKey(0) + destroyAllWindows()" },
      { term: "แสดง (Matplotlib)", def: "plt.imshow(img_rgb) + plt.show()" },
      { term: "สีสลับ", def: "OpenCV BGR · Matplotlib RGB → cvtColor(COLOR_BGR2RGB)" },
      { term: "พิกเซล", def: "img[y, x] — y = แถว, x = คอลัมน์" },
      { term: "แยกช่อง", def: "b,g,r = img[y,x] · b=0, g=1, r=2" },
      { term: "ตั้งค่า", def: "img[100,200] = [B,G,R] เช่น แดง = [0,0,255]" },
      { term: "ทั้งโซน", def: "img[y1:y2, x1:x2] = [0,0,255]" },
      { term: "ROI", def: "roi = img[y1:y2, x1:x2]" },
      { term: "บันทึก", def: "cv2.imwrite(\"roi.jpg\", roi)" },
      { term: "histogram", def: "plt.hist(img.ravel(), bins=256)" },
      { term: "cmap", def: "plt.imshow(img, cmap=\"gray\") · hot · viridis · jet · plasma" }
    ]
  },

  /* ========================================================================
     CHAPTER 3 — Sampling, Quantization & Bit-Plane
     ======================================================================== */
  ch3: {
    title: "Sampling, Quantization & Bit-Plane (จากภาพจริงเป็นภาพดิจิทัล)",
    thai: "Sampling & Quantization",
    en: "Sampling, Quantization & Bit-Plane",

    slides: [
      { title: "Cover — จากภาพจริงเป็นภาพดิจิทัล", short: "เปิดบทเรียน" },
      { title: "ทำไมต้องแปลงเป็นดิจิทัล — 2 ขั้นตอน", short: "2 ขั้นตอน" },
      { title: "f(x, y) — ดิจิไตซ์ 2 ทาง (spatial + amplitude)", short: "ดิจิไตซ์ 2 ทาง" },
      { title: "Sampling — เก็บตัวอย่างตำแหน่ง", short: "Sampling" },
      { title: "Sampling Rate — ละเอียด vs หยาบ", short: "Sampling Rate" },
      { title: "Quantization — ระดับความเข้ม (Grey Levels)", short: "Quantization" },
      { title: "False Contours — รอยหยักของระดับเทา", short: "False Contours" },
      { title: "ตัวอย่าง: ลด 256 → 16 ระดับ", short: "256 → 16 ระดับ" },
      { title: "ที่มาของสูตร q = (img // 16) × 16 + 7", short: "ที่มาของสูตร" },
      { title: "คำนวณด้วยมือ — 210 → 215", short: "คำนวณด้วยมือ" },
      { title: "สรุป Sampling vs Quantization", short: "สรุป S vs Q" },
      { title: "Bit-Plane คืออะไร — บิตต่อพิกเซล", short: "Bit-Plane" },
      { title: "Bit-Plane Slicing — (ex >> i) & 1", short: "Bit-Plane Slicing" },
      { title: "ตัวอย่างจริง — [255, 147, 55] → 8 แถว", short: "ตัวอย่าง 8 แถว" },
      { title: "อ่านตาราง Bit-Plane — MSB / LSB", short: "MSB / LSB" },
      { title: "Bit 7 (MSB) — น้ำหนัก 128", short: "Bit 7 MSB" },
      { title: "Bit 3–0 (LSB) — รายละเอียด + Noise", short: "Bit 3–0 LSB" },
      { title: "Application 1 — Image Compression (50%)", short: "Compression" },
      { title: "Application 2 — Watermarking / Steganography", short: "Watermarking" },
      { title: "Downsampling — ลดขนาดภาพ", short: "Downsampling" },
      { title: "ทำไมต้อง Downsample — 7 เหตุผล", short: "7 เหตุผล" },
      { title: "Image Pyramid — ภาพหลายระดับ", short: "Image Pyramid" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. ดิจิไตซ์ภาพ (Sampling)", topics: [3, 4, 5] },
      { label: "2. Quantization (ระดับเทา)", topics: [6, 7, 8, 9, 10, 11] },
      { label: "3. Bit-Plane Slicing", topics: [12, 13, 14, 15, 16, 17] },
      { label: "4. Applications", topics: [18, 19] },
      { label: "5. Downsampling & Pyramid", topics: [20, 21, 22] },
      { label: "ทบทวนและฝึกฝน", topics: [23, 24, 25, 26, 27, 28, 29] }
    ],

    quiz: [
      {
        q: "การแปลงภาพจากอนาล็อกเป็นดิจิทัลมี 2 ขั้นตอนคืออะไร?",
        options: ["Coding และ Decoding", "Filtering และ Threshold", "Compression และ Decompression", "Sampling และ Quantization"],
        correct: 3,
        explain: "Sampling (เก็บตัวอย่างตำแหน่ง) + Quantization (ปัดค่าระดับความเข้ม)"
      },
      {
        q: "Sampling Rate กำหนดอะไร?",
        options: ["ขนาดไฟล์ที่บีบอัด", "ความเร็วของกล้อง", "ความละเอียดเชิงพื้นที่ (Spatial Resolution)", "จำนวนสีของภาพ"],
        correct: 2,
        explain: "Sampling rate กำหนด spatial resolution — เก็บจุดกี่จุดต่อพื้นที่"
      },
      {
        q: "Quantization กำหนดอะไร?",
        options: ["จำนวนช่องสี", "จำนวนระดับความเข้ม (Grey Levels)", "ความกว้างของภาพ", "ความเร็วชัตเตอร์"],
        correct: 1,
        explain: "Quantization level กำหนดจำนวน grey levels — ปัดค่าความเข้มเป็นระดับที่จำกัด"
      },
      {
        q: "False Contours เกิดจากอะไร?",
        options: ["ระดับความเข้มน้อยเกินไป", "พิกเซลน้อยเกินไป", "ภาพเบลอ", "ไฟล์บีบอัดแรงไป"],
        correct: 0,
        explain: "Quantize ด้วยระดับเทาไม่พอ → เห็นรอยหยัก/เส้นขั้นบันไดในบริเวณที่ควรไล่สีเรียบ"
      },
      {
        q: "สูตรลด 256 → 16 ระดับคือข้อใด?",
        options: ["q = (img // 256) * 16", "q = img % 16", "q = img - 240", "q = (img // 16) * 16 + 7"],
        correct: 3,
        explain: "q = (img // 16) × 16 + 7 — แบ่ง 0–255 เป็น 16 ช่วง แล้วใช้ค่ากลางแต่ละช่วง"
      },
      {
        q: "Bit-Plane Slicing คืออะไร?",
        options: ["บีบอัดภาพ 50%", "หมุนภาพทีละบิต", "แยกภาพออกเป็นชั้นบิต (bit 0–7)", "ตัดภาพเป็นชิ้นเล็ก ๆ"],
        correct: 2,
        explain: "แยกแต่ละบิตของค่าพิกเซลออกมาเป็นภาพขาวดำ 8 ชั้น (bit plane)"
      },
      {
        q: "Bit 7 (MSB) มีน้ำหนักเท่าไร?",
        options: ["1", "128", "64", "16"],
        correct: 1,
        explain: "Bit 7 = 2^7 = 128 — เป็นบิตที่สำคัญสุดต่อโครงสร้างภาพ"
      },
      {
        q: "บิตใดเหมาะกับการซ่อนข้อมูล (Steganography)?",
        options: ["Bit 0 (LSB)", "Bit 7 (MSB)", "Bit 4", "ทุกบิตเหมือนกัน"],
        correct: 0,
        explain: "LSB (bit 0) มีผลต่อภาพน้อยที่สุด — เปลี่ยนแล้วตามองไม่เห็น จึงเหมาะกับการซ่อนข้อมูล"
      },
      {
        q: "Downsample ภาพ 1024×1024 → 512×512 ไฟล์เล็กลงกี่เท่า?",
        options: ["½ เท่า", "2 เท่า", "เท่าเดิม", "¼ เท่า"],
        correct: 3,
        explain: "พิกเซลเหลือ (512/1024)² = ¼ — ไฟล์เล็กลง ¼ (ลด 75%)"
      },
      {
        q: "Image Pyramid คืออะไร?",
        options: ["ภาพที่บีบอัดแล้ว", "ภาพขาวดำ", "ภาพขนาดต่าง ๆ เรียงซ้อนกัน", "ภาพ 3 มิติ"],
        correct: 2,
        explain: "ชุดภาพที่ downsample ต่อเนื่องกัน (เช่น 1024 → 512 → 256 → 128) ใช้ในงาน Object Detection"
      }
    ],

    exam: [
      {
        q: "การแปลงภาพจากอนาล็อกเป็นดิจิทัลมี 2 ขั้นตอนคืออะไร?",
        options: ["Encoding และ Decoding", "Filtering และ Thresholding", "Resize และ Rotate", "Sampling และ Quantization"],
        correct: 3,
        explain: "Sampling (เก็บตัวอย่างตำแหน่ง/space) + Quantization (ปัดค่าระดับความเข้ม/amplitude)",
        en: {
          q: "What are the two steps to convert an analog image to digital?",
          options: ["Encoding and Decoding", "Filtering and Thresholding", "Resize and Rotate", "Sampling and Quantization"],
          explain: "Sampling (capture positions/space) + Quantization (round intensity levels/amplitude)"
        },
        steps: [
          "ภาพจริงเป็นสัญญาณต่อเนื่อง (continuous) ทั้งตำแหน่งและความเข้ม",
          "ขั้น 1 Sampling — เก็บตัวอย่างตำแหน่ง (x, y) ตามระยะห่างที่กำหนด",
          "ขั้น 2 Quantization — ปัดค่าความเข้มให้เป็นระดับที่จำกัด",
          "สองขั้นนี้รวมกัน = ดิจิไตซ์ภาพ",
          "ตอบ: Sampling และ Quantization"
        ]
      },
      {
        q: "Sampling Rate กำหนดคุณภาพด้านใดของภาพดิจิทัล?",
        options: ["ความสดของสี", "ความเร็วเฟรม", "ความละเอียดเชิงพื้นที่ (Spatial Resolution)", "จำนวนระดับเทา"],
        correct: 2,
        explain: "Sampling rate กำหนด spatial resolution — เก็บตัวอย่างกี่จุดต่อพื้นที่",
        en: {
          q: "What quality of the digital image does the sampling rate determine?",
          options: ["Color saturation", "Frame rate", "Spatial resolution", "Number of gray levels"],
          explain: "Sampling rate determines spatial resolution — how many samples per area"
        },
        steps: [
          "Sampling = เก็บจุดตัวอย่างตามตำแหน่ง",
          "เก็บถี่ (sampling rate สูง) → ภาพละเอียด",
          "เก็บห่าง → ภาพหยาบ เป็นบล็อก",
          "ดังนั้น Sampling กำหนดความละเอียดเชิงพื้นที่",
          "ตอบ: ความละเอียดเชิงพื้นที่ (Spatial Resolution)"
        ]
      },
      {
        q: "Quantization Level กำหนดอะไร?",
        options: ["ขนาดไฟล์ที่บีบอัด", "จำนวนระดับเทา (Grey Levels) ในภาพ", "ความกว้างของภาพ", "จำนวนเฟรมต่อวินาที"],
        correct: 1,
        explain: "Quantization level = จำนวน grey levels — เช่น 8 บิต = 256 ระดับ",
        en: {
          q: "What does the quantization level determine?",
          options: ["Compressed file size", "The number of gray levels in the image", "The width of the image", "Frames per second"],
          explain: "Quantization level = number of gray levels — e.g. 8 bits = 256 levels"
        },
        steps: [
          "Quantization = ปัดค่าความเข้ม (amplitude)",
          "ระดับที่ใช้มาก = ระดับเทาเยอะ เช่น 256 (8 บิต)",
          "ระดับน้อยเกินไป → ภาพแข็ง/รอยหยัก",
          "ตอบ: จำนวนระดับเทา (Grey Levels)"
        ]
      },
      {
        q: "False Contours เกิดจากสาเหตุใด?",
        options: [
          "Quantization ด้วยระดับเทาน้อยเกินไป",
          "Sampling น้อยเกินไป",
          "ภาพมีสีมากเกินไป",
          "ไฟล์บีบอัดเกินไป"
        ],
        correct: 0,
        explain: "ระดับเทาไม่พอ → บริเวณที่ควรไล่สีเรียบกลายเป็นขั้นบันได (false contours)",
        en: {
          q: "What causes false contours?",
          options: [
            "Quantizing with too few gray levels",
            "Sampling too sparsely",
            "Too many colors",
            "Over-compressing the file"
          ],
          explain: "Too few gray levels → smooth gradients become visible steps (false contours)"
        },
        steps: [
          "ลองนึกภาพท้องฟ้าที่ควรไล่สีเรียบ",
          "ถ้าใช้ระดับเทาแค่ 8 ระดับ → เห็นเส้นขั้นบันได",
          "เส้นเหล่านี้ไม่ใช่ขอบจริง → เรียกว่า False Contours",
          "แก้โดยเพิ่ม quantization level (ระดับเทา)",
          "ตอบ: Quantization ด้วยระดับเทาน้อยเกินไป"
        ]
      },
      {
        q: "จากสูตร q = (img // 16) * 16 + 7 ถ้า img = 210 จะได้ค่าใด?",
        options: ["207", "210", "240", "215"],
        correct: 3,
        explain: "210 // 16 = 13 → 13 × 16 + 7 = 215",
        en: {
          q: "Using q = (img // 16) * 16 + 7, if img = 210 what is q?",
          options: ["207", "210", "240", "215"],
          explain: "210 // 16 = 13 → 13 × 16 + 7 = 215"
        },
        steps: [
          "ขั้น 1: หารปัดเศษลง 210 // 16 = 13 (210 ÷ 16 = 13.125)",
          "ขั้น 2: คูณกลับ 13 × 16 = 208",
          "ขั้น 3: บวก 7 → 208 + 7 = 215",
          "ตอบ: 215"
        ]
      },
      {
        q: "พิกเซล [210, 219, 223] ผ่าน quantization 16 ระดับ (q = (img//16)*16+7) จะได้?",
        options: ["[210, 219, 223]", "[215, 223, 223]", "[215, 215, 215]", "[208, 208, 208]"],
        correct: 2,
        explain: "210→215 · 219→215 · 223→215 เพราะทั้ง 3 อยู่ในช่วง 208–223 ช่วงเดียวกัน",
        en: {
          q: "Pixels [210, 219, 223] through 16-level quantization (q = (img//16)*16+7) become?",
          options: ["[210, 219, 223]", "[215, 223, 223]", "[215, 215, 215]", "[208, 208, 208]"],
          explain: "210→215 · 219→215 · 223→215 — all three fall in the same 208–223 range"
        },
        steps: [
          "210//16=13 → 13×16+7=215",
          "219//16=13 → 13×16+7=215",
          "223//16=13 → 13×16+7=215",
          "ทั้ง 3 อยู่ในช่วง 208–223 (ช่วงที่ 13) → ค่าเดียวกันหมด",
          "ตอบ: [215, 215, 215]"
        ]
      },
      {
        q: "ถ้า img = 108 ด้วยสูตรเดียวกัน (q = (img//16)*16+7) จะได้ค่าใด?",
        options: ["111", "103", "107", "108"],
        correct: 1,
        explain: "108 // 16 = 6 → 6 × 16 + 7 = 103",
        en: {
          q: "With the same formula (q = (img//16)*16+7), img = 108 gives?",
          options: ["111", "103", "107", "108"],
          explain: "108 // 16 = 6 → 6 × 16 + 7 = 103"
        },
        steps: [
          "108 ÷ 16 = 6.75 → ปัดลง = 6",
          "6 × 16 = 96",
          "96 + 7 = 103",
          "ตอบ: 103"
        ]
      },
      {
        q: "bit_plane[i] = (ex >> i) & 1 ใน Bit-Plane Slicing ทำหน้าที่อะไร?",
        options: ["ดึงบิตตำแหน่ง i ของค่า ex ออกมา (0 หรือ 1)", "เลื่อนภาพไปทางขวา i พิกเซล", "คูณค่า ex ด้วย 2^i", "ลบภาพด้วย 1"],
        correct: 0,
        explain: ">> i เลื่อนบิตไปขวา i ตำแหน่ง แล้ว & 1 ตัดเอาเฉพาะบิตล่างสุด = บิตตำแหน่ง i",
        en: {
          q: "In Bit-Plane Slicing, bit_plane[i] = (ex >> i) & 1 does what?",
          options: ["Extracts bit position i of ex (0 or 1)", "Shifts the image right by i pixels", "Multiplies ex by 2^i", "Subtracts the image by 1"],
          explain: ">> i shifts bits right i positions, then & 1 keeps only the lowest bit = bit position i"
        },
        steps: [
          "เป้าหมาย: แยกแต่ละบิตของค่าพิกเซลออกมา",
          ">> i = เลื่อนบิตไปทางขวา i ตำแหน่ง (บิตที่ i ย้ายมาอยู่ตำแหน่งล่างสุด)",
          "& 1 = ตัดเหลือเฉพาะบิตล่างสุด (0 หรือ 1)",
          "วน i = 0..7 ได้ครบทั้ง 8 บิต",
          "ตอบ: ดึงบิตตำแหน่ง i ของค่า ex ออกมา"
        ]
      },
      {
        q: "Bit 7 (MSB) ของพิกเซล 8-bit มีน้ำหนักเท่าไร?",
        options: ["64", "16", "1", "128"],
        correct: 3,
        explain: "MSB = 2^7 = 128 — บิตที่มีผลต่อค่า/โครงสร้างภาพมากที่สุด",
        en: {
          q: "What is the weight of bit 7 (MSB) in an 8-bit pixel?",
          options: ["64", "16", "1", "128"],
          explain: "MSB = 2^7 = 128 — the bit that most affects the value/structure of the image"
        },
        steps: [
          "บิต 8 ตัวของ 8-bit มีน้ำหนัก 128 64 32 16 8 4 2 1",
          "บิตซ้ายสุด (bit 7) = 2^7 = 128",
          "เรียกว่า MSB (Most Significant Bit)",
          "ตอบ: 128"
        ]
      },
      {
        q: "บิต 3–0 (LSB) เก็บข้อมูลแบบใดของภาพ?",
        options: ["สีแดงทั้งหมด", "ขนาดภาพ", "รายละเอียดเล็ก ๆ และ noise", "โครงสร้างหลักของภาพ"],
        correct: 2,
        explain: "LSB (น้ำหนัก 8,4,2,1) มีผลต่อค่าพิกเซลน้อย → เก็บรายละเอียดเล็ก ๆ + noise",
        en: {
          q: "What kind of information do bits 3–0 (LSB) hold?",
          options: ["All the red color", "Image size", "Fine details and noise", "The main structure of the image"],
          explain: "LSB (weights 8,4,2,1) barely changes pixel values → fine details + noise"
        },
        steps: [
          "LSB = Least Significant Bits (บิต 3–0)",
          "น้ำหนักแค่ 8, 4, 2, 1 — เปลี่ยนแล้วค่าพิกเซลเพี้ยนน้อยมาก",
          "เลยเป็นที่อยู่ของรายละเอียดเล็ก ๆ + noise",
          "ตอบ: รายละเอียดเล็ก ๆ และ noise"
        ]
      },
      {
        q: "หลักการบีบอัดภาพด้วย Bit-Plane (ประหยัด 50%) คือข้อใด?",
        options: [
          "เก็บเฉพาะบิต 4–7 (ครึ่งบน) ทิ้งบิต 0–3 (ครึ่งล่าง)",
          "เก็บเฉพาะบิต 0–3 ทิ้งบิต 4–7",
          "ลบบิต 7 ออก 1 บิต",
          "เก็บเฉพาะบิตคู่"
        ],
        correct: 1,
        explain: "บิต 4–7 เก็บโครงสร้างหลักของภาพ → เก็บครึ่งบน ทิ้งครึ่งล่าง = เหลือข้อมูล 50%",
        en: {
          q: "The bit-plane image compression principle (saving 50%) is?",
          options: [
            "Keep only bits 4–7 (upper half), drop bits 0–3 (lower half)",
            "Keep only bits 0–3, drop bits 4–7",
            "Remove bit 7 only",
            "Keep only even bits"
          ],
          explain: "Bits 4–7 hold the main structure → keep the upper half, drop the lower half = 50% of the data"
        },
        steps: [
          "บิต 4–7 (น้ำหนัก 16–128) เก็บโครงสร้างหลัก",
          "บิต 0–3 (น้ำหนัก 1–8) เก็บรายละเอียดเล็กน้อย",
          "ทิ้งบิต 0–3 → เหลือข้อมูล 4/8 = 50%",
          "ภาพยังพอเห็นโครงสร้างชัดเจน แต่ไฟล์เล็กครึ่งหนึ่ง",
          "ตอบ: เก็บเฉพาะบิต 4–7 ทิ้งบิต 0–3"
        ]
      },
      {
        q: "Watermarking / Steganography ซ่อนข้อมูลในบิตใด?",
        options: ["Bit 0 (LSB)", "Bit 7 (MSB)", "Bit 4", "ทุกบิตเท่ากัน"],
        correct: 0,
        explain: "LSB เปลี่ยนแล้วตาคนมองไม่เห็น → เหมาะซ่อนลายน้ำ/ข้อความโดยภาพแทบไม่เปลี่ยน",
        en: {
          q: "Which bit is used to hide data in watermarking/steganography?",
          options: ["Bit 0 (LSB)", "Bit 7 (MSB)", "Bit 4", "All bits equally"],
          explain: "Changing the LSB is invisible to the eye → perfect for hiding watermarks/messages"
        },
        steps: [
          "อยากซ่อนข้อมูลโดยคนมองไม่เห็น → ต้องแก้บิตที่ส่งผลน้อยสุด",
          "LSB (bit 0) เปลี่ยนแล้วค่าพิกเซลต่างแค่ ±1",
          "ตาคนแยกไม่ออก แต่คอมพิวเตอร์อ่านกลับได้",
          "ตอบ: Bit 0 (LSB)"
        ]
      },
      {
        q: "ค่า 255 ในเลขฐานสอง 8 บิตคือข้อใด?",
        options: ["10000000", "11110000", "00001111", "11111111"],
        correct: 3,
        explain: "255 = 128+64+32+16+8+4+2+1 = ทุกบิตเป็น 1 = 11111111",
        en: {
          q: "What is 255 in 8-bit binary?",
          options: ["10000000", "11110000", "00001111", "11111111"],
          explain: "255 = 128+64+32+16+8+4+2+1 = all bits 1 = 11111111"
        },
        steps: [
          "น้ำหนักบิต 8 ตัว: 128 64 32 16 8 4 2 1",
          "255 = 128+64+32+16+8+4+2+1",
          "ต้องใช้ทุกบิตเป็น 1 → 11111111",
          "ตอบ: 11111111"
        ]
      },
      {
        q: "(ex >> 4) & 1 ดึงบิตตำแหน่งใดของค่า ex?",
        options: ["Bit 5", "Bit 0", "Bit 4", "Bit 3"],
        correct: 2,
        explain: ">> 4 เลื่อนบิต 4 มายังตำแหน่งล่างสุด แล้ว & 1 ตัดเอา — ได้บิตที่ 4",
        en: {
          q: "(ex >> 4) & 1 extracts which bit of ex?",
          options: ["Bit 5", "Bit 0", "Bit 4", "Bit 3"],
          explain: ">> 4 moves bit 4 to the lowest position, then & 1 keeps it — that is bit 4"
        },
        steps: [
          "เลขหลัง >> คือตำแหน่งบิตที่ต้องการ",
          ">> 4 → บิตที่ 4 เลื่อนมาอยู่ล่างสุด",
          "& 1 → ตัดเหลือ 0 หรือ 1",
          "ตอบ: Bit 4"
        ]
      },
      {
        q: "Downsample ภาพ 1024×1024 → 512×512 เหลือจำนวนพิกเซลกี่เท่าของเดิม?",
        options: ["เท่าเดิม", "¼ เท่า", "½ เท่า", "2 เท่า"],
        correct: 1,
        explain: "512/1024 = ½ ทั้ง 2 ด้าน → พื้นที่ (½)² = ¼",
        en: {
          q: "Downsampling 1024×1024 → 512×512 leaves what fraction of pixels?",
          options: ["Same", "1/4", "1/2", "2×"],
          explain: "512/1024 = ½ on both sides → area (½)² = 1/4"
        },
        steps: [
          "ลดขนาดครึ่งหนึ่งทั้ง 2 ด้าน: 1024 → 512",
          "พิกเซลลดลงครึ่งหนึ่งในแนวนอน และครึ่งหนึ่งในแนวตั้ง",
          "รวม = ½ × ½ = ¼",
          "ตอบ: ¼ เท่า"
        ]
      },
      {
        q: "ข้อใดคือเหตุผลหนึ่งของการ Downsampling?",
        options: ["ลดปริมาณการคำนวณและ bandwidth", "เพิ่มรายละเอียดของภาพ", "ลบ noise ทั้งหมด", "ทำให้ภาพคมชัดขึ้น"],
        correct: 0,
        explain: "พิกเซลน้อยลง → คำนวณเร็วขึ้น ใช้ bandwidth/หน่วยความจำน้อยลง",
        en: {
          q: "Which is a reason for downsampling?",
          options: ["Reduces computation and bandwidth", "Adds detail to the image", "Removes all noise", "Sharpens the image"],
          explain: "Fewer pixels → faster computation, less bandwidth/memory"
        },
        steps: [
          "พิกเซลน้อยลง = ข้อมูลน้อยลง",
          "ประมวลผลเร็วขึ้น (เหมาะกับ Filtering, Edge Detection)",
          "ส่งผ่านเน็ต/เก็บในหน่วยความจำน้อยลง",
          "ตอบ: ลดปริมาณการคำนวณและ bandwidth"
        ]
      },
      {
        q: "Image Pyramid นำไปใช้ในงานใด?",
        options: ["การพิมพ์ภาพ", "การเปลี่ยนสีภาพ", "การลบพื้นหลังด้วยมือ", "Object Detection — SIFT · SURF · ORB · Optical Flow"],
        correct: 3,
        explain: "Pyramid (ภาพหลายขนาด) ช่วยให้อัลกอริทึมตรวจจับวัตถุ/จุดเด่นได้หลาย scale",
        en: {
          q: "Image pyramids are used in which task?",
          options: ["Printing images", "Recoloring images", "Manual background removal", "Object detection — SIFT · SURF · ORB · Optical Flow"],
          explain: "Pyramids (multi-scale images) let detection/feature algorithms work at many scales"
        },
        steps: [
          "Pyramid = ชุดภาพ downsample ซ้ำ ๆ (1024→512→256→128)",
          "วัตถุเล็กในภาพใหญ่ = วัตถุใหญ่ในภาพเล็ก",
          "อัลกอริทึมสแกนหลายระดับจับวัตถุทุกขนาด",
          "ใช้ใน SIFT, SURF, ORB, Face Detection, Optical Flow",
          "ตอบ: Object Detection"
        ]
      },
      {
        q: "ภาพ 5 บิตต่อพิกเซล มีระดับเทากี่ระดับ?",
        options: ["64", "256", "32", "16"],
        correct: 2,
        explain: "2^5 = 32 ระดับ",
        en: {
          q: "An image with 5 bits per pixel has how many gray levels?",
          options: ["64", "256", "32", "16"],
          explain: "2^5 = 32 levels"
        },
        steps: [
          "จำนวนระดับ = 2^บิต",
          "5 บิต → 2^5",
          "2^5 = 32",
          "ตอบ: 32"
        ]
      },
      {
        q: "Sampling rate สูงขึ้นมีผลอย่างไรต่อภาพ?",
        options: ["ไฟล์เล็กลงเสมอ", "ความละเอียดเชิงพื้นที่ดีขึ้น ภาพชัดขึ้น", "ระดับเทาเพิ่มขึ้น", "สีสดขึ้น"],
        correct: 1,
        explain: "เก็บตัวอย่างถี่ขึ้น → พิกเซลต่อพื้นที่มากขึ้น → รายละเอียดเชิงพื้นที่ดีขึ้น",
        en: {
          q: "What happens when the sampling rate increases?",
          options: ["File always gets smaller", "Spatial resolution improves, image is sharper", "More gray levels", "Colors get more vivid"],
          explain: "More samples per area → more pixels → better spatial detail"
        },
        steps: [
          "Sampling rate = จำนวนตัวอย่างต่อพื้นที่",
          "สูงขึ้น → พิกเซลมากขึ้น",
          "รายละเอียดเชิงพื้นที่ (spatial resolution) ดีขึ้น",
          "ตอบ: ความละเอียดเชิงพื้นที่ดีขึ้น"
        ]
      },
      {
        q: "ข้อมูลแบบใดเหมาะกับการเก็บด้วยบิต 4–7 (ครึ่งบน) ในการบีบอัด?",
        options: ["โครงสร้างหลักของภาพ (main structure)", "noise ละเอียด ๆ", "ข้อมูลซ่อนลับ", "สีของพิกเซลเดียว"],
        correct: 0,
        explain: "บิต 4–7 น้ำหนักมาก (16–128) เก็บโครงสร้าง/ความสว่างหลักของภาพ",
        en: {
          q: "What kind of data is best kept by bits 4–7 (upper half) in compression?",
          options: ["The main structure of the image", "Fine noise", "Hidden secret data", "The color of a single pixel"],
          explain: "Bits 4–7 carry high weights (16–128) — the main structure/brightness of the image"
        },
        steps: [
          "บิตที่มีน้ำหนักมาก = มีผลต่อค่าพิกเซลมาก",
          "บิต 4–7 (16–128) กำหนดโครงร่าง/ความสว่างหลัก",
          "เก็บไว้ภาพยังดูเป็นภาพเดิม",
          "ตอบ: โครงสร้างหลักของภาพ"
        ]
      }
    ],

    flashcards: [
      { q: "Sampling คืออะไร?", a: "เก็บตัวอย่างตำแหน่ง (x,y) ของภาพต่อเนื่อง → กำหนด spatial resolution" },
      { q: "Quantization คืออะไร?", a: "ปัดค่าความเข้มให้เป็นระดับจำกัด → กำหนด grey levels" },
      { q: "False Contours?", a: "รอยขั้นบันไดเมื่อระดับเทาน้อยเกินไป (quantization ไม่พอ)" },
      { q: "สูตร 256 → 16 ระดับ?", a: "q = (img // 16) * 16 + 7 — เช่น 210 → 215" },
      { q: "210 // 16 = ?", a: "13 (210 ÷ 16 = 13.125 ปัดลง) → 13×16+7 = 215" },
      { q: "Bit-Plane Slicing?", a: "แยกภาพเป็นชั้นบิต 8 ชั้น — bit_plane[i] = (ex >> i) & 1" },
      { q: "MSB คือบิตไหน?", a: "Bit 7 น้ำหนัก 128 — โครงสร้างหลักของภาพ" },
      { q: "LSB คือบิตไหน?", a: "Bit 3–0 (น้ำหนัก 8,4,2,1) — รายละเอียดเล็ก ๆ + noise" },
      { q: "Compression 50% ด้วย bit-plane?", a: "เก็บบิต 4–7 ทิ้งบิต 0–3 — ภาพยังเห็นโครงสร้าง" },
      { q: "Steganography ซ่อนข้อมูลที่ไหน?", a: "LSB (bit 0) — เปลี่ยนแล้วตามองไม่เห็น" },
      { q: "Downsample 1024→512 เหลือกี่เท่า?", a: "¼ ของพิกเซล (½ × ½) — ไฟล์เล็กลง 75%" },
      { q: "ทำไมต้อง downsample?", a: "ลดการคำนวณ, ลด bandwidth, ลด noise, ใช้ใน pyramid/ML" },
      { q: "Image Pyramid คืออะไร?", a: "ชุดภาพ downsample ซ้อนกัน (1024→512→256→128) ใช้ตรวจจับวัตถุหลายขนาด" },
      { q: "108 → 16 ระดับ?", a: "108//16=6 → 6×16+7 = 103" }
    ],

    glossary: [
      { term: "Sampling", def: "เก็บตัวอย่างตำแหน่ง (x,y) ของภาพต่อเนื่อง — กำหนด spatial resolution" },
      { term: "Quantization", def: "ปัดค่าความเข้ม (amplitude) ให้เป็นระดับจำกัด — กำหนด grey levels" },
      { term: "Spatial Resolution", def: "ความละเอียดเชิงพื้นที่ — พิกเซลต่อพื้นที่ กำหนดโดย sampling rate" },
      { term: "Grey Level", def: "ระดับความเข้มของพิกเซล เช่น 8-bit = 256 ระดับ" },
      { term: "False Contours", def: "รอยขั้นบันไดเมื่อ quantization ระดับเทาน้อยเกินไป" },
      { term: "Digitizer / Frame Grabber", def: "อุปกรณ์แปลงสัญญาณภาพอนาล็อกเป็นดิจิทัล (sampling + quantization)" },
      { term: "Bit-Plane", def: "ชั้นบิตของภาพ — แต่ละบิต (0–7) แยกเป็นภาพขาวดำ 1 ชั้น" },
      { term: "Bit-Plane Slicing", def: "การแยกบิต: bit_plane[i] = (ex >> i) & 1" },
      { term: "MSB", def: "Most Significant Bit — bit 7 น้ำหนัก 128 เก็บโครงสร้างหลัก" },
      { term: "LSB", def: "Least Significant Bit — bit 3–0 น้ำหนัก 8,4,2,1 เก็บรายละเอียดเล็ก + noise" },
      { term: "Image Compression", def: "บีบอัดภาพ เช่น เก็บบิต 4–7 ทิ้งบิต 0–3 (50%)" },
      { term: "Watermarking", def: "ฝังลายน้ำในภาพ — มักใช้ LSB" },
      { term: "Steganography", def: "ซ่อนข้อมูลลับในภาพ — ใช้ LSB ที่ตามองไม่เห็นการเปลี่ยน" },
      { term: "Downsampling", def: "ลดขนาดภาพ (เช่น 1024→512) — พิกเซลลด ¼" },
      { term: "Image Pyramid", def: "ภาพ downsample หลายระดับซ้อนกัน ใช้ Object Detection / SIFT / SURF / ORB" },
      { term: "Bandwidth", def: "ปริมาณข้อมูลที่ส่งได้ต่อหน่วยเวลา — downsample ช่วยลดการใช้" }
    ],

    cheat: [
      { term: "Sampling", def: "เก็บตำแหน่ง → กำหนดความละเอียดเชิงพื้นที่" },
      { term: "Quantization", def: "ปัดความเข้ม → กำหนด grey levels" },
      { term: "False contours", def: "ระดับเทาน้อยไป → รอยขั้นบันได" },
      { term: "256→16 ระดับ", def: "q = (img//16)*16+7" },
      { term: "Bit plane", def: "bit_plane[i] = (ex >> i) & 1 · i = 0..7" },
      { term: "MSB", def: "bit 7 = 128 — โครงสร้างหลัก" },
      { term: "LSB", def: "bit 3–0 = 8,4,2,1 — รายละเอียด+noise" },
      { term: "Compression", def: "เก็บ bit 4–7 ทิ้ง bit 0–3 → 50%" },
      { term: "Watermark", def: "ซ่อนใน LSB (bit 0)" },
      { term: "Downsample", def: "ครึ่งหนึ่งทั้ง 2 ด้าน → พิกเซล ¼" },
      { term: "Pyramid", def: "1024→512→256→128 — Object Detection, SIFT/SURF/ORB" },
      { term: "ระดับเทา", def: "2^บิต — 5 bit = 32 · 8 bit = 256" }
    ]
  },

  /* ========================================================================
     CHAPTER 4 — Image Enhancement (การปรับปรุงภาพ)
     ======================================================================== */
  ch4: {
    title: "Image Enhancement (การปรับปรุงภาพ)",
    thai: "การปรับปรุงภาพ",
    en: "Image Enhancement",

    slides: [
      { title: "Cover — การปรับปรุงภาพ (Image Enhancement)", short: "เปิดบทเรียน" },
      { title: "Image Enhancement คืออะไร — Pipeline จริง", short: "Enhancement คืออะไร" },
      { title: "Brightness — เพิ่ม/ลดความสว่าง (beta)", short: "Brightness" },
      { title: "Contrast — เพิ่ม/ลดคอนทราสต์ (alpha)", short: "Contrast" },
      { title: "Brightness × Contrast — new = (alpha × pixel) + beta", short: "สูตรรวม" },
      { title: "cv2.convertScaleAbs() — โค้ดจริง", short: "convertScaleAbs" },
      { title: "Contrast Stretching — ยืดช่วงค่า", short: "Contrast Stretching" },
      { title: "Gamma Transformation — s = c·r^γ", short: "Gamma" },
      { title: "อ่านค่า γ — γ<1 สว่าง · γ=1 คงเดิม · γ>1 มืด", short: "อ่านค่า γ" },
      { title: "ตัวอย่าง γ = 0.5 และ γ = 2.2", short: "ตัวอย่าง Gamma" },
      { title: "Logarithmic Transformation — เน้นเงามืด", short: "Log Transform" },
      { title: "Histogram คืออะไร", short: "Histogram" },
      { title: "อ่าน Histogram — 3 รูปแบบ", short: "อ่าน Histogram" },
      { title: "Histogram Equalization — ปรับการกระจาย", short: "Equalization" },
      { title: "cv2.equalizeHist() — โค้ด", short: "equalizeHist" },
      { title: "CLAHE — Equalization แบบ Local", short: "CLAHE" },
      { title: "เปรียบเทียบ 3 วิธี (Equalize vs CLAHE)", short: "เปรียบเทียบ" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. Brightness & Contrast", topics: [3, 4, 5, 6] },
      { label: "2. Intensity Transformations", topics: [7, 8, 9, 10, 11] },
      { label: "3. Histogram", topics: [12, 13, 14, 15, 16, 17] },
      { label: "ทบทวนและฝึกฝน", topics: [18, 19, 20, 21, 22, 23, 24] }
    ],

    quiz: [
      {
        q: "เพิ่มความสว่างด้วย cv2.convertScaleAbs ใช้พารามิเตอร์ใด?",
        options: ["alpha (คูณค่าคงที่)", "gamma", "threshold", "beta (บวกค่าคงที่)"],
        correct: 3,
        explain: "beta = ค่าที่บวกเข้ากับทุกพิกเซล → ภาพสว่างขึ้น (beta=50) หรือมืดลง (beta=-50)"
      },
      {
        q: "เพิ่มคอนทราสต์ใช้พารามิเตอร์ใด?",
        options: ["kernel", "borderType", "alpha (คูณค่าคงที่)", "beta (บวกค่าคงที่)"],
        correct: 2,
        explain: "alpha = ตัวคูณ — alpha > 1 เพิ่ม contrast, alpha < 1 ลด contrast"
      },
      {
        q: "สูตรรวม Brightness + Contrast คือข้อใด?",
        options: ["new = alpha / pixel + beta", "new = (alpha × pixel) + beta", "new = pixel + alpha × beta", "new = (pixel + beta) × alpha"],
        correct: 1,
        explain: "new = (alpha × pixel) + beta — คูณ contrast ก่อนแล้วบวก brightness"
      },
      {
        q: "Gamma γ < 1 มีผลต่อภาพอย่างไร?",
        options: ["ภาพสว่างขึ้น (เน้นเงามืด)", "ภาพมืดลง", "ภาพไม่เปลี่ยน", "ภาพเบลอ"],
        correct: 0,
        explain: "γ < 1 ยกกำลังเศษส่วน → ค่ามืดถูกดันขึ้น → ภาพสว่างขึ้น เห็นรายละเอียดในเงา"
      },
      {
        q: "Histogram ของภาพคืออะไร?",
        options: ["เส้นขอบของวัตถุ", "ตารางสีของภาพ", "ขนาดของภาพ", "การกระจายของจำนวนพิกเซลต่อระดับความเข้ม"],
        correct: 3,
        explain: "Histogram นับว่าค่า 0–255 มีพิกเซลเท่าไร — บอกความสว่าง/คอนทราสต์ของภาพ"
      },
      {
        q: "ภาพมืดเกินไป histogram จะเป็นแบบใด?",
        options: ["กระจายทั่ว", "ว่างเปล่า", "ค่าส่วนใหญ่อยู่ทางซ้าย (ค่าต่ำ)", "ค่าส่วนใหญ่อยู่ทางขวา (ค่าสูง)"],
        correct: 2,
        explain: "พิกเซลส่วนใหญ่มีค่าต่ำ → แท่ง histogram รวมอยู่ด้านซ้าย"
      },
      {
        q: "Histogram Equalization ใช้ทำอะไร?",
        options: ["แปลงเป็นขาวดำ", "กระจาย histogram ให้ทั่วทั้งช่วง 0–255", "ทำให้ภาพเบลอ", "ตัดภาพเป็นส่วน ๆ"],
        correct: 1,
        explain: "Equalization ยืด histogram ที่เบียดกันให้กระจายทั่ว → คอนทราสต์ดีขึ้น"
      },
      {
        q: "cv2.equalizeHist() ใช้กับภาพแบบใด?",
        options: ["Grayscale (1 ช่อง)", "RGB (3 ช่องโดยตรง)", "Binary", "RGBA"],
        correct: 0,
        explain: "equalizeHist รับภาพ 1 ช่อง (grayscale) — ภาพสีต้องแปลงเป็นช่องเดียวหรือทำทีละช่อง"
      },
      {
        q: "CLAHE ต่างจาก Histogram Equalization อย่างไร?",
        options: ["เร็วกว่าเสมอ", "ใช้กับภาพสีเท่านั้น", "ไม่มี parameter", "ปรับเป็นบล็อกเล็ก ๆ (local) แทนทั้งภาพ"],
        correct: 3,
        explain: "CLAHE แบ่งภาพเป็นบล็อกแล้ว equalize ทีละบล็อก → กัน noise โผล่ในบริเวณสว่าง"
      },
      {
        q: "Contrast Stretching คืออะไร?",
        options: ["เปลี่ยนสีภาพ", "หมุนภาพ", "ยืดช่วงค่าที่แคบให้กว้างขึ้น", "บีบช่วงค่าให้แคบลง"],
        correct: 2,
        explain: "ถ้าค่าพิกเซลอยู่แค่ 50–150 ให้ยืดเป็น 0–255 → เห็นความต่างชัดขึ้น"
      }
    ],

    exam: [
      {
        q: "cv2.convertScaleAbs(img, beta=50) มีผลต่อภาพอย่างไร?",
        options: ["ภาพมืดลง 50 ระดับ", "คอนทราสต์เพิ่มขึ้น", "ภาพเบลอ", "ภาพสว่างขึ้น 50 ระดับ"],
        correct: 3,
        explain: "beta คือค่าที่บวกทุกพิกเซล → beta=50 สว่างขึ้น · beta=-50 มืดลง (ปรับ brightness)",
        en: {
          q: "What does cv2.convertScaleAbs(img, beta=50) do?",
          options: ["Darkens the image by 50 levels", "Increases contrast", "Blurs the image", "Brightens the image by 50 levels"],
          explain: "beta is added to every pixel → beta=50 brightens · beta=-50 darkens (brightness)"
        },
        steps: [
          "Brightness = บวก/ลบค่าคงที่กับทุกพิกเซล",
          "beta = ตัวบวก (offset)",
          "beta=50 → ทุกพิกเซล +50 → ภาพสว่างขึ้น",
          "beta=-50 → ทุกพิกเซล -50 → ภาพมืดลง",
          "ตอบ: ภาพสว่างขึ้น 50 ระดับ"
        ]
      },
      {
        q: "cv2.convertScaleAbs(img, alpha=1.8) มีผลต่อภาพอย่างไร?",
        options: ["ภาพมืดลง", "ภาพเบลอ", "คอนทราสต์เพิ่มขึ้น (alpha > 1)", "คอนทราสต์ลดลง"],
        correct: 2,
        explain: "alpha คือตัวคูณ — alpha > 1 ขยายระยะห่างของค่า → contrast เพิ่มขึ้น",
        en: {
          q: "What does cv2.convertScaleAbs(img, alpha=1.8) do?",
          options: ["Darkens the image", "Blurs the image", "Increases contrast (alpha > 1)", "Decreases contrast"],
          explain: "alpha is a multiplier — alpha > 1 widens the gaps between values → higher contrast"
        },
        steps: [
          "Contrast = ระยะห่างระหว่างค่ามืดกับค่าสว่าง",
          "alpha = ตัวคูณทุกพิกเซล",
          "alpha=1.8 → ค่ามืด/สว่างห่างกันมากขึ้น → คอนทราสต์เพิ่ม",
          "ตอบ: คอนทราสต์เพิ่มขึ้น"
        ]
      },
      {
        q: "สูตรรวม Brightness + Contrast ใน convertScaleAbs คือข้อใด?",
        options: ["new = alpha + beta + pixel", "new = (alpha × pixel) + beta", "new = pixel + (alpha × beta)", "new = (pixel + beta) ÷ alpha"],
        correct: 1,
        explain: "คูณด้วย alpha (contrast) ก่อน แล้วบวก beta (brightness) — ตรงกับโค้ด convertScaleAbs",
        en: {
          q: "What is the combined brightness + contrast formula in convertScaleAbs?",
          options: ["new = alpha + beta + pixel", "new = (alpha × pixel) + beta", "new = pixel + (alpha × beta)", "new = (pixel + beta) ÷ alpha"],
          explain: "Multiply by alpha (contrast) first, then add beta (brightness) — matches convertScaleAbs"
        },
        steps: [
          "contrast คูณ (alpha) · brightness บวก (beta)",
          "ทำ contrast ก่อน: alpha × pixel",
          "แล้วบวก brightness: + beta",
          "ตอบ: new = (alpha × pixel) + beta"
        ]
      },
      {
        q: "alpha = 0.5 มีผลต่อภาพอย่างไร?",
        options: ["คอนทราสต์ลดลง (alpha < 1)", "คอนทราสต์เพิ่มขึ้น", "ภาพสว่างขึ้น", "ภาพไม่เปลี่ยน"],
        correct: 0,
        explain: "alpha < 1 ทำให้ค่าทั้งหมดถูกรวมเข้าหากัน → ความต่างลดลง → contrast ลด",
        en: {
          q: "What does alpha = 0.5 do?",
          options: ["Decreases contrast (alpha < 1)", "Increases contrast", "Brightens the image", "No change"],
          explain: "alpha < 1 pulls all values together → less difference → lower contrast"
        },
        steps: [
          "alpha < 1 = คูณด้วยเศษส่วน",
          "ค่า 100 → 50, ค่า 200 → 100 — ห่างกันแคบลง",
          "ระยะห่างลดลง = contrast ลด",
          "ตอบ: คอนทราสต์ลดลง"
        ]
      },
      {
        q: "พารามิเตอร์ beta ใน convertScaleAbs มีค่าเป็นลบได้หรือไม่ และผลเป็นอย่างไร?",
        options: ["ไม่ได้ — beta ต้องเป็นบวกเสมอ", "ได้แต่ภาพพัง", "ไม่เกี่ยวกัน", "ได้ — beta=-50 ทำให้ภาพมืดลง"],
        correct: 3,
        explain: "beta เป็นตัวบวกได้ทั้งบวก/ลบ — ลบ = ลด brightness (ภาพมืดลง)",
        en: {
          q: "Can beta in convertScaleAbs be negative, and what happens?",
          options: ["No — beta must always be positive", "Yes but it breaks the image", "Irrelevant", "Yes — beta=-50 darkens the image"],
          explain: "beta can be positive or negative — negative lowers brightness (darker image)"
        },
        steps: [
          "beta เป็นแค่ค่าบวกที่บวกเข้ากับพิกเซล",
          "บวกค่าลบ = ลบออกจากพิกเซล",
          "beta=-50 → ทุกพิกเซล -50 → มืดลง",
          "ตอบ: ได้ — beta=-50 ทำให้ภาพมืดลง"
        ]
      },
      {
        q: "cv2.convertScaleAbs() คลิปค่าเกินช่วงเท่าไร?",
        options: ["−128 ถึง 127", "ไม่คลิป", "0–255 (uint8)", "0–1"],
        correct: 2,
        explain: "ผลลัพธ์ที่เกิน 255 ถูกตัดเป็น 255 และต่ำกว่า 0 ถูกตัดเป็น 0 — เพราะ dtype เป็น uint8",
        en: {
          q: "What range does cv2.convertScaleAbs() clip values to?",
          options: ["−128 to 127", "No clipping", "0–255 (uint8)", "0–1"],
          explain: "Values above 255 clamp to 255 and below 0 clamp to 0 — dtype is uint8"
        },
        steps: [
          "ผลลัพธ์ = (alpha × pixel) + beta",
          "dtype เป้าหมายเป็น uint8 → เก็บได้ 0–255",
          "เกิน 255 → ตัดเป็น 255 · ต่ำกว่า 0 → ตัดเป็น 0",
          "ตอบ: 0–255"
        ]
      },
      {
        q: "ถ้า pixel = 200 และ alpha = 1.8 ผลลัพธ์หลังคลิปคือเท่าไร?",
        options: ["180", "255", "360", "200"],
        correct: 1,
        explain: "200 × 1.8 = 360 → เกิน 255 → คลิปเป็น 255",
        en: {
          q: "If pixel = 200 and alpha = 1.8, what is the clipped result?",
          options: ["180", "255", "360", "200"],
          explain: "200 × 1.8 = 360 → exceeds 255 → clipped to 255"
        },
        steps: [
          "คำนวณ: 200 × 1.8 = 360",
          "uint8 เก็บได้สูงสุด 255",
          "360 > 255 → คลิปเหลือ 255",
          "ตอบ: 255"
        ]
      },
      {
        q: "สูตรของ Gamma Transformation คือข้อใด?",
        options: ["s = c·r^γ", "s = c·log(r)", "s = r + c", "s = r·γ"],
        correct: 0,
        explain: "s = c·r^γ — r = ค่าอินพุต (0–1), c = ค่าคงที่, γ = gamma",
        en: {
          q: "What is the Gamma Transformation formula?",
          options: ["s = c·r^γ", "s = c·log(r)", "s = r + c", "s = r·γ"],
          explain: "s = c·r^γ — r = input (0–1), c = constant, γ = gamma"
        },
        steps: [
          "Gamma (Power-Law) = ยกกำลังค่าพิกเซล",
          "สูตร: s = c × r^γ",
          "r = ค่าอินพุต 0–1 · γ = ตัวยกกำลัง",
          "ตอบ: s = c·r^γ"
        ]
      },
      {
        q: "Gamma γ < 1 (เช่น 0.5) มีผลต่อภาพอย่างไร?",
        options: ["ภาพมืดลง", "ภาพไม่เปลี่ยน", "ภาพกลับหัว", "ภาพสว่างขึ้น เห็นเงามืดชัดขึ้น"],
        correct: 3,
        explain: "γ < 1 (เศษส่วน) ดันค่ามืดให้สูงขึ้น → ภาพสว่างขึ้น เน้นรายละเอียดในเงา",
        en: {
          q: "What does gamma γ < 1 (e.g. 0.5) do?",
          options: ["Darkens the image", "No change", "Flips the image", "Brightens the image, reveals shadows"],
          explain: "γ < 1 (fraction) pushes dark values up → brighter image, more shadow detail"
        },
        steps: [
          "ลอง r = 0.25 (มืด): 0.25^0.5 = 0.5 → สว่างขึ้นจาก 0.25",
          "ค่ามืดถูกยกกำลังเศษส่วนให้สูงขึ้น",
          "ภาพรวมสว่างขึ้น เห็นรายละเอียดในเงา",
          "ตอบ: ภาพสว่างขึ้น"
        ]
      },
      {
        q: "Gamma γ > 1 (เช่น 2.2) มีผลต่อภาพอย่างไร?",
        options: ["ภาพไม่เปลี่ยน", "ภาพคมขึ้น", "ภาพมืดลง", "ภาพสว่างขึ้น"],
        correct: 2,
        explain: "γ > 1 ดันค่าสว่างให้ต่ำลง → ภาพมืดลง — คล้ายฟิล์มมืดของกล้อง",
        en: {
          q: "What does gamma γ > 1 (e.g. 2.2) do?",
          options: ["No change", "Sharpens the image", "Darkens the image", "Brightens the image"],
          explain: "γ > 1 pulls bright values down → darker image — like a dark film look"
        },
        steps: [
          "ลอง r = 0.75 (สว่าง): 0.75^2.2 ≈ 0.53 → มืดลงจาก 0.75",
          "ค่าสว่างถูกยกกำลังให้ต่ำลง",
          "ภาพรวมมืดลง",
          "ตอบ: ภาพมืดลง"
        ]
      },
      {
        q: "Gamma γ = 1 มีผลต่อภาพอย่างไร?",
        options: ["ภาพเบลอ", "ภาพไม่เปลี่ยน (s = r)", "ภาพสว่างขึ้น", "ภาพมืดลง"],
        correct: 1,
        explain: "r^1 = r → ค่าเท่าเดิมทุกพิกเซล → ภาพเหมือนเดิม",
        en: {
          q: "What does gamma γ = 1 do?",
          options: ["Blurs", "No change (s = r)", "Brightens", "Darkens"],
          explain: "r^1 = r → every pixel stays the same → identical image"
        },
        steps: [
          "r^1 = r (อะไรยกกำลัง 1 ได้ค่าเดิม)",
          "ทุกพิกเซลไม่เปลี่ยน",
          "ภาพเหมือนเดิม 100%",
          "ตอบ: ภาพไม่เปลี่ยน"
        ]
      },
      {
        q: "ค่า gamma ใดที่ใช้กับจอมอนิเตอร์โดยทั่วไป (มาตรฐาน sRGB)?",
        options: ["2.2", "0.5", "1", "255"],
        correct: 0,
        explain: "จอ/ทีวีมาตรฐานใช้ gamma ≈ 2.2 — ส่วน gamma 0.5 มักใช้แก้ภาพที่มืด",
        en: {
          q: "Which gamma is standard for monitors (sRGB)?",
          options: ["2.2", "0.5", "1", "255"],
          explain: "Displays/TVs use gamma ≈ 2.2; gamma 0.5 is often used to fix dark images"
        },
        steps: [
          "sRGB = มาตรฐานสีของจอ",
          "จอใช้ gamma 2.2 ในการแสดงผล",
          "ตอนแก้ภาพมืด มักใช้ gamma 0.5 (กลับด้าน)",
          "ตอบ: 2.2"
        ]
      },
      {
        q: "Logarithmic Transformation เหมาะกับภาพแบบใด?",
        options: ["ภาพสว่างเกินไป", "ภาพเบลอ", "ภาพสีสด", "ภาพที่มืดมาก ต้องการเน้นรายละเอียดในเงา"],
        correct: 3,
        explain: "log ยกค่ามืดขึ้นมากกว่าค่าสว่าง → เน้นรายละเอียดในบริเวณมืด (dynamic range กว้าง)",
        en: {
          q: "What kind of image is Logarithmic Transformation for?",
          options: ["Over-bright images", "Blurry images", "Vivid color images", "Very dark images where shadow detail must be enhanced"],
          explain: "log boosts dark values more than bright ones → reveals detail in shadows (wide dynamic range)"
        },
        steps: [
          "s = c·log(1 + r) — log ยกค่าต่ำมากกว่าค่าสูง",
          "ค่ามืด (เช่น 5) → log เพิ่มชัดเจน",
          "ค่าสว่าง (เช่น 250) → log เปลี่ยนน้อย",
          "เหมาะกับภาพมืด/ช่วงไดนามิกกว้าง",
          "ตอบ: ภาพที่มืดมาก"
        ]
      },
      {
        q: "Contrast Stretching คืออะไร?",
        options: [
          "ยืดช่วงค่าพิกเซลที่แคบให้กว้างขึ้น (เช่น 50–150 → 0–255)",
          "บีบช่วงค่าให้แคบลง",
          "เปลี่ยนภาพเป็นสี",
          "ลบ noise ด้วยค่าเฉลี่ย"
        ],
        correct: 2,
        explain: "ถ้าค่าพิกเซลทั้งหมดอยู่ในช่วงแคบ (ภาพซีด) → ยืดให้เต็ม 0–255 → เห็นความต่างชัดขึ้น",
        en: {
          q: "What is Contrast Stretching?",
          options: [
            "Stretches a narrow pixel range to a wider one (e.g. 50–150 → 0–255)",
            "Compresses the value range",
            "Converts the image to color",
            "Removes noise by averaging"
          ],
          explain: "If pixels only occupy a narrow range (washed out), stretch to full 0–255 → clearer differences"
        },
        steps: [
          "ภาพซีด = ค่าพิกเซลอยู่ในช่วงแคบ เช่น 50–150",
          "ยืด: 50 → 0 และ 150 → 255",
          "ค่ากลางถูกขยายตามสัดส่วน",
          "ภาพมีคอนทราสต์มากขึ้น",
          "ตอบ: ยืดช่วงค่าที่แคบให้กว้างขึ้น"
        ]
      },
      {
        q: "ภาพสว่างเกินไป (overexposed) histogram จะเป็นแบบใด?",
        options: ["ไม่มีแท่งเลย", "แท่งส่วนใหญ่อยู่ทางขวา (ค่าสูง)", "แท่งส่วนใหญ่อยู่ทางซ้าย (ค่าต่ำ)", "แท่งกระจายทั่ว"],
        correct: 1,
        explain: "พิกเซลส่วนใหญ่มีค่าสูง (ใกล้ 255) → histogram รวมกันอยู่ทางขวา",
        en: {
          q: "An overexposed (too bright) image has a histogram that is?",
          options: ["Empty", "Mostly on the right (high values)", "Mostly on the left (low values)", "Spread evenly"],
          explain: "Most pixels have high values (near 255) → histogram piles up on the right"
        },
        steps: [
          "ภาพสว่าง = พิกเซลส่วนใหญ่มีค่าสูง",
          "ค่าสูงอยู่ฝั่งขวาของแกน 0–255",
          "histogram เลยเบียดไปทางขวา",
          "ตอบ: แท่งส่วนใหญ่อยู่ทางขวา"
        ]
      },
      {
        q: "ภาพคอนทราสต์ต่ำ (ซีด) histogram จะเป็นแบบใด?",
        options: ["แท่งรวมกันอยู่กลาง ๆ ในช่วงแคบ", "แท่งกระจายเต็ม 0–255", "แท่งอยู่ขวาสุด", "แท่งอยู่ซ้ายสุด"],
        correct: 0,
        explain: "ค่าพิกเซลใกล้กันหมด (เช่น 80–120) → แท่งเบียดกันกลางแคบ ๆ — ขาดค่ามืดและสว่าง",
        en: {
          q: "A low-contrast (washed out) image has a histogram that is?",
          options: ["Piled in the middle in a narrow range", "Spread across 0–255", "All the way right", "All the way left"],
          explain: "Pixel values are all similar (e.g. 80–120) → bars pile in a narrow middle range — no darks or lights"
        },
        steps: [
          "คอนทราสต์ต่ำ = ค่ามืดกับสว่างใกล้กัน",
          "เช่น 80–120 เท่านั้น",
          "histogram เป็นแท่งเบียดกลางแคบ ๆ",
          "ตอบ: แท่งรวมกันอยู่กลาง ๆ ในช่วงแคบ"
        ]
      },
      {
        q: "Histogram Equalization ใช้ทำอะไร?",
        options: [
          "กระจาย histogram ให้ทั่วทั้งช่วง 0–255",
          "บีบ histogram ให้แคบลง",
          "ลบ histogram ทิ้ง",
          "เพิ่มสีให้ histogram"
        ],
        correct: 3,
        explain: "Equalization แปลงค่าให้ histogram แบน/กระจายทั่ว → คอนทราสต์และรายละเอียดดีขึ้น",
        en: {
          q: "What does Histogram Equalization do?",
          options: [
            "Spreads the histogram across the full 0–255 range",
            "Narrows the histogram",
            "Deletes the histogram",
            "Adds color to the histogram"
          ],
          explain: "Equalization remaps values so the histogram becomes flat/spread → better contrast and detail"
        },
        steps: [
          "อ่าน histogram ของภาพ (การกระจายพิกเซล)",
          "สร้าง mapping ที่กระจายพิกเซลทั่ว 0–255",
          "พิกเซลเยอะเกินไปในบางช่วงถูกยืดออก",
          "ผลลัพธ์: คอนทราสต์ดีขึ้น",
          "ตอบ: กระจาย histogram ให้ทั่วทั้งช่วง"
        ]
      },
      {
        q: "cv2.equalizeHist() ใช้กับภาพแบบใดโดยตรง?",
        options: ["RGBA 4 ช่อง", "ภาพเวกเตอร์", "Grayscale 1 ช่อง", "RGB 3 ช่อง"],
        correct: 2,
        explain: "equalizeHist รับภาพ 1 ช่อง (grayscale) — ภาพสีต้องแยกช่องหรือใช้ YUV แล้วทำที่ช่อง Y",
        en: {
          q: "Which image can cv2.equalizeHist() process directly?",
          options: ["4-channel RGBA", "Vector images", "Single-channel grayscale", "3-channel RGB"],
          explain: "equalizeHist takes 1 channel (grayscale) — for color, split channels or convert to YUV and process Y"
        },
        steps: [
          "equalizeHist ทำงานกับ histogram 1 ช่อง",
          "ภาพ grayscale มี 1 ช่อง → ใช้ได้ตรง ๆ",
          "ภาพสี: แปลง YUV แล้ว equalize ช่อง Y หรือทำทีละช่อง",
          "ตอบ: Grayscale 1 ช่อง"
        ]
      },
      {
        q: "CLAHE (cv2.createCLAHE) ต่างจาก Histogram Equalization อย่างไร?",
        options: [
          "แบ่งภาพเป็นบล็อกเล็ก ๆ แล้ว equalize ทีละบล็อก (local)",
          "equalize ทั้งภาพครั้งเดียวแบบ global",
          "เร็วกว่าเสมอ",
          "ใช้ได้กับภาพขาวดำเท่านั้น"
        ],
        correct: 1,
        explain: "CLAHE = Contrast Limited Adaptive HE — equalize เป็นบล็อกเล็ก ป้องกัน noise โผล่ในบริเวณสว่าง",
        en: {
          q: "How is CLAHE different from Histogram Equalization?",
          options: [
            "It splits the image into small tiles and equalizes each one (local)",
            "It equalizes the whole image at once (global)",
            "It is always faster",
            "It only works on binary images"
          ],
          explain: "CLAHE = Contrast Limited Adaptive HE — equalizes small tiles, avoiding noise blow-up in bright areas"
        },
        steps: [
          "Equalization แบบ global อาจทำให้ noise โผล่ชัด",
          "CLAHE แบ่งภาพเป็นบล็อก (tile) เล็ก ๆ",
          "equalize ทีละบล็อก + จำกัด contrast (clip)",
          "ได้รายละเอียดดีขึ้นโดย noise ไม่ระเบิด",
          "ตอบ: แบ่งภาพเป็นบล็อกเล็ก ๆ แล้ว equalize ทีละบล็อก"
        ]
      },
      {
        q: "Pipeline การทำงานจริง (ตาม PDF) คือข้อใด?",
        options: [
          "Camera → Image Enhancement → Threshold → Contour → Object Detection",
          "Threshold → Camera → Enhancement → Detection → Contour",
          "Contour → Camera → Threshold → Enhancement",
          "Object Detection → Camera → Contour → Threshold"
        ],
        correct: 0,
        explain: "ถ่ายภาพ → ปรับปรุงคุณภาพ → แบ่งส่วน (threshold) → หา contour → ตรวจจับวัตถุ",
        en: {
          q: "Which is the real-world pipeline (per the PDF)?",
          options: [
            "Camera → Image Enhancement → Threshold → Contour → Object Detection",
            "Threshold → Camera → Enhancement → Detection → Contour",
            "Contour → Camera → Threshold → Enhancement",
            "Object Detection → Camera → Contour → Threshold"
          ],
          explain: "Capture → enhance quality → segment (threshold) → find contours → detect objects"
        },
        steps: [
          "ขั้น 1: ถ่ายภาพด้วยกล้อง (Camera)",
          "ขั้น 2: ปรับปรุงภาพ (Enhancement — brightness/contrast/denoise)",
          "ขั้น 3: แบ่งส่วนด้วย Threshold",
          "ขั้น 4: หา Contour (ขอบเขตวัตถุ)",
          "ขั้น 5: ตรวจจับ/นับวัตถุ (Object Detection)",
          "ตอบ: Camera → Enhancement → Threshold → Contour → Detection"
        ]
      }
    ],

    flashcards: [
      { q: "เพิ่มความสว่าง?", a: "cv2.convertScaleAbs(img, beta=50) — beta บวกทุกพิกเซล" },
      { q: "เพิ่มคอนทราสต์?", a: "cv2.convertScaleAbs(img, alpha=1.8) — alpha คูณทุกพิกเซล" },
      { q: "สูตรรวม?", a: "new = (alpha × pixel) + beta" },
      { q: "alpha > 1?", a: "คอนทราสต์เพิ่ม (ระยะห่างค่ากว้างขึ้น)" },
      { q: "alpha < 1?", a: "คอนทราสต์ลด (ค่ารวมเข้าหากัน)" },
      { q: "beta เป็นลบ?", a: "ได้ — beta=-50 = ภาพมืดลง" },
      { q: "คลิปค่า?", a: "0–255 — เกิน 255 → 255, ต่ำกว่า 0 → 0" },
      { q: "Gamma สูตร?", a: "s = c·r^γ — γ<1 สว่าง · γ=1 คงเดิม · γ>1 มืด" },
      { q: "gamma มาตรฐานจอ?", a: "2.2 (sRGB) — ตอนแก้ภาพมืดใช้ 0.5" },
      { q: "Log transform เหมาะกับ?", a: "ภาพมืดมาก — เน้นรายละเอียดในเงา (s = c·log(1+r))" },
      { q: "Contrast stretching?", a: "ยืดช่วงแคบ (เช่น 50–150) ให้เต็ม 0–255" },
      { q: "Histogram คือ?", a: "กราฟนับพิกเซลต่อระดับความเข้ม 0–255" },
      { q: "ภาพมืด histogram?", a: "แท่งเบียดซ้าย (ค่าต่ำ) · ภาพสว่าง → ขวา" },
      { q: "ภาพคอนทราสต์ต่ำ histogram?", a: "แท่งรวมกลางแคบ ๆ" },
      { q: "Equalization?", a: "cv2.equalizeHist() — กระจาย histogram ให้ทั่ว (grayscale)" },
      { q: "CLAHE?", a: "cv2.createCLAHE() — equalize แบบบล็อกเล็ก (local) ลด noise โผล่" },
      { q: "Pipeline จริง?", a: "Camera → Enhancement → Threshold → Contour → Object Detection" }
    ],

    glossary: [
      { term: "Image Enhancement", def: "การปรับปรุงภาพให้ดูดีขึ้น — brightness, contrast, gamma, histogram" },
      { term: "Brightness", def: "ความสว่าง — ปรับด้วย beta (บวก/ลบค่าคงที่)" },
      { term: "Contrast", def: "คอนทราสต์ — ปรับด้วย alpha (คูณค่าคงที่)" },
      { term: "convertScaleAbs", def: "cv2.convertScaleAbs(img, alpha, beta) → new = alpha·pixel + beta แล้วคลิป 0–255" },
      { term: "Contrast Stretching", def: "ยืดช่วงค่าพิกเซลแคบให้กว้าง (เช่น 50–150 → 0–255)" },
      { term: "Gamma Transformation", def: "s = c·r^γ — Power-Law: γ<1 สว่าง · γ>1 มืด" },
      { term: "Logarithmic Transformation", def: "s = c·log(1+r) — เน้นรายละเอียดในเงามืด (dynamic range กว้าง)" },
      { term: "Histogram", def: "การกระจายของจำนวนพิกเซลต่อระดับความเข้ม 0–255" },
      { term: "Histogram Equalization", def: "ปรับ histogram ให้กระจายทั่ว — cv2.equalizeHist() (grayscale)" },
      { term: "CLAHE", def: "Contrast Limited Adaptive Histogram Equalization — equalize แบบบล็อกเล็ก + จำกัด contrast" },
      { term: "cv2.calcHist()", def: "คำนวณ histogram ของภาพ" },
      { term: "cv2.createCLAHE()", def: "สร้างตัวปรับ CLAHE — apply กับ grayscale" },
      { term: "Overexposed", def: "ภาพสว่างเกินไป — histogram เบียดขวา" },
      { term: "Underexposed", def: "ภาพมืดเกินไป — histogram เบียดซ้าย" }
    ],

    cheat: [
      { term: "Brightness", def: "beta บวก/ลบค่าคงที่ → beta=50 สว่าง · -50 มืด" },
      { term: "Contrast", def: "alpha คูณค่าคงที่ → >1 เพิ่ม · <1 ลด" },
      { term: "สูตรรวม", def: "new = (alpha × pixel) + beta · คลิป 0–255" },
      { term: "โค้ด", def: "cv2.convertScaleAbs(img, alpha=1.5, beta=30)" },
      { term: "Gamma", def: "s = c·r^γ · γ<1 สว่าง · γ=1 คงเดิม · γ>1 มืด" },
      { term: "gamma มาตรฐาน", def: "2.2 (sRGB) · แก้ภาพมืดใช้ 0.5" },
      { term: "Log", def: "s = c·log(1+r) — เน้นเงามืด" },
      { term: "Contrast stretching", def: "ยืด 50–150 → 0–255" },
      { term: "Histogram", def: "นับพิกเซล/ระดับ 0–255 · calcHist" },
      { term: "ภาพมืด/สว่าง", def: "histogram ซ้าย/ขวา · ซีด = กลางแคบ" },
      { term: "Equalize", def: "cv2.equalizeHist() — grayscale · กระจาย histogram" },
      { term: "CLAHE", def: "cv2.createCLAHE() — local block + clip contrast" },
      { term: "Pipeline", def: "Camera → Enhancement → Threshold → Contour → Detection" }
    ]
  },

  /* ========================================================================
     CHAPTER 5 — Image Filtering & Edge Detection
     ======================================================================== */
  ch5: {
    title: "Image Filtering & Edge Detection (การกรองภาพและตรวจจับขอบ)",
    thai: "การกรองภาพและตรวจจับขอบ",
    en: "Image Filtering & Edge Detection",

    slides: [
      { title: "Cover — การกรองภาพและตรวจจับขอบ", short: "เปิดบทเรียน" },
      { title: "Noise คืออะไร — ทำไมต้องกรอง", short: "Noise คืออะไร" },
      { title: "Spatial Filtering — เลื่อน Mask ทีละจุด", short: "Spatial Filtering" },
      { title: "Linear vs Non-linear Filter", short: "Linear vs Non-linear" },
      { title: "Kernel / Mask คืออะไร", short: "Kernel / Mask" },
      { title: "Mean Filter (Averaging) — cv2.blur()", short: "Mean Filter" },
      { title: "คำนวณ Mean ด้วยมือ — ตัวอย่าง 3×3", short: "คำนวณ Mean" },
      { title: "Mask ใหญ่ขึ้น → เบลอมากขึ้น", short: "Mask ใหญ่ขึ้น" },
      { title: "Gaussian Filter — cv2.GaussianBlur()", short: "Gaussian Filter" },
      { title: "Smoothing = Lowpass Filter", short: "Lowpass" },
      { title: "Median Filter — cv2.medianBlur()", short: "Median Filter" },
      { title: "Median vs Mean — Salt & Pepper", short: "Median vs Mean" },
      { title: "Bilateral Filter — เบลอแต่ขอบคม", short: "Bilateral" },
      { title: "Edge คืออะไร — Gradient", short: "Edge & Gradient" },
      { title: "อนุพันธ์อันดับ 1 — Sobel", short: "Sobel" },
      { title: "Sobel_x / Sobel_y — ตรวจจับขอบคนละแกน", short: "Sobel_x / Sobel_y" },
      { title: "อนุพันธ์อันดับ 2 — Laplacian", short: "Laplacian" },
      { title: "Laplacian Kernel 4 แบบ — Flat Region = 0", short: "Laplacian Kernels" },
      { title: "Sharpening — g = f − ∇²f", short: "Sharpening" },
      { title: "Canny Edge Detection", short: "Canny" },
      { title: "Fourier Transform — โลกความถี่", short: "Fourier Transform" },
      { title: "FFT / IFFT — Workflow 4 ขั้น", short: "FFT / IFFT" },
      { title: "Magnitude Spectrum — อ่านยังไง", short: "Magnitude Spectrum" },
      { title: "Phase Spectrum — ข้อมูลตำแหน่ง", short: "Phase Spectrum" },
      { title: "Low-pass / High-pass — ใน Frequency Domain", short: "LPF / HPF" },
      { title: "Walsh / Hadamard Transform", short: "Walsh / Hadamard" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. Spatial Filtering", topics: [3, 4, 5] },
      { label: "2. Smoothing Filters", topics: [6, 7, 8, 9, 10] },
      { label: "3. Non-linear Filters", topics: [11, 12, 13] },
      { label: "4. Edge Detection", topics: [14, 15, 16, 17, 18, 19, 20] },
      { label: "5. Frequency Domain", topics: [21, 22, 23, 24, 25, 26] },
      { label: "ทบทวนและฝึกฝน", topics: [27, 28, 29, 30, 31, 32, 33] }
    ],

    quiz: [
      {
        q: "Spatial Filtering กระทำกับอะไรโดยตรง?",
        options: ["ความถี่ของภาพ", "ขนาดไฟล์", "ชื่อไฟล์", "พิกเซลของภาพ (เลื่อน mask ทีละจุด)"],
        correct: 3,
        explain: "Spatial filtering เลื่อน filter mask ไปทีละจุดบนภาพ แล้วคำนวณ response ที่จุดนั้น"
      },
      {
        q: "Spatial Filter แบ่งเป็น 2 ประเภทคือ?",
        options: ["แดงและน้ำเงิน", "เร็วและช้า", "Linear และ Non-linear", "ใหญ่และเล็ก"],
        correct: 2,
        explain: "Linear (ผลรวมถ่วงน้ำหนัก เช่น mean, gaussian, sobel) · Non-linear (เรียงค่า เช่น median)"
      },
      {
        q: "Mean Filter ใช้ทำอะไร?",
        options: ["เปลี่ยนสีภาพ", "เบลอภาพและลด noise", "ทำให้ภาพคมขึ้น", "ตรวจจับขอบ"],
        correct: 1,
        explain: "Mean (averaging) = เฉลี่ยพิกเซลใน neighborhood → เรียบขึ้น เบลอขึ้น ลด noise ลง"
      },
      {
        q: "Mean Filter 3×3 คำนวณอย่างไร?",
        options: ["หาค่าเฉลี่ยของพิกเซล 9 ตัวใน mask", "เอาค่ากลางของพิกเซล 9 ตัว", "เอาพิกเซลซ้ายสุด", "คูณพิกเซลด้วย 9"],
        correct: 0,
        explain: "Mean = sum ของ 9 พิกเซล ÷ 9 — เช่น (5+4+5+2+1+2+5+4+5)/9 = 33/9 ≈ 4"
      },
      {
        q: "Median Filter จัดเป็น filter แบบใด?",
        options: ["Linear", "Low-pass เฉพาะ", "High-pass", "Non-linear (order statistics)"],
        correct: 3,
        explain: "Median เรียงค่าพิกเซลใน neighborhood แล้วเอาค่ากลาง — ไม่ใช่ผลรวมถ่วงน้ำหนัก → non-linear"
      },
      {
        q: "Median Filter เหมาะกับ Noise แบบใด?",
        options: ["Motion blur", "สีเพี้ยน", "Salt & Pepper (จุดขาวดำสุ่ม)", "Gaussian noise"],
        correct: 2,
        explain: "Median ตัดค่าที่ผิดปกติ (จุดขาว/ดำ) ออกได้ดี — เหมาะกับ salt & pepper noise"
      },
      {
        q: "Sobel ใช้หลักการใดในการหาขอบ?",
        options: ["การเรียงค่า", "อนุพันธ์อันดับ 1 (gradient)", "อนุพันธ์อันดับ 2", "การเฉลี่ย"],
        correct: 1,
        explain: "Sobel = first-order derivative — วัดอัตราการเปลี่ยนของ intensity (gradient)"
      },
      {
        q: "Sobel_x ตรวจจับขอบแบบใด?",
        options: ["ขอบแนวตั้ง (vertical edges)", "ขอบแนวนอน (horizontal edges)", "ขอบเฉียง", "ทุกขอบเหมือนกัน"],
        correct: 0,
        explain: "Sobel_x คำนวณ gradient แกน x (แนวนอน) → เน้นการเปลี่ยนในแนว x → เห็นขอบแนวตั้ง",
      },
      {
        q: "Laplacian เป็นอนุพันธ์อันดับเท่าไร?",
        options: ["1 (first-order)", "0", "3", "2 (second-order)"],
        correct: 3,
        explain: "Laplacian = second-order derivative ∇²f — ใช้หา edge และ sharpening"
      },
      {
        q: "Laplacian ใช้กับบริเวณเรียบ (flat region) ให้ค่าเท่าไร?",
        options: ["128", "ค่ากลาง", "0", "255"],
        correct: 2,
        explain: "บริเวณที่ค่าพิกเซลไม่เปลี่ยน อนุพันธ์อันดับ 2 = 0 → response เป็น 0"
      }
    ],

    exam: [
      {
        q: "Mean Filter 3×3 บนพื้นที่ [5 4 5; 2 1 2; 5 4 5] ได้ค่าเท่าไร?",
        options: ["≈ 3", "≈ 5", "≈ 1", "≈ 4 (33/9)"],
        correct: 3,
        explain: "ผลรวม = 5+4+5+2+1+2+5+4+5 = 33 → 33/9 = 3.67 ≈ 4 (ปัดเป็น 4)",
        en: {
          q: "A 3×3 mean filter on [5 4 5; 2 1 2; 5 4 5] gives?",
          options: ["≈ 3", "≈ 5", "≈ 1", "≈ 4 (33/9)"],
          explain: "Sum = 5+4+5+2+1+2+5+4+5 = 33 → 33/9 = 3.67 ≈ 4"
        },
        steps: [
          "รวมพิกเซลทั้ง 9 ตัวใน mask",
          "5+4+5 = 14 (แถวแรก) · 2+1+2 = 5 (แถวกลาง) · 5+4+5 = 14 (แถวล่าง)",
          "รวมทั้งหมด = 14+5+14 = 33",
          "หารด้วย 9 (จำนวนพิกเซล): 33/9 = 3.67",
          "ปัดเป็น 4 → ตอบ ≈ 4"
        ]
      },
      {
        q: "เมื่อ mask (kernel) ของ Mean Filter ใหญ่ขึ้น ผลคือ?",
        options: ["สีเปลี่ยน", "ขนาดภาพเล็กลง", "ภาพเบลอมากขึ้น", "ภาพคมขึ้น"],
        correct: 2,
        explain: "mask ใหญ่ขึ้น = เฉลี่ยพิกเซลมากขึ้น → เรียบ/เบลอมากขึ้น วัตถุเล็กอาจหาย",
        en: {
          q: "As the mean filter mask gets bigger, the result is?",
          options: ["Colors change", "The image shrinks", "The image blurs more", "The image sharpens"],
          explain: "A bigger mask averages more pixels → smoother/blurrier; small objects may disappear"
        },
        steps: [
          "mask 3×3 เฉลี่ย 9 พิกเซล",
          "mask 5×5 เฉลี่ย 25 พิกเซล",
          "เฉลี่ยเยอะขึ้น = รายละเอียดถูกถูกลบมากขึ้น",
          "ผล = เบลอมากขึ้น",
          "ตอบ: ภาพเบลอมากขึ้น"
        ]
      },
      {
        q: "คำสั่ง Gaussian Filter ใน OpenCV คือข้อใด?",
        options: ["cv2.equalizeHist()", "cv2.GaussianBlur()", "cv2.blur()", "cv2.medianBlur()"],
        correct: 1,
        explain: "cv2.GaussianBlur(img, (5,5), 0) — เบลอแบบถ่วงน้ำหนักตาม Gaussian ลด noise + smooth",
        en: {
          q: "Which OpenCV command is the Gaussian filter?",
          options: ["cv2.equalizeHist()", "cv2.GaussianBlur()", "cv2.blur()", "cv2.medianBlur()"],
          explain: "cv2.GaussianBlur(img, (5,5), 0) — weighted blur by a Gaussian, reduces noise + smooths"
        },
        steps: [
          "Gaussian = ตัวกรองถ่วงน้ำหนักรูปกระดิ่ง (bell curve)",
          "พิกเซลกลางมีน้ำหนักมาก พิกเซลไกลมีน้ำหนักน้อย",
          "OpenCV: cv2.GaussianBlur(img, (ksize), sigma)",
          "ตอบ: cv2.GaussianBlur()"
        ]
      },
      {
        q: "Smoothing Filter เรียกอีกชื่อหนึ่งว่าอะไร?",
        options: ["Lowpass Filter", "Highpass Filter", "Bandpass Filter", "Notch Filter"],
        correct: 0,
        explain: "Smoothing (mean/gaussian) ยอมให้ความถี่ต่ำผ่าน ลดความถี่สูง (รายละเอียด/noise) → lowpass",
        en: {
          q: "What is another name for a smoothing filter?",
          options: ["Lowpass filter", "Highpass filter", "Bandpass filter", "Notch filter"],
          explain: "Smoothing (mean/gaussian) lets low frequencies pass and reduces high ones (detail/noise) → lowpass"
        },
        steps: [
          "ความถี่ต่ำ = บริเวณเรียบ · ความถี่สูง = ขอบ/noise",
          "smoothing เฉลี่ย → ความถี่สูงถูกลด",
          "ผ่านความถี่ต่ำ → เรียกว่า Lowpass",
          "ตอบ: Lowpass Filter"
        ]
      },
      {
        q: "Median Filter คำนวณค่าพิกเซลใหม่อย่างไร?",
        options: ["หาค่าเฉลี่ยของพิกเซล", "หาผลรวมของพิกเซล", "เอาค่ามากสุด", "เรียงค่าพิกเซลใน neighborhood แล้วเอาค่ากลาง"],
        correct: 3,
        explain: "Median = sort พิกเซลใน mask แล้วเลือกค่าตรงกลาง — ไม่ใช้การบวก/คูณ",
        en: {
          q: "How does the median filter compute a new pixel value?",
          options: ["Averages the pixels", "Sums the pixels", "Takes the maximum", "Sorts the neighborhood pixels and takes the middle value"],
          explain: "Median = sort the pixels in the mask and pick the middle one — no addition/multiplication"
        },
        steps: [
          "เก็บพิกเซลใน neighborhood (เช่น 9 ตัว)",
          "เรียงจากน้อยไปมาก",
          "เลือกค่าตรงกลาง (median)",
          "แทนค่ากลางของ mask ด้วยค่านั้น",
          "ตอบ: เรียงค่าแล้วเอาค่ากลาง"
        ]
      },
      {
        q: "Mean Filter กับ Median Filter ต่างกันตรงไหน?",
        options: [
          "Mean = เฉลี่ย (linear) · Median = เรียงแล้วเอาค่ากลาง (non-linear)",
          "เหมือนกันทุกอย่าง",
          "Mean ใช้กับสี Median ใช้กับเทา",
          "Median เร็วกว่าเสมอ"
        ],
        correct: 2,
        explain: "Mean ใช้ผลรวมถ่วงน้ำหนัก (linear) · Median เรียงค่าแล้วเลือกกลาง (non-linear) — median ลบ salt & pepper ได้ดีกว่า",
        en: {
          q: "What is the difference between mean and median filters?",
          options: [
            "Mean = average (linear) · Median = sort and pick middle (non-linear)",
            "They are identical",
            "Mean works on color, median on gray",
            "Median is always faster"
          ],
          explain: "Mean uses a weighted sum (linear) · Median sorts and picks the middle (non-linear) — median beats salt & pepper"
        },
        steps: [
          "Mean: รวม 9 ค่า ÷ 9 — ค่าผิดปกติ (จุดขาว) ดึงค่าเฉลี่ยขึ้นแรง",
          "Median: เรียงแล้วเลือกกลาง — จุดผิดปกติตกไปอยู่หัว/ท้าย",
          "median จึงลบ salt & pepper ได้ดีกว่า",
          "ตอบ: ข้อที่บอก mean = เฉลี่ย · median = เรียงค่ากลาง"
        ]
      },
      {
        q: "Bilateral Filter มีจุดเด่นอะไร?",
        options: ["เปลี่ยนสีภาพ", "เบลอ noise แต่รักษาขอบ (edge) ให้คมไว้", "เบลอทุกอย่างเท่ากัน", "ทำให้ภาพคมขึ้นอย่างเดียว"],
        correct: 1,
        explain: "Bilateral ถ่วงน้ำหนักทั้งระยะห่างและความต่างของค่า → noise ถูกลบ แต่ขอบที่ค่าต่างกันมากยังอยู่",
        en: {
          q: "What is the advantage of the bilateral filter?",
          options: ["Recolors the image", "Blurs noise but keeps edges sharp", "Blurs everything equally", "Only sharpens the image"],
          explain: "Bilateral weights both distance and intensity difference → noise is removed while strong edges survive"
        },
        steps: [
          "Bilateral ดู 2 ปัจจัย: ระยะห่าง + ความต่างของค่าพิกเซล",
          "พิกเซลที่ค่าต่างกันมาก (ขอบ) ได้น้ำหนักน้อย → ขอบไม่ถูกเบลอ",
          "บริเวณเรียบ (ค่าใกล้กัน) ถูกเฉลี่ย → noise หาย",
          "ตอบ: เบลอ noise แต่รักษาขอบให้คม"
        ]
      },
      {
        q: "Edge ในภาพคืออะไร?",
        options: ["จุดที่ค่าความเข้มเปลี่ยนเร็ว (intensity เปลี่ยนฉับพลัน)", "จุดที่สีเหมือนกัน", "บริเวณเรียบที่สุด", "จุดที่มืดที่สุด"],
        correct: 0,
        explain: "Edge = บริเวณที่ intensity เปลี่ยนเร็ว — เช่น ขอบของวัตถุกับพื้นหลัง",
        en: {
          q: "What is an edge in an image?",
          options: ["A place where intensity changes rapidly", "A place where colors match", "The flattest region", "The darkest point"],
          explain: "An edge = where intensity changes fast — e.g. the boundary between an object and the background"
        },
        steps: [
          "ไล่ดูค่าพิกเซลตามแนวนอน",
          "ถ้าค่าเปลี่ยนช้า = บริเวณเรียบ (flat)",
          "ถ้าค่าเปลี่ยนเร็ว/กระโดด = edge",
          "ตอบ: จุดที่ค่าความเข้มเปลี่ยนเร็ว"
        ]
      },
      {
        q: "Sobel ใช้หลักการใดในการหาขอบ?",
        options: ["Second-order derivative", "ค่าเฉลี่ย", "การเรียงค่า", "First-order derivative (gradient)"],
        correct: 3,
        explain: "Sobel = อนุพันธ์อันดับ 1 — วัดอัตราการเปลี่ยนของ intensity (gradient) ทั้งแกน x และ y",
        en: {
          q: "What principle does Sobel use to find edges?",
          options: ["Second-order derivative", "Averaging", "Sorting values", "First-order derivative (gradient)"],
          explain: "Sobel = first-order derivative — measures the rate of intensity change (gradient) on both axes"
        },
        steps: [
          "Edge = จุดที่ intensity เปลี่ยนเร็ว",
          "การวัด 'เปลี่ยนเร็ว' = อนุพันธ์ (derivative)",
          "อันดับ 1 = gradient → Sobel, Scharr",
          "ตอบ: First-order derivative (gradient)"
        ]
      },
      {
        q: "Sobel_x ตรวจจับขอบแบบใด?",
        options: ["ขอบโค้ง", "ขอบทุกแบบ", "ขอบแนวตั้ง (vertical edges)", "ขอบแนวนอน (horizontal edges)"],
        correct: 2,
        explain: "Sobel_x คำนวณ gradient แกน x → เน้นการเปลี่ยนตามแนวนอน → เห็นขอบแนวตั้ง",
        en: {
          q: "What kind of edges does Sobel_x detect?",
          options: ["Curved edges", "All edges", "Vertical edges", "Horizontal edges"],
          explain: "Sobel_x computes the x-axis gradient → highlights horizontal change → vertical edges appear"
        },
        steps: [
          "Sobel_x วัดความต่างซ้าย-ขวา (แกน x)",
          "ขอบแนวตั้ง = ค่าซ้ายกับขวาต่างกันมาก",
          "Sobel_x จึงเห็นขอบแนวตั้งชัด",
          "ตอบ: ขอบแนวตั้ง (vertical edges)"
        ]
      },
      {
        q: "Sobel_y ตรวจจับขอบแบบใด?",
        options: ["ขอบวงกลม", "ขอบแนวนอน (horizontal edges)", "ขอบแนวตั้ง (vertical edges)", "ขอบเฉียง"],
        correct: 1,
        explain: "Sobel_y วัดความต่างบน-ล่าง (แกน y) → เห็นขอบแนวนอนชัด",
        en: {
          q: "What kind of edges does Sobel_y detect?",
          options: ["Circular edges", "Horizontal edges", "Vertical edges", "Diagonal edges"],
          explain: "Sobel_y measures top-bottom difference (y-axis) → horizontal edges appear clearly"
        },
        steps: [
          "Sobel_y วัดความต่างบน-ล่าง (แกน y)",
          "ขอบแนวนอน = ค่าบนกับล่างต่างกันมาก",
          "Sobel_y จึงเห็นขอบแนวนอนชัด",
          "ตอบ: ขอบแนวนอน (horizontal edges)"
        ]
      },
      {
        q: "Laplacian เป็นอนุพันธ์อันดับเท่าไร?",
        options: ["2 (second-order)", "1 (first-order)", "0", "4"],
        correct: 0,
        explain: "Laplacian = second-order derivative ∇²f — ใช้หา edge และ sharpening (g = f − ∇²f)",
        en: {
          q: "What order of derivative is the Laplacian?",
          options: ["2 (second-order)", "1 (first-order)", "0", "4"],
          explain: "Laplacian = second-order derivative ∇²f — used for edges and sharpening (g = f − ∇²f)"
        },
        steps: [
          "Sobel = อันดับ 1 (gradient) · Laplacian = อันดับ 2",
          "∇²f = ผลรวมอนุพันธ์อันดับ 2 ทั้ง 2 แกน",
          "ตอบ: 2 (second-order)"
        ]
      },
      {
        q: "Laplacian บนบริเวณเรียบ (flat region) ให้ค่าเท่าไร?",
        options: ["255", "128", "ค่ามากที่สุด", "0"],
        correct: 3,
        explain: "บริเวณค่าคงที่ → อนุพันธ์อันดับ 2 = 0 → response เป็น 0",
        en: {
          q: "What value does the Laplacian give on a flat region?",
          options: ["255", "128", "The maximum", "0"],
          explain: "A constant region has zero second derivative → the response is 0"
        },
        steps: [
          "บริเวณเรียบ = พิกเซลทุกตัวมีค่าเท่ากัน",
          "อนุพันธ์อันดับ 2 ของค่าคงที่ = 0",
          "Laplacian response = 0",
          "ตอบ: 0"
        ]
      },
      {
        q: "สูตร Sharpening ด้วย Laplacian คือข้อใด?",
        options: ["g = f × ∇²f", "g = f ÷ ∇²f", "g = f − ∇²f", "g = f + ∇²f"],
        correct: 2,
        explain: "ลบ Laplacian (ซึ่งเน้นจุดเปลี่ยนเร็ว) ออกจากภาพเดิม → ขอบคมขึ้น",
        en: {
          q: "What is the Laplacian sharpening formula?",
          options: ["g = f × ∇²f", "g = f ÷ ∇²f", "g = f − ∇²f", "g = f + ∇²f"],
          explain: "Subtract the Laplacian (which highlights rapid changes) from the original → sharper edges"
        },
        steps: [
          "Laplacian เน้นจุดที่ค่าเปลี่ยนเร็ว (ขอบ)",
          "นำ Laplacian ไปลบออกจากภาพเดิม",
          "g = f − ∇²f",
          "ตอบ: g = f − ∇²f"
        ]
      },
      {
        q: "Laplacian Kernel แบบ 4-neighbor มีค่ากลางเป็นเท่าไร?",
        options: ["8", "−4", "−8", "4"],
        correct: 1,
        explain: "4-neighbor: [0 1 0; 1 −4 1; 0 1 0] — กลาง −4 · 8-neighbor: กลาง −8",
        en: {
          q: "What is the center value of the 4-neighbor Laplacian kernel?",
          options: ["8", "−4", "−8", "4"],
          explain: "4-neighbor: [0 1 0; 1 −4 1; 0 1 0] — center −4 · 8-neighbor: center −8"
        },
        steps: [
          "Laplacian 4-neighbor: เพื่อนบ้าน 4 ทิศ (บน/ล่าง/ซ้าย/ขวา)",
          "kernel = [0 1 0; 1 −4 1; 0 1 0]",
          "ค่ากลาง = −4",
          "ตอบ: −4"
        ]
      },
      {
        q: "FFT ใช้แปลงภาพจาก domain ใดไป domain ใด?",
        options: ["Spatial Domain → Frequency Domain", "Frequency → Spatial", "สี → เทา", "RGB → BGR"],
        correct: 0,
        explain: "FFT (Fast Fourier Transform) แปลงภาพจาก spatial (พิกเซล) ไป frequency domain",
        en: {
          q: "FFT converts an image from which domain to which?",
          options: ["Spatial domain → frequency domain", "Frequency → spatial", "Color → gray", "RGB → BGR"],
          explain: "FFT (Fast Fourier Transform) converts the image from spatial (pixels) to the frequency domain"
        },
        steps: [
          "Spatial domain = มองภาพเป็นพิกเซล (x, y)",
          "Frequency domain = มองภาพเป็นความถี่",
          "FFT = แปลง spatial → frequency",
          "IFFT = แปลงกลับ frequency → spatial",
          "ตอบ: Spatial → Frequency"
        ]
      },
      {
        q: "หลัง fftshift ตรงกลางของ Magnitude Spectrum คืออะไร?",
        options: ["ขอบคมที่สุด", "noise ทั้งหมด", "จุดมืดที่สุด", "DC Component (ความสว่างเฉลี่ยของภาพ)"],
        correct: 3,
        explain: "fftshift ย้ายความถี่ต่ำ (DC) มาตรงกลาง — DC = ค่าเฉลี่ยความสว่างของภาพ",
        en: {
          q: "After fftshift, what is at the center of the magnitude spectrum?",
          options: ["The sharpest edge", "All the noise", "The darkest point", "The DC component (average brightness)"],
          explain: "fftshift moves low frequencies (DC) to the center — DC = the image's average brightness"
        },
        steps: [
          "FFT → ความถี่ต่ำอยู่ที่มุมของ spectrum",
          "fftshift ย้ายความถี่ต่ำมาอยู่ตรงกลาง",
          "ตรงกลาง = DC component = ค่าเฉลี่ยความสว่าง",
          "ตอบ: DC Component"
        ]
      },
      {
        q: "High Frequency ในภาพคืออะไร?",
        options: ["พื้นหลัง", "สีเดียว", "Edge, Detail และ Noise", "บริเวณเรียบ"],
        correct: 2,
        explain: "ความถี่สูง = จุดที่ค่าเปลี่ยนเร็ว = ขอบ (edge), รายละเอียดเล็ก ๆ และ noise",
        en: {
          q: "What is high frequency in an image?",
          options: ["Backgrounds", "A single color", "Edges, details, and noise", "Flat regions"],
          explain: "High frequency = where values change fast = edges, fine details, and noise"
        },
        steps: [
          "ความถี่ต่ำ = การเปลี่ยนช้า (บริเวณเรียบ)",
          "ความถี่สูง = การเปลี่ยนเร็ว",
          "ขอบ/รายละเอียดเล็ก/noise เปลี่ยนเร็ว → ความถี่สูง",
          "ตอบ: Edge, Detail และ Noise"
        ]
      },
      {
        q: "Walsh / Hadamard Transform ใช้ค่าพื้นฐานแบบใด?",
        options: ["เฉพาะ 0", "+1 และ −1 (square wave)", "sin และ cos", "0 ถึง 255"],
        correct: 1,
        explain: "Walsh/Hadamard ใช้ basis แบบ +1/−1 (square wave) — ต่างจาก Fourier ที่ใช้ sine/cosine",
        en: {
          q: "What basis values does the Walsh/Hadamard transform use?",
          options: ["Only 0", "+1 and −1 (square waves)", "sin and cos", "0 to 255"],
          explain: "Walsh/Hadamard uses +1/−1 bases (square waves) — unlike Fourier which uses sine/cosine"
        },
        steps: [
          "Fourier ใช้ sine/cosine เป็น basis",
          "Walsh/Hadamard ใช้ +1/−1 (square wave) แทน",
          "ง่ายต่อฮาร์ดแวร์ เพราะมีแค่ 2 ค่า",
          "ตอบ: +1 และ −1"
        ]
      },
      {
        q: "Phase Spectrum เก็บข้อมูลอะไรสำคัญ?",
        options: ["ตำแหน่ง (spatial location) ของขอบ/โครงสร้าง", "ความสว่างเฉลี่ย", "ขนาดของภาพ", "จำนวนสี"],
        correct: 0,
        explain: "Phase บอก 'ตำแหน่ง' ของส่วนประกอบความถี่ — ทดลองสลับ phase ของ 2 ภาพพบว่า phase กำหนดโครงสร้างภาพ",
        en: {
          q: "What important information does the phase spectrum hold?",
          options: ["The spatial location of edges/structure", "Average brightness", "Image size", "Color count"],
          explain: "Phase tells where each frequency component sits — swapping phases of two images shows phase defines the structure"
        },
        steps: [
          "Magnitude = ความแรงของแต่ละความถี่",
          "Phase = ตำแหน่ง/เฟสของความถี่นั้นในภาพ",
          "ตัวอย่าง Cameraman: เอา phase มาคู่กับ magnitude อื่น → เห็นโครงสร้างภาพเดิม",
          "ตอบ: ตำแหน่งของขอบ/โครงสร้าง"
        ]
      }
    ],

    flashcards: [
      { q: "Spatial filtering คือ?", a: "กรองที่พิกเซลโดยตรง — เลื่อน mask ทีละจุด · linear/non-linear" },
      { q: "Mean filter?", a: "เฉลี่ยพิกเซลใน mask (linear) — เบลอ + ลด noise · cv2.blur()" },
      { q: "Mean 3×3 [5 4 5;2 1 2;5 4 5]?", a: "33/9 = 3.67 ≈ 4" },
      { q: "mask ใหญ่ขึ้น?", a: "เบลอมากขึ้น วัตถุเล็กหายได้" },
      { q: "Gaussian?", a: "เบลอถ่วงน้ำหนักรูปกระดิ่ง · cv2.GaussianBlur()" },
      { q: "Smoothing = ?", a: "Lowpass filter — ผ่านความถี่ต่ำ ลดรายละเอียด/noise" },
      { q: "Median filter?", a: "non-linear — เรียงค่าแล้วเอาค่ากลาง · ลบ salt & pepper · cv2.medianBlur()" },
      { q: "Bilateral?", a: "เบลอ noise แต่รักษาขอบคม — ถ่วงทั้งระยะ + ความต่างค่า" },
      { q: "Edge คือ?", a: "จุดที่ intensity เปลี่ยนเร็ว (gradient สูง)" },
      { q: "Sobel?", a: "first-order derivative — Sobel_x → vertical edges · Sobel_y → horizontal" },
      { q: "Laplacian?", a: "second-order ∇²f — kernel กลาง −4 (4-neighbor) · flat region = 0" },
      { q: "Sharpen?", a: "g = f − ∇²f" },
      { q: "Canny?", a: "edge detection ขั้นสูง (gradient + suppression + hysteresis) · cv2.Canny()" },
      { q: "FFT/IFFT?", a: "spatial ↔ frequency · fftshift ย้าย DC มาตรงกลาง" },
      { q: "Magnitude spectrum กลาง?", a: "DC component = ความสว่างเฉลี่ย · สูง freq = edge/detail/noise" },
      { q: "Phase spectrum?", a: "บอกตำแหน่ง (spatial location) ของโครงสร้าง" },
      { q: "Walsh/Hadamard?", a: "basis +1/−1 (square wave) — ต่างจาก Fourier (sin/cos)" },
      { q: "LPF / HPF", a: "Low-pass เบลอ (เก็บเรียบ) · High-pass คม (เก็บขอบ)" }
    ],

    glossary: [
      { term: "Spatial Filtering", def: "การกรองที่พิกเซลโดยตรง — เลื่อน filter mask ทีละจุดคำนวณ response" },
      { term: "Linear Filter", def: "ผลตอบ = ผลรวมถ่วงน้ำหนัก ΣΣ w·f — mean, gaussian, sobel, laplacian" },
      { term: "Non-linear Filter", def: "ผลตอบจากลำดับค่า เช่น median — ไม่ใช้การบวก/คูณ kernel" },
      { term: "Kernel / Mask", def: "เมทริกซ์เล็ก (3×3, 5×5) ถ่วงน้ำหนัก เลื่อนผ่านภาพเพื่อกรอง" },
      { term: "Mean Filter", def: "averaging/lowpass — เฉลี่ย neighborhood ใช้เบลอ + ลด noise (cv2.blur)" },
      { term: "Gaussian Filter", def: "เบลอถ่วงน้ำหนักรูปกระดิ่ง (cv2.GaussianBlur) — ลด noise + smooth" },
      { term: "Lowpass Filter", def: "ผ่านความถี่ต่ำ (เรียบ) ลดความถี่สูง — smoothing" },
      { term: "Median Filter", def: "non-linear — เรียงค่าแล้วเอาค่ากลาง ลบ salt & pepper (cv2.medianBlur)" },
      { term: "Salt-and-Pepper Noise", def: "จุดขาว-ดำสุ่มในภาพ — median filter ลบได้ดีที่สุด" },
      { term: "Bilateral Filter", def: "เบลอแบบรักษาขอบ — ถ่วงน้ำหนักทั้งระยะห่างและความต่างค่า" },
      { term: "Edge", def: "จุดที่ intensity เปลี่ยนเร็ว — ขอบวัตถุ vs พื้นหลัง" },
      { term: "Gradient", def: "∇f = [∂f/∂x, ∂f/∂y] — อัตราการเปลี่ยน intensity ใช้หา edge" },
      { term: "Sobel", def: "first-order derivative 3×3 — Sobel_x (vertical) · Sobel_y (horizontal)" },
      { term: "Laplacian", def: "second-order derivative ∇²f — kernel กลาง −4/−8 · flat = 0" },
      { term: "Sharpening", def: "การทำให้คม — g = f − ∇²f" },
      { term: "Canny", def: "edge detection หลายขั้น — gradient + non-max suppression + hysteresis" },
      { term: "Fourier Transform", def: "แยกภาพเป็น sine/cosine components — spatial → frequency domain" },
      { term: "FFT", def: "Fast Fourier Transform — อัลกอริทึมเร็วของ DFT" },
      { term: "Magnitude Spectrum", def: "ความแรงของแต่ละความถี่ — กลาง = DC (ความสว่างเฉลี่ย)" },
      { term: "Phase Spectrum", def: "ตำแหน่ง (spatial location) ของส่วนประกอบความถี่" },
      { term: "Walsh / Hadamard Transform", def: "transform ที่ใช้ basis +1/−1 (square wave) — เหมาะกับข้อมูลไบนารี" }
    ],

    cheat: [
      { term: "Spatial filter", def: "กรองที่พิกเซลโดยตรง · linear (ผลรวมถ่วง) / non-linear (เรียงค่า)" },
      { term: "Mean filter", def: "เฉลี่ย neighborhood · 3×3 = sum/9 · cv2.blur()" },
      { term: "Gaussian", def: "เบลอถ่วงรูปกระดิ่ง · cv2.GaussianBlur()" },
      { term: "Lowpass", def: "smoothing — ผ่านความถี่ต่ำ" },
      { term: "Median", def: "sort → middle · ลบ salt & pepper · cv2.medianBlur()" },
      { term: "Bilateral", def: "เบลอ noise คงขอบคม" },
      { term: "Edge", def: "intensity เปลี่ยนเร็ว = gradient สูง" },
      { term: "Sobel", def: "อันดับ 1 · Sobel_x → vertical · Sobel_y → horizontal" },
      { term: "Laplacian", def: "อันดับ 2 · กลาง −4 (4-neighbor) · flat = 0" },
      { term: "Sharpen", def: "g = f − ∇²f" },
      { term: "Canny", def: "cv2.Canny() — edge detection ขั้นสูง" },
      { term: "FFT", def: "spatial → frequency · fftshift → DC กลาง" },
      { term: "Spectrum", def: "magnitude = ความแรง · phase = ตำแหน่ง · สูง freq = edge/noise" },
      { term: "Walsh/Hadamard", def: "basis +1/−1 (square wave)" }
    ]
  },

  /* ========================================================================
     CHAPTER 6 — Thresholding, Morphology & Computer Vision
     ======================================================================== */
  ch6: {
    title: "Thresholding, Morphology & Computer Vision (การแบ่งส่วนภาพและคอมพิวเตอร์วิชัน)",
    thai: "Thresholding, Morphology & CV",
    en: "Thresholding, Morphology & Computer Vision",

    slides: [
      { title: "Cover — Segmentation ถึง Computer Vision", short: "เปิดบทเรียน" },
      { title: "Segmentation คืออะไร", short: "Segmentation" },
      { title: "Global Threshold — cv2.threshold()", short: "Global Threshold" },
      { title: "THRESH_BINARY / THRESH_BINARY_INV", short: "BINARY / BINARY_INV" },
      { title: "THRESH_TRUNC / TOZERO / TOZERO_INV", short: "TRUNC / TOZERO" },
      { title: "ตัวอย่างโค้ด — 5 โหมดในภาพแสงไล่ระดับ", short: "ตัวอย่าง 5 โหมด" },
      { title: "ปัญหาของ Global Threshold — แสงไม่สม่ำเสมอ", short: "ปัญหากลobal" },
      { title: "Adaptive Threshold — Threshold แบบ Local", short: "Adaptive Threshold" },
      { title: "อ่านพารามิเตอร์ — adaptiveThreshold(…, 11, 2)", short: "พารามิเตอร์" },
      { title: "Otsu — Threshold อัตโนมัติ", short: "Otsu" },
      { title: "เปรียบเทียบ 3 วิธี (Global · Adaptive · Otsu)", short: "เปรียบเทียบ 3 วิธี" },
      { title: "Morphology คืออะไร — ทำงานกับ Binary Image", short: "Morphology" },
      { title: "Erosion — cv2.erode()", short: "Erosion" },
      { title: "Dilation — cv2.dilate()", short: "Dilation" },
      { title: "Opening / Closing", short: "Opening / Closing" },
      { title: "Object Detection — Contour คืออะไร", short: "Contour" },
      { title: "cv2.findContours()", short: "findContours" },
      { title: "Bounding Box — cv2.boundingRect()", short: "Bounding Box" },
      { title: "Feature Extraction — Shape · Moments", short: "Feature Extraction" },
      { title: "Corner Detection — Harris / Shi-Tomasi", short: "Corner Detection" },
      { title: "Feature Descriptor — SIFT / SURF / ORB", short: "SIFT / SURF / ORB" },
      { title: "Geometric Transform — Resize · Rotate · Translate", short: "Geometric Transform" },
      { title: "Perspective Transform — สแกนเอกสาร", short: "Perspective" },
      { title: "Advanced — Restoration · Stitching", short: "Restoration · Stitching" },
      { title: "Computer Vision + AI — ML · DL · CNN", short: "CV + AI" },
      { title: "Object Detection Models — YOLO · SSD · Faster R-CNN", short: "YOLO · SSD · R-CNN" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. Thresholding", topics: [3, 4, 5, 6, 7, 8, 9, 10, 11] },
      { label: "2. Morphology", topics: [12, 13, 14, 15] },
      { label: "3. Object Detection", topics: [16, 17, 18] },
      { label: "4. Feature Extraction", topics: [19, 20, 21] },
      { label: "5. Transformation & Advanced", topics: [22, 23, 24] },
      { label: "6. CV + AI", topics: [25, 26] },
      { label: "ทบทวนและฝึกฝน", topics: [27, 28, 29, 30, 31, 32, 33] }
    ],

    quiz: [
      {
        q: "Thresholding ใช้ทำอะไร?",
        options: ["เพิ่มสีให้ภาพ", "หมุนภาพ", "บีบอัดภาพ", "แยก object ออกจาก background (ขาว/ดำ)"],
        correct: 3,
        explain: "Threshold เปลี่ยนภาพ grayscale เป็น binary — แยกวัตถุ (ขาว) ออกจากพื้นหลัง (ดำ)"
      },
      {
        q: "cv2.threshold(gray, 128, 255, cv2.THRESH_BINARY) — พิกเซล ≥ 128 ได้ค่าเท่าไร?",
        options: ["128", "ค่าเดิม", "255 (ขาว)", "0 (ดำ)"],
        correct: 2,
        explain: "THRESH_BINARY: ค่า ≥ threshold → 255 · ต่ำกว่า → 0"
      },
      {
        q: "THRESH_BINARY_INV ต่างจาก THRESH_BINARY อย่างไร?",
        options: ["ทำให้ภาพเบลอ", "สลับขาว-ดำ (กลับด้าน)", "เหมือนกันทุกอย่าง", "ใช้ threshold อัตโนมัติ"],
        correct: 1,
        explain: "INV = inverted — ค่า ≥ threshold → 0, ต่ำกว่า → 255 (กลับด้านกับ BINARY)"
      },
      {
        q: "Global Threshold มีปัญหาหลักอะไร?",
        options: ["แสงไม่สม่ำเสมอทั่วภาพ ทำให้ threshold เดียวใช้ไม่ได้", "ทำงานช้าเกินไป", "ใช้ได้กับภาพสีเท่านั้น", "ไม่มีปัญหา"],
        correct: 0,
        explain: "ถ้าแสงส่วนหนึ่งสว่าง อีกส่วนมืด threshold ค่าเดียวจะตัดผิดที่ — ต้องใช้ Adaptive"
      },
      {
        q: "Adaptive Threshold ต่างจาก Global อย่างไร?",
        options: ["ใช้ threshold เดียวทั้งภาพ", "เร็วกว่าเสมอ", "ใช้กับภาพสีเท่านั้น", "คำนวณ threshold แยกเป็นแต่ละพื้นที่ (local)"],
        correct: 3,
        explain: "Adaptive คำนวณ threshold จาก neighborhood ของแต่ละพิกเซล → กันปัญหาแสงไม่สม่ำเสมอ"
      },
      {
        q: "ค่า 11 ใน cv2.adaptiveThreshold(gray, 255, GAUSSIAN_C, BINARY, 11, 2) หมายถึง?",
        options: ["จำนวน iteration", "ความสว่าง 11%", "ขนาดบล็อก 11×11 พิกเซล", "threshold = 11"],
        correct: 2,
        explain: "พารามิเตอร์ตัวที่ 5 = blockSize — ขนาด neighborhood (11×11) ใช้คำนวณ threshold ของแต่ละพิกเซล"
      },
      {
        q: "Otsu Threshold คืออะไร?",
        options: ["filter เบลอ", "หา threshold อัตโนมัติจาก histogram", "threshold คงที่ 128", "threshold แบบ manual"],
        correct: 1,
        explain: "Otsu วิเคราะห์ histogram หาค่า threshold ที่แบ่ง 2 กลุ่มได้ดีที่สุดอัตโนมัติ"
      },
      {
        q: "Erosion มีผลต่อภาพ binary อย่างไร?",
        options: ["กร่อนขอบวัตถุให้เล็กลง", "ขยายวัตถุให้ใหญ่ขึ้น", "ทำให้ภาพคมขึ้น", "เพิ่มสี"],
        correct: 0,
        explain: "Erosion = ลบพิกเซลขอบออก (ใช้ min) → วัตถุเล็กลง ลบ noise จุดเล็ก ๆ ได้"
      },
      {
        q: "Dilation มีผลต่อภาพ binary อย่างไร?",
        options: ["กร่อนวัตถุให้เล็กลง", "ลบ noise", "ทำให้เบลอ", "ขยายขอบวัตถุให้ใหญ่ขึ้น"],
        correct: 3,
        explain: "Dilation = เพิ่มพิกเซลที่ขอบ (ใช้ max) → วัตถุใหญ่ขึ้น เติมรู/ช่องว่างเล็ก ๆ"
      },
      {
        q: "Opening = ? และ Closing = ?",
        options: ["ทั้งคู่เป็นแค่ erode", "ทั้งคู่เป็นแค่ dilate", "Opening = erode แล้ว dilate · Closing = dilate แล้ว erode", "Opening = dilate แล้ว erode · Closing = erode แล้ว dilate"],
        correct: 2,
        explain: "Opening = erode(dilate⁻¹)... จำง่าย: Opening = E แล้ว D (ลบจุดเล็ก) · Closing = D แล้ว E (เติมรูเล็ก)"
      }
    ],

    exam: [
      {
        q: "cv2.findContours() ใช้หาอะไร?",
        options: ["สีของพิกเซล", "ความสว่างเฉลี่ย", "ขนาดไฟล์", "ขอบเขต (contour) ของวัตถุในภาพ binary"],
        correct: 3,
        explain: "findContours หาเส้นขอบของวัตถุ — ใช้กับภาพ binary หลัง threshold"
      },
      {
        q: "SIFT / SURF / ORB คืออะไร?",
        options: ["การปรับสี", "การบีบอัดไฟล์", "Feature Descriptor — อธิบายจุดเด่นของภาพ", "filter เบลอ"],
        correct: 2,
        explain: "SIFT/SURF/ORB สร้าง descriptor (ลายเซ็น) ของจุดเด่น — ใช้จับคู่ภาพ/ตรวจจับวัตถุ"
      },
      {
        q: "Thresholding ใช้ทำอะไรในภาพ?",
        options: ["บีบอัดไฟล์", "แยก Object ออกจาก Background (ภาพขาว-ดำ)", "เพิ่มความสว่าง", "หมุนภาพ"],
        correct: 1,
        explain: "Threshold เปลี่ยน grayscale เป็น binary — พิกเซลที่เกิน threshold = วัตถุ (ขาว) ที่เหลือ = พื้นหลัง (ดำ)",
        en: {
          q: "What does thresholding do to an image?",
          options: ["Compresses the file", "Separates objects from the background (black & white)", "Brightens the image", "Rotates the image"],
          explain: "Threshold converts grayscale to binary — pixels above the threshold become objects (white), the rest background (black)"
        },
        steps: [
          "เลือกค่า threshold (เช่น 128)",
          "พิกเซล ≥ 128 → วัตถุ (255)",
          "พิกเซล < 128 → พื้นหลัง (0)",
          "ได้ภาพ binary แยก object/background",
          "ตอบ: แยก Object ออกจาก Background"
        ]
      },
      {
        q: "cv2.threshold(gray, 128, 255, cv2.THRESH_BINARY) — พิกเซล 200 ได้ค่าใด?",
        options: ["255", "0", "128", "200"],
        correct: 0,
        explain: "THRESH_BINARY: ค่า ≥ 128 → 255 (ขาว) · ต่ำกว่า 128 → 0 (ดำ)",
        en: {
          q: "cv2.threshold(gray, 128, 255, cv2.THRESH_BINARY) — pixel 200 becomes?",
          options: ["255", "0", "128", "200"],
          explain: "THRESH_BINARY: value ≥ 128 → 255 (white) · below → 0 (black)"
        },
        steps: [
          "THRESH_BINARY = โหมดมาตรฐาน (ขาวเมื่อเกิน threshold)",
          "200 ≥ 128 → เป็นจริง",
          "ได้ maxval = 255",
          "ตอบ: 255"
        ]
      },
      {
        q: "THRESH_TRUNC ทำงานอย่างไร?",
        options: ["ทุกค่าเป็น 0", "ทุกค่าเป็น 255", "กลับด้าน", "ค่าที่เกิน threshold ถูกจำกัดไว้ที่ threshold (ค่าต่ำกว่าคงเดิม)"],
        correct: 3,
        explain: "TRUNC = truncate — พิกเซล > threshold ถูกตัดลงมาเท่ากับ threshold ส่วนที่ต่ำกว่าคงเดิม",
        en: {
          q: "How does THRESH_TRUNC work?",
          options: ["Everything becomes 0", "Everything becomes 255", "Inverts", "Values above the threshold are capped at it (lower ones unchanged)"],
          explain: "TRUNC = truncate — pixels above the threshold are cut down to it; lower ones stay unchanged"
        },
        steps: [
          "TRUNC = ตัด (truncate) เฉพาะส่วนเกิน",
          "พิกเซล 200 กับ threshold 128 → ถูกตัดเป็น 128",
          "พิกเซล 100 → คงเดิม 100",
          "ตอบ: ค่าที่เกินถูกจำกัดไว้ที่ threshold"
        ]
      },
      {
        q: "THRESH_TOZERO ทำงานอย่างไร?",
        options: ["ทุกค่าเป็น 255", "ทุกค่าเท่ากัน", "ค่าที่ต่ำกว่า threshold กลายเป็น 0 (ค่าที่เกินคงเดิม)", "ค่าที่เกินกลายเป็น 0"],
        correct: 2,
        explain: "TOZERO — พิกเซลที่ต่ำกว่า threshold = 0 ส่วนที่เกิน threshold คงค่าเดิม",
        en: {
          q: "How does THRESH_TOZERO work?",
          options: ["Everything becomes 255", "Everything becomes equal", "Values below the threshold become 0 (above stay unchanged)", "Values above become 0"],
          explain: "TOZERO — pixels below the threshold become 0; those above keep their value"
        },
        steps: [
          "TOZERO = ทำให้ 'กลายเป็นศูนย์' เฉพาะค่าต่ำ",
          "พิกเซล 100 กับ threshold 128 → 0",
          "พิกเซล 200 → คงเดิม 200",
          "ตอบ: ค่าที่ต่ำกว่า threshold กลายเป็น 0"
        ]
      },
      {
        q: "ค่า 11 ใน cv2.adaptiveThreshold(gray, 255, GAUSSIAN_C, BINARY, 11, 2) หมายถึงอะไร?",
        options: ["ความสว่าง 11%", "ขนาดบล็อก (blockSize) 11×11 พิกเซล", "threshold = 11", "จำนวนรอบวนซ้ำ"],
        correct: 1,
        explain: "blockSize = ขนาด neighborhood (11×11) ที่ใช้คำนวณ threshold ของแต่ละพิกเซล",
        en: {
          q: "In cv2.adaptiveThreshold(gray, 255, GAUSSIAN_C, BINARY, 11, 2), what is 11?",
          options: ["11% brightness", "blockSize — an 11×11 pixel neighborhood", "threshold = 11", "Number of iterations"],
          explain: "blockSize = the neighborhood size (11×11) used to compute each pixel's threshold"
        },
        steps: [
          "ดู signature: adaptiveThreshold(src, maxValue, adaptiveMethod, thresholdType, blockSize, C)",
          "ตัวที่ 5 = blockSize",
          "11 = ใช้ neighborhood 11×11 พิกเซล",
          "ตอบ: ขนาดบล็อก 11×11"
        ]
      },
      {
        q: "ค่า 2 (ตัวสุดท้าย) ใน adaptiveThreshold หมายถึงอะไร?",
        options: ["ค่าคงที่ C ที่ลบออกจาก threshold ที่คำนวณได้", "ขนาด kernel", "ความสว่าง 2%", "จำนวน channel"],
        correct: 0,
        explain: "C = ค่าคงที่ที่ลบออกจาก mean/weighted threshold — ปรับความไวของการตัด",
        en: {
          q: "What does the last value 2 in adaptiveThreshold mean?",
          options: ["Constant C subtracted from the computed threshold", "Kernel size", "2% brightness", "Number of channels"],
          explain: "C = a constant subtracted from the mean/weighted threshold — tunes detection sensitivity"
        },
        steps: [
          "Adaptive คำนวณ threshold = ค่าเฉลี่ย (หรือ weighted) ของ neighborhood",
          "ลบค่าคงที่ C ออก: threshold_final = mean − C",
          "C = 2 → ตัดไวขึ้น/ช้าลงตามค่า",
          "ตอบ: ค่าคงที่ C ที่ลบออกจาก threshold"
        ]
      },
      {
        q: "ใช้ Otsu ใน OpenCV เขียน flag อย่างไร?",
        options: ["cv2.THRESH_BINARY", "cv2.THRESH_OTSU อย่างเดียว", "cv2.THRESH_TRUNC", "cv2.THRESH_BINARY + cv2.THRESH_OTSU"],
        correct: 3,
        explain: "ret, binary = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU) — ret คือ threshold ที่ Otsu หาได้",
        en: {
          q: "How do you enable Otsu in OpenCV?",
          options: ["cv2.THRESH_BINARY", "cv2.THRESH_OTSU alone", "cv2.THRESH_TRUNC", "cv2.THRESH_BINARY + cv2.THRESH_OTSU"],
          explain: "ret, binary = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU) — ret is the threshold Otsu found"
        },
        steps: [
          "Otsu เป็น flag เพิ่มเติม — ต้องต่อกับโหมดหลักด้วย +",
          "ใช้ THRESH_BINARY + THRESH_OTSU",
          "ค่า threshold ที่ใส่ (0) ถูกข้าม — Otsu หาเอง",
          "ผลลัพธ์ ret = threshold อัตโนมัติ",
          "ตอบ: cv2.THRESH_BINARY + cv2.THRESH_OTSU"
        ]
      },
      {
        q: "Erosion (cv2.erode) มีผลต่อวัตถุในภาพ binary อย่างไร?",
        options: ["ทำให้วัตถุคมขึ้น", "เพิ่มสีให้วัตถุ", "กร่อนขอบวัตถุให้เล็กลง (ลบพิกเซลขอบ)", "ขยายวัตถุให้ใหญ่ขึ้น"],
        correct: 2,
        explain: "Erosion ใช้ min ของ neighborhood — พิกเซลขอบที่ติดพื้นหลังถูกเอาออก → วัตถุเล็กลง ลบ noise จุดเล็กได้",
        en: {
          q: "What does erosion (cv2.erode) do to objects in a binary image?",
          options: ["Sharpens objects", "Colors objects", "Shrinks object borders (removes edge pixels)", "Enlarges objects"],
          explain: "Erosion takes the min of the neighborhood — edge pixels touching the background are removed → objects shrink, small noise disappears"
        },
        steps: [
          "เลื่อน kernel (structuring element) ทับภาพ",
          "Erosion: พิกเซลกลางจะอยู่ต่อเมื่อทุกตัวใน kernel เป็น 1 (min)",
          "ขอบที่ติด 0 ถูกกร่อนออก → วัตถุเล็กลง",
          "จุด noise เล็ก ๆ (1–2 พิกเซล) หายไป",
          "ตอบ: กร่อนขอบวัตถุให้เล็กลง"
        ]
      },
      {
        q: "Dilation (cv2.dilate) มีผลต่อวัตถุในภาพ binary อย่างไร?",
        options: ["ลบ noise", "ขยายขอบวัตถุให้ใหญ่ขึ้น (เพิ่มพิกเซลที่ขอบ)", "กร่อนวัตถุให้เล็กลง", "ทำให้ภาพเบลอ"],
        correct: 1,
        explain: "Dilation ใช้ max ของ neighborhood — พิกเซลรอบวัตถุถูกเติมให้เป็น 1 → วัตถุใหญ่ขึ้น เติมรูเล็ก ๆ ได้",
        en: {
          q: "What does dilation (cv2.dilate) do to objects in a binary image?",
          options: ["Removes noise", "Expands object borders (adds edge pixels)", "Shrinks objects", "Blurs the image"],
          explain: "Dilation takes the max of the neighborhood — pixels around objects become 1 → objects grow, small holes fill"
        },
        steps: [
          "เลื่อน kernel ทับภาพ",
          "Dilation: พิกเซลกลางเป็น 1 ถ้ามีตัวใดตัวหนึ่งใน kernel เป็น 1 (max)",
          "ขอบถูกเติมออกไป → วัตถุใหญ่ขึ้น",
          "รู/ช่องว่างเล็ก ๆ ในวัตถุถูกเติม",
          "ตอบ: ขยายขอบวัตถุให้ใหญ่ขึ้น"
        ]
      },
      {
        q: "Opening = ?",
        options: ["Erosion แล้วตามด้วย Dilation", "Dilation แล้วตามด้วย Erosion", "Erosion อย่างเดียว", "Dilation อย่างเดียว"],
        correct: 0,
        explain: "Opening = dilate(erode(A)) — กร่อนก่อน (ลบจุดเล็ก) แล้วขยายกลับ → ลบ noise โดยขนาดวัตถุหลักคงเดิม",
        en: {
          q: "Opening = ?",
          options: ["Erosion followed by dilation", "Dilation followed by erosion", "Erosion only", "Dilation only"],
          explain: "Opening = dilate(erode(A)) — erode first (removes small dots) then dilate back → removes noise while keeping object size"
        },
        steps: [
          "Opening 2 ขั้น: erode ก่อน แล้ว dilate",
          "erode ลบจุด noise เล็ก ๆ",
          "dilate ขยายวัตถุหลักกลับเป็นขนาดเดิม",
          "ตอบ: Erosion แล้วตามด้วย Dilation"
        ]
      },
      {
        q: "Closing = ?",
        options: ["Erosion แล้วตามด้วย Dilation", "Dilation อย่างเดียว", "Erosion อย่างเดียว", "Dilation แล้วตามด้วย Erosion"],
        correct: 3,
        explain: "Closing = erode(dilate(A)) — ขยายก่อน (เติมรู) แล้วกร่อนกลับ → เติมรู/ช่องว่างเล็ก ๆ",
        en: {
          q: "Closing = ?",
          options: ["Erosion followed by dilation", "Dilation only", "Erosion only", "Dilation followed by erosion"],
          explain: "Closing = erode(dilate(A)) — dilate first (fills holes) then erode back → fills small holes/gaps"
        },
        steps: [
          "Closing 2 ขั้น: dilate ก่อน แล้ว erode",
          "dilate เติมรู/ช่องว่างเล็ก ๆ ในวัตถุ",
          "erode กร่อนขอบกลับเป็นขนาดเดิม",
          "ตอบ: Dilation แล้วตามด้วย Erosion"
        ]
      },
      {
        q: "Opening ใช้แก้ปัญหาอะไร?",
        options: ["เพิ่มความคม", "เปลี่ยนสีภาพ", "ลบ Noise จุดเล็ก ๆ ในภาพ binary", "เติมรูใหญ่"],
        correct: 2,
        explain: "Opening ลบจุด noise เล็ก ๆ (ขาวลอยเดี่ยว) โดยที่วัตถุหลักยังคงขนาดเดิม",
        en: {
          q: "What problem does opening solve?",
          options: ["Sharpens", "Recolors", "Removes small noise dots in a binary image", "Fills big holes"],
          explain: "Opening removes small isolated noise dots while keeping main objects the same size"
        },
        steps: [
          "ภาพ binary มักมีจุด noise เล็ก ๆ หลัง threshold",
          "erode ลบจุดเล็ก (วัตถุหลักก็กร่อน)",
          "dilate คืนขนาดวัตถุหลัก",
          "ตอบ: ลบ Noise จุดเล็ก ๆ"
        ]
      },
      {
        q: "Contour ใน Object Detection คืออะไร?",
        options: ["ขนาดไฟล์", "เส้นขอบเขตของวัตถุ (พื้นที่ที่มีค่าเท่ากันติดกัน)", "จุดศูนย์กลางของภาพ", "สีของพื้นหลัง"],
        correct: 1,
        explain: "Contour = เส้นที่ลากตามขอบของวัตถุในภาพ binary — ใช้วัดพื้นที่/ปริมณฑล/หุ้มด้วย bounding box",
        en: {
          q: "What is a contour in object detection?",
          options: ["The file size", "The boundary line of an object (connected same-valued region)", "The image center", "The background color"],
          explain: "A contour traces the boundary of an object in a binary image — used to measure area/perimeter and fit bounding boxes"
        },
        steps: [
          "หลัง threshold ได้ภาพ binary (วัตถุ = ขาว)",
          "findContours หาเส้นขอบของพื้นที่ขาวที่ติดกัน",
          "แต่ละ contour = 1 วัตถุ",
          "นำไปคำนวณ area, perimeter, bounding box",
          "ตอบ: เส้นขอบเขตของวัตถุ"
        ]
      },
      {
        q: "cv2.boundingRect(contour) คืนค่าอะไร?",
        options: ["Bounding Box: (x, y, width, height)", "พื้นที่ของ contour", "ปริมณฑลของ contour", "สีของ contour"],
        correct: 0,
        explain: "boundingRect คืนสี่เหลี่ยมที่ครอบ contour แน่นที่สุด — (x, y, w, h) ใช้วาดกล่องรอบวัตถุ",
        en: {
          q: "What does cv2.boundingRect(contour) return?",
          options: ["A bounding box: (x, y, width, height)", "The contour area", "The contour perimeter", "The contour color"],
          explain: "boundingRect returns the tightest rectangle around a contour — (x, y, w, h), used to draw a box around the object"
        },
        steps: [
          "หา contour ของวัตถุได้แล้ว",
          "boundingRect หาสี่เหลี่ยมที่ครอบ contour แน่นสุด",
          "คืนค่า (x, y, width, height)",
          "ใช้วาดกล่องหรือครอบ ROI อัตโนมัติ",
          "ตอบ: Bounding Box (x, y, width, height)"
        ]
      },
      {
        q: "Perspective Transform (cv2.getPerspectiveTransform) ใช้ทำอะไร?",
        options: ["ทำให้ภาพเบลอ", "เพิ่มสี", "ลดขนาดภาพ", "แก้มุมมองเอียงให้เป็นหน้าตรง เช่น สแกนเอกสาร"],
        correct: 3,
        explain: "จับมุมทั้ง 4 ของเอกสารที่เอียง → ยืดให้เป็นสี่เหลี่ยมตรง (เหมือนสแกนเนอร์)",
        en: {
          q: "What is the perspective transform (cv2.getPerspectiveTransform) for?",
          options: ["Blurring the image", "Adding color", "Shrinking the image", "Fixing a tilted view into a straight one, e.g. document scanning"],
          explain: "Grab the 4 corners of a tilted document → warp it into a straight rectangle (like a scanner)"
        },
        steps: [
          "ถ่ายเอกสารมุมเอียง",
          "หาพิกัดมุมทั้ง 4 (จุดมุมกระดาษ)",
          "getPerspectiveTransform สร้างเมทริกซ์แปลงมุมมอง",
          "warpPerspective ยืดภาพให้ตรง",
          "ตอบ: แก้มุมมองเอียงให้เป็นหน้าตรง"
        ]
      },
      {
        q: "YOLO / SSD / Faster R-CNN คืออะไร?",
        options: ["การบีบอัดภาพ", "เครื่องพิมพ์ 3 มิติ", "Object Detection Models ใน Deep Learning", "ฟิลเตอร์ใน OpenCV"],
        correct: 2,
        explain: "YOLO, SSD, Faster R-CNN เป็นโมเดล Deep Learning สำหรับตรวจจับวัตถุ (class + bounding box)",
        en: {
          q: "What are YOLO / SSD / Faster R-CNN?",
          options: ["Image compression", "3D printers", "Deep learning object detection models", "OpenCV filters"],
          explain: "YOLO, SSD, Faster R-CNN are deep learning models for object detection (class + bounding box)"
        },
        steps: [
          "Computer Vision + AI = ใช้ Deep Learning วิเคราะห์ภาพ",
          "Object Detection = หา object + ระบุ class + วาดกล่อง",
          "โมเดลยอดนิยม: YOLO (เร็ว), SSD, Faster R-CNN (แม่น)",
          "Framework: PyTorch / TensorFlow",
          "ตอบ: Object Detection Models"
        ]
      },
      {
        q: "CNN ย่อมาจากอะไร?",
        options: ["Color Negative Number", "Convolutional Neural Network", "Computer Network Node", "Central Neural Node"],
        correct: 1,
        explain: "CNN = Convolutional Neural Network — โครงข่ายประสาทเทียมที่ใช้ convolution วิเคราะห์ภาพ",
        en: {
          q: "What does CNN stand for?",
          options: ["Color Negative Number", "Convolutional Neural Network", "Computer Network Node", "Central Neural Node"],
          explain: "CNN = Convolutional Neural Network — a neural network using convolutions to analyze images"
        },
        steps: [
          "ML = สอนเครื่องจักรจากข้อมูล (feature extraction)",
          "DL = ML ด้วยโครงข่ายหลายชั้น (deep)",
          "CNN = โครงข่ายที่ใช้ convolution เรียนรู้ features ของภาพเอง",
          "ตอบ: Convolutional Neural Network"
        ]
      },
      {
        q: "งานใดคือ Image Restoration?",
        options: ["ซ่อมภาพที่เสียหาย — Deblur, Denoising", "ทำให้ภาพสวยขึ้นเฉย ๆ", "เปลี่ยนสีภาพ", "ลดขนาดภาพ"],
        correct: 0,
        explain: "Restoration = กู้ภาพที่เสีย (เบลอ/มี noise) ด้วยแบบจำลองความเสียหาย — ต่างจาก enhancement ที่แค่ทำให้ดูดีขึ้น",
        en: {
          q: "Which task is image restoration?",
          options: ["Repairing damaged images — deblurring, denoising", "Just making the image prettier", "Recoloring", "Shrinking"],
          explain: "Restoration recovers damaged images (blur/noise) using a degradation model — unlike enhancement which just improves looks"
        },
        steps: [
          "Restoration เริ่มจากสมมติแบบจำลอง: ภาพเสีย = ภาพดี + noise/blur",
          "สร้างตัวกรองกลับ (inverse)",
          "ใช้ Deblur / Denoising กู้ภาพกลับมา",
          "ตอบ: ซ่อมภาพที่เสียหาย — Deblur, Denoising"
        ]
      }
    ],

    flashcards: [
      { q: "Threshold ใช้ทำอะไร?", a: "แยก object/background — grayscale → binary (ขาว/ดำ)" },
      { q: "THRESH_BINARY?", a: "ค่า ≥ threshold → 255 (ขาว) · ต่ำกว่า → 0 (ดำ)" },
      { q: "THRESH_BINARY_INV?", a: "กลับด้านขาว-ดำ" },
      { q: "THRESH_TRUNC?", a: "ค่าที่เกิน threshold ถูกตัดลงมาเท่ากับ threshold" },
      { q: "THRESH_TOZERO?", a: "ค่าที่ต่ำกว่า threshold กลายเป็น 0" },
      { q: "Global threshold ปัญหา?", a: "แสงไม่สม่ำเสมอ — threshold เดียวตัดผิดที่" },
      { q: "Adaptive threshold?", a: "คำนวณ threshold จาก neighborhood แต่ละพิกเซล — กันแสงไม่เท่ากัน" },
      { q: "adaptiveThreshold ตัวที่ 5?", a: "blockSize — เช่น 11 = neighborhood 11×11" },
      { q: "Otsu?", a: "หา threshold อัตโนมัติจาก histogram — THRESH_BINARY + THRESH_OTSU" },
      { q: "Erosion?", a: "กร่อนขอบ (min) — วัตถุเล็กลง ลบ noise จุดเล็ก · cv2.erode()" },
      { q: "Dilation?", a: "ขยายขอบ (max) — วัตถุใหญ่ขึ้น เติมรูเล็ก · cv2.dilate()" },
      { q: "Opening?", a: "erode แล้ว dilate — ลบจุด noise เล็ก ๆ" },
      { q: "Closing?", a: "dilate แล้ว erode — เติมรู/ช่องว่างเล็ก ๆ" },
      { q: "Contour?", a: "เส้นขอบของวัตถุในภาพ binary — cv2.findContours()" },
      { q: "Bounding box?", a: "cv2.boundingRect(contour) → (x, y, w, h)" },
      { q: "SIFT/SURF/ORB?", a: "Feature descriptor — จับคู่ภาพ/ตรวจจับวัตถุ" },
      { q: "Perspective transform?", a: "แก้มุมเอียง → ตรง (สแกนเอกสาร) · getPerspectiveTransform" },
      { q: "YOLO/SSD/R-CNN?", a: "Deep learning object detection models" }
    ],

    glossary: [
      { term: "Segmentation", def: "การแบ่งส่วนภาพ — แยก object ออกจาก background" },
      { term: "Thresholding", def: "แปลง grayscale → binary ด้วยค่า threshold" },
      { term: "THRESH_BINARY", def: "ค่า ≥ threshold → 255, ต่ำกว่า → 0" },
      { term: "THRESH_BINARY_INV", def: "กลับด้านของ BINARY" },
      { term: "THRESH_TRUNC", def: "ค่าที่เกิน threshold ถูกตัดให้เท่ากับ threshold" },
      { term: "THRESH_TOZERO", def: "ค่าต่ำกว่า threshold กลายเป็น 0 (สูงกว่าคงเดิม)" },
      { term: "Global Threshold", def: "ใช้ threshold ค่าเดียวทั้งภาพ — ไม่ทนแสงไม่สม่ำเสมอ" },
      { term: "Adaptive Threshold", def: "threshold ต่อพิกเซลจาก neighborhood — cv2.adaptiveThreshold" },
      { term: "Otsu Threshold", def: "หา threshold อัตโนมัติจาก histogram — ใช้ THRESH_OTSU" },
      { term: "Morphology", def: "การจัดการรูปร่างของภาพ binary — erosion/dilation/opening/closing" },
      { term: "Erosion", def: "กร่อนขอบ (min) — ลบ noise จุดเล็ก · cv2.erode()" },
      { term: "Dilation", def: "ขยายขอบ (max) — เติมรูเล็ก · cv2.dilate()" },
      { term: "Opening", def: "erode → dilate — ลบ noise จุดเล็ก" },
      { term: "Closing", def: "dilate → erode — เติมรูเล็ก" },
      { term: "Contour", def: "เส้นขอบเขตของวัตถุในภาพ binary — cv2.findContours()" },
      { term: "Bounding Box", def: "สี่เหลี่ยมครอบวัตถุ — cv2.boundingRect() → (x, y, w, h)" },
      { term: "Feature Extraction", def: "การสกัดจุดเด่น/คุณลักษณะของภาพ — shape, moments, corners" },
      { term: "Harris / Shi-Tomasi", def: "อัลกอริทึมตรวจจับมุม (corner detection)" },
      { term: "Feature Descriptor", def: "ลายเซ็นของจุดเด่น — SIFT, SURF, ORB" },
      { term: "Perspective Transform", def: "แปลงมุมมองเอียงให้ตรง — สแกนเอกสาร (getPerspectiveTransform)" },
      { term: "Image Restoration", def: "กู้ภาพที่เสีย — Deblur, Denoising (ใช้แบบจำลองความเสียหาย)" },
      { term: "Image Stitching", def: "ต่อภาพหลายภาพเป็นภาพพาโนรามา" },
      { term: "CNN", def: "Convolutional Neural Network — โครงข่ายประสาทสำหรับภาพ" },
      { term: "YOLO / SSD / Faster R-CNN", def: "โมเดล Deep Learning ตรวจจับวัตถุ (class + bounding box)" }
    ],

    cheat: [
      { term: "Threshold", def: "grayscale → binary · แยก object/background" },
      { term: "BINARY / INV", def: "≥t → 255 / กลับด้าน" },
      { term: "TRUNC / TOZERO", def: "ตัดเกิน t / ค่าต่ำกว่า t = 0" },
      { term: "Global vs Adaptive", def: "threshold เดียว vs ต่อ pixel (blockSize, C)" },
      { term: "Otsu", def: "อัตโนมัติจาก histogram · THRESH_BINARY + THRESH_OTSU" },
      { term: "Erosion", def: "min — กร่อนขอบ · ลบ noise · erode()" },
      { term: "Dilation", def: "max — ขยายขอบ · เติมรู · dilate()" },
      { term: "Opening", def: "erode → dilate — ลบจุดเล็ก" },
      { term: "Closing", def: "dilate → erode — เติมรูเล็ก" },
      { term: "Contour", def: "findContours() → ขอบเขตวัตถุ" },
      { term: "Bounding box", def: "boundingRect() → (x, y, w, h)" },
      { term: "Feature", def: "SIFT/SURF/ORB · Harris/Shi-Tomasi (corner)" },
      { term: "Perspective", def: "getPerspectiveTransform() — สแกนเอกสาร" },
      { term: "CV+AI", def: "CNN · YOLO/SSD/Faster R-CNN · PyTorch/TensorFlow" }
    ]
  },

  /* ========================================================================
     CHAPTER 7 — Lab Code Handbook (โค้ดเข้าห้องสอบปฏิบัติ)
     ======================================================================== */
  ch7: {
    title: "Lab Code Handbook (โค้ดเข้าห้องสอบปฏิบัติ)",
    thai: "Lab Code Handbook",
    en: "Lab Code Handbook — Practical Exam Cheat Codes",

    slides: [
      { title: "Cover — Lab Code Handbook", short: "เปิดบทเรียน" },
      { title: "โครงสร้างโค้ดมาตรฐาน — เริ่มทุกข้อแบบนี้", short: "โครงสร้างโค้ด" },
      { title: "Lab2 · NumPy พื้นฐาน", short: "NumPy พื้นฐาน" },
      { title: "Lab2 · อ่าน/แปลง/แสดงภาพ", short: "อ่าน/แปลง/แสดง" },
      { title: "Lab2 · ช่องสี · resize · flip", short: "ช่องสี · resize · flip" },
      { title: "Lab2 · วาดรูป/ข้อความ + imread ภาษาไทย", short: "วาดรูป + imread ไทย" },
      { title: "Lab3 · Threshold 5 โหมด", short: "Threshold 5 โหมด" },
      { title: "Lab3 · Contrast / Brightness", short: "Contrast/Brightness" },
      { title: "Lab3 · Contrast Stretch + Equalize", short: "Stretch + Equalize" },
      { title: "Week4 · Quantization + Downsampling", short: "Quantization" },
      { title: "Week4 · Bit-Plane Slicing", short: "Bit-Plane" },
      { title: "Week4 · Watermark (ซ่อนใน Bit-Plane)", short: "Watermark" },
      { title: "Week4 · วัดคุณภาพ MSE / PSNR", short: "MSE / PSNR" },
      { title: "Week4 · Intensity Transforms", short: "Intensity Transforms" },
      { title: "Week4 · Fourier / FFT Workflow", short: "FFT Workflow" },
      { title: "Week4 · Rotation + FFT", short: "Rotation + FFT" },
      { title: "Week4 · Walsh / Hadamard + Compression", short: "Walsh/Hadamard" },
      { title: "Week4 · Spatial Filters", short: "Spatial Filters" },
      { title: "Week4 · Sobel + Order Statistics", short: "Sobel + Order Stats" },
      { title: "week5 · Noise + Restore (S&P / Gaussian)", short: "Noise + Restore" },
      { title: "week5 · Periodic Noise + Notch Filter", short: "Periodic + Notch" },
      { title: "week5 · Wiener + Morphology", short: "Wiener + Morphology" },
      { title: "Cheat Sheet — สูตร/คำสั่งต้องจำ", short: "Cheat Sheet" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" }
    ],

    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. Lab2 — NumPy & OpenCV พื้นฐาน", topics: [3, 4, 5, 6] },
      { label: "2. Lab3 — Threshold & Enhancement", topics: [7, 8, 9] },
      { label: "3. Week4 — Quantization & Transform", topics: [10, 11, 12, 13, 14, 15, 16, 17] },
      { label: "4. Week4 — Filtering & Edge", topics: [18, 19] },
      { label: "5. week5 — Noise, Restore & Morphology", topics: [20, 21, 22] },
      { label: "ทบทวนและฝึกฝน", topics: [23, 24, 25, 26] }
    ],

    cheat: [
      { term: "อ่านภาพ", def: "cv2.imread(path, 0) — grayscale · path ไทย → imdecode(np.fromfile())" },
      { term: "BGR → RGB", def: "cv2.cvtColor(img, cv2.COLOR_BGR2RGB) — แสดงด้วย plt ต้องแปลง" },
      { term: "Threshold", def: "ret, binary = cv2.threshold(img, 128, 255, cv2.THRESH_BINARY)" },
      { term: "Contrast/Brightness", def: "cv2.convertScaleAbs(gray, alpha, beta) — new = pixel×alpha + beta" },
      { term: "Equalize", def: "cv2.equalizeHist(gray) — grayscale เท่านั้น" },
      { term: "Quantize 16 ระดับ", def: "q = (img // 16) * 16 + 7 (Mid)" },
      { term: "Bit-plane", def: "(img >> i) & 1 — ดึงบิต i · รวมบิต: result |= img & (1 << b)" },
      { term: "Watermark", def: "mask = 255 ^ (1<<bit) → (img & mask) | (wm << bit)" },
      { term: "MSE / PSNR", def: "MSE = mean((a-b)²) · PSNR = 10·log10(255²/MSE)" },
      { term: "Gamma / Log", def: "s = β·r^γ (normalize 0–1) · s = c·log(1+r), c = 1/log(1+domain)" },
      { term: "FFT", def: "fft2 → fftshift → (mask) → ifftshift → ifft2 → np.abs()" },
      { term: "Spatial filter", def: "cv2.filter2D(img.astype(float), -1, kernel, borderType=cv2.BORDER_REFLECT)" },
      { term: "Sobel", def: "cv2.Sobel(img, cv2.CV_64F, dx, dy, ksize=3) — dx=1 ขอบแนวดิ่ง" },
      { term: "Sharpening", def: "g = f − ∇²f → sharp = img.astype(float) − laplacian" },
      { term: "Salt & Pepper", def: "cv2.medianBlur(img, 7) · Gaussian noise → cv2.GaussianBlur" },
      { term: "Periodic noise", def: "A·sin(2πfx·X/cols)+… → ปิด peak ใน FFT ด้วย mask (Notch)" },
      { term: "Wiener", def: "mean + (max(var−noise_var,0)/max(var,noise_var))·(img−mean)" },
      { term: "Morphology", def: "erode=หด · dilate=ขยาย · OPEN=E→D · CLOSE=D→E" },
      { term: "หลังคำนวณ", def: "np.clip(x, 0, 255).astype(np.uint8) — กันค่าล้นเสมอ" }
    ],

    flashcards: [
      { term: "cv2.resize รับขนาดแบบไหน", def: "(กว้าง, สูง) = (W, H) — ไม่ใช่ (H, W)!" },
      { term: "OpenCV อ่านสีเป็นอะไร", def: "BGR — แสดงด้วย plt ต้อง cvtColor(BGR2RGB)" },
      { term: "cv2.threshold คืนค่าอะไร", def: "2 ค่า: ret (ค่าขีด) + ภาพผลลัพธ์" },
      { term: "Salt & Pepper ใช้ filter ไหน", def: "Median (medianBlur) — กันจุดสุดขั้ว" },
      { term: "FFT workflow", def: "fft2 → fftshift → (กรอง) → ifftshift → ifft2 → abs" },
      { term: "Watermark ฝังยังไง", def: "& mask (ปิดบิต) แล้ว | wm<<bit (ฝัง)" },
      { term: "MSE / PSNR", def: "MSE น้อยดี · PSNR มากดี · PSNR = 10·log10(255²/MSE)" },
      { term: "Opening / Closing", def: "OPEN = erode→dilate (ลบจุดเล็ก) · CLOSE = dilate→erode (ปิดรู)" }
    ],

    glossary: [
      { term: "BGR", def: "ลำดับช่องสีของ OpenCV — 0=Blue 1=Green 2=Red" },
      { term: "uint8", def: "ชนิดข้อมูล 0–255 — ภาพ 8-bit ปกติ" },
      { term: "Grayscale", def: "ภาพขาว-ดำ 1 channel · shape (H, W)" },
      { term: "reshape", def: "เปลี่ยนมิติ Array — จำนวนสมาชิกต้องเท่าเดิม (6×6=36)" },
      { term: "Slicing", def: "img[y1:y2, x1:x2] · [::2, ::2] = เลือกทุก 2 = downsampling" },
      { term: "Threshold", def: "แบ่งพิกเซลด้วยค่าขีด → ภาพ binary (0/255)" },
      { term: "convertScaleAbs", def: "new = pixel×alpha + beta (contrast/brightness) + clip อัตโนมัติ" },
      { term: "Quantization", def: "ลดระดับเทา — Mid: (img//step)*step + step//2" },
      { term: "Bit-Plane", def: "ชั้นบิตของภาพ 8 ชั้น — MSB(7)=โครงสร้าง LSB(0)=รายละเอียด" },
      { term: "Watermark", def: "ซ่อนข้อมูลในบิตของภาพ — ฝังด้วย mask + shift" },
      { term: "MSE / PSNR", def: "ค่าความคลาดเคลื่อน/คุณภาพภาพ (PSNR หน่วย dB)" },
      { term: "Gamma", def: "s = β·r^γ — γ<1 สว่าง · γ>1 มืด" },
      { term: "FFT / fftshift", def: "แปลงภาพเป็นความถี่ — fftshift ย้าย DC มาตรงกลาง" },
      { term: "Notch filter", def: "ปิดจุด noise ในสเปกตรัม (periodic noise)" },
      { term: "Median filter", def: "เรียงค่าหน้าต่าง 3×3 แล้วเอาค่ากลาง — ลบ salt & pepper" },
      { term: "Morphology", def: "ปรับรูปร่างภาพ binary — erode/dilate/open/close" }
    ],

    quiz: [
      {
        q: "cv2.resize(img, (1300, 500)) — ตัวเลขสองตัวคืออะไร?",
        options: ["(สูง, กว้าง)", "(กว้าง, สูง)", "(แถว, คอลัมน์)", "(x, y) มุมซ้ายบน"],
        correct: 1,
        explain: "cv2.resize รับ (width, height) = (กว้าง, สูง) — ต่างจาก img.shape ที่เป็น (H, W)"
      },
      {
        q: "OpenCV อ่านภาพแล้วสีเป็นแบบไหน?",
        options: ["RGB", "BGR", "HSV", "CMYK"],
        correct: 1,
        explain: "OpenCV อ่านเป็น BGR เสมอ — แสดงด้วย plt.imshow ต้อง cvtColor(COLOR_BGR2RGB) ก่อน"
      },
      {
        q: "cv2.threshold() คืนค่ากลับมากี่ค่า?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explain: "ret (ค่าขีดที่ใช้จริง) + ภาพผลลัพธ์ — เขียน ret, binary = cv2.threshold(...)"
      },
      {
        q: "ภาพ Salt & Pepper noise ควรใช้ filter ไหนลบ?",
        options: ["Mean (cv2.blur)", "Median (cv2.medianBlur)", "Laplacian", "Sobel"],
        correct: 1,
        explain: "Median ลบจุดสุดขั้ว (ขาว/ดำ) ได้ดี — Mean ทำให้จุด noise กระจายแทน"
      },
      {
        q: "ลำดับ FFT ที่ถูกต้องคือข้อใด?",
        options: ["ifft2 → fftshift → fft2", "fft2 → fftshift → ifftshift → ifft2", "fftshift → fft2 → ifft2", "fft2 → ifft2 → fftshift"],
        correct: 1,
        explain: "fft2 → fftshift (DC กลาง) → กรอง → ifftshift → ifft2 → np.abs()"
      },
      {
        q: "Uniform quantization 16 ระดับ (Mid) ใช้สูตรอะไร?",
        options: ["(img // 16) * 16", "(img // 16) * 16 + 7", "(img // 16) + 7", "(img % 16) * 16 + 7"],
        correct: 1,
        explain: "Mid = (img//step)*step + step//2 — 16 ระดับ → step=16, step//2=7"
      },
      {
        q: "ดึงบิต i ของภาพออกมาทำยังไง?",
        options: ["(img >> i) & 1", "(img << i) & 1", "img & (i >> 1)", "img // (2**i)"],
        correct: 0,
        explain: "(img >> i) & 1 = เลื่อนบิต i มาหลักหน่วยแล้วตัดเอาแค่ 0/1"
      },
      {
        q: "ฝัง watermark ลง bit-plane ใช้ขั้นตอนไหน?",
        options: ["(img | mask) & (wm << bit)", "(img & mask) | (wm << bit)", "(img ^ mask) | wm", "img + wm"],
        correct: 1,
        explain: "& mask (ปิดบิตเป้าหมาย) แล้ว | (wm << bit) (ฝัง watermark) — mask = 255 ^ (1<<bit)"
      },
      {
        q: "PSNR ยิ่งมีค่าแบบไหน = ภาพยิ่งดี?",
        options: ["ยิ่งน้อย", "ยิ่งมาก", "เท่ากับ 0", "ติดลบ"],
        correct: 1,
        explain: "PSNR = 10·log10(255²/MSE) — MSE น้อย → PSNR มาก (ภาพใกล้ต้นฉบับ)"
      },
      {
        q: "Opening และ Closing ต่างกันยังไง?",
        options: ["Opening = dilate→erode · Closing = erode→dilate", "Opening = erode→dilate · Closing = dilate→erode", "ทั้งคู่เหมือนกัน", "Opening ใช้กับภาพสีเท่านั้น"],
        correct: 1,
        explain: "Opening = erode→dilate (ลบจุดเล็ก) · Closing = dilate→erode (ปิดรู) — เริ่มจากตัวแรกเป็นตัวหลัก"
      }
    ]
  }
};
