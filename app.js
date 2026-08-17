/* ==========================================================================
   DIP — Digital Image Processing · ภาพดิจิทัลคืออะไร
   Interactive Digital Textbook (เทมเพลตเดียวกับ CA/CN) — Vanilla JS logic
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  var D = window.DATA;

  var PAGE = document.body.getAttribute("data-page") || "chapter";
  var PCH = parseInt(document.body.getAttribute("data-chapter"), 10) || 1;

  var CHS = {
    1: { start: 0, count: D.slides.length, sections: D.sections, slides: D.slides, cheat: D.cheat, flashcards: D.flashcards, glossary: D.glossary, exam: D.quick, thai: "ภาพดิจิทัลคืออะไร", en: "Digital Image Processing" },
    2: { start: 0, count: D.ch2.slides.length, sections: D.ch2.sections, slides: D.ch2.slides, cheat: D.ch2.cheat, flashcards: D.ch2.flashcards, glossary: D.ch2.glossary, quiz: D.ch2.quiz, exam: D.ch2.exam, thai: "เริ่มต้น OpenCV", en: "Getting Started with OpenCV" },
    3: { start: 0, count: D.ch3.slides.length, sections: D.ch3.sections, slides: D.ch3.slides, cheat: D.ch3.cheat, flashcards: D.ch3.flashcards, glossary: D.ch3.glossary, quiz: D.ch3.quiz, exam: D.ch3.exam, thai: "Sampling & Quantization", en: "Sampling & Quantization" },
    4: { start: 0, count: D.ch4.slides.length, sections: D.ch4.sections, slides: D.ch4.slides, cheat: D.ch4.cheat, flashcards: D.ch4.flashcards, glossary: D.ch4.glossary, quiz: D.ch4.quiz, exam: D.ch4.exam, thai: "การปรับปรุงภาพ (Image Enhancement)", en: "Image Enhancement" },
    5: { start: 0, count: D.ch5.slides.length, sections: D.ch5.sections, slides: D.ch5.slides, cheat: D.ch5.cheat, flashcards: D.ch5.flashcards, glossary: D.ch5.glossary, quiz: D.ch5.quiz, exam: D.ch5.exam, thai: "การกรองภาพและตรวจจับขอบ", en: "Image Filtering & Edge Detection" },
    6: { start: 0, count: D.ch6.slides.length, sections: D.ch6.sections, slides: D.ch6.slides, cheat: D.ch6.cheat, flashcards: D.ch6.flashcards, glossary: D.ch6.glossary, quiz: D.ch6.quiz, exam: D.ch6.exam, thai: "Segmentation ถึง Computer Vision", en: "Segmentation to Computer Vision" },
    7: { start: 0, count: D.ch7.slides.length, sections: D.ch7.sections, slides: D.ch7.slides, cheat: D.ch7.cheat, flashcards: D.ch7.flashcards, glossary: D.ch7.glossary, quiz: D.ch7.quiz, thai: "Lab Code Handbook", en: "Lab Code Handbook — Practical Exam Cheat Codes" }
  };
  function ch() { return CHS[state.chapter]; }
  var TOTAL = 0;

  function $(id) { return document.getElementById(id); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function icons() { if (window.lucide) { try { lucide.createIcons(); } catch (e) {} } }

  var LS = {
    get: function (k, def) { try { var v = localStorage.getItem(k); return v === null ? def : JSON.parse(v); } catch (e) { return def; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  var state = {
    chapter: PAGE === "menu" ? 1 : PCH,
    current: 0,
    completed: [],
    notes: (function () {
      var raw = LS.get("dip_notes", {});
      var out = {};
      Object.keys(raw).forEach(function (k) {
        out[k.indexOf(":") === -1 ? "1:" + k : k] = raw[k];
      });
      return out;
    })(),
    quiz: LS.get("dip_quiz", { answers: {}, partDone: {} }),
    quiz2: LS.get("dip_quiz2", { answers: {} }),
    quiz3: LS.get("dip_quiz3", { answers: {} }),
    quiz4: LS.get("dip_quiz4", { answers: {} }),
    quiz5: LS.get("dip_quiz5", { answers: {} }),
    quiz6: LS.get("dip_quiz6", { answers: {} }),
    quiz7: LS.get("dip_quiz7", { answers: {} }),
    exam: LS.get("dip_exam") || { answers: {}, best: null },
    exam2: LS.get("dip_exam2") || { answers: {}, best: null },
    exam3: LS.get("dip_exam3") || { answers: {}, best: null },
    exam4: LS.get("dip_exam4") || { answers: {}, best: null },
    exam5: LS.get("dip_exam5") || { answers: {}, best: null },
    exam6: LS.get("dip_exam6") || { answers: {}, best: null },
    best: null,
    celebrated: false
  };
  (function loadChapter() {
    var n = PAGE === "menu" ? 1 : PCH;
    if (!CHS[n]) n = 1;
    state.chapter = n;
    var rel = LS.get("dip_current_" + n, 0);
    if (rel === null || rel < 0 || rel >= CHS[n].count) rel = 0;
    state.current = rel;
    var comp = LS.get("dip_completed_" + n, []);
    state.completed = Array.isArray(comp) ? comp : [];
    state.celebrated = LS.get("dip_celebrated_" + n, false);
    state.best = LS.get("dip_best_" + n, null);
    TOTAL = CHS[n].count;
  })();

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  applyTheme();

  /* ==========================================================================
     CHAPTER MENU
     ========================================================================== */
  function renderMenuProgress() {
    var doneTotal = 0, slideTotal = 0, doneChapters = 0;
    [1, 2, 3, 4, 5, 6, 7].forEach(function (n) {
      var el = $("ch" + n + "Pct");
      var comp = LS.get("dip_completed_" + n, []);
      var count = CHS[n].count;
      var compArr = (comp && comp.length) ? comp : [];
      var pct = compArr.length ? Math.min(100, Math.round((compArr.length / count) * 100)) : 0;
      doneTotal += compArr.length;
      slideTotal += count;
      if (pct === 100 && compArr.length) doneChapters++;
      if (el) el.textContent = pct + "%";
      var card = document.querySelector('[data-chapter="' + n + '"]');
      if (card) {
        card.style.setProperty("--pct", pct + "%");
        var s = card.querySelector("[data-slides='" + n + "']");
        if (s) s.textContent = count;
      }
    });
    var coursePct = slideTotal ? Math.round((doneTotal / slideTotal) * 100) : 0;
    var op = $("coursePct");
    if (op) op.textContent = coursePct + "%";
    var ob = $("courseBar");
    if (ob) ob.style.setProperty("--pct", coursePct + "%");
    var od = $("courseDone");
    if (od) od.textContent = "เรียนแล้ว " + doneTotal + " / " + slideTotal + " สไลด์ · จบแล้ว " + doneChapters + " / 7 บท";
  }
  function goHome() { location.href = "index.html"; }
  function openChapter(n) {
    if (CHS[n]) { location.href = "chapter" + n + ".html"; }
    else { toast("บทที่ " + n + " กำลังเตรียมเนื้อหา — เร็วๆ นี้ 🔒"); }
  }
  function updateHeaderBrand() {
    var lbl = $("headerChapterLabel");
    if (lbl) lbl.textContent = "บทที่ " + state.chapter + " · " + CHS[state.chapter].thai;
    var st = $("sidebarChapterTitle");
    if (st) st.textContent = "เมนูบทที่ " + state.chapter;
    var ss = $("sidebarChapterSub");
    if (ss) ss.textContent = "หัวข้อในสัปดาห์นี้ · " + TOTAL + " หัวข้อ";
  }
  function bindMenu() {
    var m = $("chapterMenu");
    if (!m) return;
    function pick(e) {
      var card = e.target.closest(".chapter-card");
      if (!card) return;
      openChapter(parseInt(card.dataset.chapter, 10));
    }
    m.addEventListener("click", pick);
    m.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var card = e.target.closest(".chapter-card");
      if (!card) return;
      var n = parseInt(card.dataset.chapter, 10);
      if (!CHS[n]) { e.preventDefault(); openChapter(n); }
    });
    var cta = $("menuCtaBtn");
    if (cta) cta.addEventListener("click", function () {
      var g = $("chapterGrid"), menu = $("chapterMenu");
      if (!g) return;
      if (menu && menu.scrollTo) {
        var top = g.getBoundingClientRect().top - menu.getBoundingClientRect().top + menu.scrollTop - 10;
        menu.scrollTo({ top: top, behavior: "smooth" });
      } else {
        g.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  /* ==========================================================================
     SIDEBAR
     ========================================================================== */
  function renderSidebar() {
    var nav = $("sidebarNav");
    if (!nav) return;
    var c = ch();
    var html = "";
    c.sections.forEach(function (sec) {
      html += '<div class="sidebar-section-label">' + esc(sec.label) + "</div>";
      sec.topics.forEach(function (t) {
        var i = c.start + t - 1;
        var meta = c.slides[t - 1];
        var done = state.completed.indexOf(t - 1) !== -1;
        var active = i === state.current;
        var statusIcon = done
          ? '<span class="status done"><i data-lucide="check"></i></span>'
          : active
            ? '<span class="status" style="color:#2563eb"><i data-lucide="chevron-right"></i></span>'
            : '<span class="status"><i data-lucide="circle"></i></span>';
        html +=
          '<button class="sidebar-item' + (active ? " active" : "") + '" data-goto="' + i + '" ' +
          'aria-label="สไลด์ ' + t + ': ' + esc(meta.short) + (done ? ' (เรียนแล้ว)' : '') + '">' +
          '<span class="num">' + t + '</span>' +
          '<span class="label">' + esc(meta.short) + "</span>" + statusIcon +
          "</button>";
      });
    });
    nav.innerHTML = html;
    icons();
    updateSidebarProgress();
  }

  function updateSidebarProgress() {
    var pct = Math.round((state.completed.length / TOTAL) * 100);
    var fill = $("sidebarProgressFill");
    var pctEl = $("sidebarPct");
    var doneEl = $("sidebarDone");
    if (fill) fill.style.width = pct + "%";
    if (pctEl) pctEl.textContent = pct + "%";
    if (doneEl) {
      doneEl.textContent = state.completed.length === 0
        ? "ยังไม่ได้เรียนสไลด์ใดเลย — เริ่มที่ Cover ได้เลย!"
        : "เรียนแล้ว " + state.completed.length + " / " + TOTAL + " สไลด์ · เหลืออีก " + (TOTAL - state.completed.length);
    }
  }

  /* ==========================================================================
     SLIDE NAVIGATION
     ========================================================================== */
  function goTo(target, dir) {
    var c = ch();
    target = Math.max(c.start, Math.min(c.start + c.count - 1, target));
    var vp = $("viewport");
    var cur = qsa(".slide-view.active", vp)[0];
    if (target === state.current && cur) { markComplete(); updateAll(); return; }

    var next = vp.children[target];
    var d = dir !== undefined ? dir : (target > state.current ? 1 : -1);

    if (cur && cur !== next) {
      cur.classList.remove("active");
      cur.classList.add(d > 0 ? "exit-left" : "exit-right");
    }
    next.classList.add(d > 0 ? "enter-right" : "enter-left");
    void next.offsetWidth;
    next.classList.add("active");
    setTimeout(function () {
      if (cur && cur !== next) cur.classList.remove("exit-left", "exit-right");
      next.classList.remove("enter-left", "enter-right");
    }, 420);

    state.current = target;
    LS.set("dip_current_" + state.chapter, target - c.start);
    markComplete();
    updateAll();
    vp.scrollTop = 0;
    next.scrollTop = 0;
  }

  function markComplete() {
    var rel = state.current - ch().start;
    if (state.completed.indexOf(rel) === -1) {
      state.completed.push(rel);
      LS.set("dip_completed_" + state.chapter, state.completed);
      checkCompletion();
    }
  }

  function updateAll() {
    renderSidebar();
    updateHeaderProgress();
    updateBottomBar();
    updateActiveSidebarItem();
    syncNotesLabel();
    var cur = qsa(".slide-view.active")[0];
    if (cur && cur.dataset.title && cur.dataset.title.indexOf("ข้อสอบหลังเรียน") !== -1) renderExam();
  }

  function updateHeaderProgress() {
    var rel = state.current - ch().start;
    var pct = Math.round(((rel + 1) / TOTAL) * 100);
    var fill = $("headerProgressFill");
    var count = $("headerProgressCount");
    var bar = $("headerProgressBar");
    if (fill) fill.style.width = pct + "%";
    if (count) count.textContent = (rel + 1) + " / " + TOTAL;
    if (bar) bar.setAttribute("aria-valuenow", pct);
  }

  function updateBottomBar() {
    var prev = $("prevBtn"), next = $("nextBtn"), cnt = $("bbCounter"), total = $("bbTotal");
    var lo = ch().start, hi = ch().start + TOTAL - 1;
    if (prev) prev.disabled = state.current <= lo;
    if (next) next.disabled = state.current >= hi;
    if (cnt) cnt.textContent = (state.current - lo + 1);
    if (total) total.textContent = TOTAL;
  }

  function updateActiveSidebarItem() {
    var active = qsa(".sidebar-item.active")[0];
    if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  /* ==========================================================================
     NOTES
     ========================================================================== */
  var notesOpen = false;
  function noteKey() { return state.chapter + ":" + (state.current - ch().start); }
  function openNotes(open) {
    notesOpen = open;
    $("notesPanel").classList.toggle("open", open);
    if (open) {
      syncNotesLabel();
      var ta = $("notesTextarea");
      ta.value = state.notes[noteKey()] || "";
      setTimeout(function () { ta.focus(); }, 350);
    }
  }
  function syncNotesLabel() {
    var lbl = $("notesLabel");
    if (lbl) {
      var rel = state.current - ch().start;
      lbl.textContent = "สไลด์ " + (rel + 1) + ": " + ch().slides[rel].short;
    }
  }

  /* ==========================================================================
     TOAST
     ========================================================================== */
  var toastTimer = null;
  function toast(msg, ms) {
    var t = $("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, ms || 2600);
  }

  /* ==========================================================================
     COMPLETION
     ========================================================================== */
  function checkCompletion() {
    if (state.completed.length >= TOTAL && !state.celebrated) {
      state.celebrated = true;
      LS.set("dip_celebrated_" + state.chapter, true);
      setTimeout(showCompletion, 500);
    }
  }
  function showCompletion() {
    $("doneSlides").textContent = TOTAL;
    $("doneScore").textContent = state.best === null ? "–" : state.best + "/20";
    var ov = $("completionOverlay");
    ov.classList.add("show");
    spawnConfetti(ov);
  }
  function spawnConfetti(container) {
    qsa(".confetti-piece", container).forEach(function (p) { p.remove(); });
    var colors = ["#2563eb", "#38bdf8", "#22d3ee", "#818cf8", "#a78bfa", "#22c55e", "#f59e0b", "#f472b6"];
    for (var i = 0; i < 60; i++) {
      var p = document.createElement("div");
      p.className = "confetti-piece";
      p.style.left = Math.random() * 100 + "%";
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = (2.6 + Math.random() * 2.4) + "s";
      p.style.animationDelay = (Math.random() * 1.6) + "s";
      container.appendChild(p);
    }
  }

  /* ==========================================================================
     DATA-DRIVEN RENDERS
     ========================================================================== */
  function renderRoadmap() {
    var g = $("roadmapGrid");
    if (!g) return;
    g.innerHTML = D.roadmap.map(function (r) {
      return '<div class="card hoverable flex gap-3" style="align-items:flex-start;padding:18px">' +
        '<i data-lucide="' + r.icon + '" style="width:22px;height:22px;color:var(--cyan);flex-shrink:0;margin-top:2px"></i>' +
        "<div><b style='font-size:14.5px'>" + esc(r.title) + "</b>" +
        '<p class="card-text small mt-2">' + esc(r.desc) + "</p></div></div>";
    }).join("");
    icons();
  }

  function renderSummary() {
    var g = $("summaryGrid");
    if (!g) return;
    g.innerHTML = D.summary.map(function (s) {
      return '<div class="card hoverable"><h3 class="card-title" style="font-size:14.5px"><i data-lucide="' + s.icon + '" class="cyan"></i>' + esc(s.title) + "</h3>" +
        '<p class="card-text small">' + esc(s.desc) + "</p></div>";
    }).join("");
    icons();
  }

  function renderCheat() {
    var g = $("cheatGrid");
    if (!g) return;
    var chh = ch().cheat || D.cheat;
    g.innerHTML = chh.map(function (c) {
      return '<div class="cheat-item"><span class="term">' + esc(c.term) + '</span><span class="arrow">→</span><span class="def">' + esc(c.def) + "</span></div>";
    }).join("");
  }

  /* ==========================================================================
     QUIZ (บท 1 — 2 ชุด ชุดละ 5 ข้อ)
     ========================================================================== */
  var QUIZ_PER_PART = 5;
  function quizState() { return state["quiz" + (state.chapter === 1 ? "" : state.chapter)]; }
  function quizStoreKey() { return "dip_quiz" + (state.chapter === 1 ? "" : state.chapter); }
  function quizQuestions(part) { var qz = ch().quiz || D.quiz; return qz.slice(part * QUIZ_PER_PART, part * QUIZ_PER_PART + QUIZ_PER_PART); }
  function partScore(part) {
    var ans = quizState().answers, sc = 0;
    quizQuestions(part).forEach(function (q, j) { if (ans[part * QUIZ_PER_PART + j] === q.correct) sc++; });
    return sc;
  }
  function totalScore() { return partScore(0) + partScore(1); }

  function renderQuiz(part) {
    var el = $(part === 0 ? "quiz1" : "quiz2");
    if (!el) return;
    var qs = quizQuestions(part);
    var allAnswered = qs.every(function (_, j) { return quizState().answers[part * QUIZ_PER_PART + j] !== undefined; });
    if (allAnswered) { renderQuizResult(part, el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) {
      if (quizState().answers[part * QUIZ_PER_PART + j] === undefined) { qi = j; break; }
    }
    renderQuizQuestion(part, qi, el, qs);
  }
  function renderQuizQuestion(part, qi, el, qs) {
    var q = qs[qi];
    var gidx = part * QUIZ_PER_PART + qi;
    var chosen = quizState().answers[gidx];
    var answered = chosen !== undefined;
    var opts = q.options.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
    }).join("");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">ข้อที่ ' + (qi + 1) + " / " + qs.length + " · ชุดที่ " + (part + 1) + "</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">คะแนนชุดนี้: ' + partScore(part) + " / " + QUIZ_PER_PART + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(q.q) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(q.explain) + "</div>" +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          '<button class="btn btn-ghost" id="qRetry' + part + '"><i data-lucide="rotate-ccw"></i> ลองชุดนี้ใหม่</button>' +
          (qi < qs.length - 1
            ? '<button class="btn btn-primary" id="qNext' + part + '">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
            : '<button class="btn btn-primary" id="qFinish' + part + '">ดูผลลัพธ์ <i data-lucide="flag"></i></button>') +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>ลองนึกถึงภาพที่ประกอบด้วยพิกเซล — แต่ละพิกเซลเก็บตำแหน่งกับค่าสี</div></div>')
      + "</div>";

    icons();
    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        quizState().answers[gidx] = oi;
        LS.set(quizStoreKey(), quizState());
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) {
            if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct");
          });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? "✅ ถูกต้อง! " : "❌ ยังไม่ถูกนะ ") + "💡 " + esc(q.explain);
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1
          ? '<button class="btn btn-primary" id="qNext' + part + '">ข้อถัดไป <i data-lucide="arrow-right"></i></button>'
          : '<button class="btn btn-primary" id="qFinish' + part + '">ดูผลลัพธ์ <i data-lucide="flag"></i></button>';
        exp.insertAdjacentElement("afterend", nav);
        icons();
        bindQuizNav(part);
        if (correct) toast("✅ ถูกต้อง!", 1200);
      });
    });
    bindQuizNav(part);
  }
  function bindQuizNav(part) {
    var n = $("qNext" + part);
    if (n) n.addEventListener("click", function () { renderQuiz(part); });
    var f = $("qFinish" + part);
    if (f) f.addEventListener("click", function () { renderQuiz(part); });
    var r = $("qRetry" + part);
    if (r) r.addEventListener("click", function () {
      var qs = quizQuestions(part);
      qs.forEach(function (_, j) { delete quizState().answers[part * QUIZ_PER_PART + j]; });
      LS.set(quizStoreKey(), quizState());
      renderQuiz(part);
    });
  }
  function renderQuizResult(part, el, qs) {
    var sc = partScore(part);
    var total = totalScore();
    var first = part === 0;
    var pct = Math.round((sc / qs.length) * 100);
    var msg = sc === qs.length ? "Perfect! เก่งมาก! 🏆"
      : sc >= qs.length - 1 ? "Excellent! เกือบเต็มแล้ว! 💪"
      : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
      : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚";
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;

    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ring' + part + '" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      (first
        ? '<p class="text-3 mt-2" style="font-size:13px">ตอบถูก ' + sc + " จาก " + qs.length + " ข้อ — ไปต่อชุดที่ 2 เพื่อเก็บคะแนนรวม</p>"
        : '<p class="text-3 mt-2" style="font-size:13px">รวมสองชุด: <b class="cyan">' + total + " / 10</b> คะแนน</p>") +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="qRetry' + part + '"><i data-lucide="rotate-ccw"></i> ทำชุดนี้ใหม่</button>' +
      (first
        ? '<button class="btn btn-primary" id="qToPart2"><i data-lucide="arrow-right"></i> ไปชุดที่ 2</button>'
        : '<button class="btn btn-primary" id="qToCards"><i data-lucide="square-stack"></i> ไป Flashcards</button>') +
      "</div></div>";

    icons();
    setTimeout(function () {
      var rf = $("ring" + part);
      if (rf) rf.style.strokeDashoffset = offset;
    }, 120);

    var r = $("qRetry" + part);
    if (r) r.addEventListener("click", function () {
      var qqs = quizQuestions(part);
      qqs.forEach(function (_, j) { delete quizState().answers[part * QUIZ_PER_PART + j]; });
      LS.set(quizStoreKey(), quizState());
      renderQuiz(part);
    });
    var p2 = $("qToPart2");
    if (p2) p2.addEventListener("click", function () {
      var ci = -1;
      ch().slides.forEach(function (s, i) { if (s.title.indexOf("Quiz 2") !== -1) ci = i; });
      if (ci !== -1) goTo(ch().start + ci, 1);
    });
    var cards = $("qToCards");
    if (cards) cards.addEventListener("click", function () {
      var ci = -1;
      ch().slides.forEach(function (s, i) { if (s.title.indexOf("Flashcards") !== -1) ci = i; });
      if (ci !== -1) goTo(ch().start + ci, 1);
    });

    if (!first && totalScore() > 0) {
      var all10 = (ch().quiz || D.quiz).every(function (_, j) { return quizState().answers[j] !== undefined; });
      if (all10) {
        if (state.best === null || totalScore() > state.best) {
          state.best = totalScore();
          LS.set("dip_best_" + state.chapter, state.best);
        }
      }
    }
  }

  /* ==========================================================================
     ข้อสอบหลังเรียน (Post-Lesson Exam · 20 ข้อ)
     ========================================================================== */
  function examState() { return state["exam" + (state.chapter === 1 ? "" : state.chapter)]; }
  function examStoreKey() { return "dip_exam" + (state.chapter === 1 ? "" : state.chapter); }
  function examData() { return (ch().exam) || []; }
  function examElId() { return "quizExam"; }
  function normText(s) {
    return String(s == null ? "" : s).trim().toLowerCase().replace(/\s+/g, " ");
  }

  function stepsHTML(q) {
    var steps = enQ(q, "steps");
    if (!steps || !steps.length) return "";
    var items = steps.map(function (s, i) {
      return '<div class="step-item"><b>' + (i + 1) + "</b><span>" + esc(s) + "</span></div>";
    }).join("");
    return '<div class="steps-box mt-4"><div class="steps-cap"><i data-lucide="book-open"></i> ' + examUI("วิธีทำทีละขั้น — จับมือสอนให้ดู", "Step-by-step — let's work it out together") + "</div>" + items + "</div>";
  }
  function appendStepsIfWrong(anchor, correct, q) {
    if (!correct && q && q.steps && q.steps.length && anchor) {
      anchor.insertAdjacentHTML("afterend", stepsHTML(q));
      icons();
    }
  }
  function examAnswerCorrect(q, val) {
    if (val === undefined) return false;
    if (q.type === "text") {
      var v = normText(val);
      return (q.answers || []).some(function (a) { return normText(a) === v; });
    }
    return val === q.correct;
  }
  function examScore() {
    var st = examState(), sc = 0;
    examData().forEach(function (q, j) { if (examAnswerCorrect(q, st.answers[j])) sc++; });
    return sc;
  }
  function examHint() {
    var h = {
      1: "ลองนึกถึงภาพที่ประกอบด้วยพิกเซล, ระดับการประมวลผล Low/Mid/Higher, Fundamental Steps และความลึกของสี (1/8/24/32 bit) ประกอบคำตอบ",
      2: "ลองนึกถึงการอ่านภาพด้วย OpenCV (imread → NumPy array), img.shape (H,W,C) / dtype (uint8), BGR vs RGB, การเข้าถึงพิกเซล (item/setitem), ROI (slice) และการแสดงผล (imshow/waitKey) ประกอบคำตอบ",
      3: "ลองนึกถึง f(x,y) → digitize, Sampling (ความละเอียดเชิงพื้นที่) vs Quantization (grey level), 2^k grey levels, Bit-Plane, Downsampling/Aliasing, การต่อภาพ และข้อมูลที่หายไป ประกอบคำตอบ",
      4: "ลองนึกถึง Brightness/Contrast (เพิ่ม/ลบค่าคงที่, คูณ gain), Gamma correction, Histogram (ข้อมูลของภาพ), Histogram Equalization และ CLAHE (ตัด Local/Contrast limit) ประกอบคำตอบ",
      5: "ลองนึกถึง Mean/Gaussian/Median/Bilateral, Linear vs Non-linear, Sobel (Sobel_x/y), Laplacian (center 4/8), sharpening g=f−∇²f, Canny, FFT/fftshift/IFFT, Magnitude/Phase และ Walsh/Hadamard ประกอบคำตอบ",
      6: "ลองนึกถึง Threshold 5 โหมด (BINARY/INV/TRUNC/TOZERO), Adaptive (blockSize/C), Otsu, Morphology (Erosion/Dilation/Opening/Closing), Contour (findContours/boundingRect), Feature (Moments/Harris/SIFT) และ YOLO ประกอบคำตอบ"
    };
    var he = {
      1: "Think about pixels, the Low/Mid/Higher processing levels, the Fundamental Steps, and color depth (1/8/24/32 bit) to answer",
      2: "Think about reading images with OpenCV (imread → NumPy array), img.shape (H,W,C) / dtype (uint8), BGR vs RGB, pixel access (item/setitem), ROI (slicing), and display (imshow/waitKey) to answer",
      3: "Think about f(x,y) → digitize, Sampling (spatial resolution) vs Quantization (grey levels), 2^k grey levels, bit-planes, downsampling/aliasing, image stitching, and lost information to answer",
      4: "Think about brightness/contrast (add/subtract constant, gain), gamma correction, histogram (image information), histogram equalization, and CLAHE (local tiles, contrast limit) to answer",
      5: "Think about Mean/Gaussian/Median/Bilateral, Linear vs Non-linear, Sobel (Sobel_x/y), Laplacian (center 4/8), sharpening g=f−∇²f, Canny, FFT/fftshift/IFFT, Magnitude/Phase, and Walsh/Hadamard to answer",
      6: "Think about the 5 threshold modes (BINARY/INV/TRUNC/TOZERO), Adaptive (blockSize/C), Otsu, Morphology (Erosion/Dilation/Opening/Closing), Contour (findContours/boundingRect), Features (Moments/Harris/SIFT), and YOLO to answer"
    };
    return EXAM_EN ? (he[state.chapter] || he[1]) : (h[state.chapter] || h[1]);
  }

  /* ---------- ระบบสลับภาษา TH/EN ในข้อสอบ ---------- */
  var EXAM_EN = !!LS.get("dip_exam_lang", false);
  function setExamLang(en) { EXAM_EN = en; LS.set("dip_exam_lang", en); }
  function enQ(q, f) { var e = q.en; return (EXAM_EN && e && e[f] !== undefined) ? e[f] : q[f]; }
  function examUI(th, en) { return EXAM_EN ? en : th; }
  function examLangSwitch() {
    return '<div class="exam-lang-switch" role="group" aria-label="ภาษา / Language">' +
      '<button class="' + (!EXAM_EN ? "active" : "") + '" data-lang="th">ไทย</button>' +
      '<button class="' + (EXAM_EN ? "active" : "") + '" data-lang="en">EN</button></div>';
  }
  function bindExamLangSwitch(el) {
    el.querySelectorAll(".exam-lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () {
        setExamLang(b.dataset.lang === "en");
        applyExamHeaderLang();
        renderExam();
      });
    });
  }
  var EXAM_HEAD = {
    1: { en: '<h2 class="slide-title">Post-Lesson Exam <span class="grad-text">20 Questions</span></h2>', subEn: "Digital images, processing levels, fundamental steps & color depth — finish all slides to unlock; see the solution right after answering" },
    2: { en: '<h2 class="slide-title">Post-Lesson Exam <span class="grad-text">20 Questions</span></h2>', subEn: "OpenCV basics — imread/shape/dtype, display, BGR vs RGB, pixel access, ROI — finish all slides to unlock; see the solution right after answering" },
    3: { en: '<h2 class="slide-title">Post-Lesson Exam <span class="grad-text">20 Questions</span></h2>', subEn: "Sampling & quantization, 2^k grey levels, bit-planes, downsampling & aliasing, image stitching — finish all slides to unlock; see the solution right after answering" },
    4: { en: '<h2 class="slide-title">Post-Lesson Exam <span class="grad-text">20 Questions</span></h2>', subEn: "Brightness/contrast, gamma correction, histogram, histogram equalization & CLAHE — finish all slides to unlock; see the solution right after answering" },
    5: { en: '<h2 class="slide-title">Post-Lesson Exam <span class="grad-text">20 Questions</span></h2>', subEn: "Smoothing (mean/gaussian/median/bilateral), edge detection (Sobel/Laplacian/Canny), Fourier (FFT/magnitude/phase), Walsh-Hadamard — finish all slides to unlock; see the solution right after answering" },
    6: { en: '<h2 class="slide-title">Post-Lesson Exam <span class="grad-text">20 Questions</span></h2>', subEn: "Thresholding (global/adaptive/otsu), morphology, contour & bounding box, features, transforms, object detection (YOLO) — finish all slides to unlock; see the solution right after answering" }
  };
  function applyExamHeaderLang() {
    var h = EXAM_HEAD[state.chapter];
    var tt = $("examHeadTitle");
    var ss = $("examHeadSub");
    if (!h || !tt) return;
    if (!tt.dataset.th) tt.dataset.th = tt.innerHTML;
    if (ss && !ss.dataset.th) ss.dataset.th = ss.innerHTML;
    tt.innerHTML = EXAM_EN ? h.en : tt.dataset.th;
    if (ss) ss.innerHTML = EXAM_EN ? h.subEn : ss.dataset.th;
  }
  function renderExam() {
    var el = $(examElId());
    if (!el) return;
    applyExamHeaderLang();
    var qs = examData();
    var need = TOTAL - 1;
    var allDone = true;
    for (var i = 0; i < need; i++) { if (state.completed.indexOf(i) === -1) { allDone = false; break; } }
    if (!allDone) { renderExamLock(el, need); return; }
    var st = examState();
    var allAnswered = qs.every(function (_, j) { return st.answers[j] !== undefined; });
    if (allAnswered) { renderExamResult(el, qs); return; }
    var qi = 0;
    for (var j = 0; j < qs.length; j++) { if (st.answers[j] === undefined) { qi = j; break; } }
    renderExamQuestion(qi, el, qs);
  }
  function renderExamLock(el, need) {
    var n = state.chapter;
    var done = Math.min(state.completed.length, need);
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      examLangSwitch() +
      '<div style="font-size:44px">🔒</div>' +
      "<h3 class='mt-3' style='font-size:20px'>" + examUI("ข้อสอบหลังเรียนยังถูกล็อกอยู่", "The post-lesson exam is still locked") + "</h3>" +
      '<p class="text-2 mt-2" style="max-width:430px">' + examUI("เรียนครบทุกสไลด์ของบทที่ " + n + " ก่อนถึงจะเข้าสอบได้ — เรียนจบแล้วข้อสอบจะปลดล็อกอัตโนมัติ", "Finish every slide of Chapter " + n + " to unlock the exam — it unlocks automatically when you're done") + "</p>" +
      '<div class="progress-track mt-4" style="max-width:320px"><div class="progress-fill" style="width:' + Math.round((done / need) * 100) + '%"></div></div>' +
      '<p class="text-3 mt-2" style="font-size:13px">' + examUI("เรียนแล้ว <b class=\"cyan\">" + done + " / " + need + "</b> สไลด์", "Done <b class=\"cyan\">" + done + " / " + need + "</b> slides") + "</p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-primary" id="examGoBtn"><i data-lucide="arrow-right"></i> ' + examUI("ไปสไลด์ที่ยังไม่ได้เรียน", "Go to the unfinished slide") + "</button>" +
      "</div></div>";
    icons();
    bindExamLangSwitch(el);
    var g = $("examGoBtn");
    if (g) g.addEventListener("click", function () {
      var c = ch();
      for (var i = 0; i < need; i++) {
        if (state.completed.indexOf(i) === -1) { goTo(c.start + i, 1); return; }
      }
    });
  }
  function renderExamQuestion(qi, el, qs) {
    var q = qs[qi];
    if (q.type === "text") { renderExamTextQuestion(qi, el, qs); return; }
    var st = examState();
    var chosen = st.answers[qi];
    var answered = chosen !== undefined;
    var optList = enQ(q, "options");
    var opts = optList.map(function (o, oi) {
      var cls = "quiz-option";
      if (answered) {
        cls += " locked";
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return '<button class="' + cls + '" data-opt="' + oi + '"' + (answered ? " disabled" : "") + ">" +
        '<span class="opt-key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
    }).join("");
    var qLabel = examUI("ข้อที่ " + (qi + 1) + " / " + qs.length + " · ข้อสอบหลังเรียน · บทที่ " + state.chapter, "Q " + (qi + 1) + " / " + qs.length + " · Post-Lesson Exam · Ch. " + state.chapter);
    var scoreLabel = examUI("คะแนนตอนนี้: ", "Score: ");
    var nextBtn = examUI('<button class="btn btn-primary" id="qqNext">ข้อถัดไป <i data-lucide="arrow-right"></i></button>', '<button class="btn btn-primary" id="qqNext">Next <i data-lucide="arrow-right"></i></button>');
    var finishBtn = examUI('<button class="btn btn-primary" id="qqFinish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>', '<button class="btn btn-primary" id="qqFinish">Results <i data-lucide="flag"></i></button>');

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      examLangSwitch() +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">' + qLabel + "</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">' + scoreLabel + examScore() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(enQ(q, "q")) + "</h3>" +
      '<div class="flex" style="flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered
        ? '<div class="quiz-explanation mt-4">💡 ' + esc(enQ(q, "explain")) + "</div>" +
          (!(answered && chosen === q.correct) ? stepsHTML(q) : "") +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1 ? nextBtn : finishBtn) +
          "</div>"
        : '<div class="tip-box tip-note mt-4" style="margin-top:18px"><i data-lucide="lightbulb"></i><div><b>Hint</b>' + examHint() + "</div></div>")
      + "</div>";

    icons();
    bindExamLangSwitch(el);
    el.querySelectorAll(".quiz-option").forEach(function (b) {
      b.addEventListener("click", function () {
        var oi = parseInt(b.dataset.opt, 10);
        if (answered) return;
        st.answers[qi] = oi;
        LS.set(examStoreKey(), st);
        var correct = oi === q.correct;
        b.classList.add(correct ? "correct" : "incorrect");
        if (!correct) {
          qsa(".quiz-option", el).forEach(function (x) { if (parseInt(x.dataset.opt, 10) === q.correct) x.classList.add("correct"); });
        }
        qsa(".quiz-option", el).forEach(function (x) { x.classList.add("locked"); x.setAttribute("disabled", "disabled"); });
        var exp = document.createElement("div");
        exp.className = "quiz-explanation mt-4";
        exp.innerHTML = (correct ? examUI("✅ ถูกต้อง! ", "✅ Correct! ") : examUI("❌ ยังไม่ถูกนะ ", "❌ Not quite ")) + "💡 " + esc(enQ(q, "explain"));
        el.querySelector(".quiz-option").closest("div.flex").insertAdjacentElement("afterend", exp);
        var nav = document.createElement("div");
        nav.className = "flex items-center gap-3 mt-5 wrap";
        nav.innerHTML = qi < qs.length - 1 ? nextBtn : finishBtn;
        exp.insertAdjacentElement("afterend", nav);
        appendStepsIfWrong(nav, correct, q);
        icons();
        bindExamNav();
        if (correct) toast(examUI("✅ ถูกต้อง!", "✅ Correct!"), 1200);
      });
    });
    bindExamNav();
  }
  function bindExamNav() {
    var n = $("qqNext"); if (n) n.addEventListener("click", function () { renderExam(); });
    var f = $("qqFinish"); if (f) f.addEventListener("click", function () { renderExam(); });
    var r = $("qqRetry"); if (r) r.addEventListener("click", function () {
      var st = examState();
      examData().forEach(function (_, j) { delete st.answers[j]; });
      st.best = null;
      LS.set(examStoreKey(), st);
      renderExam();
    });
  }

  function renderExamTextQuestion(qi, el, qs) {
    var q = qs[qi];
    var st = examState();
    var chosen = st.answers[qi];
    var answered = chosen !== undefined;
    var correct = answered && examAnswerCorrect(q, chosen);

    var hint = enQ(q, "hint") || examHint();
    var qLabel = examUI("ข้อที่ " + (qi + 1) + " / " + qs.length + " · ข้อสอบหลังเรียน · บทที่ " + state.chapter, "Q " + (qi + 1) + " / " + qs.length + " · Post-Lesson Exam · Ch. " + state.chapter);
    var scoreLabel = examUI("คะแนนตอนนี้: ", "Score: ");
    var nextBtn = examUI('<button class="btn btn-primary" id="qqNext">ข้อถัดไป <i data-lucide="arrow-right"></i></button>', '<button class="btn btn-primary" id="qqNext">Next <i data-lucide="arrow-right"></i></button>');
    var finishBtn = examUI('<button class="btn btn-primary" id="qqFinish">ดูผลลัพธ์ <i data-lucide="flag"></i></button>', '<button class="btn btn-primary" id="qqFinish">Results <i data-lucide="flag"></i></button>');
    var okLbl = examUI("ถูกต้อง!", "Correct!");
    var badLbl = examUI("ยังไม่ถูกนะ", "Not quite");
    var yourLbl = examUI("คำตอบของคุณ: ", "Your answer: ");
    var ansLbl = examUI("คำตอบที่ถูกต้อง: ", "Correct answer: ");
    var phLbl = examUI("พิมพ์คำตอบที่นี่...", "Type your answer...");
    var submitLbl = examUI("ส่งคำตอบ", "Submit");

    el.innerHTML =
      '<div class="card fade-up" style="padding:26px">' +
      examLangSwitch() +
      '<div class="flex items-center justify-between mb-3 wrap gap-2">' +
      '<span class="chip">' + qLabel + "</span>" +
      '<span class="chip" style="border-color:rgba(56,189,248,.4)">' + scoreLabel + examScore() + " / " + qs.length + "</span></div>" +
      "<h3 style='font-size:19px;line-height:1.5;margin-bottom:18px'>" + esc(enQ(q, "q")) + "</h3>" +
      (answered
        ? '<div class="exam-feedback ' + (correct ? "ok" : "bad") + '"><span class="ef-mark">' + (correct ? "✅" : "❌") + "</span><div><b>" + (correct ? okLbl : badLbl) + '</b><p class="ef-your">' + yourLbl + '<code>' + esc(chosen) + "</code></p>" +
          (correct ? "" : '<p class="ef-ans">' + ansLbl + '<code>' + esc(q.answers[0]) + "</code></p>") +
          "</div></div>" +
          '<div class="quiz-explanation mt-4">💡 ' + esc(enQ(q, "explain")) + "</div>" +
          (!correct ? stepsHTML(q) : "") +
          '<div class="flex items-center gap-3 mt-5 wrap">' +
          (qi < qs.length - 1 ? nextBtn : finishBtn) +
          "</div>"
        : '<div class="exam-input-row mt-4">' +
          '<input type="text" id="qqTextInput" class="exam-input" placeholder="' + phLbl + '" autocomplete="off" spellcheck="false" aria-label="' + phLbl + '" />' +
          '<button class="btn btn-primary" id="qqSubmit" style="flex-shrink:0">' + submitLbl + ' <i data-lucide="arrow-right"></i></button>' +
          "</div>" +
          '<div class="tip-box tip-note mt-4" style="margin-top:16px"><i data-lucide="lightbulb"></i><div><b>Hint</b>' + hint + "</div></div>")
      + "</div>";
    icons();
    bindExamLangSwitch(el);

    if (answered) {
      bindExamNav();
      return;
    }
    var input = $("qqTextInput");
    var submit = function () {
      var v = input.value.trim();
      if (!v) { toast(examUI("พิมพ์คำตอบก่อนส่งจ้า ✍️", "Type an answer first ✍️"), 1400); return; }
      st.answers[qi] = v;
      LS.set(examStoreKey(), st);
      renderExamQuestion(qi, el, qs);
    };
    if (input) input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); submit(); } });
    var s = $("qqSubmit");
    if (s) s.addEventListener("click", submit);
    if (input) input.focus();
  }
  function renderExamResult(el, qs) {
    var sc = examScore();
    var pct = Math.round((sc / qs.length) * 100);
    var msg = examUI(
      sc === qs.length ? "Perfect! คะแนนเต็ม เก่งมาก! 🏆"
        : sc >= qs.length - 2 ? "Excellent! เกือบเต็มแล้ว! 💪"
        : sc >= Math.ceil(qs.length / 2) ? "Good job! ทบทวนอีกนิดก็เพอร์เฟกต์ ✨"
        : "ยังไม่ผ่าน — ย้อนกลับไปทบทวนสไลด์แล้วลองใหม่นะ 📚",
      sc === qs.length ? "Perfect score! 🏆"
        : sc >= qs.length - 2 ? "Excellent! Almost perfect! 💪"
        : sc >= Math.ceil(qs.length / 2) ? "Good job! A little review and you'll nail it ✨"
        : "Not yet — review the slides and try again 📚");
    var st = examState();
    if (st.best === null || sc > st.best) {
      st.best = sc;
      LS.set(examStoreKey(), st);
    }
    var ring = 2 * Math.PI * 62;
    var offset = ring - (sc / qs.length) * ring;
    el.innerHTML =
      '<div class="card center fade-up" style="padding:34px 26px">' +
      examLangSwitch() +
      '<div class="score-ring"><svg width="150" height="150" viewBox="0 0 150 150">' +
      '<defs><linearGradient id="ringGradQ" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient></defs>' +
      '<circle class="ring-bg" cx="75" cy="75" r="62" fill="none" stroke-width="12"/>' +
      '<circle class="ring-fill" id="ringQuick" cx="75" cy="75" r="62" fill="none" stroke-width="12" stroke-linecap="round" ' +
      'stroke-dasharray="' + ring + '" stroke-dashoffset="' + ring + '"/></svg>' +
      '<div class="ring-num">' + sc + "/" + qs.length + "</div></div>" +
      "<p class='mt-3 text-2' style='font-weight:700'>" + pct + "% · " + msg + "</p>" +
      '<p class="text-3 mt-2" style="font-size:13px">' + examUI("คะแนนดีที่สุด: ", "Best score: ") + '<b class="cyan">' + (st.best === null ? "–" : st.best + "/" + qs.length) + "</b></p>" +
      '<div class="flex items-center gap-3 mt-5 wrap" style="justify-content:center">' +
      '<button class="btn btn-ghost" id="qqRetry"><i data-lucide="rotate-ccw"></i> ' + examUI("ทำใหม่ทั้งชุด", "Retry all") + "</button>" +
      '<button class="btn btn-primary" id="qqToCards"><i data-lucide="square-stack"></i> ' + examUI("ไปการ์ดทบทวน", "Review cards") + "</button>" +
      "</div></div>";
    icons();
    bindExamLangSwitch(el);
    setTimeout(function () { var rf = $("ringQuick"); if (rf) rf.style.strokeDashoffset = offset; }, 120);
    var r = $("qqRetry");
    if (r) r.addEventListener("click", function () {
      var st2 = examState();
      examData().forEach(function (_, j) { delete st2.answers[j]; });
      st2.best = null;
      LS.set(examStoreKey(), st2);
      renderExam();
    });
    var c = $("qqToCards");
    if (c) c.addEventListener("click", function () {
      var ci = -1;
      ch().slides.forEach(function (s, i) { if (s.title.indexOf("Flashcards") !== -1) ci = i; });
      if (ci !== -1) goTo(ch().start + ci, 1);
    });
  }

  /* ==========================================================================
     FLASHCARDS (slide 24)
     ========================================================================== */
  var fc = { order: [], idx: 0 };
  function fcShuffle() {
    var fl = ch().flashcards || D.flashcards;
    var a = fl.map(function (_, i) { return i; });
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    fc.order = a;
    fc.idx = 0;
  }
  function fcRender() {
    if (!$("fcQ")) return;   // บทที่ไม่มีสไลด์แฟลชการ์ด (เช่น บท 7)
    if (!fc.order.length) fcShuffle();
    var fl = ch().flashcards || D.flashcards;
    var card = fl[fc.order[fc.idx]];
    $("fcQ").textContent = card.q;
    $("fcA").textContent = card.a;
    $("fcCounter").textContent = (fc.idx + 1) + " / " + fl.length;
    $("flashcard").classList.remove("flipped");
  }
  function fcFlip() { $("flashcard").classList.toggle("flipped"); }
  function fcStep(d) {
    var fl = ch().flashcards || D.flashcards;
    fc.idx = (fc.idx + d + fl.length) % fl.length;
    fcRender();
  }

  /* ==========================================================================
     GLOSSARY (slide 25)
     ========================================================================== */
  function renderGlossary(filter) {
    var list = $("glossaryList");
    if (!list) return;
    var gl = ch().glossary || D.glossary;
    var term = (filter || "").toLowerCase().trim();
    var items = gl.filter(function (g) {
      return g.term.toLowerCase().indexOf(term) !== -1 || g.def.toLowerCase().indexOf(term) !== -1;
    });
    $("glossaryCount").textContent = items.length + " คำศัพท์";
    list.innerHTML = items.map(function (g) {
      return '<div class="gloss-item" data-term="' + esc(g.term) + '" role="button" tabindex="0" aria-expanded="false">' +
        "<div><b>" + esc(g.term) + '</b><div class="g-def" style="display:none">' + esc(g.def) + "</div></div>" +
        '<i data-lucide="chevron-down" class="g-chev"></i></div>';
    }).join("");
    icons();
  }

  /* ==========================================================================
     PRINT + FULLSCREEN
     ========================================================================== */
  function buildPrintSlides() {
    var area = $("printArea");
    var c = ch();
    var html = "";
    qsa(".slide-view").forEach(function (s, i) {
      if (i < c.start || i >= c.start + c.count) return;
      var inner = s.querySelector(".slide-inner");
      if (!inner) return;
      var rel = i - c.start;
      html += '<div class="print-page">' +
        '<div class="pp-eyebrow">SLIDE ' + (rel + 1) + " · " + esc(c.slides[rel].title) + "</div>" +
        '<div class="pp-body">' + inner.innerHTML + "</div></div>";
    });
    html = html.replace(/<svg[\s\S]*?<\/svg>/g, "[แผนภาพ]").replace(/<button[\s\S]*?<\/button>/g, "");
    html = html.replace(/\sid="[^"]*"/g, "").replace(/\sclass="btn[^"]*"/g, "");
    area.innerHTML = html;
  }
  function buildPrintCards() {
    var area = $("printArea");
    var c = ch();
    var cheat = (c.cheat || D.cheat).map(function (x) {
      return '<div class="pp-card"><h4>' + esc(x.term) + "</h4><p>" + esc(x.def) + "</p></div>";
    }).join("");
    var gloss = (c.glossary || D.glossary).map(function (g) {
      return '<div class="pp-card"><h4>' + esc(g.term) + "</h4><p>" + esc(g.def) + "</p></div>";
    }).join("");
    var fc = (c.flashcards || D.flashcards).map(function (f) {
      return '<div class="pp-card"><h4>' + esc(f.q) + "</h4><p>" + esc(f.a) + "</p></div>";
    }).join("");
    area.innerHTML =
      '<div class="print-page"><div class="pp-eyebrow">EXAM CHEAT SHEET</div><div class="pp-title">สูตรจำก่อนสอบ</div>' +
      '<div class="pp-card-grid">' + cheat + "</div></div>" +
      '<div class="print-page"><div class="pp-eyebrow">GLOSSARY</div><div class="pp-title">คำศัพท์</div>' +
      '<div class="pp-card-grid">' + gloss + "</div></div>" +
      '<div class="print-page"><div class="pp-eyebrow">FLASHCARDS</div><div class="pp-title">คำถาม — คำตอบ</div>' +
      '<div class="pp-card-grid">' + fc + "</div></div>";
  }
  /* ---- Study Sheet: เอกสารสรุปย่อก่อนสอบ ---- */
  function isMetaSlide(title) {
    return /^(cover\b|เราจะเรียนอะไรบ้าง)|quiz|flashcards|glossary|ข้อสอบ|แบบทดสอบ|การ์ดทบทวน|คำศัพท์|cheat\s*sheet|สูตรจำก่อนสอบ/i.test(title || "");
  }
  function cleanTitle(t) {
    return String(t || "").split("—")[0].trim();
  }
  function stripHtml(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.textContent.replace(/\s+/g, " ").trim();
  }
  function buildPrintStudy() {
    var area = $("printArea");
    var c = ch();
    var pages = [];
    var contentSlides = [];

    qsa(".slide-view").forEach(function (s, i) {
      if (i < c.start || i >= c.start + c.count) return;
      var rel = i - c.start;
      var title = s.getAttribute("data-title") || c.slides[rel].title || "";
      if (isMetaSlide(title)) return;
      contentSlides.push({ s: s, rel: rel, title: title });
    });

    // หน้า 1 — ปก + สารบัญหัวข้อ
    var toc = contentSlides.map(function (x) {
      return '<div class="ps-toc-row"><b>' + (x.rel + 1) + "</b><span>" + esc(cleanTitle(x.title)) + "</span></div>";
    }).join("");
    pages.push(
      '<div class="print-page"><div class="pp-eyebrow">STUDY SHEET · ' + esc(c.thai || "") + "</div>" +
      '<div class="pp-title">สรุปย่อก่อนสอบ — ' + esc(c.thai || "") + "</div>" +
      '<div class="pp-sub">' + esc(c.en || "") + " · เอกสารสรุป " + contentSlides.length + " หัวข้อ + สูตร + คำศัพท์ + คำถาม-คำตอบ</div>" +
      '<div class="ps-toc">' + toc + "</div></div>"
    );

    // หน้าสรุปสไลด์ — คัดเฉพาะใจความสำคัญ (หัวข้อ · คำอธิบาย · ข้อควรจำ · การ์ด · โค้ด · ตาราง · ขั้นตอน)
    contentSlides.forEach(function (x) {
      var inner = x.s.querySelector(".slide-inner");
      if (!inner) return;
      var doc = document.createElement("div");
      doc.innerHTML = inner.innerHTML;
      qsa("svg, button, script", doc).forEach(function (el) { el.remove(); });
      qsa(".slide-eyebrow, i", doc).forEach(function (el) { el.remove(); });
      var h2 = doc.querySelector("h2.slide-title");
      var title = h2 ? stripHtml(h2.innerHTML) : cleanTitle(x.title);
      if (h2) h2.remove();
      qsa(".split, .grid-2, .grid-3, .grid-4", doc).forEach(function (el) { el.classList.add("ps-block"); });
      qsa(".visual-box", doc).forEach(function (el) { el.classList.add("ps-visual"); });
      qsa(".card", doc).forEach(function (el) { el.classList.add("ps-card"); });
      qsa(".tip-box", doc).forEach(function (el) { el.classList.add("ps-tip"); });
      qsa(".code-block", doc).forEach(function (el) { el.classList.add("ps-code"); });
      qsa(".tbl-wrap", doc).forEach(function (el) { el.classList.add("ps-tbl"); });
      qsa(".step-box", doc).forEach(function (el) { el.classList.add("ps-step"); });
      pages.push(
        '<div class="print-page"><div class="pp-eyebrow">สรุปสไลด์ "' + (x.rel + 1) + " / " + c.count + '"</div>' +
        '<div class="pp-title">' + esc(title) + "</div>" +
        '<div class="pp-body">' + doc.innerHTML + "</div></div>"
      );
    });

    // หน้าสูตรจำ + คำศัพท์ + คำถาม-คำตอบ
    var cheat = (c.cheat || D.cheat).map(function (x) {
      return '<div class="pp-card"><h4>' + esc(x.term) + "</h4><p>" + esc(x.def) + "</p></div>";
    }).join("");
    var gloss = (c.glossary || D.glossary).map(function (g) {
      return '<div class="pp-card"><h4>' + esc(g.term) + "</h4><p>" + esc(g.def) + "</p></div>";
    }).join("");
    var fc = (c.flashcards || D.flashcards).map(function (f) {
      return '<div class="pp-card"><h4>' + esc(f.q) + "</h4><p>" + esc(f.a) + "</p></div>";
    }).join("");
    pages.push(
      '<div class="print-page"><div class="pp-eyebrow">EXAM CHEAT SHEET</div><div class="pp-title">สูตรจำก่อนสอบ</div>' +
      '<div class="pp-card-grid">' + cheat + "</div></div>" +
      '<div class="print-page"><div class="pp-eyebrow">GLOSSARY</div><div class="pp-title">คำศัพท์</div>' +
      '<div class="pp-card-grid">' + gloss + "</div></div>" +
      '<div class="print-page"><div class="pp-eyebrow">FLASHCARDS</div><div class="pp-title">คำถาม — คำตอบ</div>' +
      '<div class="pp-card-grid">' + fc + "</div></div>"
    );

    area.innerHTML = pages.join("");
  }
  function doPrint(kind) {
    if (kind === "slides") buildPrintSlides();
    else if (kind === "cards") buildPrintCards();
    else buildPrintStudy();
    document.body.classList.add("printing");
    setTimeout(function () {
      window.print();
      document.body.classList.remove("printing");
    }, 60);
  }
  function toggleFullscreen() {
    var on = document.body.classList.toggle("fullscreen");
    var b = $("fullscreenBtn");
    if (b) {
      b.innerHTML = on
        ? '<i data-lucide="minimize-2"></i>'
        : '<i data-lucide="maximize-2"></i>';
    }
    icons();
    toast(on ? "โหมดขยายสไลด์ ⛶" : "กลับสู่มุมมองปกติ");
  }

  /* ==========================================================================
     EVENTS
     ========================================================================== */
  function bind() {
    function on(id, type, fn) {
      var el = $(id);
      if (el) el.addEventListener(type, fn);
    }
    var sb = $("sidebar"), backdrop = $("drawerBackdrop");
    function closeDrawer() { if (sb) sb.classList.remove("open"); if (backdrop) backdrop.classList.remove("show"); }
    on("menuBtn", "click", function () { if (sb) sb.classList.add("open"); if (backdrop) backdrop.classList.add("show"); });
    on("sidebarCloseBtn", "click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    var nav = $("sidebarNav");
    if (nav) nav.addEventListener("click", function (e) {
      var item = e.target.closest(".sidebar-item");
      if (!item) return;
      closeDrawer();
      goTo(parseInt(item.dataset.goto, 10));
    });

    on("prevBtn", "click", function () { goTo(state.current - 1, -1); });
    on("nextBtn", "click", function () { goTo(state.current + 1, 1); });
    on("fullscreenBtn", "click", toggleFullscreen);
    on("printSlidesBtn", "click", function () { doPrint("slides"); });
    on("printCardsBtn", "click", function () { doPrint("cards"); });
    on("printStudyBtn", "click", function () {
      // บทที่ 1-6 มีสรุป A4 แยกไฟล์ — เปิดไปพิมพ์หน้านั้นเลย
      if (PCH === 1) { window.open("chapter1-summary.html?print=1", "_blank"); return; }
      if (PCH === 2) { window.open("chapter2-summary.html?print=1", "_blank"); return; }
      if (PCH === 3) { window.open("chapter3-summary.html?print=1", "_blank"); return; }
      if (PCH === 4) { window.open("chapter4-summary.html?print=1", "_blank"); return; }
      if (PCH === 5) { window.open("chapter5-summary.html?print=1", "_blank"); return; }
      if (PCH === 6) { window.open("chapter6-summary.html?print=1", "_blank"); return; }
      if (PCH === 7) { window.open("chapter7-summary.html?print=1", "_blank"); return; }
      doPrint("study");
    });

    on("homeBtn", "click", goHome);
    on("startBtn", "click", function () { goTo(state.current + 1, 1); });
    on("notesBtn", "click", function () { openNotes(!notesOpen); });
    on("notesCloseBtn", "click", function () { openNotes(false); });

    on("notesTextarea", "input", function () {
      state.notes[noteKey()] = this.value;
      LS.set("dip_notes", state.notes);
    });

    on("completionCloseBtn", "click", function () { $("completionOverlay").classList.remove("show"); });
    on("completionRestartBtn", "click", function () {
      var n = state.chapter;
      state.completed = [];
      state.celebrated = false;
      var qk = "quiz" + (n === 1 ? "" : n);
      var ek = "exam" + (n === 1 ? "" : n);
      state[qk] = n === 1 ? { answers: {}, partDone: {} } : { answers: {} };
      LS.set("dip_" + qk, state[qk]);
      state[ek] = { answers: {}, best: null };
      LS.set("dip_" + ek, state[ek]);
      state.best = null;
      LS.set("dip_completed_" + n, []);
      LS.set("dip_celebrated_" + n, false);
      LS.set("dip_best_" + n, null);
      $("completionOverlay").classList.remove("show");
      renderQuiz(0); renderQuiz(1); renderExam();
      goTo(0, -1);
      toast("เริ่มเรียนบทที่ " + n + " ใหม่ — สู้ ๆ นะ! 💪");
    });

    // quiz — ข้ามไปสไลด์ Quiz ชุดที่ 1 ของบทนั้น
    on("goQuizBtn", "click", function () {
      var ci = -1;
      ch().slides.forEach(function (s, i) { if (s.title.indexOf("Quiz 1") !== -1) ci = i; });
      if (ci !== -1) goTo(ch().start + ci, 1);
    });

    // flashcards
    on("flashcard", "click", fcFlip);
    on("flashcard", "keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fcFlip(); }
    });
    on("fcPrev", "click", function () { fcStep(-1); });
    on("fcNext", "click", function () { fcStep(1); });
    on("fcShuffle", "click", function () { fcShuffle(); fcRender(); toast("สับการ์ดใหม่ 🔀"); });

    // glossary
    on("glossarySearch", "input", function () { renderGlossary(this.value); });
    on("glossaryList", "click", function (e) {
      var item = e.target.closest(".gloss-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      item.setAttribute("aria-expanded", open);
      var def = item.querySelector(".g-def");
      if (def) def.style.display = open ? "block" : "none";
    });

    // keyboard
    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(state.current + 1, 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goTo(state.current - 1, -1); }
      else if (e.key === "Escape") {
        if (notesOpen) openNotes(false);
        closeDrawer();
        var ov = $("completionOverlay");
        if (ov && ov.classList.contains("show")) ov.classList.remove("show");
      }
    });
  }

  /* ==========================================================================
     INIT
     ========================================================================== */
  function init() {
    if (PAGE === "menu") {
      renderMenuProgress();
      bindMenu();
      icons();
      return;
    }
    bind();
    renderSidebar();
    if (PCH === 1) {
      renderRoadmap();
      renderSummary();
    }
    renderCheat();
    renderQuiz(0);
    renderQuiz(1);
    renderExam();
    if ($("flashcard")) { fcShuffle(); fcRender(); }
    renderGlossary("");
    goTo(state.current, 0);
    updateHeaderProgress();
    updateBottomBar();
    icons();
    updateHeaderBrand();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
