/* ==========================================================================
   DIP — Digital Image Processing · บทที่ 1: ภาพดิจิทัลคืออะไร
   (Thai-first with EN terms) — เทมเพลตเดียวกับ CA / CN
   ========================================================================== */
window.DATA = {

  /* Slide metadata: title แสดงใน sidebar + aria-label */
  slides: [
    { title: "Cover — ภาพดิจิทัล (Digital Image)", short: "เปิดบทเรียน" },
    { title: "เราจะเรียนอะไรบ้าง", short: "ภาพรวมบทเรียน" },
    { title: "ภาพดิจิทัลคืออะไร? (f(x,y))", short: "ภาพดิจิทัลคืออะไร" },
    { title: "พิกเซล (Pixel)", short: "พิกเซลคืออะไร" },
    { title: "Digital Image Processing คืออะไร?", short: "DIP คืออะไร" },
    { title: "Vision กับคลื่นแม่เหล็กไฟฟ้า (EM Spectrum)", short: "Vision & EM Spectrum" },
    { title: "สาขาที่ใช้ DIP 1 — คลื่นแม่เหล็กไฟฟ้า", short: "สาขา DIP 1 · คลื่น EM" },
    { title: "สาขาที่ใช้ DIP 2 — เสียง/อิเล็กตรอน/วงการจริง", short: "สาขา DIP 2 · อื่น ๆ" },
    { title: "ระดับต่ำ (Low-level)", short: "ระดับต่ำ (Low)" },
    { title: "ระดับกลาง (Mid-level)", short: "ระดับกลาง (Mid)" },
    { title: "ระดับสูง (Higher-level)", short: "ระดับสูง (Higher)" },
    { title: "ตัวอย่าง: การอ่านตัวอักษร", short: "ตัวอย่างอ่านตัวอักษร" },
    { title: "ประวัติศาสตร์คร่าว ๆ (Bartlane 1920)", short: "ประวัติศาสตร์" },
    { title: "ขั้นตอนพื้นฐาน (Fundamental Steps)", short: "Fundamental Steps" },
    { title: "Image Acquisition — รับภาพเข้าระบบ", short: "Image Acquisition" },
    { title: "Image Enhancement — ทำให้ภาพดีขึ้น", short: "Image Enhancement" },
    { title: "Image Restoration — ซ่อมภาพที่เสีย", short: "Image Restoration" },
    { title: "Morphological Processing — จัดการรูปร่าง", short: "Morphological" },
    { title: "Image Compression — บีบอัดภาพ", short: "Image Compression" },
    { title: "Colour Image Processing — ภาพสี", short: "Colour Processing" },
    { title: "Components of an Image Processing System", short: "Components ระบบ" },
    { title: "Bitmap คืออะไร?", short: "Bitmap" },
    { title: "ความลึกของสี (Color Depth)", short: "Color Depth" },
    { title: "24/32 bit RGB และ Indexed Color", short: "RGB / Indexed" },
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
    { label: "1. ภาพดิจิทัล", topics: [3, 4, 5] },
    { label: "2. Vision & การใช้งาน", topics: [6, 7, 8] },
    { label: "3. ระดับการประมวลผล", topics: [9, 10, 11] },
    { label: "4. ตัวอย่าง + ประวัติศาสตร์", topics: [12, 13] },
    { label: "5. ขั้นตอนพื้นฐาน", topics: [14, 15, 16, 17, 18, 19, 20] },
    { label: "6. ระบบ + Bitmap & ความลึกของสี", topics: [21, 22, 23, 24] },
    { label: "ทบทวนและฝึกฝน", topics: [25, 26, 27, 28, 29, 30, 31] }
  ],

  /* Slide 2 — roadmap cards */
  roadmap: [
    { icon: "image", title: "ภาพดิจิทัลคืออะไร", desc: "ภาพ = f(x, y) — ตำแหน่ง (x, y) + ความเข้ม ณ ตำแหน่งนั้น ประกอบด้วยพิกเซล" },
    { icon: "cpu", title: "Digital Image Processing", desc: "การประมวลผลภาพดิจิทัลด้วยคอมพิวเตอร์ดิจิทัล" },
    { icon: "eye", title: "Vision & EM Spectrum", desc: "ตาเห็นแค่ visual band แต่เครื่องจักรเห็นได้ตั้งแต่แกมมา → คลื่นวิทยุ" },
    { icon: "layers", title: "ระดับการประมวลผล", desc: "Low (preprocessing) · Mid (segment/describe/classify) · Higher (image analysis)" },
    { icon: "history", title: "ประวัติศาสตร์", desc: "Bartlane 1920 สายเคเบิลใต้น้ำ ลอนดอน-นิวยอร์ก → ระเบิดตัวยุค 1980" },
    { icon: "list", title: "Fundamental Steps", desc: "Acquisition → Enhancement → Restoration → Morphological → Compression → Colour" },
    { icon: "cpu", title: "Components ของระบบ", desc: "Sensors · Display · Storage · Computer · Hardcopy · Networking" },
    { icon: "grid", title: "Bitmap & Color Depth", desc: "จำนวนพิกเซล + บิตต่อพิกเซล — 1/8/16/24/32 bit RGB + Indexed" }
  ],

  /* Slide 22 — summary cards */
  summary: [
    { icon: "image", title: "ภาพดิจิทัล", desc: "f(x,y) = ตำแหน่ง + ความเข้ม — ประกอบด้วยพิกเซล (finite elements)" },
    { icon: "cpu", title: "DIP", desc: "ประมวลผลภาพดิจิทัลด้วยคอมพิวเตอร์ดิจิทัล" },
    { icon: "eye", title: "Vision / EM", desc: "ตาเห็น visual band · เครื่องจักรเห็นแกมมา→วิทยุ" },
    { icon: "layers", title: "3 ระดับ", desc: "Low (preprocessing) · Mid (segment) · Higher (analysis)" },
    { icon: "history", title: "1920 → 1980s", desc: "Bartlane สายเคเบิลใต้น้ำ → ระเบิดตัวทุกวงการ" },
    { icon: "list", title: "6 ขั้นตอน", desc: "Acquisition · Enhancement · Restoration · Morphological · Compression · Colour" },
    { icon: "cpu", title: "Components ระบบ", desc: "Sensors · Display · Storage · Computer · Hardcopy · Networking" },
    { icon: "palette", title: "Color Depth", desc: "1 bit ขาวดำ · 8 bit เทา 256 · 16/24/32 bit RGB · Indexed" }
  ],

  /* ข้อมูลสไลด์ของวิชาอื่นที่ไม่ได้ใช้ — ปล่อยว่างไว้กัน init() แตก */
  whys: [], components: [], modes: [], topologies: [], scopes: [], media: [], stack: [], protocols: [], history: [],

  /* Slides 22–23 — quiz (10 questions) — สลับตำแหน่งคำตอบ + ตัวหลอกสมจริง */
  quiz: [
    {
      q: "ภาพ 1 ภาพ คือข้อมูลที่บอกอะไรบ้าง?",
      options: [
        "ตำแหน่ง (x, y) และความสว่าง/สี ณ ตำแหน่งนั้น",
        "แค่ชื่อไฟล์และขนาดของภาพ",
        "ความยาวและความกว้างของภาพเป็นเมตร",
        "จำนวนสีทั้งหมดที่มนุษย์สามารถมองเห็น"
      ],
      correct: 0,
      explain: "ภาพคือข้อมูลที่บอก \"ตำแหน่ง\" (x, y) และ \"ความสว่าง/สี\" ณ ตำแหน่งนั้น — ถ้าถูกแบ่งเป็นช่อง ๆ ที่จำกัด เรียกว่าภาพดิจิทัล"
    },
    {
      q: "จุดเล็ก ๆ ที่ประกอบกันเป็นภาพดิจิทัลเรียกว่าอะไร?",
      options: [
        "Bit",
        "Pixel",
        "Byte",
        "Frame"
      ],
      correct: 1,
      explain: "Pixel (พิกเซล) คือจุดเล็ก ๆ นับไม่ถ้วนที่ประกอบกันเป็นภาพ — เหมือนภาพที่ประกอบจากตารางสี่เหลี่ยมเล็ก ๆ"
    },
    {
      q: "Digital Image Processing คืออะไร?",
      options: [
        "การพิมพ์ภาพด้วยเครื่องพิมพ์สี",
        "การถ่ายภาพด้วยกล้องดิจิทัลเท่านั้น",
        "การใช้คอมพิวเตอร์จัดการ/แก้ไข/วิเคราะห์ภาพดิจิทัล",
        "การแปลงภาพถ่ายเป็นกระดาษ"
      ],
      correct: 2,
      explain: "DIP คือการใช้คอมพิวเตอร์มาจัดการ/แก้ไข/วิเคราะห์ภาพดิจิทัล — เป็นหัวใจของวิชานี้"
    },
    {
      q: "งานใดจัดเป็นระดับต่ำ (Low-level)?",
      options: [
        "การจดจำใบหน้าของคนในภาพ",
        "การแบ่งส่วนภาพ (segmentation)",
        "การตัดสินใจว่าภาพนี้เป็นภาพเมืองหรือป่า",
        "การลด noise และปรับ contrast"
      ],
      correct: 3,
      explain: "Low-level คืองานพื้นฐาน เช่น ลด noise, ปรับ contrast, ทำให้ภาพคมชัดขึ้น — ยังไม่มีการวิเคราะห์ความหมาย"
    },
    {
      q: "การแบ่งส่วนภาพ (segmentation) และการจำแนกวัตถุจัดเป็นระดับใด?",
      options: [
        "ระดับต่ำ (Low-level)",
        "ระดับกลาง (Mid-level)",
        "ระดับสูง (Higher-level)",
        "ระดับเริ่มต้น (Basic-level)"
      ],
      correct: 1,
      explain: "Mid-level คือการแบ่งส่วนภาพ (segmentation), อธิบายลักษณะวัตถุ และจำแนกวัตถุ"
    },
    {
      q: "ระดับสูง (Higher-level) มีลักษณะอย่างไร?",
      options: [
        "ปรับ contrast ให้ภาพสว่างขึ้น",
        "ลด noise จากภาพถ่าย",
        "วิเคราะห์ภาพโดยรวม ใกล้เคียงกับการคิดแบบมนุษย์",
        "บีบอัดไฟล์ภาพให้เล็กลง"
      ],
      correct: 2,
      explain: "Higher-level วิเคราะห์ภาพโดยรวม ใกล้เคียงกับการ \"คิด\" แบบที่มนุษย์ใช้ตอนมองเห็น"
    },
    {
      q: "ขั้นตอนใดจัดเป็นการประมวลผลระดับสูง?",
      options: [
        "การจดจำตัวอักษรในภาพ (recognition)",
        "การปรับความคมชัดของภาพ",
        "การลดสัญญาณรบกวน (noise)",
        "การครอบตัดภาพให้เล็กลง"
      ],
      correct: 0,
      explain: "การอ่านตัวอักษรต้องผ่านหลายขั้น: ถ่ายภาพ → ปรับให้ชัด → ตัดแยกตัวอักษร → อธิบายรูปร่าง → จดจำ (ระดับสูง)"
    },
    {
      q: "ระบบ Bartlane ในยุค 1920 ใช้ทำอะไร และลดเวลาส่งภาพจากเท่าไรเป็นเท่าไร?",
      options: [
        "ส่งภาพข่าวผ่านสายเคเบิลใต้น้ำ ลอนดอน-นิวยอร์ก — จาก >1 สัปดาห์ เหลือ <3 ชั่วโมง",
        "ถ่ายภาพดาวเทียมสำรวจอวกาศ — จาก 1 วัน เหลือ 1 ชั่วโมง",
        "สแกนลายนิ้วมือเพื่อระบุตัวตน — จาก 1 ชั่วโมง เหลือ 1 นาที",
        "วินิจฉัยโรคจากภาพเอกซเรย์ — จาก 1 เดือน เหลือ 1 วัน"
      ],
      correct: 0,
      explain: "Bartlane cable picture transmission system ต้นทศวรรษ 1920 ส่งภาพข่าวผ่านสายเคเบิลใต้น้ำระหว่างลอนดอน-นิวยอร์ก — ลดเวลาจากมากกว่า 1 สัปดาห์ เหลือน้อยกว่า 3 ชั่วโมง"
    },
    {
      q: "ภาพ 1 bit มีระดับสีทั้งหมดกี่ระดับ?",
      options: [
        "1 ระดับ (ดำเท่านั้น)",
        "2 ระดับ (ดำ กับ ขาว)",
        "8 ระดับ",
        "256 ระดับ"
      ],
      correct: 1,
      explain: "1 bit เก็บได้ 2 ค่า: 0 = ดำ, 1 = ขาว — เป็นภาพขาวดำล้วน"
    },
    {
      q: "ภาพ 8 bit โทนเทา (grayscale) มีระดับความเข้มกี่ระดับ?",
      options: [
        "8 ระดับ",
        "64 ระดับ",
        "128 ระดับ",
        "256 ระดับ (0 = ดำ, 255 = ขาว)"
      ],
      correct: 3,
      explain: "8 bit = 2^8 = 256 ระดับความเข้ม — ตั้งแต่ 0 (ดำ) ถึง 255 (ขาว)"
    }
  ],

  /* ==========================================================================
     ข้อสอบหลังเรียน (Post-Lesson Exam · 20 ข้อ)
     ========================================================================== */
  quick: [
    {
      q: "ภาพดิจิทัลประกอบด้วยจุดเล็ก ๆ จำนวนมากเรียกว่าอะไร?",
      options: [
        "Vector",
        "Pixel",
        "Vertex",
        "Dot matrix"
      ],
      correct: 1,
      explain: "ภาพดิจิทัลประกอบด้วยจุดเล็ก ๆ ที่เรียกว่า พิกเซล (pixel) — เหมือนตารางสี่เหลี่ยมเล็ก ๆ นับพันนับหมื่นช่อง",
      en: {
        q: "A digital image is made of many tiny dots called?",
        options: ["Vector", "Pixel", "Vertex", "Dot matrix"],
        explain: "A digital image is made of tiny dots called pixels — like a grid of thousands of small squares"
      }
    },
    {
      q: "ข้อใด ไม่ใช่ องค์ประกอบ (Components) ของระบบประมวลผลภาพ?",
      options: [
        "Image sensors (เซนเซอร์รับภาพ)",
        "Display (จอแสดงผล)",
        "Storage (หน่วยจัดเก็บ)",
        "Weather station (สถานีตรวจอากาศ)"
      ],
      correct: 3,
      explain: "Components ของระบบ DIP: Image sensors · Display · Storage · Computer · Hardcopy (พิมพ์) · Networking — สถานีตรวจอากาศไม่ใช่ส่วนหนึ่งของระบบ",
      en: {
        q: "Which one is NOT a component of an image processing system?",
        options: ["Image sensors", "Display", "Storage", "Weather station"],
        explain: "Components of an image processing system: Image sensors, Display, Storage, Computer, Hardcopy, Networking — a weather station is not one of them"
      }
    },
    {
      q: "งาน \"ลด noise\" และ \"ปรับ contrast\" จัดเป็นการประมวลผลระดับใด?",
      options: [
        "ระดับต่ำ (Low-level)",
        "ระดับกลาง (Mid-level)",
        "ระดับสูง (Higher-level)",
        "ระดับวิเคราะห์ (Analysis-level)"
      ],
      correct: 0,
      explain: "Low-level คืองานพื้นฐาน เช่น ลด noise, ปรับ contrast, ทำให้ภาพคมชัดขึ้น — ยังไม่มีการวิเคราะห์ความหมายของภาพ",
      en: {
        q: "Reducing noise and adjusting contrast belong to which level?",
        options: ["Low-level", "Mid-level", "Higher-level", "Analysis-level"],
        explain: "Low-level means basic tasks like noise reduction and contrast adjustment — no meaning analysis yet"
      }
    },
    {
      q: "การแบ่งส่วนภาพ (segmentation) และการจำแนกวัตถุ จัดเป็นระดับใด?",
      options: [
        "ระดับต่ำ (Low-level)",
        "ระดับกลาง (Mid-level)",
        "ระดับสูง (Higher-level)",
        "ระดับข้อมูล (Data-level)"
      ],
      correct: 1,
      explain: "Mid-level คือการแบ่งส่วนภาพ (segmentation), อธิบายลักษณะวัตถุในภาพ และจำแนกวัตถุ",
      en: {
        q: "Image segmentation and object classification belong to which level?",
        options: ["Low-level", "Mid-level", "Higher-level", "Data-level"],
        explain: "Mid-level means segmentation, describing objects in the image, and classifying objects"
      }
    },
    {
      q: "ระดับสูง (Higher-level) หมายถึงอะไร?",
      options: [
        "การวิเคราะห์ภาพโดยรวม ใกล้เคียงการคิดแบบมนุษย์",
        "การปรับความสว่างของภาพ",
        "การแปลงภาพเป็นขาวดำ",
        "การเก็บภาพลงหน่วยความจำ"
      ],
      correct: 0,
      explain: "Higher-level วิเคราะห์ภาพโดยรวม ใกล้เคียงกับการ \"คิด\" แบบที่มนุษย์ใช้ตอนมองเห็น",
      en: {
        q: "What does Higher-level processing mean?",
        options: ["Analyzing the image as a whole, close to human thinking", "Adjusting image brightness", "Converting image to grayscale", "Storing image in memory"],
        explain: "Higher-level analyzes the image as a whole, similar to how humans think when seeing"
      }
    },
    {
      q: "ข้อใดเป็นการประมวลผลระดับต่ำ (Low-level)?",
      options: [
        "จดจำตัวอักษรในเอกสารที่สแกน",
        "ปรับภาพให้คมชัดขึ้น (sharpen)",
        "ตัดสินใจว่าภาพมีรถกี่คัน",
        "อธิบายรูปร่างของวัตถุ"
      ],
      correct: 1,
      explain: "การทำให้ภาพคมชัด (sharpen) เป็น Low-level — ส่วนการจดจำตัวอักษร/การนับรถเป็นระดับสูง",
      en: {
        q: "Which one is Low-level processing?",
        options: ["Recognizing letters in a scanned document", "Sharpening the image", "Deciding how many cars are in the image", "Describing object shapes"],
        explain: "Sharpening is Low-level — recognizing letters or counting cars is higher-level"
      }
    },
    {
      q: "ในตัวอย่างการอ่านตัวอักษร ขั้นตอนใดเป็นการประมวลผลระดับสูง?",
      options: [
        "การถ่ายภาพต้นฉบับ",
        "การตัดแยกตัวอักษรออกจากภาพ",
        "การจดจำตัวอักษรนั้น",
        "การปรับภาพให้ชัดขึ้น"
      ],
      correct: 2,
      explain: "ลำดับคือ ถ่ายภาพ → ปรับให้ชัด → ตัดแยกตัวอักษร → อธิบายรูปร่าง → จดจำตัวอักษร (ขั้นสุดท้ายเป็นระดับสูง)",
      en: {
        q: "In the character reading example, which step is Higher-level processing?",
        options: ["Capturing the original image", "Segmenting the letters from the image", "Recognizing the letter", "Sharpening the image"],
        explain: "The pipeline: capture → sharpen → segment letters → describe shapes → recognize the letter (the last step is higher-level)"
      }
    },
    {
      q: "ระบบ Bartlane ในต้นทศวรรษ 1920 ลดเวลาส่งภาพข้ามแอตแลนติกจากเท่าไรเป็นเท่าไร?",
      options: [
        "จากมากกว่า 1 สัปดาห์ เหลือน้อยกว่า 3 ชั่วโมง",
        "จาก 1 วัน เหลือ 1 ชั่วโมง",
        "จาก 1 เดือน เหลือ 1 วัน",
        "จาก 1 ปี เหลือ 1 เดือน"
      ],
      correct: 0,
      explain: "Bartlane cable picture transmission system ส่งภาพข่าวผ่านสายเคเบิลใต้น้ำระหว่างลอนดอน-นิวยอร์ก — ลดเวลาจากมากกว่า 1 สัปดาห์ เหลือน้อยกว่า 3 ชั่วโมง",
      en: {
        q: "In the early 1920s, the Bartlane system cut transatlantic picture delivery time from what to what?",
        options: ["From more than 1 week to less than 3 hours", "From 1 day to 1 hour", "From 1 month to 1 day", "From 1 year to 1 month"],
        explain: "The Bartlane cable picture transmission system sent news pictures via submarine cable between London and New York — cutting the time from over a week to less than three hours"
      }
    },
    {
      q: "ข้อใด ไม่ใช่ ขั้นตอนพื้นฐาน (Fundamental Steps) ของการประมวลผลภาพ?",
      options: [
        "Image Compression",
        "Image Enhancement",
        "Image Printing",
        "Morphological Processing"
      ],
      correct: 2,
      explain: "Fundamental Steps: Acquisition, Enhancement, Restoration, Morphological, Compression, Colour Processing — ไม่มีขั้นตอน \"Image Printing\"",
      en: {
        q: "Which one is NOT one of the Fundamental Steps of image processing?",
        options: ["Image Compression", "Image Enhancement", "Image Printing", "Morphological Processing"],
        explain: "Fundamental Steps: Acquisition, Enhancement, Restoration, Morphological, Compression, Colour Processing — there is no \"Image Printing\" step"
      }
    },
    {
      q: "ขั้นตอนที่ทำให้ภาพดูดีขึ้น (สวยขึ้น/ชัดขึ้น) คือข้อใด?",
      options: [
        "Image Acquisition",
        "Image Enhancement",
        "Image Restoration",
        "Image Compression"
      ],
      correct: 1,
      explain: "Image Enhancement = ทำให้ภาพดูดีขึ้น — เป็นการปรับปรุงคุณภาพตามการรับรู้ของคนดู",
      en: {
        q: "Which step makes the image look better (nicer/sharper)?",
        options: ["Image Acquisition", "Image Enhancement", "Image Restoration", "Image Compression"],
        explain: "Image Enhancement makes the image look better — improving quality based on human perception"
      }
    },
    {
      q: "ขั้นตอนที่ \"ซ่อมแซมภาพที่เสียหาย\" (เช่น มี noise หรือเบลอจากกล้อง) คือข้อใด?",
      options: [
        "Image Restoration",
        "Image Enhancement",
        "Colour Processing",
        "Image Acquisition"
      ],
      correct: 0,
      explain: "Image Restoration = ซ่อมแซมภาพที่เสียหาย โดยใช้แบบจำลองความเสียหาย (model) มาช่วยแก้ให้กลับมาใกล้ต้นฉบับ",
      en: {
        q: "Which step \"repairs a damaged image\" (e.g. noisy or blurry)?",
        options: ["Image Restoration", "Image Enhancement", "Colour Processing", "Image Acquisition"],
        explain: "Image Restoration repairs damaged images using a model of the degradation to recover the original"
      }
    },
    {
      q: "การจัดการรูปร่างของวัตถุในภาพ (เช่น ทำให้เส้นขอบหนาขึ้น/บางลง) คือขั้นตอนใด?",
      options: [
        "Colour Image Processing",
        "Morphological Processing",
        "Image Compression",
        "Image Acquisition"
      ],
      correct: 1,
      explain: "Morphological Processing = จัดการรูปร่างของวัตถุในภาพ เช่น การทำให้โครงสร้างหนาหรือบางลง",
      en: {
        q: "Manipulating object shapes in an image (e.g. thickening/thinning edges) is which step?",
        options: ["Colour Image Processing", "Morphological Processing", "Image Compression", "Image Acquisition"],
        explain: "Morphological Processing manipulates object shapes, e.g. making structures thicker or thinner"
      }
    },
    {
      q: "Bitmap มีคุณสมบัติหลัก 2 อย่างคืออะไร?",
      options: [
        "ความละเอียดกับชื่อไฟล์",
        "จำนวนพิกเซล และความลึกของสี (บิตต่อพิกเซล)",
        "ขนาดไฟล์ และความสว่าง",
        "จำนวนสี และนามสกุลไฟล์"
      ],
      correct: 1,
      explain: "Bitmap = ภาพที่เป็นตารางพิกเซลสี่เหลี่ยม — คุณสมบัติหลักคือ (1) จำนวนพิกเซล และ (2) ความลึกของสี (บิตต่อพิกเซล)",
      en: {
        q: "What are the two main properties of a Bitmap?",
        options: ["Resolution and file name", "Number of pixels and color depth (bits per pixel)", "File size and brightness", "Number of colors and file extension"],
        explain: "A Bitmap is an image as a rectangular grid of pixels — its two main properties are pixel count and color depth (bits per pixel)"
      }
    },
    {
      q: "ภาพ 1 bit มีสีทั้งหมดกี่สี?",
      options: [
        "1 สี",
        "2 สี (ดำ กับ ขาว)",
        "16 สี",
        "256 สี"
      ],
      correct: 1,
      explain: "1 bit เก็บได้ 2 ค่า: 0 = ดำ, 1 = ขาว — เป็นภาพขาวดำล้วน",
      en: {
        q: "How many colors does a 1-bit image have?",
        options: ["1 color", "2 colors (black and white)", "16 colors", "256 colors"],
        explain: "1 bit stores 2 values: 0 = black, 1 = white — a pure black-and-white image"
      }
    },
    {
      q: "ภาพ 8 bit โทนเทา (grayscale) มีระดับความเข้มทั้งหมดกี่ระดับ?",
      options: [
        "8 ระดับ",
        "64 ระดับ",
        "128 ระดับ",
        "256 ระดับ"
      ],
      correct: 3,
      explain: "8 bit = 2^8 = 256 ระดับ — 0 = ดำ, 255 = ขาว",
      en: {
        q: "How many intensity levels does an 8-bit grayscale image have?",
        options: ["8 levels", "64 levels", "128 levels", "256 levels"],
        explain: "8 bits = 2^8 = 256 levels — 0 = black, 255 = white"
      }
    },
    {
      q: "ภาพ 24 bit RGB มีสีทั้งหมดประมาณกี่สี?",
      options: [
        "16,777,216 สี (16.7 ล้านสี)",
        "65,536 สี",
        "256 สี",
        "1,024 สี"
      ],
      correct: 0,
      explain: "24 bit RGB = อย่างละ 8 bit สำหรับ แดง-เขียว-น้ำเงิน → 2^24 ≈ 16.7 ล้านสี (สีจริง)",
      en: {
        q: "How many colors does a 24-bit RGB image have?",
        options: ["16,777,216 colors (16.7 million)", "65,536 colors", "256 colors", "1,024 colors"],
        explain: "24-bit RGB = 8 bits each for Red-Green-Blue → 2^24 ≈ 16.7 million colors (true color)"
      }
    },
    {
      q: "ภาพ 32 bit RGB เพิ่มช่องพิเศษอะไรเข้ามาเมื่อเทียบกับ 24 bit?",
      options: [
        "ช่อง Alpha (ความโปร่งใส)",
        "ช่องความลึก (Depth)",
        "ช่องความสว่าง (Luma)",
        "ช่องอุณหภูมิสี (Kelvin)"
      ],
      correct: 0,
      explain: "32 bit = 24 bit RGB + ช่อง Alpha สำหรับความโปร่งใส (transparency)",
      en: {
        q: "What extra channel does a 32-bit RGB image add compared to 24-bit?",
        options: ["Alpha channel (transparency)", "Depth channel", "Luma channel", "Color temperature channel"],
        explain: "32-bit = 24-bit RGB + an Alpha channel for transparency"
      }
    },
    {
      q: "ภาพ indexed color (เช่น 8 bit / 4 bit) ใช้วิธีใดเพื่อประหยัดพื้นที่?",
      options: [
        "ใช้ตารางสี (palette) แทนการเก็บสีเต็มทุกพิกเซล",
        "บีบอัดไฟล์ด้วย ZIP ทุกครั้ง",
        "ลดจำนวนพิกเซลของภาพลงครึ่งหนึ่ง",
        "แปลงภาพเป็นขาวดำเสมอ"
      ],
      correct: 0,
      explain: "Indexed color ใช้ตารางสี (palette) — แต่ละพิกเซลเก็บแค่ดัชนีชี้ไปในตาราง แทนที่จะเก็บค่าสีเต็ม จึงประหยัดพื้นที่",
      en: {
        q: "How does an indexed-color image (e.g. 8-bit / 4-bit) save space?",
        options: ["Using a color palette instead of storing full color per pixel", "Always compressing with ZIP", "Halving the number of pixels", "Always converting to grayscale"],
        explain: "Indexed color uses a palette — each pixel stores only an index into the table instead of a full color, saving space"
      }
    },
    {
      q: "ภาพ grayscale 8 bit ค่าระดับ 0 หมายถึงสีอะไร?",
      type: "text",
      answers: ["ดำ", "black", "0"],
      hint: "นึกถึงช่วง 0–255: ปลายหนึ่งดำ ปลายหนึ่งขาว",
      explain: "ในภาพ 8 bit grayscale: 0 = ดำ, 255 = ขาว — ยิ่งเลขน้อยยิ่งเข้ม",
      steps: [
        "ภาพ 8 bit grayscale มีค่าระดับ 0 ถึง 255",
        "ค่า 0 คือระดับที่เข้มที่สุด = ดำ",
        "ค่า 255 คือระดับที่สว่างที่สุด = ขาว",
        "ดังนั้นระดับ 0 หมายถึงสีดำ"
      ],
      en: {
        q: "In an 8-bit grayscale image, intensity level 0 means what color?",
        hint: "Think of the 0–255 range: one end is black, the other is white",
        explain: "In an 8-bit grayscale image: 0 = black, 255 = white — the smaller the number, the darker",
        steps: [
          "An 8-bit grayscale image has intensity levels from 0 to 255",
          "Level 0 is the darkest level = black",
          "Level 255 is the brightest level = white",
          "So level 0 means black"
        ]
      }
    },
    {
      q: "ภาพ 24 bit RGB แต่ละช่องสี (แดง/เขียว/น้ำเงิน) ใช้กี่บิตต่อช่อง?",
      type: "text",
      answers: ["8", "8 bit", "8บิต", "8 บิต", "eight"],
      hint: "24 bit = 3 ช่องสี เท่ากันทุกช่อง",
      explain: "24 bit RGB = 3 ช่อง (R, G, B) × 8 bit ต่อช่อง = 24 bit",
      steps: [
        "ภาพ 24 bit RGB มีทั้งหมด 24 บิต",
        "แบ่งเป็น 3 ช่องสี: แดง (R), เขียว (G), น้ำเงิน (B)",
        "24 ÷ 3 = 8",
        "แต่ละช่องใช้ 8 บิต"
      ],
      en: {
        q: "In a 24-bit RGB image, how many bits are used per color channel (R/G/B)?",
        hint: "24 bits = 3 channels, all equal",
        explain: "24-bit RGB = 3 channels (R, G, B) × 8 bits per channel = 24 bits",
        steps: [
          "A 24-bit RGB image has 24 bits in total",
          "It is split into 3 color channels: Red (R), Green (G), Blue (B)",
          "24 ÷ 3 = 8",
          "Each channel uses 8 bits"
        ]
      }
    }
  ],

  /* Slides 24 — flashcards */
  flashcards: [
    { q: "ภาพดิจิทัลคืออะไร?", a: "ข้อมูลที่บอกตำแหน่ง (x, y) + ความสว่าง/สี ณ ตำแหน่งนั้น — ถูกแบ่งเป็นช่อง ๆ ที่จำกัด" },
    { q: "Pixel คืออะไร?", a: "จุดเล็ก ๆ ที่ประกอบกันเป็นภาพ — เหมือนตารางสี่เหลี่ยมเล็ก ๆ นับพันนับหมื่นช่อง" },
    { q: "Digital Image Processing คือ?", a: "การใช้คอมพิวเตอร์จัดการ/แก้ไข/วิเคราะห์ภาพดิจิทัล" },
    { q: "Low-level processing ทำอะไร?", a: "งานพื้นฐาน เช่น ลด noise, ปรับ contrast, ทำให้ภาพคมชัดขึ้น" },
    { q: "Mid-level processing ทำอะไร?", a: "แบ่งส่วนภาพ (segmentation), อธิบายลักษณะวัตถุ, จำแนกวัตถุ" },
    { q: "Higher-level processing ทำอะไร?", a: "วิเคราะห์ภาพโดยรวม ใกล้เคียงการคิดแบบมนุษย์ เช่น การจดจำตัวอักษร" },
    { q: "DIP เริ่มต้นยุคใด?", a: "ต้นทศวรรษ 1920 — ระบบ Bartlane ส่งภาพข่าวผ่านสายเคเบิลใต้น้ำ ลอนดอน-นิวยอร์ก" },
    { q: "Bartlane ลดเวลาส่งภาพข้ามแอตแลนติกจากเท่าไรเป็นเท่าไร?", a: "จากมากกว่า 1 สัปดาห์ เหลือน้อยกว่า 3 ชั่วโมง" },
    { q: "ยุคที่การใช้งานภาพดิจิทัลระเบิดตัว?", a: "ยุค 1980 — บันเทิง, ความปลอดภัย, การแพทย์, อุตสาหกรรม, ดาวเทียม" },
    { q: "ตาเรามองเห็น EM spectrum ได้แค่ไหน?", a: "แค่แถบแสงที่มองเห็น (visual band) — แต่เครื่องจักรเห็นได้ตั้งแต่รังสีแกมมา → คลื่นวิทยุ" },
    { q: "ชื่อเรียกของพิกเซลมีกี่แบบ?", a: "4 แบบ: picture elements · image elements · pels · pixels (ใช้แพร่หลายที่สุด)" },
    { q: "Components ของระบบ DIP มีอะไรบ้าง?", a: "Image sensors · Display · Storage · Computer · Hardcopy · Networking" },
    { q: "Image Acquisition คือ?", a: "การถ่าย/รับภาพเข้าระบบ" },
    { q: "Image Enhancement คือ?", a: "ทำให้ภาพดูดีขึ้น (สวย/ชัดตามการรับรู้ของคนดู)" },
    { q: "Image Restoration คือ?", a: "ซ่อมแซมภาพที่เสียหาย โดยใช้แบบจำลองความเสียหาย" },
    { q: "Morphological Processing คือ?", a: "จัดการรูปร่างของวัตถุในภาพ เช่น ทำให้เส้นหนา/บางลง" },
    { q: "Image Compression คือ?", a: "บีบอัดขนาดไฟล์ภาพให้เล็กลง" },
    { q: "Colour Image Processing คือ?", a: "การจัดการภาพสี" },
    { q: "Bitmap คือ?", a: "ภาพที่เป็นตารางพิกเซลสี่เหลี่ยม — แต่ละพิกเซลเก็บค่าสี" },
    { q: "Bitmap มีคุณสมบัติหลัก 2 อย่าง?", a: "(1) จำนวนพิกเซล (2) ความลึกของสี (บิตต่อพิกเซล)" },
    { q: "1 bit / 8 bit / 24 bit / 32 bit หมายถึง?", a: "ขาวดำล้วน · เทา 256 ระดับ · RGB 16.7 ล้านสี · RGB + Alpha โปร่งใส" },
    { q: "Indexed color คือ?", a: "ใช้ตารางสี (palette) — พิกเซลเก็บดัชนีชี้ในตาราง เพื่อประหยัดพื้นที่" }
  ],

  /* Slide 25 — glossary */
  glossary: [
    { term: "Digital Image", def: "ภาพที่ตำแหน่งและค่าสีถูกแบ่งเป็นช่อง ๆ ที่จำกัด — ประกอบด้วยพิกเซล" },
    { term: "f(x, y)", def: "ฟังก์ชัน 2 มิติแทนภาพ — x, y = ตำแหน่ง (spatial coordinates), ค่า f = ความเข้ม (intensity/gray level) ณ จุดนั้น" },
    { term: "Pixel (พิกเซล)", def: "องค์ประกอบของภาพดิจิทัล — แต่ละตัวมีตำแหน่ง (location) และค่า (value) เรียกอีกชื่อว่า picture elements, image elements, pels" },
    { term: "Pels", def: "อีกชื่อหนึ่งของพิกเซล (picture elements) — ใช้เรียกองค์ประกอบของภาพดิจิทัล" },
    { term: "EM Spectrum (คลื่นแม่เหล็กไฟฟ้า)", def: "ช่วงคลื่นทั้งหมด ตั้งแต่รังสีแกมมา → เอกซเรย์ → UV → แสงที่มองเห็น → IR → ไมโครเวฟ → คลื่นวิทยุ — เครื่องจักรครอบคลุมได้เกือบทั้งหมด" },
    { term: "Bartlane System", def: "ระบบส่งภาพข่าวทางสายเคเบิลใต้น้ำ ลอนดอน-นิวยอร์ก ต้นทศวรรษ 1920 — ลดเวลาจาก >1 สัปดาห์ เหลือ <3 ชั่วโมง" },
    { term: "Image Processing System", def: "ระบบประมวลผลภาพ — ประกอบด้วย Image sensors, Display, Storage, Computer, Hardcopy, Networking" },
    { term: "Image Sensors", def: "อุปกรณ์รับภาพ (กล้อง/เซนเซอร์) — ส่วนแรกของระบบ DIP" },
    { term: "Color Cube (ลูกบาศก์สี RGB)", def: "RGB space — สีใด ๆ แทนด้วยจุดในลูกบาศก์ที่มีแกน r, g, b ตั้งฉากกัน เป็นพื้นฐานของ computer graphics" },
    { term: "DIP (Digital Image Processing)", def: "การใช้คอมพิวเตอร์จัดการ/แก้ไข/วิเคราะห์ภาพดิจิทัล" },
    { term: "Low-level Processing", def: "การประมวลผลระดับต่ำ — ลด noise, ปรับ contrast, ทำให้คมชัด" },
    { term: "Mid-level Processing", def: "การประมวลผลระดับกลาง — segmentation, อธิบายลักษณะวัตถุ, จำแนก" },
    { term: "Higher-level Processing", def: "การประมวลผลระดับสูง — วิเคราะห์ภาพโดยรวม คล้ายการคิดของมนุษย์" },
    { term: "Segmentation", def: "การแบ่งส่วนภาพ — แยกวัตถุออกจากพื้นหลัง" },
    { term: "Recognition", def: "การจดจำวัตถุ/ตัวอักษรในภาพ" },
    { term: "Image Acquisition", def: "การถ่าย/รับภาพเข้าระบบ — ขั้นแรกของ Fundamental Steps" },
    { term: "Image Enhancement", def: "การทำให้ภาพดูดีขึ้นตามการรับรู้ของคนดู" },
    { term: "Image Restoration", def: "การซ่อมแซมภาพที่เสียหายโดยใช้แบบจำลองความเสียหาย" },
    { term: "Morphological Processing", def: "การจัดการรูปร่างของวัตถุในภาพ" },
    { term: "Image Compression", def: "การบีบอัดขนาดไฟล์ภาพ" },
    { term: "Colour Image Processing", def: "การจัดการภาพสี เช่น RGB, แปลงสี" },
    { term: "Bitmap", def: "ภาพที่เป็นตารางพิกเซลสี่เหลี่ยม แต่ละพิกเซลเก็บค่าสี" },
    { term: "Color Depth (ความลึกของสี)", def: "จำนวนบิตที่ใช้เก็บสีต่อ 1 พิกเซล (บิต/พิกเซล)" },
    { term: "Grayscale", def: "ภาพโทนเทา — 8 bit มี 256 ระดับ (0 = ดำ, 255 = ขาว)" },
    { term: "RGB", def: "ระบบสีแดง-เขียว-น้ำเงิน อย่างละ 8 bit รวม 24 bit ≈ 16.7 ล้านสี" },
    { term: "Alpha Channel", def: "ช่องความโปร่งใสที่เพิ่มในภาพ 32 bit" },
    { term: "Indexed Color / Palette", def: "การเก็บสีโดยใช้ตารางสี (palette) เพื่อประหยัดพื้นที่" }
  ],

  /* Slide 21 — cheat sheet */
  cheat: [
    { term: "ภาพดิจิทัล = f(x,y)", def: "x,y = ตำแหน่ง · f = ความเข้ม · ค่าไม่ต่อเนื่อง = ดิจิทัล" },
    { term: "พิกเซล (pels)", def: "picture / image elements · ตัวที่ใช้บ่อยสุด = pixel" },
    { term: "Low / Mid / Higher", def: "preprocessing · segment/describe/classify · image analysis" },
    { term: "Bartlane 1920", def: "สายเคเบิลใต้น้ำ ลอนดอน-นิวยอร์ก · >1 สัปดาห์ → <3 ชั่วโมง" },
    { term: "1980s", def: "ภาพดิจิทัลระเบิดตัวในทุกวงการ" },
    { term: "EM spectrum", def: "Gamma → X-ray → UV → Visible → IR → Microwave → Radio" },
    { term: "Components ระบบ", def: "Sensors · Display · Storage · Computer · Hardcopy · Networking" },
    { term: "Fundamental Steps", def: "Acquisition · Enhancement · Restoration · Morphological · Compression · Colour" },
    { term: "Acquisition", def: "ถ่าย/รับภาพเข้าระบบ" },
    { term: "Enhancement", def: "ทำให้ภาพดูดีขึ้น" },
    { term: "Restoration", def: "ซ่อมภาพที่เสียหาย (ใช้แบบจำลอง)" },
    { term: "Morphological", def: "จัดการรูปร่างวัตถุในภาพ" },
    { term: "Compression", def: "บีบอัดไฟล์ภาพ" },
    { term: "Bitmap", def: "ตารางพิกเซล + ความลึกของสี (2 พารามิเตอร์)" },
    { term: "1 bit", def: "ขาวดำล้วน (0=ดำ, 1=ขาว) · monochrome" },
    { term: "8 bit grayscale", def: "เทา 256 ระดับ (0=ดำ, 255=ขาว, 127=เทา 50%)" },
    { term: "16 bit RGB", def: "5-5-5 บิตต่อสี + Alpha 1 บิต" },
    { term: "24 bit RGB", def: "16.7 ล้านสี (R/G/B อย่างละ 8 bit) · color cube" },
    { term: "32 bit RGB", def: "24 bit + Alpha (ความโปร่งใส/masked areas)" },
    { term: "Indexed Color", def: "ใช้ palette/color table แทนการเก็บสีเต็มทุกพิกเซล" }
  ],

  /* ==========================================================================
     CHAPTER 2 — COLOR IMAGE PROCESSING (จากสไลด์ตำรา Doc3_001.pdf)
     ========================================================================== */
  ch2: {
    title: "Color Image Processing (การประมวลผลภาพสี)",
    thai: "การประมวลผลภาพสี",
    en: "Color Image Processing",

    /* Slide metadata */
    slides: [
      { title: "Cover — Color Image Processing", short: "เปิดบทเรียน" },
      { title: "เราจะเรียนอะไรบ้าง", short: "ภาพรวมบทเรียน" },
      { title: "ทำไมต้องใช้สี? (Preview)", short: "ทำไมต้องใช้สี" },
      { title: "Full-color vs Pseudo-color", short: "Full vs Pseudo" },
      { title: "Color Fundamentals", short: "หลักการสี" },
      { title: "Visible Light 400–700 nm", short: "แสงที่มองเห็น" },
      { title: "Radiance · Luminance · Brightness", short: "3 ปริมาณแสง" },
      { title: "ตาเรารับแสงยังไง? (Cones)", short: "Cones ในตา" },
      { title: "Primary & Secondary Colors", short: "สีปฐมภูมิ/ทุติยภูมิ" },
      { title: "สีของแสง vs สีของเม็ดสี", short: "แสง vs เม็ดสี" },
      { title: "CIE XYZ Model", short: "CIE XYZ" },
      { title: "Color Models (RGB · CMY · HSI)", short: "Color Models" },
      { title: "RGB Model & Pixel Depth", short: "RGB & Pixel Depth" },
      { title: "Safe RGB Colors (216 สี)", short: "Safe RGB" },
      { title: "CMY / CMYK Model", short: "CMY / CMYK" },
      { title: "HSI Model (Hue · Saturation · Intensity)", short: "HSI Model" },
      { title: "HSI Component Images", short: "HSI Components" },
      { title: "Pseudo-color: Intensity Slicing", short: "Intensity Slicing" },
      { title: "Gray-level → Color Transformation", short: "Gray → Color" },
      { title: "Full-color Processing — 2 หลักคิด", short: "Full-color 2 หลักคิด" },
      { title: "Color Transformations sᵢ = Tᵢ(r₁,r₂,r₃)", short: "Color Transformations" },
      { title: "Smoothing & Sharpening ภาพสี", short: "Smoothing/Sharpening" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    /* Sidebar structure: 1-based */
    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. ทำไมต้องใช้สี", topics: [3, 4] },
      { label: "2. Color Fundamentals", topics: [5, 6, 7, 8, 9, 10, 11] },
      { label: "3. Color Models", topics: [12, 13, 14, 15, 16, 17] },
      { label: "4. Pseudo-color", topics: [18, 19] },
      { label: "5. Full-color Processing", topics: [20, 21, 22] },
      { label: "ทบทวนและฝึกฝน", topics: [23, 24, 25, 26, 27, 28, 29] }
    ],

    /* Slides 24–25 — quiz (10 questions) */
    quiz: [
      {
        q: "ทำไมต้องใช้สีในการประมวลผลภาพ?",
        options: [
          "สีเป็นตัวอธิบายที่ทรงพลัง — ใช้ระบุ/แยกวัตถุ เช่น หาใบหน้าด้วยสีผิว",
          "สีทำให้ไฟล์ภาพเล็กลงเสมอ",
          "ตาคนแยกโทนเทาได้ดีกว่าสี",
          "เพราะกล้องถ่ายภาพสีได้เท่านั้น"
        ],
        correct: 0,
        explain: "สีเป็น powerful descriptor — ใช้ระบุ/แยกวัตถุ (เช่น face detection ด้วยสีผิว) และคนแยกเฉดสีได้หลายพันเฉด ในขณะที่แยกเทาได้แค่ 2 โหล"
      },
      {
        q: "ตาคนสามารถแยกโทนสีได้ประมาณเท่าไร เทียบกับโทนเทา?",
        options: [
          "หลายพันเฉดสี vs เทาเพียง 2 โหลกว่า",
          "เท่ากันทั้งสองแบบ",
          "เทาน้อยกว่าสี 2 เท่า",
          "สีน้อยกว่าเทา 10 เท่า"
        ],
        correct: 0,
        explain: "มนุษย์แยกเฉดสีและความเข้มได้หลายพันแบบ แต่แยกโทนเทา (gray) ได้เพียงสองโหลกว่า — นี่คือเหตุผลที่ต้องใช้สี"
      },
      {
        q: "การประมวลผลภาพสีแบบ Full-color หมายถึงอะไร?",
        options: [
          "ภาพได้จากเซนเซอร์/อุปกรณ์สีเต็มรูปแบบ",
          "การระบายสีลงภาพขาวดำด้วยมือ",
          "การแปลงภาพเป็นขาวดำเสมอ",
          "การบีบอัดภาพสีให้เล็กลง"
        ],
        correct: 0,
        explain: "Full-color processing = ภาพได้จาก full-color sensor/อุปกรณ์โดยตรง ส่วน Pseudo-color = กำหนดสีให้ช่วงความเข้มของภาพ monochrome"
      },
      {
        q: "แสงสี (chromatic light) ที่ตามองเห็นครอบคลุมความยาวคลื่นเท่าไร?",
        options: [
          "400–700 นาโนเมตร (nm)",
          "100–200 นาโนเมตร",
          "700–1400 นาโนเมตร",
          "1–10 ไมโครเมตร"
        ],
        correct: 0,
        explain: "แสงสีครอบคลุม EM spectrum ช่วง 400–700 นาโนเมตร — เป็นแถบที่ตาเรามองเห็น (visible light)"
      },
      {
        q: "Radiance คืออะไร และหน่วยวัดคืออะไร?",
        options: [
          "พลังงานทั้งหมดที่ไหลจากแหล่งแสง หน่วย วัตต์ (W)",
          "พลังงานที่ตารับรู้ได้ หน่วย ลูเมน (lm)",
          "ความสว่างตามความรู้สึก หน่วย candela",
          "ความยาวคลื่นของแสง หน่วย nm"
        ],
        correct: 0,
        explain: "Radiance = พลังงานทั้งหมดที่ไหลจากแหล่งแสง วัดเป็นวัตต์ (W) ส่วน Luminance = พลังงานที่ตารับรู้ วัดเป็นลูเมน (lm)"
      },
      {
        q: "แสงอินฟราเรดไกล (far infrared) มีคุณสมบัติแบบไหน?",
        options: [
          "Radiance สูง แต่ Luminance = 0",
          "Radiance = 0 แต่ Luminance สูง",
          "ทั้งสองอย่างสูงมาก",
          "ทั้งสองอย่างเป็นศูนย์"
        ],
        correct: 0,
        explain: "Far infrared: radiance สูง (มีพลังงานจริง) แต่ luminance = 0 เพราะตาเรามองไม่เห็น — ตารับรู้ได้ 0"
      },
      {
        q: "เซลล์ Cones ในตาเรามีประมาณกี่ล้านเซลล์ และแบ่งเป็นสัดส่วนรับแสงสีอะไร?",
        options: [
          "6–7 ล้านเซลล์ — แดง 65% เขียว 33% น้ำเงิน 2%",
          "120 ล้านเซลล์ — ขาวดำเท่ากัน",
          "6–7 ล้าน — น้ำเงิน 65% แดง 33% เขียว 2%",
          "2 ล้าน — แดง เขียว น้ำเงิน อย่างละเท่ากัน"
        ],
        correct: 0,
        explain: "ตาเรามี Cones (ตัวรับสี) 6–7 ล้านเซลล์ แบ่งเป็น: แดง 65%, เขียว 33%, น้ำเงิน 2% — เป็นพื้นฐานของระบบสีแบบสามสี"
      },
      {
        q: "CIE (1931) กำหนดความยาวคลื่นของสีปฐมภูมิ (primary colors) เป็นเท่าไร?",
        options: [
          "B = 435.8 nm, G = 546.1 nm, R = 700 nm",
          "R = 435.8, G = 546.1, B = 700 nm",
          "R = G = B = 500 nm",
          "B = 700, G = 546.1, R = 435.8 nm"
        ],
        correct: 0,
        explain: "CIE 1931 กำหนด: B = 435.8 nm, G = 546.1 nm, R = 700 nm — แต่ไม่มีสีเดียวใดที่เรียกได้ว่าเป็น แดง/เขียว/น้ำเงิน แท้ 100%"
      },
      {
        q: "สีทุติยภูมิ (secondary colors) ของแสงคืออะไร?",
        options: [
          "G+B = Cyan, R+G = Yellow, R+B = Magenta",
          "R+G = Cyan, G+B = Yellow, R+B = Magenta",
          "R+B = Cyan, G+B = Yellow, R+G = Magenta",
          "C+M = Blue, Y+C = Green, M+Y = Red"
        ],
        correct: 0,
        explain: "สีทุติยภูมิ: G+B = Cyan (ฟ้าเขียว), R+G = Yellow (เหลือง), R+B = Magenta (ม่วงแดง) — เกิดจากสีปฐมภูมิรวมกันแบบบวก (additive)"
      },
      {
        q: "ในระบบ CMYK ตัว K ย่อมาจากอะไร และใช้ทำไม?",
        options: [
          "K = Black (สีดำ) — ใช้กับงานพิมพ์เพราะ CMY รวมกันได้ดำไม่สมบูรณ์",
          "K = Kelvin — ใช้วัดอุณหภูมิสี",
          "K = Key — กุญแจล็อกไฟล์ภาพ",
          "K = Kernel — ใช้กรองภาพ"
        ],
        correct: 0,
        explain: "CMYK = CMY + K (Black) — CMY เป็น primary colors ของเม็ดสี ใช้สร้าง hardcopy output และเพิ่ม K เพราะรวม CMY ได้ดำไม่แท้"
      }
    ],

    /* ==========================================================================
       ข้อสอบหลังเรียน (Post-Lesson Exam · 20 ข้อ)
       ========================================================================== */
    exam: [
      {
        q: "เหตุผลหลักที่ต้องใช้สีในการประมวลผลภาพคืออะไร?",
        options: [
          "สีเป็นตัวอธิบายที่ทรงพลัง ใช้ระบุและแยกวัตถุ",
          "สีทำให้ภาพคมชัดขึ้นเสมอ",
          "ตาคนแยกโทนเทาได้ละเอียดกว่าสี",
          "กล้องถ่ายภาพสีได้ราคาถูกกว่า"
        ],
        correct: 0,
        explain: "สีเป็น powerful descriptor — ใช้ object identification/extraction เช่น face detection ด้วยสีผิว + คนแยกเฉดสีได้หลายพันเฉด vs เทาแค่ 2 โหล",
        en: {
          q: "The main reason to use color in image processing is?",
          options: ["Color is a powerful descriptor for identifying and extracting objects", "Color always makes images sharper", "Humans can distinguish grays better than colors", "Color cameras are cheaper"],
          explain: "Color is a powerful descriptor — used for object identification/extraction like face detection with skin color + humans discern thousands of color shades vs only two dozen grays"
        }
      },
      {
        q: "ข้อใดเป็นการประมวลผลภาพสีแบบ Pseudo-color?",
        options: [
          "กำหนดสีให้กับช่วงความเข้มของภาพ monochrome",
          "ถ่ายภาพด้วยกล้อง full-color sensor",
          "แปลงภาพ RGB เป็น CMYK",
          "บีบอัดภาพสีให้เล็กลง"
        ],
        correct: 0,
        explain: "Pseudo-color = กำหนดสีให้ช่วงความเข้มของภาพเทา (monochrome intensities) — เพราะในอดีตยังไม่มี color sensor/hardware จึงใส่สีเพื่อช่วยการมองเห็น",
        en: {
          q: "Which one is Pseudo-color image processing?",
          options: ["Assigning colors to ranges of monochrome intensities", "Capturing with a full-color sensor", "Converting RGB images to CMYK", "Compressing color images"],
          explain: "Pseudo-color assigns colors to ranges of gray intensities — used in the past when color sensors/hardware were unavailable, to help human visualization"
        }
      },
      {
        q: "แสงสี (chromatic light) ที่มองเห็นครอบคลุมช่วง EM spectrum เท่าไร?",
        options: [
          "400–700 นาโนเมตร",
          "100–400 นาโนเมตร",
          "700–1000 นาโนเมตร",
          "1–100 นาโนเมตร"
        ],
        correct: 0,
        explain: "Chromatic light ครอบคลุม EM spectrum ช่วง 400–700 nm — แถบที่ตาเรามองเห็น (visible light)",
        en: {
          q: "Visible chromatic light covers what range of the EM spectrum?",
          options: ["400–700 nanometers", "100–400 nanometers", "700–1000 nanometers", "1–100 nanometers"],
          explain: "Chromatic light covers 400–700 nm of the EM spectrum — the visible band"
        }
      },
      {
        q: "สีที่ตามองเห็นบนวัตถุ = ?",
        options: [
          "แสงที่สะท้อนจากวัตถุนั้น",
          "แสงที่วัตถุดูดซับไว้ทั้งหมด",
          "อุณหภูมิของวัตถุ",
          "สีของฉากหลังเท่านั้น"
        ],
        correct: 0,
        explain: "สีที่ตามองเห็น = แสงที่สะท้อน (reflected) จากวัตถุ — illumination source ส่องฉาก แล้วตารับแสงสะท้อนกลับมา",
        en: {
          q: "The color humans perceive on an object equals?",
          options: ["The light reflected from the object", "All light absorbed by the object", "The object's temperature", "Only the background color"],
          explain: "The color we see is the light reflected from the object — the illumination source lights the scene and the eye receives the reflection"
        }
      },
      {
        q: "Luminance คืออะไร และหน่วยวัดคืออะไร?",
        options: [
          "พลังงานที่ผู้สังเกตรับรู้จากแหล่งแสง หน่วย ลูเมน (lm)",
          "พลังงานทั้งหมดจากแหล่งแสง หน่วย วัตต์ (W)",
          "ความเข้มสี หน่วย nm",
          "ความสว่างสัมพัทธ์ หน่วย candela/m²"
        ],
        correct: 0,
        explain: "Luminance = พลังงานที่ตารับรู้จากแหล่งแสง วัดเป็นลูเมน (lm) — เช่น แสงอินฟราเรดไกลมี radiance สูงแต่ luminance = 0",
        en: {
          q: "What is Luminance and its unit?",
          options: ["Energy perceived by an observer from a light source, in lumens (lm)", "Total energy from a light source, in watts (W)", "Color intensity in nm", "Relative brightness in candela/m²"],
          explain: "Luminance is the energy an observer perceives from a light source, measured in lumens (lm) — far infrared has high radiance but 0 luminance"
        }
      },
      {
        q: "Brightness คืออะไร?",
        options: [
          "ตัวอธิบายเชิงอัตวิสัย (subjective) ที่วัดยาก คล้าย intensity แบบ achromatic",
          "พลังงานทั้งหมดของแสง วัดเป็นวัตต์",
          "จำนวนพิกเซลของภาพ",
          "ความยาวคลื่นของแสงสี"
        ],
        correct: 0,
        explain: "Brightness = ตัวอธิบายแบบ subjective วัดยาก — ใกล้เคียงกับแนวคิด intensity แบบ achromatic (ไม่มีสี)",
        en: {
          q: "What is Brightness?",
          options: ["A subjective descriptor that is hard to measure, similar to achromatic intensity", "Total light energy in watts", "The number of pixels in the image", "The wavelength of colored light"],
          explain: "Brightness is a subjective descriptor that is hard to measure — similar to the achromatic notion of intensity"
        }
      },
      {
        q: "ตาเรามี Cones กี่ล้านเซลล์ และสัดส่วนรับสีเป็นแบบใด?",
        options: [
          "6–7 ล้าน — แดง 65% เขียว 33% น้ำเงิน 2%",
          "120 ล้าน — แดง 33% เขียว 33% น้ำเงิน 33%",
          "6–7 ล้าน — น้ำเงิน 65% แดง 33% เขียว 2%",
          "20 ล้าน — เหลือง 50% ม่วง 50%"
        ],
        correct: 0,
        explain: "Cones (ตัวรับสี) 6–7 ล้านเซลล์ — 3 ประเภท: แดง 65%, เขียว 33%, น้ำเงิน 2%",
        en: {
          q: "How many cones do our eyes have and how are they distributed?",
          options: ["6–7 million — red 65%, green 33%, blue 2%", "120 million — red 33%, green 33%, blue 33%", "6–7 million — blue 65%, red 33%, green 2%", "20 million — yellow 50%, magenta 50%"],
          explain: "Cones (color sensors) are 6–7 million cells — three types: red 65%, green 33%, blue 2%"
        }
      },
      {
        q: "สีทุติยภูมิของแสง: G + B ได้สีอะไร?",
        options: [
          "Cyan (ฟ้าเขียว)",
          "Yellow (เหลือง)",
          "Magenta (ม่วงแดง)",
          "White (ขาว)"
        ],
        correct: 0,
        explain: "G+B = Cyan, R+G = Yellow, R+B = Magenta — สีทุติยภูมิเกิดจากสีปฐมภูมิรวมกันแบบบวก (additive)",
        en: {
          q: "Secondary color of light: G + B = ?",
          options: ["Cyan", "Yellow", "Magenta", "White"],
          explain: "G+B = Cyan, R+G = Yellow, R+B = Magenta — secondary colors come from adding two primary colors"
        }
      },
      {
        q: "เม็ดสี (pigment) ปฐมภูมิของสีคืออะไร?",
        options: [
          "Cyan, Magenta, Yellow",
          "Red, Green, Blue",
          "Black, White, Gray",
          "Red, Yellow, Blue"
        ],
        correct: 0,
        explain: "เม็ดสีปฐมภูมิ = สีที่ดูดซับ (subtract/absorb) สีปฐมภูมิของแสง: Cyan ดูด R, Magenta ดูด G, Yellow ดูด B — ใช้กับงานพิมพ์/สีจริง",
        en: {
          q: "The primary colors of pigments are?",
          options: ["Cyan, Magenta, Yellow", "Red, Green, Blue", "Black, White, Gray", "Red, Yellow, Blue"],
          explain: "Primary pigments subtract/absorb a primary light color: Cyan absorbs R, Magenta absorbs G, Yellow absorbs B — used for printing/paint"
        }
      },
      {
        q: "ใน CIE XYZ normalized tristimulus: x + y + z = ?",
        options: [
          "1 — ใช้แค่ x, y (chromaticity) อธิบายสีทั้งหมดได้",
          "0 — ต้องใช้ทั้ง X, Y, Z เต็ม",
          "3 — เพราะมี 3 แกน",
          "ไม่มีกฎตายตัว"
        ],
        correct: 0,
        explain: "x + y + z = 1 ดังนั้นแค่ x, y (chromaticity coordinates) ก็พอจะอธิบายสีทั้งหมดได้ — z หาได้จาก 1 - x - y",
        en: {
          q: "In normalized CIE XYZ tristimulus: x + y + z = ?",
          options: ["1 — so only x, y (chromaticity) are enough to describe all colors", "0 — need full X, Y, Z", "3 — because there are 3 axes", "No fixed rule"],
          explain: "x + y + z = 1, so only x and y (chromaticity coordinates) are enough to describe all colors — z = 1 - x - y"
        }
      },
      {
        q: "Gamut ใน RGB หมายถึงอะไร?",
        options: [
          "ช่วงสีทั้งหมดที่อุปกรณ์นั้นสามารถแสดง/สร้างได้",
          "ความละเอียดของภาพ",
          "จำนวนบิตต่อพิกเซล",
          "ขนาดไฟล์ภาพ"
        ],
        correct: 0,
        explain: "Gamut = ช่วงสีที่อุปกรณ์สร้างได้ — เช่น RGB gamut ของจอ ≠ color gamut ของเครื่องพิมพ์ (ปริ้นเตอร์ทำสีได้น้อยกว่า)",
        en: {
          q: "What does gamut mean in RGB?",
          options: ["The full range of colors a device can display/produce", "Image resolution", "Bits per pixel", "Image file size"],
          explain: "Gamut is the range of colors a device can produce — e.g. a monitor's RGB gamut differs from a printer's color gamut"
        }
      },
      {
        q: "Pixel depth ของภาพ full-color 24-bit RGB คืออะไร?",
        options: [
          "(R, G, B) = (8, 8, 8) บิต รวม 24 บิตต่อพิกเซล",
          "(R, G, B) = (4, 4, 4) บิต",
          "(R, G, B) = (12, 12, 12) บิต",
          "(R, G, B) = (6, 6, 6) บิต"
        ],
        correct: 0,
        explain: "Pixel depth = จำนวนบิตแทนแต่ละพิกเซลใน RGB space — full-color 24-bit = 8 บิตต่อช่อง R, G, B รวม 24 บิต",
        en: {
          q: "The pixel depth of a 24-bit RGB full-color image is?",
          options: ["(R, G, B) = (8, 8, 8) bits, 24 bits per pixel", "(R, G, B) = (4, 4, 4) bits", "(R, G, B) = (12, 12, 12) bits", "(R, G, B) = (6, 6, 6) bits"],
          explain: "Pixel depth is the bits used per pixel in RGB space — full-color 24-bit means 8 bits per R, G, B channel, 24 bits total"
        }
      },
      {
        q: "Safe RGB colors (safe Web colors) มีทั้งหมดกี่สี?",
        options: [
          "(6)³ = 216 สี",
          "(8)³ = 512 สี",
          "(16)³ = 4096 สี",
          "(256)³ = 16.7 ล้านสี"
        ],
        correct: 0,
        explain: "Safe RGB = subset ของสีที่ใช้กับเว็บ/เบราว์เซอร์ได้แน่นอน — แต่ละช่องใช้ 6 ค่า → 6 × 6 × 6 = 216 สี",
        en: {
          q: "How many Safe RGB (safe Web) colors are there?",
          options: ["(6)³ = 216 colors", "(8)³ = 512 colors", "(16)³ = 4096 colors", "(256)³ = 16.7 million colors"],
          explain: "Safe RGB uses 6 values per channel → 6 × 6 × 6 = 216 colors guaranteed to work on the web"
        }
      },
      {
        q: "สูตรแปลง RGB → CMY คือข้อใด?",
        options: [
          "C = 1 - R, M = 1 - G, Y = 1 - B",
          "C = R, M = G, Y = B",
          "C = R + G, M = G + B, Y = R + B",
          "C = 255 - R × 2"
        ],
        correct: 0,
        explain: "CMY เป็น complement ของ RGB: C = 1 - R, M = 1 - G, Y = 1 - B (ค่า normalized 0–1) — ใช้กับงานพิมพ์",
        en: {
          q: "Which is the RGB → CMY conversion?",
          options: ["C = 1 - R, M = 1 - G, Y = 1 - B", "C = R, M = G, Y = B", "C = R + G, M = G + B, Y = R + B", "C = 255 - R × 2"],
          explain: "CMY is the complement of RGB: C = 1 - R, M = 1 - G, Y = 1 - B (normalized 0–1) — used for printing"
        }
      },
      {
        q: "ใน HSI model คนเราอธิบายสีด้วยคุณสมบัติอะไร?",
        options: [
          "Hue, Saturation, Intensity (Brightness)",
          "Red, Green, Blue",
          "Cyan, Magenta, Yellow",
          "X, Y, Z"
        ],
        correct: 0,
        explain: "มนุษย์อธิบายสีด้วย Hue (สี), Saturation (ความบริสุทธิ์ของสี), Intensity/Brightness (ความสว่าง) — ต่างจาก RGB ที่เป็นระบบของฮาร์ดแวร์",
        en: {
          q: "In the HSI model, humans describe a color by?",
          options: ["Hue, Saturation, Intensity (Brightness)", "Red, Green, Blue", "Cyan, Magenta, Yellow", "X, Y, Z"],
          explain: "Humans describe color by Hue, Saturation (purity), and Intensity/Brightness — unlike RGB which suits hardware"
        }
      },
      {
        q: "Saturation ใน HSI หมายถึงอะไร?",
        options: [
          "ความบริสุทธิ์ของสี — ขาว = 0, สีปฐมภูมิ = 1",
          "ความสว่างของภาพ",
          "จำนวนสีในภาพ",
          "ความคมชัดของขอบภาพ"
        ],
        correct: 0,
        explain: "Saturation = ความบริสุทธิ์ของสี (purity) — สีขาวมีค่า 0, สีปฐมภูมิเต็มมีค่า 1",
        en: {
          q: "In HSI, Saturation means?",
          options: ["Purity of color — white = 0, primary color = 1", "Image brightness", "Number of colors in the image", "Edge sharpness"],
          explain: "Saturation is the purity of a color — white is 0, a full primary color is 1"
        }
      },
      {
        q: "Intensity slicing ใน pseudo-color ทำอะไร?",
        options: [
          "แบ่งระดับเทาเป็นช่วง ๆ แล้วกำหนดสีให้แต่ละช่วง",
          "ตัดภาพออกเป็นชิ้นเล็ก ๆ",
          "ลดความเข้มของสีทุกพิกเซล",
          "แปลงภาพสีเป็นภาพเทา"
        ],
        correct: 0,
        explain: "Intensity slicing = แบ่งช่วงระดับเทา (เช่น 0–255) ออกเป็นชิ้น แล้วกำหนดสีให้แต่ละช่วง (slice) — ยิ่งมี slice เยอะ ยิ่งมีสีเยอะ",
        en: {
          q: "What does intensity slicing in pseudo-color do?",
          options: ["Divides gray levels into ranges and assigns a color to each range", "Cuts the image into small pieces", "Reduces the intensity of every pixel", "Converts color to gray"],
          explain: "Intensity slicing divides the gray range into slices and assigns a color to each — more slices give more colors"
        }
      },
      {
        q: "CMY model ใช้กับงานประเภทใด?",
        options: [
          "งานพิมพ์/ผลลัพธ์แบบ hardcopy",
          "จอคอมพิวเตอร์แบบ CRT",
          "เซนเซอร์กล้องดิจิทัล",
          "การแสดงผลบนจอมือถือ"
        ],
        correct: 0,
        explain: "CMY = secondary colors ของแสง / primary colors ของเม็ดสี — ใช้สร้าง hardcopy output (งานพิมพ์)",
        en: {
          q: "The CMY model is used for which kind of work?",
          options: ["Hardcopy/print output", "CRT computer monitors", "Digital camera sensors", "Mobile phone displays"],
          explain: "CMY = secondary colors of light / primary colors of pigments — used to generate hardcopy (print) output"
        }
      },
      {
        q: "ภาพ full-color 24-bit RGB: แต่ละช่องสีใช้กี่บิต?",
        type: "text",
        answers: ["8", "8 bit", "8บิต", "8 บิต", "eight"],
        hint: "24 bit = 3 ช่องสี เท่ากันทุกช่อง",
        explain: "24-bit RGB = 3 ช่อง (R, G, B) × 8 บิตต่อช่อง = 24 บิต",
        steps: [
          "ภาพ 24-bit RGB มี 24 บิตต่อพิกเซล",
          "แบ่งเป็น 3 ช่องสี: R, G, B",
          "24 ÷ 3 = 8",
          "แต่ละช่องใช้ 8 บิต"
        ],
        en: {
          q: "In a 24-bit RGB image, how many bits per color channel?",
          hint: "24 bits = 3 channels, all equal",
          explain: "24-bit RGB = 3 channels (R, G, B) × 8 bits each = 24 bits",
          steps: [
            "A 24-bit RGB image has 24 bits per pixel",
            "It splits into 3 color channels: R, G, B",
            "24 ÷ 3 = 8",
            "Each channel uses 8 bits"
          ]
        }
      },
      {
        q: "Safe RGB ใช้ค่าต่อช่องกี่ค่า? (ตอบตัวเลข)",
        type: "text",
        answers: ["6", "six"],
        hint: "216 = (?)³",
        explain: "Safe RGB ใช้ 6 ค่าต่อช่อง → 6³ = 216 สี",
        steps: [
          "Safe RGB มีทั้งหมด 216 สี",
          "216 = 6 × 6 × 6",
          "มี 3 ช่อง (R, G, B) ใช้ค่าเท่ากัน",
          "แต่ละช่องใช้ 6 ค่า"
        ],
        en: {
          q: "How many values per channel does Safe RGB use? (number)",
          hint: "216 = (?)³",
          explain: "Safe RGB uses 6 values per channel → 6³ = 216 colors",
          steps: [
            "Safe RGB has 216 colors in total",
            "216 = 6 × 6 × 6",
            "There are 3 channels (R, G, B) using the same values",
            "Each channel uses 6 values"
          ]
        }
      }
    ],

    /* Flashcards */
    flashcards: [
      { q: "ทำไมต้องใช้สีใน DIP?", a: "สีเป็น powerful descriptor — แยกวัตถุได้ (เช่น หน้าจากสีผิว) + คนแยกเฉดสีได้หลายพันเฉด vs เทาแค่ 2 โหล" },
      { q: "Full-color vs Pseudo-color?", a: "Full = ภาพจาก full-color sensor · Pseudo = กำหนดสีให้ช่วงความเข้มของภาพเทา" },
      { q: "แสงสีที่มองเห็นครอบคลุมช่วงเท่าไร?", a: "400–700 นาโนเมตร (visible light)" },
      { q: "สีที่ตามองเห็นบนวัตถุคืออะไร?", a: "แสงที่สะท้อน (reflected) จากวัตถุนั้น" },
      { q: "Radiance / Luminance / Brightness?", a: "พลังงานรวม (W) · พลังงานที่ตารับรู้ (lm) · ความสว่างตามความรู้สึก (subjective)" },
      { q: "ทำไม far infrared มี luminance = 0?", a: "มี radiance สูง (พลังงานจริง) แต่ตาเรามองไม่เห็น → ตารับรู้ได้ 0" },
      { q: "Cones ในตา?", a: "6–7 ล้านเซลล์ รับสี: แดง 65%, เขียว 33%, น้ำเงิน 2%" },
      { q: "CIE 1931 กำหนด primary colors?", a: "B = 435.8 nm, G = 546.1 nm, R = 700 nm" },
      { q: "สีทุติยภูมิของแสง?", a: "G+B = Cyan · R+G = Yellow · R+B = Magenta" },
      { q: "เม็ดสีปฐมภูมิ?", a: "Cyan (ดูด R) · Magenta (ดูด G) · Yellow (ดูด B) — ใช้กับงานพิมพ์" },
      { q: "CIE XYZ: x + y + z = ?", a: "= 1 — แค่ x, y (chromaticity) ก็อธิบายสีทั้งหมดได้" },
      { q: "Gamut คืออะไร?", a: "ช่วงสีทั้งหมดที่อุปกรณ์นั้นสร้าง/แสดงได้ (จอ ≠ เครื่องพิมพ์)" },
      { q: "Pixel depth ของ 24-bit RGB?", a: "8 บิตต่อช่อง R, G, B รวม 24 บิตต่อพิกเซล (full-color)" },
      { q: "Safe RGB มีกี่สี?", a: "6³ = 216 สี (6 ค่าต่อช่อง) — ใช้กับเว็บ/เบราว์เซอร์ได้แน่นอน" },
      { q: "สูตร RGB → CMY?", a: "C = 1 - R, M = 1 - G, Y = 1 - B (normalized 0–1)" },
      { q: "CMYK ใช้ทำอะไร?", a: "งานพิมพ์ (hardcopy) — เพิ่ม K (Black) เพราะรวม CMY ได้ดำไม่สมบูรณ์" },
      { q: "HSI ย่อมาจากอะไร?", a: "Hue (สี) · Saturation (ความบริสุทธิ์) · Intensity (ความสว่าง) — เข้ากับวิธีที่มนุษย์บรรยายสี" },
      { q: "Saturation = ?", a: "ความบริสุทธิ์ของสี — ขาว = 0, สีปฐมภูมิเต็ม = 1" },
      { q: "Intensity slicing คืออะไร?", a: "แบ่งระดับเทาเป็นช่วง แล้วกำหนดสีให้แต่ละช่วง — ยิ่ง slicing เยอะ ยิ่งได้สีเยอะ" },
      { q: "Pseudo-color ใช้ทำไม?", a: "เพื่อช่วยมนุษย์มองเห็น/ตีความภาพเทา (ในอดีตยังไม่มี color sensor)" }
    ],

    /* Glossary */
    glossary: [
      { term: "Full-color Processing", def: "การประมวลผลภาพที่ได้จาก full-color sensor/อุปกรณ์โดยตรง" },
      { term: "Pseudo-color Processing", def: "การกำหนดสีให้ช่วงความเข้มของภาพ monochrome เพื่อช่วยการมองเห็น" },
      { term: "Chromatic Light", def: "แสงสีที่ครอบคลุม EM spectrum ช่วง 400–700 nm" },
      { term: "Radiance", def: "พลังงานทั้งหมดที่ไหลจากแหล่งแสง วัดเป็นวัตต์ (W)" },
      { term: "Luminance", def: "พลังงานที่ผู้สังเกตรับรู้จากแหล่งแสง วัดเป็นลูเมน (lm)" },
      { term: "Brightness", def: "ตัวอธิบายเชิงอัตวิสัย (subjective) ที่วัดยาก คล้าย intensity แบบ achromatic" },
      { term: "Cones", def: "เซลล์รับสีในตา 6–7 ล้านเซลล์ — แดง 65%, เขียว 33%, น้ำเงิน 2%" },
      { term: "Primary Colors", def: "สีปฐมภูมิของแสง: R, G, B — CIE 1931 กำหนด B=435.8, G=546.1, R=700 nm" },
      { term: "Secondary Colors", def: "สีทุติยภูมิ: G+B=Cyan, R+G=Yellow, R+B=Magenta" },
      { term: "Pigment (เม็ดสี)", def: "สีที่ดูดซับสีปฐมภูมิของแสง: Cyan ดูด R, Magenta ดูด G, Yellow ดูด B" },
      { term: "CIE XYZ Model", def: "โมเดลสีที่แปลงจาก RGB — normalized x+y+z=1 ใช้แค่ x, y (chromaticity) อธิบายสี" },
      { term: "Gamut", def: "ช่วงสีทั้งหมดที่อุปกรณ์สามารถสร้าง/แสดงได้" },
      { term: "Color Model / Color Space", def: "ระบบพิกัดที่แต่ละสีแทนด้วยจุดเดียว — RGB, CMY, CMYK, HSI" },
      { term: "Pixel Depth", def: "จำนวนบิตที่ใช้แทนแต่ละพิกเซลใน RGB space — full-color 24-bit = 8+8+8" },
      { term: "Safe RGB Colors", def: "สีที่ใช้กับเว็บได้แน่นอน — 6 ค่าต่อช่อง → 6³ = 216 สี" },
      { term: "CMY / CMYK", def: "โมเดลของเม็ดสี/งานพิมพ์ — C = 1-R, M = 1-G, Y = 1-B, + K (Black)" },
      { term: "HSI Model", def: "Hue (สี) · Saturation (ความบริสุทธิ์) · Intensity (ความสว่าง) — ตรงกับวิธีที่มนุษย์บรรยายสี" },
      { term: "Hue", def: "คุณลักษณะของสี (color attribute) เช่น แดง เขียว น้ำเงิน" },
      { term: "Saturation", def: "ความบริสุทธิ์ของสี — ขาว = 0, สีปฐมภูมิ = 1" },
      { term: "Intensity Slicing", def: "การแบ่งระดับเทาเป็นช่วงแล้วกำหนดสีให้แต่ละช่วง (pseudo-color)" }
    ],

    /* Cheat sheet */
    cheat: [
      { term: "ทำไมต้องสี", def: "powerful descriptor · คนแยกสีได้หลายพันเฉด vs เทา 2 โหล" },
      { term: "Full vs Pseudo", def: "sensor เต็มรูปแบบ · กำหนดสีให้ช่วงเทา" },
      { term: "Visible light", def: "400–700 nm · สีที่เห็น = แสงสะท้อนจากวัตถุ" },
      { term: "Rad/Lum/Bright", def: "W (พลังงานรวม) · lm (ที่ตารับรู้) · subjective" },
      { term: "Cones", def: "6–7M · แดง 65% เขียว 33% น้ำเงิน 2%" },
      { term: "CIE 1931", def: "B=435.8 · G=546.1 · R=700 nm" },
      { term: "Secondary", def: "G+B=Cyan · R+G=Yellow · R+B=Magenta" },
      { term: "Pigment", def: "Cyan ดูด R · Magenta ดูด G · Yellow ดูด B" },
      { term: "CIE XYZ", def: "x+y+z=1 → แค่ x, y อธิบายสีได้หมด" },
      { term: "Gamut", def: "ช่วงสีที่อุปกรณ์สร้างได้ (จอ ≠ ปริ้นเตอร์)" },
      { term: "24-bit RGB", def: "8+8+8 บิต = full-color pixel depth" },
      { term: "Safe RGB", def: "6³ = 216 สี สำหรับเว็บ" },
      { term: "RGB→CMY", def: "C=1-R · M=1-G · Y=1-B" },
      { term: "CMYK", def: "CMY + K(Black) — งานพิมพ์ hardcopy" },
      { term: "HSI", def: "Hue สี · Saturation ความบริสุทธิ์ · Intensity ความสว่าง" },
      { term: "Saturation", def: "ขาว = 0 · สีปฐมภูมิ = 1" },
      { term: "Intensity slicing", def: "แบ่งเทาเป็นช่วง → กำหนดสี · slice เยอะ = สีเยอะ" }
    ]
  },

  /* ==========================================================================
     CHAPTER 3 — IMAGE PROCESSING LAB WITH MATLAB (Lab Manual 12 Experiments)
     ========================================================================== */
  ch3: {
    title: "Image Processing Lab with MATLAB (การทดลองประมวลผลภาพด้วย MATLAB)",
    thai: "การทดลองประมวลผลภาพด้วย MATLAB",
    en: "Image Processing Lab with MATLAB",

    /* Slide metadata */
    slides: [
      { title: "Cover — Image Processing Lab (MATLAB)", short: "เปิดบทเรียน" },
      { title: "ภาพรวม 12 Experiments + MATLAB คืออะไร", short: "ภาพรวม + MATLAB" },
      { title: "คำสั่ง MATLAB พื้นฐาน", short: "คำสั่งพื้นฐาน" },
      { title: "Ex1 — Sampling", short: "Ex1 Sampling" },
      { title: "Ex1 — Quantization", short: "Ex1 Quantization" },
      { title: "Ex2 — Spatial Resolution", short: "Ex2 Spatial Resolution" },
      { title: "Ex2 — Intensity Resolution", short: "Ex2 Intensity Resolution" },
      { title: "Ex3 — Negative", short: "Ex3 Negative" },
      { title: "Ex3 — Gamma", short: "Ex3 Gamma" },
      { title: "Ex3 — Log & Contrast Stretching", short: "Ex3 Log/Contrast" },
      { title: "Ex4 — DFT Analysis", short: "Ex4 DFT" },
      { title: "Ex5 — Walsh & Hadamard", short: "Ex5 Walsh/Hadamard" },
      { title: "Ex5 — DCT & Haar", short: "Ex5 DCT/Haar" },
      { title: "Ex6 — Histogram", short: "Ex6 Histogram" },
      { title: "Ex6 — Histogram Equalization", short: "Ex6 Equalization" },
      { title: "Ex7 — Spatial Smoothing", short: "Ex7 Smoothing" },
      { title: "Ex7 — Sharpening & Median", short: "Ex7 Sharpening/Median" },
      { title: "Ex8 — Frequency Domain Fundamentals", short: "Ex8 Freq. Domain" },
      { title: "Ex8 — Ideal/Butterworth/Gaussian", short: "Ex8 3 Filters" },
      { title: "Ex9 — Edge Detection", short: "Ex9 Edge" },
      { title: "Ex9 — Line Detection", short: "Ex9 Line" },
      { title: "Ex9 — Point Detection", short: "Ex9 Point" },
      { title: "Ex10 — Erosion & Dilation", short: "Ex10 Erosion/Dilation" },
      { title: "Ex10 — Opening & Closing", short: "Ex10 Open/Close" },
      { title: "Ex11 — Thresholding & Otsu", short: "Ex11 Thresholding" },
      { title: "Ex12 — RGB Component Images", short: "Ex12 RGB Components" },
      { title: "Ex12 — Color Space Conversion", short: "Ex12 Color Space" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    /* Sidebar structure: 1-based */
    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "Ex1–2 พื้นฐานภาพดิจิทัล", topics: [3, 4, 5, 6, 7] },
      { label: "Ex3–6 Intensity · DFT · Transforms", topics: [8, 9, 10, 11, 12, 13, 14, 15] },
      { label: "Ex7–8 Enhancement", topics: [16, 17, 18, 19] },
      { label: "Ex9–11 Segmentation", topics: [20, 21, 22, 23, 24, 25] },
      { label: "Ex12 Color Models", topics: [26, 27] },
      { label: "ทบทวนและฝึกฝน", topics: [28, 29, 30, 31, 32, 33, 34] }
    ],

    /* Slides 24–25 — quiz (10 questions) */
    quiz: [
      {
        q: "MATLAB ย่อมาจากคำว่าอะไร?",
        options: [
          "MATrix LABoratory",
          "Mathematics Laboratory",
          "Matrix Language Basic",
          "Machine Learning Toolbox"
        ],
        correct: 0,
        explain: "MATLAB = MATrix LABoratory — สร้างขึ้นรอบแนวคิดของ vector และ matrix เป็น environment สำหรับการคำนวณเชิงตัวเลขและ visualization"
      },
      {
        q: "คำสั่งใดใน MATLAB ใช้สำหรับอ่านภาพจากไฟล์?",
        options: ["imread", "imshow", "imwrite", "imfinfo"],
        correct: 0,
        explain: "imread = อ่านภาพจากไฟล์ · imshow = แสดงภาพ · imwrite = เขียนภาพลงไฟล์ · imfinfo = ดูข้อมูลของไฟล์ภาพ"
      },
      {
        q: "ในการทำ Sampling (Ex1) อัตราการสุ่มตัวอย่างกำหนดคุณสมบัติใดของภาพดิจิทัล?",
        options: [
          "Spatial resolution (ความละเอียดเชิงพื้นที่)",
          "จำนวนระดับสีเทา",
          "ขนาดไฟล์บีบอัด",
          "ความเร็วในการประมวลผล"
        ],
        correct: 0,
        explain: "Sampling rate กำหนด spatial resolution ส่วน Quantization level กำหนดจำนวน grey levels ของภาพ"
      },
      {
        q: "Quantization level (Ex1) กำหนดอะไรในภาพดิจิทัล?",
        options: [
          "จำนวนระดับสีเทา (grey levels)",
          "ความละเอียดของภาพ",
          "ขนาดของ structuring element",
          "ความถี่ในการสุ่ม"
        ],
        correct: 0,
        explain: "Quantization เปลี่ยนค่าต่อเนื่องเป็นค่าดิจิทัล — จำนวนระดับ (quantization levels) กำหนด grey levels ในภาพ"
      },
      {
        q: "ปัญหา False Contours เกิดจากอะไร?",
        options: [
          "ภาพถูก quantize ด้วยจำนวนระดับความสว่างไม่เพียงพอ",
          "ภาพมีขนาดใหญ่เกินไป",
          "การสุ่มตัวอย่างมากเกินไป",
          "ไฟล์ภาพเสียหาย"
        ],
        correct: 0,
        explain: "False contours = ปัญหาหลักของภาพที่ถูก quantize ด้วยระดับ brightness ไม่พอ (insufficient brightness levels) — เห็นเป็นเส้นขั้นบันไดที่พื้นผิวเรียบ"
      },
      {
        q: "DPI (Dots Per Inch) มักใช้กับอุปกรณ์ใด?",
        options: ["จอมอนิเตอร์", "เครื่องพิมพ์เลเซอร์", "แท็บเล็ต", "กล้องดิจิทัล"],
        correct: 0,
        explain: "DPI ใช้กับ monitor · LPI (Lines Per Inch) ใช้กับ laser printer · PPI (Pixels Per Inch) ใช้กับ tablet/mobile"
      },
      {
        q: "สูตร Negative Transformation คือข้อใด?",
        options: ["s = L-1-r", "s = c log(1+r)", "s = cr^γ", "s = r²"],
        correct: 0,
        explain: "Negative: s = L-1-r (กลับระดับเทา) — เหมาะกับ enhancing white/gray detail ที่ฝังอยู่ในบริเวณมืดของภาพ"
      },
      {
        q: "Gamma Transformation ที่ γ < 1 ให้ผลอย่างไร?",
        options: ["ทำให้ภาพสว่างขึ้น (brighten)", "ทำให้ภาพมืดลง (darken)", "กลับสีภาพเป็น negative", "ลบ noise"],
        correct: 0,
        explain: "γ < 1 → brighten (เร่งระดับเทาต่ำขึ้น) · γ > 1 → darken (กดระดับเทาสูงลง) — γ = 1 = คงเดิม"
      },
      {
        q: "Logarithmic Transformation: s = c log(1+r) ทำหน้าที่อะไร?",
        options: [
          "ขยายค่า dark pixels และบีบอัดค่า high-level",
          "ทำให้ภาพมืดลงทั้งภาพ",
          "ลบพื้นหลังออก",
          "เพิ่ม contrast ของทุกค่าเท่า ๆ กัน"
        ],
        correct: 0,
        explain: "log curve แมปช่วงค่าต่ำ (dark) ที่แคบไปเป็นช่วงที่กว้างขึ้น และบีบอัดค่าสูง — เหมาะกับภาพที่มืดมาก"
      },
      {
        q: "Fourier Transform (Ex4) แยกภาพออกเป็นองค์ประกอบอะไร?",
        options: [
          "sine และ cosine components",
          "พิกเซลและขอบ",
          "สีแดง เขียว น้ำเงิน",
          "ระดับเทาและพื้นผิว"
        ],
        correct: 0,
        explain: "FT แยกภาพเป็น sine/cosine components — ภาพผลลัพธ์อยู่ใน frequency domain แต่ละจุดแทนความถี่ที่อยู่ในภาพ"
      }
    ],

    /* ==========================================================================
       ข้อสอบหลังเรียน (Post-Lesson Exam · 20 ข้อ)
       ========================================================================== */
    exam: [
      {
        q: "MATLAB ย่อมาจากคำว่าอะไร?",
        options: ["MATrix LABoratory", "Mathematics Laboratory", "Matrix Basic Language", "Machine Learning Toolbox"],
        correct: 0,
        explain: "MATLAB = MATrix LABoratory — built around vectors and matrices สำหรับ numeric computation และ visualization",
        en: {
          q: "What does MATLAB stand for?",
          options: ["MATrix LABoratory", "Mathematics Laboratory", "Matrix Basic Language", "Machine Learning Toolbox"],
          explain: "MATLAB = MATrix LABoratory — built around vectors and matrices for numeric computation and visualization"
        }
      },
      {
        q: "คำสั่ง MATLAB ใดใช้แสดงภาพบนหน้าจอ?",
        options: ["imshow", "imread", "imwrite", "fft2"],
        correct: 0,
        explain: "imshow = display image · imread = อ่านภาพ · imwrite = เขียนภาพ · fft2 = 2D FFT",
        en: {
          q: "Which MATLAB command displays an image?",
          options: ["imshow", "imread", "imwrite", "fft2"],
          explain: "imshow displays an image · imread reads · imwrite writes · fft2 computes the 2D FFT"
        }
      },
      {
        q: "การ Sampling (Ex1) ทำหน้าที่อะไร?",
        options: [
          "แปลงค่าต่อเนื่องของภาพเป็นพิกเซลไม่ต่อเนื่อง (digitize เชิงพื้นที่)",
          "ลดจำนวนระดับสีเทา",
          "เพิ่มขนาดไฟล์ให้ใหญ่ขึ้น",
          "แปลงภาพสีเป็นภาพเทา"
        ],
        correct: 0,
        explain: "Sampling = digitize เชิงพื้นที่ (ตำแหน่ง) ส่วน Quantization = digitize เชิง amplitude (ค่า grey level) — รวมกันได้ภาพดิจิทัล",
        en: {
          q: "What does Sampling (Ex1) do?",
          options: [
            "Digitizes the spatial coordinates into discrete pixels",
            "Reduces the number of gray levels",
            "Makes the file bigger",
            "Converts color to gray"
          ],
          explain: "Sampling digitizes spatially (positions); Quantization digitizes amplitude (gray values) — together they produce a digital image"
        }
      },
      {
        q: "การ Quantization (Ex1) ทำหน้าที่อะไร?",
        options: [
          "แปลงค่าความเข้มต่อเนื่องเป็นระดับสีเทาแบบดิจิทัล",
          "ลดขนาดพิกเซลของภาพ",
          "หมุนภาพ",
          "เพิ่มความละเอียดเชิงพื้นที่"
        ],
        correct: 0,
        explain: "Quantization = แปลง magnitude ของ sampled image เป็น digital value (grey levels) — ระดับไม่พอจะเกิด false contours",
        en: {
          q: "What does Quantization (Ex1) do?",
          options: [
            "Converts continuous intensity values into discrete gray levels",
            "Reduces pixel dimensions",
            "Rotates the image",
            "Increases spatial resolution"
          ],
          explain: "Quantization maps continuous magnitudes to digital gray levels — too few levels cause false contours"
        }
      },
      {
        q: "Spatial resolution หมายถึงอะไร?",
        options: [
          "รายละเอียดที่เล็กที่สุดที่มองเห็นได้ในภาพ (smallest discernible detail)",
          "จำนวนสีทั้งหมดในภาพ",
          "ความสว่างเฉลี่ยของภาพ",
          "ขนาดไฟล์ในหน่วย KB"
        ],
        correct: 0,
        explain: "Spatial resolution = smallest discernible detail / จำนวน independent pixel values ต่อหน่วยความยาว (DPI/LPI/PPI)",
        en: {
          q: "What does spatial resolution mean?",
          options: [
            "The smallest discernible detail in an image",
            "The total number of colors",
            "The average brightness",
            "The file size in KB"
          ],
          explain: "Spatial resolution = the smallest discernible detail, i.e. independent pixel values per unit length (DPI/LPI/PPI)"
        }
      },
      {
        q: "LPI (Lines Per Inch) มักใช้กับอุปกรณ์ใด?",
        options: ["เครื่องพิมพ์เลเซอร์", "จอมอนิเตอร์", "สมาร์ตโฟน", "สแกนเนอร์"],
        correct: 0,
        explain: "LPI ใช้กับ laser printer · DPI ใช้กับ monitor · PPI ใช้กับ tablet/mobile",
        en: {
          q: "LPI (Lines Per Inch) is usually used for which device?",
          options: ["Laser printers", "Monitors", "Smartphones", "Scanners"],
          explain: "LPI is used for laser printers · DPI for monitors · PPI for tablets/mobiles"
        }
      },
      {
        q: "Negative Transformation: s = L-1-r ใช้เหมาะกับกรณีใด?",
        options: [
          "enhance รายละเอียดขาว/เทาในบริเวณมืดของภาพ",
          "ทำให้ภาพคมชัดขึ้นทุกจุด",
          "ลบสัญญาณรบกวน",
          "บีบอัดภาพให้เล็กลง"
        ],
        correct: 0,
        explain: "Negative เหมาะกับ enhancing white/gray detail ที่ฝังใน dark region โดยเฉพาะเมื่อ black area มีขนาดใหญ่",
        en: {
          q: "The Negative transformation (s = L-1-r) is best for?",
          options: [
            "Enhancing white/gray detail embedded in dark regions",
            "Sharpening every pixel",
            "Removing noise",
            "Compressing the image"
          ],
          explain: "Negative is suited to enhancing white/gray detail in dark regions, especially when black areas dominate"
        }
      },
      {
        q: "Gamma Transformation ที่ γ > 1 ให้ผลอย่างไร?",
        options: ["ทำให้ภาพมืดลง (darken)", "ทำให้ภาพสว่างขึ้น (brighten)", "กลับสีภาพ", "เพิ่ม contrast สูงสุด"],
        correct: 0,
        explain: "γ > 1 → darken · γ < 1 → brighten · γ = 1 → ไม่เปลี่ยน (ใช้ imadjust(I,[],[],gamma) ใน MATLAB)",
        en: {
          q: "A Gamma transformation with γ > 1 does what?",
          options: ["Darkens the image", "Brightens the image", "Inverts colors", "Maximizes contrast"],
          explain: "γ > 1 darkens · γ < 1 brightens · γ = 1 keeps it unchanged (imadjust(I,[],[],gamma) in MATLAB)"
        }
      },
      {
        q: "Log Transformation: s = c log(1+r) ขยายช่วงใด?",
        options: [
          "ขยายค่า dark (ต่ำ) และบีบอัดค่า high",
          "ขยายค่า high และบีบอัดค่า dark",
          "ขยายค่ากลางเท่านั้น",
          "ไม่ขยายอะไรเลย"
        ],
        correct: 0,
        explain: "Log curve แมปช่วง low gray-level ที่แคบไปเป็นช่วงที่กว้างขึ้น และบีบอัดค่าสูง — ใช้ expand dark pixels",
        en: {
          q: "The Log transformation (s = c log(1+r)) expands which range?",
          options: [
            "Dark (low) values and compresses high values",
            "High values and compresses dark values",
            "Only mid values",
            "Nothing"
          ],
          explain: "The log curve maps a narrow low-gray range into a wider range and compresses high values — used to expand dark pixels"
        }
      },
      {
        q: "ใน MATLAB คำสั่งใดคำนวณ 2-D Fast Fourier Transform?",
        options: ["fft2", "ifft2", "dct2", "freqz2"],
        correct: 0,
        explain: "fft2 = 2D FFT · ifft2 = inverse FFT · dct2 = 2D DCT · freqz2 = แปลง filter เป็น frequency response",
        en: {
          q: "Which MATLAB command computes the 2-D Fast Fourier Transform?",
          options: ["fft2", "ifft2", "dct2", "freqz2"],
          explain: "fft2 = 2D FFT · ifft2 = inverse FFT · dct2 = 2D DCT · freqz2 = filter frequency response"
        }
      },
      {
        q: "DFT (Ex4) ของภาพมีขนาดเท่าไรเมื่อเทียบกับภาพต้นทาง?",
        options: [
          "ขนาดเท่ากัน (จำนวนความถี่ = จำนวนพิกเซล)",
          "ใหญ่กว่า 2 เท่า",
          "เล็กกว่าครึ่งหนึ่ง",
          "ไม่แน่นอนขึ้นกับสี"
        ],
        correct: 0,
        explain: "จำนวนความถี่ใน Fourier domain = จำนวนพิกเซลใน spatial domain — ภาพทั้งสอง domain มีขนาดเท่ากัน",
        en: {
          q: "Compared to the input image, the DFT (Ex4) has what size?",
          options: [
            "The same size (number of frequencies = number of pixels)",
            "Twice as big",
            "Half as big",
            "Depends on the colors"
          ],
          explain: "The number of frequencies equals the number of pixels — both domains have the same size"
        }
      },
      {
        q: "Histogram P(rk) = nk/n หมายถึงอะไร?",
        options: [
          "สัดส่วนของพิกเซลทั้งหมดที่มี grey value = rk",
          "จำนวนพิกเซลทั้งหมดในภาพ",
          "ค่าความสว่างสูงสุด",
          "ขนาดของ filter mask"
        ],
        correct: 0,
        explain: "nk = จำนวนพิกเซลที่มี grey value rk · n = จำนวนพิกเซลทั้งหมด → P(rk) = เศษส่วนของพิกเซลที่มีค่า rk",
        en: {
          q: "Histogram P(rk) = nk/n means?",
          options: [
            "The fraction of total pixels having gray value rk",
            "The total number of pixels",
            "The maximum intensity",
            "The filter mask size"
          ],
          explain: "nk = number of pixels with gray value rk, n = total pixels → P(rk) is the fraction of pixels with value rk"
        }
      },
      {
        q: "เป้าหมายของ Histogram Equalization คืออะไร?",
        options: [
          "ให้ grey values ใน output กระจายแบบ uniform ใน [0,1]",
          "ทำให้ภาพมืดลงเสมอ",
          "ลบ noise ทั้งหมด",
          "ลดขนาดภาพลงครึ่งหนึ่ง"
        ],
        correct: 0,
        explain: "Equalization ออกแบบ T(.) ให้ output grey values กระจาย uniform — ทุก grey value มีสัดส่วนเท่ากัน ภาพ contrast ดีขึ้น",
        en: {
          q: "What is the goal of histogram equalization?",
          options: [
            "Output gray values uniformly distributed in [0,1]",
            "Always darken the image",
            "Remove all noise",
            "Halve the image size"
          ],
          explain: "Equalization designs T(.) so output gray values are uniform — every gray value has equal proportion, improving contrast"
        }
      },
      {
        q: "Average filter (spatial) เป็น filter ประเภทใด?",
        options: ["Smoothing / Lowpass", "Sharpening / Highpass", "Edge detection", "Median filter"],
        correct: 0,
        explain: "Smoothing linear spatial filter = average ของพิกเซลใน neighborhood — เรียก averaging / lowpass filter ใช้ blur + ลด noise",
        en: {
          q: "The average filter (spatial) is what type of filter?",
          options: ["Smoothing / Lowpass", "Sharpening / Highpass", "Edge detection", "Median filter"],
          explain: "A smoothing linear filter averages pixels in the neighborhood — called averaging/lowpass, used for blurring and noise reduction"
        }
      },
      {
        q: "Median filter (Ex7) แทนค่าพิกเซลกลางด้วยอะไร?",
        options: [
          "ค่ามัธยฐาน (median) ของ grey levels ใน neighborhood",
          "ค่าเฉลี่ยของ neighborhood",
          "ค่าสูงสุดของ neighborhood",
          "ค่าต่ำสุดของ neighborhood"
        ],
        correct: 0,
        explain: "Median filter = non-linear order-statistic filter — เรียงค่าใน neighborhood แล้วแทนค่ากลางด้วย median (เก่งเรื่องลบ salt-and-pepper noise)",
        en: {
          q: "The median filter (Ex7) replaces the center pixel with?",
          options: [
            "The median of gray levels in the neighborhood",
            "The average of the neighborhood",
            "The maximum of the neighborhood",
            "The minimum of the neighborhood"
          ],
          explain: "Median filter is a non-linear order-statistic filter — it ranks neighborhood values and uses the median (great for salt-and-pepper noise)"
        }
      },
      {
        q: "สมการ g(x,y) = F⁻¹[H(u,v)·F(u,v)] — H(u,v) คืออะไร?",
        options: ["Filter function", "ภาพต้นทาง", "ภาพผลลัพธ์", "เมทริกซ์สี"],
        correct: 0,
        explain: "F(u,v) = DFT ของภาพ input · H(u,v) = filter function · F⁻¹ = IDFT → ได้ภาพ output g(x,y)",
        en: {
          q: "In g(x,y) = F⁻¹[H(u,v)·F(u,v)] — what is H(u,v)?",
          options: ["The filter function", "The input image", "The output image", "The color matrix"],
          explain: "F(u,v) = DFT of the input, H(u,v) = filter function, F⁻¹ = IDFT → output image g(x,y)"
        }
      },
      {
        q: "Highpass filter ใน spatial domain ให้ผลเป็นแบบใด?",
        options: [
          "Edge enhancement / edge detection",
          "Smoothing / blurring",
          "Histogram flattening",
          "Color conversion"
        ],
        correct: 0,
        explain: "HPF ตัด low frequency ทิ้ง (พื้นที่สว่างสม่ำเสมอ) เหลือ high frequency = ขอบ → edge enhancement/detection",
        en: {
          q: "A highpass filter in the spatial domain gives?",
          options: [
            "Edge enhancement / edge detection",
            "Smoothing / blurring",
            "Histogram flattening",
            "Color conversion"
          ],
          explain: "HPF removes low frequencies (flat areas) and keeps high frequencies = edges → edge enhancement/detection"
        }
      },
      {
        q: "Canny edge detector มีลักษณะอย่างไร?",
        options: [
          "multi-stage algorithm ตรวจจับขอบได้หลากหลาย",
          "เป็น filter เชิงเส้นอย่างเดียว",
          "ใช้ได้กับภาพสีเท่านั้น",
          "ทำงานใน frequency domain เท่านั้น"
        ],
        correct: 0,
        explain: "Canny = multi-stage edge detector ใช้ calculus of variations หา optimal function (ประมาณด้วย derivative ของ Gaussian)",
        en: {
          q: "The Canny edge detector is best described as?",
          options: [
            "A multi-stage algorithm detecting a wide range of edges",
            "Only a linear filter",
            "Works only on color images",
            "Works only in the frequency domain"
          ],
          explain: "Canny is a multi-stage edge detector using calculus of variations; the optimal function is approximated by the derivative of a Gaussian"
        }
      },
      {
        q: "Morphological operation: Dilation (Ex10) ทำอะไร?",
        options: [
          "เพิ่มพิกเซลที่ขอบของวัตถุ (ขยายขอบเขต)",
          "ลบพิกเซลที่ขอบของวัตถุ (กร่อนขอบเขต)",
          "ทำให้ภาพคมชัดขึ้น",
          "เปลี่ยนภาพเป็นสี"
        ],
        correct: 0,
        explain: "Dilation เพิ่ม pixels ที่ boundaries · Erosion ลบ pixels ที่ boundaries — จำนวนที่เพิ่ม/ลบขึ้นกับ size และ shape ของ structuring element",
        en: {
          q: "Dilation (Ex10) does what?",
          options: [
            "Adds pixels to object boundaries (expands)",
            "Removes pixels on object boundaries (shrinks)",
            "Sharpens the image",
            "Turns the image into color"
          ],
          explain: "Dilation adds pixels at boundaries; Erosion removes them — how many depends on the size/shape of the structuring element"
        }
      },
      {
        q: "Thresholding แบบ T ขึ้นกับ f(x,y) เพียงอย่างเดียว เรียกว่าอะไร?",
        options: ["Global thresholding", "Local thresholding", "Dynamic thresholding", "Adaptive color threshold"],
        correct: 0,
        explain: "T = T[x,y,p(x,y),f(x,y)] — ถ้า T ขึ้นกับ f อย่างเดียว = global · ขึ้นกับ f + local properties = local · ขึ้นกับ (x,y) = dynamic/adaptive",
        en: {
          q: "Thresholding where T depends only on f(x,y) is called?",
          options: ["Global thresholding", "Local thresholding", "Dynamic thresholding", "Adaptive color threshold"],
          explain: "T = T[x,y,p(x,y),f(x,y)] — only f → global; f + local properties → local; coordinates (x,y) → dynamic/adaptive"
        }
      }
    ],

    /* Flashcards */
    flashcards: [
      { q: "MATLAB ย่อมาจาก?", a: "MATrix LABoratory — environment สำหรับ numeric computation รอบแนวคิด matrix" },
      { q: "imread / imshow / imwrite?", a: "อ่านภาพ · แสดงภาพ · เขียนภาพลงไฟล์" },
      { q: "Sampling vs Quantization?", a: "Sampling = digitize ตำแหน่ง (spatial) · Quantization = digitize ค่า (grey levels)" },
      { q: "Sampling rate กำหนดอะไร?", a: "Spatial resolution ของภาพดิจิทัล" },
      { q: "Quantization level กำหนดอะไร?", a: "จำนวน grey levels — ระดับน้อยเกินไป → false contours" },
      { q: "False contours เกิดจาก?", a: "quantize ด้วยระดับ brightness ไม่เพียงพอ" },
      { q: "DPI / LPI / PPI?", a: "monitor (dots) · laser printer (lines) · tablet/mobile (pixels) ต่อนิ้ว" },
      { q: "Negative transformation?", a: "s = L-1-r — เหมาะกับ enhance รายละเอียดขาว/เทาในบริเวณมืด" },
      { q: "Gamma < 1 / > 1?", a: "γ<1 brighten · γ>1 darken · γ=1 คงเดิม" },
      { q: "Log transformation?", a: "s = c log(1+r) — ขยาย dark pixels บีบอัดค่าสูง" },
      { q: "Contrast stretching?", a: "เพิ่ม contrast ระหว่าง dark และ light — ปรับ E (ความชัน) หรือ m (จุดเปลี่ยน)" },
      { q: "FFT ใน MATLAB?", a: "fft2 (ไปข้างหน้า) · ifft2 (ย้อนกลับ) · abs = magnitude · angle = phase" },
      { q: "DFT ขนาดเท่าไร?", a: "จำนวนความถี่ = จำนวนพิกเซล → domain ทั้งสองมีขนาดเท่ากัน" },
      { q: "Histogram P(rk)?", a: "nk/n — สัดส่วนของพิกเซลที่มี grey value rk" },
      { q: "Histogram equalization?", a: "ทำให้ grey values กระจาย uniform ใน [0,1] — เพิ่ม contrast" },
      { q: "Average / median filter?", a: "average = ค่าเฉลี่ยใน mask (lowpass) · median = ค่ามัธยฐาน (non-linear, ลบ salt-pepper)" },
      { q: "สมการ frequency filtering?", a: "g = F⁻¹[H(u,v)·F(u,v)] — H = filter function" },
      { q: "LPF / HPF?", a: "LPF = smoothing (ตัด high freq) · HPF = edge enhancement (ตัด low freq)" },
      { q: "Dilation / Erosion?", a: "เพิ่ม / ลบพิกเซลที่ขอบวัตถุ — ตาม size/shape ของ structuring element" },
      { q: "Opening / Closing?", a: "opening = erode แล้ว dilate (ลบจุดเล็ก) · closing = dilate แล้ว erode (เติมรูเล็ก)" },
      { q: "Global / local / dynamic threshold?", a: "T ขึ้นกับ f เท่านั้น / f+local properties / พิกัด (x,y)" },
      { q: "RGB image ใน MATLAB?", a: "M×N×3 array — R, G, B component images ซ้อนกัน (stack) 3 ชั้น" }
    ],

    /* Glossary */
    glossary: [
      { term: "MATLAB", def: "MATrix LABoratory — สภาพแวดล้อมคำนวณเชิงตัวเลขที่สร้างรอบแนวคิดของ matrix" },
      { term: "Sampling", def: "การแปลงตำแหน่งต่อเนื่องของภาพเป็นพิกเซลไม่ต่อเนื่อง — กำหนด spatial resolution" },
      { term: "Quantization", def: "การแปลงค่าความเข้มต่อเนื่องเป็นระดับสีเทาดิจิทัล — กำหนดจำนวน grey levels" },
      { term: "False Contours", def: "เส้นขั้นบันไดที่เห็นในภาพที่ quantize ด้วยระดับความสว่างไม่เพียงพอ" },
      { term: "Spatial Resolution", def: "รายละเอียดที่เล็กที่สุดที่มองเห็นได้ — จำนวน pixel values ต่อหน่วยความยาว" },
      { term: "DPI / LPI / PPI", def: "Dots (monitor) / Lines (laser printer) / Pixels (tablet-mobile) per inch" },
      { term: "Intensity Resolution", def: "จำนวนระดับ grey levels ที่ใช้แทนความเข้ม (256, 128, 64, 32…)" },
      { term: "Negative Transformation", def: "s = L-1-r — กลับระดับเทา ใช้ enhance รายละเอียดในบริเวณมืด" },
      { term: "Gamma Transformation", def: "s = cr^γ — γ<1 brighten, γ>1 darken" },
      { term: "Log Transformation", def: "s = c log(1+r) — ขยาย dark pixels บีบอัดค่าสูง" },
      { term: "Contrast Stretching", def: "เพิ่ม contrast ระหว่าง dark/light โดยปรับ E หรือ m ในสมการ sigmoid" },
      { term: "DFT", def: "Discrete Fourier Transform — แยกภาพเป็น sine/cosine components ไปยัง frequency domain" },
      { term: "FFT / IFFT", def: "Fast Fourier Transform / inverse — fft2 / ifft2 ใน MATLAB" },
      { term: "Magnitude / Phase", def: "abs(F) = ขนาดสเปกตรัม · angle(F) = มุม/เฟสของ DFT" },
      { term: "Histogram", def: "P(rk) = nk/n — การกระจายของ grey levels ในภาพ" },
      { term: "Histogram Equalization", def: "แปลง histogram ให้ grey values กระจาย uniform — เพิ่ม contrast" },
      { term: "Spatial Filtering", def: "กรองภาพโดยตรงที่พิกเซล — linear (average/gaussian) หรือ non-linear (median)" },
      { term: "Frequency Domain Filtering", def: "g = F⁻¹[H(u,v)·F(u,v)] — คูณ spectrum ด้วย filter แล้ว inverse" },
      { term: "Lowpass / Highpass", def: "LPF คงความถี่ต่ำ (smooth) · HPF คงความถี่สูง (edge)" },
      { term: "Edge Detection", def: "ตรวจจับขอบด้วย gradient — Sobel, Prewitt, Roberts, Canny" },
      { term: "Dilation / Erosion", def: "เพิ่ม/ลบพิกเซลที่ขอบวัตถุด้วย structuring element" },
      { term: "Opening / Closing", def: "erode+dilate (ลบจุดเล็ก) / dilate+erode (เติมรูเล็ก)" },
      { term: "Thresholding", def: "แบ่งภาพด้วยค่า T — global/local/dynamic ตาม T = T[x,y,p,f]" },
      { term: "Otsu's Method", def: "graythresh() — หา threshold ที่เหมาะสมจาก histogram อัตโนมัติ" },
      { term: "Color Models (MATLAB)", def: "RGB (M×N×3), NTSC/YCbCr (luminance+chrominance), HSV (hue/saturation/value)" }
    ],

    /* Cheat sheet */
    cheat: [
      { term: "MATLAB", def: "MATrix LABoratory · data element = matrix" },
      { term: "imread/imshow/imwrite", def: "อ่าน · แสดง · เขียนภาพ" },
      { term: "Sampling", def: "digitize ตำแหน่ง → spatial resolution" },
      { term: "Quantization", def: "digitize ค่า → grey levels · น้อยไป = false contours" },
      { term: "DPI·LPI·PPI", def: "monitor · laser printer · tablet/mobile" },
      { term: "Negative", def: "s = L-1-r (enhance บริเวณมืด)" },
      { term: "Gamma", def: "γ<1 สว่าง · γ>1 มืด · imadjust(I,[],[],γ)" },
      { term: "Log", def: "s = c·log(1+r) — ขยาย dark" },
      { term: "FFT", def: "fft2 · ifft2 · abs=magnitude · angle=phase" },
      { term: "Histogram", def: "P(rk) = nk/n · equalization → uniform" },
      { term: "Spatial filter", def: "average/gaussian = smooth · laplacian/sobel = sharpen" },
      { term: "Median", def: "non-linear order-statistic · ลบ salt-pepper" },
      { term: "Freq filtering", def: "g = F⁻¹[H·F] · H = filter" },
      { term: "LPF/HPF", def: "smooth (คง low) · edge (คง high)" },
      { term: "Edge ops", def: "Sobel·Prewitt·Roberts (gradient) · Canny (multi-stage)" },
      { term: "Morphology", def: "dilate เพิ่มขอบ · erode กร่อนขอบ · open/close = รวมกัน" },
      { term: "Threshold", def: "global (f เท่านั้น) · local (+p) · dynamic (x,y) · Otsu = graythresh" },
      { term: "RGB array", def: "M×N×3 — R,G,B component images" }
    ]
  },

  /* ==========================================================================
     CHAPTER 4 — IMAGE ENHANCEMENT BY SPATIAL FILTERING
     ========================================================================== */
  ch4: {
    title: "Image Enhancement by Spatial Filtering (การปรับปรุงภาพด้วย Spatial Filtering)",
    thai: "การปรับปรุงภาพด้วย Spatial Filtering",
    en: "Image Enhancement by Spatial Filtering",

    /* Slide metadata */
    slides: [
      { title: "Cover — Image Enhancement by Spatial Filtering", short: "เปิดบทเรียน" },
      { title: "ภาพรวม — จะเรียนอะไรในบทนี้", short: "ภาพรวมบทเรียน" },
      { title: "Spatial Filtering คืออะไร", short: "Spatial Filtering" },
      { title: "สูตร Filter Response — จับมือ", short: "สูตร Filter Response" },
      { title: "Kernel / Mask", short: "Kernel/Mask" },
      { title: "Padding (3 แบบ)", short: "Padding 3 แบบ" },
      { title: "ทำไมต้อง Padding?", short: "ทำไมต้อง Padding" },
      { title: "Mean Filter 3×3 — คำนวณจับมือ", short: "Mean Filter จับมือ" },
      { title: "Workshop#1 — Averaging + Thresholding", short: "Workshop#1" },
      { title: "Median Filter — Non-linear", short: "Median Filter" },
      { title: "Mean vs Median — เปรียบเทียบ", short: "Mean vs Median" },
      { title: "Blurring vs Sharpening", short: "Blur vs Sharpen" },
      { title: "Finite Differences — 3 แบบ", short: "Finite Differences" },
      { title: "Continuous vs Discrete", short: "Continuous vs Discrete" },
      { title: "Gradient Operator ∇f", short: "Gradient" },
      { title: "Sobel — ประวัติ + แนวคิด", short: "Sobel ประวัติ" },
      { title: "Sobel_x / Sobel_y — ขอบแนวตั้ง/แนวนอน", short: "Sobel_x/y" },
      { title: "Laplacian — Second-order", short: "Laplacian" },
      { title: "Laplacian Kernel — center 4/5/9", short: "Laplacian Kernel" },
      { title: "โค้ด Laplacian จริง (Python)", short: "โค้ด Laplacian" },
      { title: "First vs Second Order — เปรียบเทียบ", short: "1st vs 2nd Order" },
      { title: "Morphology — Erosion/Dilation/Open/Close", short: "Morphology" },
      { title: "Chapter Summary — สรุปบทเรียน", short: "สรุปบทเรียน" },
      { title: "Exam Cheat Sheet — สูตรจำก่อนสอบ", short: "สูตรจำก่อนสอบ" },
      { title: "Quiz 1 (ข้อ 1–5)", short: "แบบทดสอบ 1" },
      { title: "Quiz 2 (ข้อ 6–10)", short: "แบบทดสอบ 2" },
      { title: "Flashcards — ทบทวนการ์ด", short: "การ์ดทบทวน" },
      { title: "Glossary — คำศัพท์", short: "คำศัพท์" },
      { title: "ข้อสอบหลังเรียน — แบบทดสอบท้ายบท 20 ข้อ", short: "ข้อสอบหลังเรียน" }
    ],

    /* Sidebar structure: 1-based */
    sections: [
      { label: "ภาพรวมสัปดาห์", topics: [1, 2] },
      { label: "1. Spatial Filtering พื้นฐาน", topics: [3, 4, 5, 6, 7] },
      { label: "2. Smoothing (Mean/Median)", topics: [8, 9, 10, 11, 12] },
      { label: "3. Differentiation & Gradient", topics: [13, 14, 15, 16, 17] },
      { label: "4. Laplacian & Sharpening", topics: [18, 19, 20, 21] },
      { label: "5. Morphology", topics: [22] },
      { label: "ทบทวนและฝึกฝน", topics: [23, 24, 25, 26, 27, 28, 29] }
    ],

    /* Slides 24–25 — quiz (10 questions) */
    quiz: [
      {
        q: "Spatial filtering (Ex บทนี้) ทำงานกับอะไรโดยตรง?",
        options: ["พิกเซลของภาพโดยตรง", "สเปกตรัมความถี่", "ฮิสโตแกรมเท่านั้น", "เมทริกซ์สี"],
        correct: 0,
        explain: "Spatial filtering = กรองภาพโดยตรงที่ pixels — ต่างจาก frequency filtering ที่ไปแก้ FFT ก่อน"
      },
      {
        q: "Spatial filter แบ่งเป็น 2 ประเภทอะไร?",
        options: ["Linear และ Non-linear", "สูงและต่ำ", "เร็วและช้า", "สีและเทา"],
        correct: 0,
        explain: "Linear (เช่น mean, sobel) = ผลตอบเป็นผลรวมถ่วงน้ำหนัก · Non-linear (เช่น median) = เรียงลำดับค่า"
      },
      {
        q: "สูตร g(x,y) = ΣΣ w(s,t)·f(x+s, y+t) — w(s,t) คืออะไร?",
        options: ["ค่าสัมประสิทธิ์ของ kernel/mask", "ภาพต้นทาง", "ภาพผลลัพธ์", "ขนาดของภาพ"],
        correct: 0,
        explain: "w(s,t) = weight/kernel coefficient (ค่าถ่วงน้ำหนัก) · f = input image · g = output image"
      },
      {
        q: "Padding แบบ Replicate คืออะไร?",
        options: ["ก็อปปี้ค่าพิกเซลขอบซ้ำออกไป", "เติม 0 ทั้งหมด", "สะท้อนภาพเหมือนกระจก", "สุ่มค่ามาเติม"],
        correct: 0,
        explain: "Replicate = ก็อปปี้ค่าขอบซ้ำ (copy edge) · Zero = เติม 0 · Reflect = สะท้อนเหมือนกระจก (mirror intensity)"
      },
      {
        q: "Mean filter (average) เป็น filter ประเภทใด?",
        options: ["Linear / smoothing (lowpass)", "Non-linear", "Second-order", "Frequency filter"],
        correct: 0,
        explain: "Mean filter = linear smoothing — ผลตอบคือ weighted average ของ neighborhood ใช้ blur + ลด noise"
      },
      {
        q: "Median filter เหมาะกับ noise แบบใดเป็นพิเศษ?",
        options: ["Salt-and-Pepper", "Gaussian noise", "Periodic noise", "Poisson noise"],
        correct: 0,
        explain: "Median filter (non-linear) เก่งเรื่อง salt-and-pepper noise — ค่าผิดปกติสุดขั้วจะไม่ชนะเพราะใช้ค่ากลาง"
      },
      {
        q: "Median filter ต้องใช้ kernel (mask) ไหม?",
        options: ["ไม่ต้อง — เรียงค่าจาก neighborhood แล้วเอาค่ากลาง", "ต้องใช้ kernel 3×3 เสมอ", "ต้องใช้ kernel ใหญ่กว่า 9×9", "ต้องใช้ kernel ของ Gaussian"],
        correct: 0,
        explain: "Median = non-linear, no kernel required — sort ค่าใน neighborhood แล้วใช้ middle value"
      },
      {
        q: "Blurring (smoothing) กับ Sharpening ต่างกันยังไง?",
        options: [
          "Blur = เฉลี่ย (integration) · Sharpen = หาอนุพันธ์ (differentiation)",
          "Blur = หาอนุพันธ์ · Sharpen = เฉลี่ย",
          "เหมือนกันทุกประการ",
          "Blur ใช้ frequency เท่านั้น"
        ],
        correct: 0,
        explain: "Blur ใช้ค่าเฉลี่ยของ neighbors (เหมือน integration) · Sharpening ใช้การ differentiate เพื่อหา edge (จุดที่ค่าเปลี่ยนเร็ว)"
      },
      {
        q: "Forward Difference (finite difference) คืออะไร?",
        options: ["∂f = f(x+1) - f(x) → kernel [-1 1]", "∂f = f(x) - f(x+1)", "∂f = f(x+1) + f(x)", "∂f = f(x-1) - f(x+1)"],
        correct: 0,
        explain: "Forward difference = f(x+1) - f(x) → mask [-1 1] · Backward = f(x) - f(x-1) → [1 -1] · Central = ½[-1 0 1]"
      },
      {
        q: "Sobel_x (kernel แนวนอน) ตรวจจับขอบแบบใด?",
        options: ["ขอบแนวตั้ง (vertical edges)", "ขอบแนวนอน (horizontal edges)", "ขอบทแยงมุม", "จุด (points)"],
        correct: 0,
        explain: "Sobel_x คำนวณ gradient แนวแกน x (แนวนอน) → ไวต่อการเปลี่ยนแนวนอน → จับ vertical edges (ขอบตั้งฉากกับทิศทาง gradient)"
      }
    ],

    /* ==========================================================================
       ข้อสอบหลังเรียน (Post-Lesson Exam · 20 ข้อ)
       ========================================================================== */
    exam: [
      {
        q: "Spatial filtering ทำการกรองภาพที่ไหน?",
        options: ["ที่พิกเซลของภาพโดยตรง", "ใน frequency domain", "ที่ฮิสโตแกรม", "ที่ไฟล์ภาพ"],
        correct: 0,
        explain: "Spatial filtering = ทำกับ pixels โดยตรง — เลื่อน mask ทีละจุด แล้วคำนวณ response",
        en: {
          q: "Where does spatial filtering operate?",
          options: ["Directly on the image pixels", "In the frequency domain", "On the histogram", "On the image file"],
          explain: "Spatial filtering works directly on pixels — moving the mask point by point and computing the response"
        }
      },
      {
        q: "ในสูตร g(x,y) = ΣΣ w(s,t)·f(x+s, y+t) — a และ b คืออะไร?",
        options: [
          "a=(m-1)/2, b=(n-1)/2 — ครึ่งหนึ่งของขนาด mask",
          "ความกว้างและสูงของภาพ",
          "ค่า threshold",
          "ขนาดของ kernel 2 เท่า"
        ],
        correct: 0,
        explain: "a=(m-1)/2 และ b=(n-1)/2 คือ offset ครึ่งหนึ่งของขนาด mask (m×n) — ใช้เลื่อน kernel ให้อยู่ตรงกลางพิกเซล",
        en: {
          q: "In g(x,y) = ΣΣ w(s,t)·f(x+s, y+t) — what are a and b?",
          options: [
            "a=(m-1)/2, b=(n-1)/2 — half the mask size",
            "The image width and height",
            "The threshold value",
            "Twice the kernel size"
          ],
          explain: "a=(m-1)/2 and b=(n-1)/2 are half the mask (m×n) size — offsets that center the kernel on the pixel"
        }
      },
      {
        q: "Padding แบบ Zero คืออะไร?",
        options: ["เติม 0 ที่ขอบภาพ", "ก็อปปี้ค่าขอบซ้ำ", "สะท้อนภาพเหมือนกระจก", "ขยายภาพด้วย interpolation"],
        correct: 0,
        explain: "Zero padding = เติม 0 นอกขอบภาพ — วิธีง่ายสุด แต่ขอบอาจมืดลง",
        en: {
          q: "Zero padding is?",
          options: ["Filling 0 at the image border", "Replicating edge values", "Mirroring the image", "Enlarging with interpolation"],
          explain: "Zero padding fills 0 outside the border — simplest, but edges may get darker"
        }
      },
      {
        q: "Mean filter (3×3) มีผลตอบเท่ากับอะไร?",
        options: ["ค่าเฉลี่ยของ 9 พิกเซลใน neighborhood", "ค่ามัธยฐานของ 9 พิกเซล", "ผลรวมของ 9 พิกเซล", "ค่าสูงสุดของ 9 พิกเซล"],
        correct: 0,
        explain: "Mean filter = (1/9)·Σ 9 พิกเซล — weighted average · ใช้ blur + ลด noise",
        en: {
          q: "The 3×3 mean filter response equals?",
          options: ["The average of the 9 neighborhood pixels", "The median of the 9 pixels", "The sum of the 9 pixels", "The maximum of the 9 pixels"],
          explain: "Mean filter = (1/9)·sum of 9 pixels — a weighted average for blurring and noise reduction"
        }
      },
      {
        q: "Median filter เป็น filter แบบใด?",
        options: ["Non-linear (ไม่ต้องใช้ kernel)", "Linear", "First-order derivative", "Frequency-domain"],
        correct: 0,
        explain: "Median = non-linear filter, no kernel required — sort ค่าแล้วใช้ middle value ลด salt-and-pepper noise",
        en: {
          q: "The median filter is what type of filter?",
          options: ["Non-linear (no kernel needed)", "Linear", "First-order derivative", "Frequency-domain"],
          explain: "Median is non-linear with no kernel — sort values and take the middle one to reduce salt-and-pepper noise"
        }
      },
      {
        q: "Mean filter กับ Median filter ต่างกันยังไง?",
        options: [
          "Mean = weighted average · Median = sort แล้วเอาค่ากลาง",
          "Mean = sort แล้วเอาค่ากลาง · Median = weighted average",
          "เหมือนกันเป๊ะ",
          "Median ใช้ kernel แต่ Mean ไม่ใช้"
        ],
        correct: 0,
        explain: "Mean (linear): pixel neighborhood → weighted average · Median (non-linear): neighborhood → sort values → middle value",
        en: {
          q: "How do mean and median filters differ?",
          options: [
            "Mean = weighted average · Median = sort and take the middle value",
            "Mean = sort middle · Median = weighted average",
            "They are identical",
            "Median needs a kernel but mean does not"
          ],
          explain: "Mean (linear): neighborhood → weighted average · Median (non-linear): neighborhood → sort → middle value"
        }
      },
      {
        q: "Sharpening ใช้หลักการทางคณิตศาสตร์ใด?",
        options: ["Differentiation (หาอนุพันธ์)", "Integration (อินทิเกรต)", "การบวกค่าเฉลี่ย", "การคูณเมทริกซ์สี"],
        correct: 0,
        explain: "Sharpening = differentiation — จุดที่ pixel เปลี่ยนเร็ว (edge) จะถูกเน้น · Blurring = integration (average neighbors)",
        en: {
          q: "Sharpening is based on which math concept?",
          options: ["Differentiation", "Integration", "Averaging", "Color matrix multiplication"],
          explain: "Sharpening uses differentiation — points where pixels change fast (edges) get emphasized · Blurring uses integration (averaging)"
        }
      },
      {
        q: "Backward Difference kernel คือข้อใด?",
        options: ["[1 -1]", "[-1 1]", "½[-1 0 1]", "[0 1]"] ,
        correct: 0,
        explain: "Forward = f(x+1)-f(x) → [-1 1] · Backward = f(x)-f(x-1) → [1 -1] · Central = ½[-1 0 1]",
        en: {
          q: "The backward difference kernel is?",
          options: ["[1 -1]", "[-1 1]", "½[-1 0 1]", "[0 1]"],
          explain: "Forward = f(x+1)-f(x) → [-1 1] · Backward = f(x)-f(x-1) → [1 -1] · Central = ½[-1 0 1]"
        }
      },
      {
        q: "Sobel operator ถูกพัฒนาที่ไหนและเมื่อไร?",
        options: [
          "Stanford AI Laboratory (SAIL) ปลายทศวรรษ 1960 โดย Irwin Sobel และ Gary Feldman",
          "MIT ในปี 1950",
          "Google ในปี 2000",
          "CMU ในปี 1980"
        ],
        correct: 0,
        explain: "Sobel พัฒนาโดย Irwin Sobel & Gary Feldman ที่ Stanford AI Lab (SAIL) ปลายยุค 1960s — gradient-based edge detection",
        en: {
          q: "Where and when was the Sobel operator developed?",
          options: [
            "Stanford AI Laboratory (SAIL), late 1960s, by Irwin Sobel and Gary Feldman",
            "MIT in the 1950s",
            "Google in 2000",
            "CMU in the 1980s"
          ],
          explain: "Sobel was developed by Irwin Sobel & Gary Feldman at Stanford AI Lab (SAIL) in the late 1960s — gradient-based edge detection"
        }
      },
      {
        q: "Sobel = อะไร รวมกับอะไร?",
        options: ["Differentiation + Smoothing", "Integration + Sharpening", "Median + Mean", "Histogram + Threshold"],
        correct: 0,
        explain: "Sobel = การหาอนุพันธ์ (differentiation) รวมกับ smoothing (ถ่วงน้ำหนักกึ่งกลาง) — กัน noise ได้ดีกว่า pure derivative",
        en: {
          q: "Sobel combines what?",
          options: ["Differentiation + Smoothing", "Integration + Sharpening", "Median + Mean", "Histogram + Threshold"],
          explain: "Sobel = differentiation + smoothing (weighted center) — more robust to noise than a pure derivative"
        }
      },
      {
        q: "Sobel_x kernel ตรวจจับขอบแบบใด?",
        options: ["ขอบแนวตั้ง (vertical edges)", "ขอบแนวนอน (horizontal edges)", "ขอบทแยง 45°", "จุดเดี่ยว"],
        correct: 0,
        explain: "Sobel_x = horizontal gradient (แกน x) → ตอบสนองเมื่อค่าตามแนวนอนเปลี่ยน → vertical edges",
        en: {
          q: "The Sobel_x kernel detects which edges?",
          options: ["Vertical edges", "Horizontal edges", "45° diagonal edges", "Isolated points"],
          explain: "Sobel_x computes the horizontal gradient (x-axis) → responds when values change horizontally → vertical edges"
        }
      },
      {
        q: "Laplacian operator เป็นอนุพันธ์อันดับเท่าไร?",
        options: ["อันดับ 2 (second-order)", "อันดับ 1 (first-order)", "อันดับ 3", "อันดับ 0"],
        correct: 0,
        explain: "Laplacian = second-order derivative ∇²f = ∂²f/∂x² + ∂²f/∂y² — ใช้หา edges และ sharpening",
        en: {
          q: "The Laplacian operator is a derivative of which order?",
          options: ["Second-order", "First-order", "Third-order", "Zero-order"],
          explain: "Laplacian is the second-order derivative ∇²f = ∂²f/∂x² + ∂²f/∂y² — used for edges and sharpening"
        }
      },
      {
        q: "Discrete Laplacian ∇²f = ?",
        options: [
          "f(x+1,y)+f(x-1,y)+f(x,y+1)+f(x,y-1) - 4f(x,y)",
          "f(x+1,y) - f(x,y)",
          "f(x+1,y)+f(x,y+1)",
          "4f(x,y) - f(x+1,y)"
        ],
        correct: 0,
        explain: "∇²f = ผลรวม 4 เพื่อนบ้าน − 4×จุดกลาง — kernel 4-neighbor [0 1 0; 1 -4 1; 0 1 0]",
        en: {
          q: "The discrete Laplacian ∇²f = ?",
          options: [
            "f(x+1,y)+f(x-1,y)+f(x,y+1)+f(x,y-1) - 4f(x,y)",
            "f(x+1,y) - f(x,y)",
            "f(x+1,y)+f(x,y+1)",
            "4f(x,y) - f(x+1,y)"
          ],
          explain: "∇²f = sum of 4 neighbors − 4×center — kernel [0 1 0; 1 -4 1; 0 1 0]"
        }
      },
      {
        q: "Laplacian kernel ที่ center = 4 ให้ผลเป็นแบบใด?",
        options: ["0 Laplacian (pure Laplacian)", "1× sharpening", "2× sharpening", "blur filter"],
        correct: 0,
        explain: "center=4 → pure Laplacian (ผลรวมน้ำหนัก = 0) · center=5 → 1× sharpening (original + ∇²f) · center>5 → sharpening แรงขึ้น",
        en: {
          q: "A Laplacian kernel with center = 4 gives?",
          options: ["0 Laplacian (pure Laplacian)", "1× sharpening", "2× sharpening", "A blur filter"],
          explain: "center=4 → pure Laplacian (weights sum to 0) · center=5 → 1× sharpening (original + ∇²f) · center>5 → stronger sharpening"
        }
      },
      {
        q: "Sharpening ด้วย Laplacian: g(x,y) = ?",
        options: ["f(x,y) - ∇²f(x,y)", "f(x,y) + ∇²f(x,y)", "f(x,y) × ∇²f(x,y)", "f(x,y) / ∇²f(x,y)"],
        correct: 0,
        explain: "g = f − ∇²f (ลบ Laplacian ออก) → ภาพคมชัดขึ้น — นี่คือหลักของ unsharp/sharpening mask",
        en: {
          q: "Sharpening with Laplacian: g(x,y) = ?",
          options: ["f(x,y) - ∇²f(x,y)", "f(x,y) + ∇²f(x,y)", "f(x,y) × ∇²f(x,y)", "f(x,y) / ∇²f(x,y)"],
          explain: "g = f − ∇²f (subtract the Laplacian) → a sharper image — the principle of unsharp/sharpening masks"
        }
      },
      {
        q: "Erosion (Morphology) แทนค่าพิกเซลด้วยอะไร?",
        options: ["min ของ region × SE", "max ของ region × SE", "median ของ region", "average ของ region"],
        correct: 0,
        explain: "Erosion: g[x,y] = min(region × SE) — กร่อนขอบวัตถุ · Dilation: g[x,y] = max(region × SE) — ขยายขอบวัตถุ",
        en: {
          q: "Erosion (morphology) replaces the pixel with?",
          options: ["min of region × SE", "max of region × SE", "median of the region", "average of the region"],
          explain: "Erosion: g = min(region × SE) — shrinks objects · Dilation: g = max(region × SE) — expands objects"
        }
      },
      {
        q: "Opening = ? และ Closing = ?",
        options: [
          "Opening = dilation(erosion(A)) · Closing = erosion(dilation(A))",
          "Opening = erosion(dilation(A)) · Closing = dilation(erosion(A))",
          "ทั้งคู่ = erosion เท่านั้น",
          "ทั้งคู่ = dilation เท่านั้น"
        ],
        correct: 0,
        explain: "Opening = dilate(erode(A)) — ลบ noise/จุดเล็ก · Closing = erode(dilate(A)) — เติมรู/ช่องว่างเล็ก",
        en: {
          q: "Opening = ? and Closing = ?",
          options: [
            "Opening = dilation(erosion(A)) · Closing = erosion(dilation(A))",
            "Opening = erosion(dilation(A)) · Closing = dilation(erosion(A))",
            "Both are just erosion",
            "Both are just dilation"
          ],
          explain: "Opening = dilate(erode(A)) — removes small noise · Closing = erode(dilate(A)) — fills small holes"
        }
      },
      {
        q: "cv2.threshold แบบ Otsu ใช้ flag ใด?",
        options: ["cv2.THRESH_BINARY + cv2.THRESH_OTSU", "cv2.THRESH_TRUNC", "cv2.THRESH_TOZERO", "cv2.THRESH_MASK"],
        correct: 0,
        explain: "Otsu หา threshold อัตโนมัติ: ret, binary = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)",
        en: {
          q: "Which flag is used for Otsu thresholding in cv2.threshold?",
          options: ["cv2.THRESH_BINARY + cv2.THRESH_OTSU", "cv2.THRESH_TRUNC", "cv2.THRESH_TOZERO", "cv2.THRESH_MASK"],
          explain: "Otsu finds the threshold automatically: ret, binary = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)"
        }
      },
      {
        q: "จาก Workshop#1: mask averaging ที่ใหญ่ขึ้น (3→5→9→15→35) ให้ผลอย่างไร?",
        options: [
          "ภาพเบลอมากขึ้น object ขอบเลือน/หายตามขนาด mask",
          "ภาพคมชัดขึ้นเรื่อย ๆ",
          "สีเปลี่ยนไป",
          "ขนาดภาพเล็กลง"
        ],
        correct: 0,
        explain: "mask ใหญ่ขึ้น → เฉลี่ยพิกเซลเยอะขึ้น → เบลอมากขึ้น วัตถุเล็กอาจหาย — แล้วค่อย threshold แยก object",
        en: {
          q: "In Workshop#1, a bigger averaging mask (3→5→9→15→35) does what?",
          options: [
            "Blurs more; small objects fade/disappear depending on mask size",
            "Sharpens more and more",
            "Changes colors",
            "Makes the image smaller"
          ],
          explain: "A bigger mask averages more pixels → more blur; small objects may disappear — then thresholding separates objects"
        }
      },
      {
        q: "ถ้าอยากให้ภาพคมชัดขึ้นด้วย Laplacian — สูตรที่ถูกต้องคือ?",
        options: ["g = f − ∇²f", "g = f + ∇²f", "g = f × ∇²f", "g = f / ∇²f"],
        correct: 0,
        explain: "Laplacian เน้นจุดที่ค่าประกอบเปลี่ยนไว (edge) → นำมาลบออกจากภาพเดิม g = f − ∇²f ทำให้ขอบคมชัดขึ้น",
        en: {
          q: "To sharpen an image with the Laplacian, the correct formula is?",
          options: ["g = f − ∇²f", "g = f + ∇²f", "g = f × ∇²f", "g = f / ∇²f"],
          explain: "The Laplacian highlights rapid intensity changes (edges) → subtracting it from the original, g = f − ∇²f, sharpens the edges"
        }
      }
    ],

    /* Flashcards */
    flashcards: [
      { q: "Spatial filtering คือ?", a: "กรองภาพโดยตรงที่ pixels — เลื่อน mask ทีละจุดแล้วคำนวณ response" },
      { q: "Linear vs Non-linear?", a: "Linear = ผลรวมถ่วงน้ำหนัก (mean, sobel) · Non-linear = เรียงค่า (median)" },
      { q: "สูตร filter response?", a: "g(x,y) = ΣΣ w(s,t)·f(x+s,y+t) · a=(m-1)/2, b=(n-1)/2" },
      { q: "Zero / Replicate / Reflect padding?", a: "เติม 0 · ก็อปปี้ขอบซ้ำ · สะท้อนเหมือนกระจก" },
      { q: "Mean filter?", a: "linear smoothing — weighted average ของ neighborhood ใช้ blur + ลด noise" },
      { q: "Median filter?", a: "non-linear ไม่ใช้ kernel — sort แล้วเอาค่ากลาง ลด salt-and-pepper" },
      { q: "Blurring vs Sharpening?", a: "Blur = integration (เฉลี่ย) · Sharpen = differentiation (หาอนุพันธ์)" },
      { q: "Forward / Backward / Central?", a: "[-1 1] · [1 -1] · ½[-1 0 1]" },
      { q: "Gradient ∇f?", a: "[∂f/∂x, ∂f/∂y] — ชี้ทิศที่ intensity เปลี่ยนเร็วที่สุด ขนาด = ความแรงของ edge" },
      { q: "Sobel?", a: "Irwin Sobel & Gary Feldman, Stanford AI Lab 1960s — differentiation + smoothing" },
      { q: "Sobel_x / Sobel_y?", a: "Sobel_x = gradient แนวนอน → vertical edges · Sobel_y = gradient แนวตั้ง → horizontal edges" },
      { q: "Laplacian?", a: "second-order derivative ∇²f — discrete: ผลรวม 4 เพื่อนบ้าน − 4×จุดกลาง" },
      { q: "Laplacian kernel center?", a: "4 = pure Laplacian · 5 = 1× sharpening · >5 = sharpening แรงขึ้น (overshoot/halo)" },
      { q: "Sharpening สูตร?", a: "g = f − ∇²f (ลบ Laplacian) → ภาพคมขึ้น" },
      { q: "Erosion / Dilation?", a: "min(region×SE) กร่อนขอบ · max(region×SE) ขยายขอบ" },
      { q: "Opening / Closing?", a: "open = dilate(erode(A)) ลบจุดเล็ก · close = erode(dilate(A)) เติมรูเล็ก" },
      { q: "Otsu ใน OpenCV?", a: "cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)" },
      { q: "mask ใหญ่ขึ้น?", a: "เบลอมากขึ้น วัตถุเล็กอาจหาย — ใช้ threshold ต่อเพื่อแยก object" }
    ],

    /* Glossary */
    glossary: [
      { term: "Spatial Filtering", def: "การกรองภาพโดยตรงที่พิกเซล — เลื่อน filter mask ทีละจุดแล้วคำนวณ response" },
      { term: "Linear Filter", def: "ผลตอบ = ผลรวมถ่วงน้ำหนักของ coefficients × pixels (mean, sobel, laplacian)" },
      { term: "Non-linear Filter", def: "ผลตอบจากลำดับค่า เช่น median — ไม่มี kernel" },
      { term: "Kernel / Mask", def: "เมทริกซ์เล็ก (เช่น 3×3) ที่มีค่าถ่วงน้ำหนัก w(s,t) ใช้เลื่อนผ่านภาพ" },
      { term: "Filter Response", def: "g(x,y) = ΣΣ w(s,t)·f(x+s,y+t) — ผลลัพธ์ที่จุด (x,y)" },
      { term: "Zero Padding", def: "เติม 0 ที่ขอบภาพก่อนกรอง" },
      { term: "Replicate Padding", def: "ก็อปปี้ค่าพิกเซลขอบซ้ำออกไป" },
      { term: "Reflect Padding", def: "สะท้อนค่าขอบเหมือนกระจก (mirror intensity)" },
      { term: "Mean / Average Filter", def: "linear smoothing — weighted average ของ neighborhood ใช้ blur + ลด noise" },
      { term: "Median Filter", def: "non-linear — sort neighborhood แล้วใช้ middle value ลด salt-and-pepper" },
      { term: "Salt-and-Pepper Noise", def: "จุดขาว-ดำสุ่มในภาพ — median filter ลบได้ดี" },
      { term: "Blurring", def: "smoothing — เฉลี่ย neighbors (เหมือน integration)" },
      { term: "Sharpening", def: "การทำให้คมชัดด้วย differentiation — เน้นจุดที่ค่าเปลี่ยนเร็ว (edge)" },
      { term: "Finite Difference", def: "การหาอนุพันธ์แบบ discrete: forward [-1 1] · backward [1 -1] · central ½[-1 0 1]" },
      { term: "Gradient Operator", def: "∇f = [∂f/∂x, ∂f/∂y] — ทิศทางและความแรงของการเปลี่ยน intensity" },
      { term: "Sobel Operator", def: "gradient edge detection 3×3 — differentiation + smoothing (SAIL 1960s)" },
      { term: "Laplacian Operator", def: "second-order derivative ∇²f — ใช้หา edges และ sharpening" },
      { term: "Overshoot / Halo", def: "เอฟเฟกต์ขอบสว่างเกินเมื่อ center kernel > 5 (sharpening แรงไป)" },
      { term: "Erosion", def: "morphology — g = min(region×SE) กร่อนขอบวัตถุ" },
      { term: "Dilation", def: "morphology — g = max(region×SE) ขยายขอบวัตถุ" },
      { term: "Opening / Closing", def: "dilate(erode(A)) ลบจุดเล็ก · erode(dilate(A)) เติมรูเล็ก" },
      { term: "Otsu Threshold", def: "หา threshold อัตโนมัติจาก histogram — cv2.THRESH_OTSU" }
    ],

    /* Cheat sheet */
    cheat: [
      { term: "Spatial filter", def: "กรองที่ pixels โดยตรง · linear/non-linear" },
      { term: "Filter response", def: "g = ΣΣ w·f · a=(m-1)/2, b=(n-1)/2" },
      { term: "Padding", def: "zero เติม 0 · replicate ก็อปขอบ · reflect สะท้อน" },
      { term: "Mean filter", def: "linear smooth = average neighborhood" },
      { term: "Median filter", def: "non-linear · sort → middle · ลบ salt-pepper" },
      { term: "Blur vs Sharpen", def: "integration (เฉลี่ย) · differentiation (อนุพันธ์)" },
      { term: "Finite diff", def: "forward [-1 1] · backward [1 -1] · central ½[-1 0 1]" },
      { term: "Gradient", def: "∇f = [∂f/∂x, ∂f/∂y] — ชี้ทิศ edge" },
      { term: "Sobel", def: "Sobel_x → vertical edges · Sobel_y → horizontal edges" },
      { term: "Laplacian", def: "∇²f = 4 เพื่อนบ้าน − 4×กลาง (second-order)" },
      { term: "Kernel center", def: "4 = Laplacian · 5 = 1× sharpen · >5 = แรงขึ้น (halo)" },
      { term: "Sharpen", def: "g = f − ∇²f" },
      { term: "Erosion/Dilation", def: "min / max ของ region×SE" },
      { term: "Open/Close", def: "dilate(erode) · erode(dilate)" },
      { term: "Otsu", def: "cv2.THRESH_BINARY + cv2.THRESH_OTSU" }
    ]
  }
};
